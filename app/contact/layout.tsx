import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Grei's Dental Clinic | Book an Appointment in Tirana",
  description: "Get in touch with Grei's Dental Clinic in Tirana. Find our location, phone number, email, and opening hours. Book your dental consultation via WhatsApp or our website.",
  openGraph: {
    title: "Contact Grei's Dental Clinic | Book an Appointment in Tirana",
    description: "Get in touch with Grei's Dental Clinic in Tirana. Find our location, phone number, email, and opening hours. Book your dental consultation via WhatsApp o our website.",
    type: "website",
    locale: "en_US",
    siteName: "Grei's Dental Clinic",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}