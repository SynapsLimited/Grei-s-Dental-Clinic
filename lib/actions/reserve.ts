// lib/actions/reserve.ts
"use server"

import { connectDB } from "@/lib/mongodb";
import mongoose from "mongoose";
import nodemailer from "nodemailer";

// Helper function to verify the Turnstile token with Cloudflare
async function verifyTurnstileToken(token: string) {
  try {
    const res = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `secret=${process.env.TURNSTILE_SECRET_KEY}&response=${token}`,
    })
    const data = await res.json()
    return data.success
  } catch (error) {
    console.error("Turnstile verification error:", error)
    return false
  }
}

export async function submitReservation(data: {
  reason: string
  preferredDate: string
  preferredTime: string
  name: string
  email: string
  phone: string
  turnstileToken?: string
}) {
  try {
    // 1. VERIFY CLOUDFLARE TURNSTILE TOKEN (Optional: Remove if you don't use Turnstile)
    if (data.turnstileToken && process.env.TURNSTILE_SECRET_KEY) {
      const isHuman = await verifyTurnstileToken(data.turnstileToken)
      if (!isHuman) {
        return { success: false, error: "Security check failed. Please refresh the page." }
      }
    }

    // 2. SAVE TO MONGODB
    try {
      await connectDB(); // Ensure we are connected to the DB
      
      // Use mongoose.connection.collection to insert without needing to create a strict Schema/Model
      await mongoose.connection.collection("reservations").insertOne({
        ...data,
        status: "pending",
        submittedAt: new Date()
      });
    } catch (dbError) {
      console.error("MongoDB Insert Error:", dbError);
      // We continue even if DB fails, so we still send the emails
    }

    // 3. SEND EMAILS VIA NODEMAILER
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_SECURE === "true", 
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // --- A. Email to Admin (greidentalclinic@gmail.com) ---
    const adminMailOptions = {
      from: process.env.SMTP_FROM || '"Grei\'s Dental Website" <noreply@greisdental.com>',
      to: process.env.NOTIFICATION_EMAIL || "greidentalclinic@gmail.com", 
      subject: `New Appointment Request: ${data.name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
          <h2 style="color: #00A3FF; border-bottom: 2px solid #00A3FF; padding-bottom: 10px;">New Appointment Request</h2>
          
          <h3 style="background-color: #f5f5f5; padding: 8px; border-radius: 4px; color: #E63946;">Patient Details</h3>
          <ul style="list-style: none; padding-left: 0;">
            <li style="margin-bottom: 5px;"><strong>Name:</strong> ${data.name}</li>
            <li style="margin-bottom: 5px;"><strong>Email:</strong> <a href="mailto:${data.email}" style="color: #00A3FF;">${data.email}</a></li>
            <li style="margin-bottom: 5px;"><strong>Phone:</strong> <a href="tel:${data.phone}" style="color: #00A3FF;">${data.phone}</a></li>
          </ul>

          <h3 style="background-color: #f5f5f5; padding: 8px; border-radius: 4px; color: #E63946;">Request Details</h3>
          <ul style="list-style: none; padding-left: 0;">
            <li style="margin-bottom: 5px;"><strong>Service:</strong> ${data.reason}</li>
            <li style="margin-bottom: 5px;"><strong>Preferred Date:</strong> ${data.preferredDate}</li>
            <li style="margin-bottom: 5px;"><strong>Preferred Time:</strong> ${data.preferredTime}</li>
          </ul>
          
          <hr style="border: none; border-top: 1px solid #eee; margin-top: 30px;" />
          <p style="font-size: 12px; color: #888;">Submitted At: ${new Date().toLocaleString()}</p>
        </div>
      `,
    }

    // --- B. Auto-responder to User ---
    const userMailOptions = {
      from: process.env.SMTP_FROM || '"Grei\'s Dental Clinic" <noreply@greisdental.com>',
      to: data.email,
      subject: "We've Received Your Request - Grei's Dental Clinic",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #333; line-height: 1.6;">
          <div style="text-align: center; margin-bottom: 20px;">
            <h2 style="color: #00A3FF; margin-bottom: 5px;">We've Received Your Request!</h2>
          </div>
          
          <p>Dear ${data.name},</p>
          <p>Thank you for reaching out to Grei's Dental Clinic. This email is to confirm that we have successfully received your appointment request for <strong>${data.reason}</strong>.</p>
          
          <div style="background-color: #f8fbff; border-left: 4px solid #00A3FF; padding: 15px; margin: 20px 0;">
            <p style="margin: 0;"><strong>Your Requested Time:</strong><br/>
            Date: ${data.preferredDate}<br/>
            Time Window: ${data.preferredTime}</p>
          </div>

          <p>Our scheduling team is reviewing your request and will contact you shortly at <strong>${data.phone}</strong> to confirm the exact time of your appointment.</p>
          
          <p style="margin-top: 30px;">If you have a dental emergency or need immediate assistance, please don't hesitate to call or WhatsApp us directly at <a href="tel:+355697563877" style="color: #E63946; font-weight: bold; text-decoration: none;">+355 69 756 3877</a>.</p> 
          
          <p>Best regards,<br/><strong style="color: #00A3FF;">Dr. Grei Shehaj & Team</strong><br/>Grei's Dental Clinic</p>
        </div>
      `,
    }

    // Send both emails simultaneously
    await Promise.all([
      transporter.sendMail(adminMailOptions),
      transporter.sendMail(userMailOptions).catch(e => console.error("Failed to send auto-reply:", e))
    ])

    return { success: true }

  } catch (error) {
    console.error("Failed to process reservation:", error)
    return { success: false, error: "Failed to submit request" }
  }
}