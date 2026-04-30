// app/actions/reviews.ts
"use server";

import { connectDB } from "@/lib/mongodb";
import Review from "@/models/Review";
import { revalidatePath } from "next/cache";

export async function submitReview(formData: FormData) {
  await connectDB();
  
  const rawFormData = {
    name: formData.get("name"),
    service: formData.get("service"),
    rating: Number(formData.get("rating")),
    text: formData.get("text"),
  };

  try {
    await Review.create(rawFormData);
    revalidatePath("/testimonials");
    return { success: true };
  } catch (e) {
    return { success: false };
  }
}