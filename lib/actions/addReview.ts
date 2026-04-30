"use server";

import { connectDB } from "@/lib/mongodb";
import Review from "@/models/Review";
import { revalidatePath } from "next/cache";

export async function addReview(formData: FormData) {
  await connectDB();
  
  const data = {
    name: formData.get("name"),
    text: formData.get("text"),
    rating: 5, // All website submissions default to 5
    service: formData.get("service"),
  };

  try {
    await Review.create(data);
    revalidatePath("/testimonials");
    return { success: true };
  } catch (e) {
    return { success: false };
  }
}