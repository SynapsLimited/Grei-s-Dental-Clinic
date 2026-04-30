import mongoose from "mongoose";

const MONGODB_URI = process.env.gdc_MONGODB_URI!;

export const connectDB = async () => {
  if (mongoose.connection.readyState >= 1) return;
  try {
    await mongoose.connect(MONGODB_URI, {
      dbName: 'greidentalclinic', // Matches your screenshot
    });
    console.log("MongoDB Connected");
  } catch (error) {
    console.error("MongoDB Connection Error:", error);
  }
};