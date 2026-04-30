import { connectDB } from "@/lib/mongodb";
import Review from "@/models/Review";
import googleData from "@/data/google-reviews.json";
import TestimonialsClient from "./testimonials-client";

export default async function TestimonialsPage() {
  await connectDB();
  
  const dbReviewsRaw = await Review.find().sort({ createdAt: -1 }).lean();

  const allReviews = [
    ...dbReviewsRaw.map((r: any) => ({
      name: r.name,
      text: r.text || "",
      rating: r.rating || 5,
      service: r.service,
      date: r.createdAt.toISOString(),
      source: "Patient"
    })),
    ...googleData.map(r => ({ ...r, source: "Google Review" }))
  ].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return <TestimonialsClient allReviews={allReviews} />;
}