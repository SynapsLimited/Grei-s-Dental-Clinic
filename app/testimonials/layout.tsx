import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Patient Testimonials & Reviews",
  description: "Read real stories and 5-star reviews from our patients. Discover why Grei's Dental Clinic is the trusted destination for premium dental care in Tirana.",
  openGraph: {
    title: "Patient Testimonials & Reviews | Grei's Dental Clinic",
    description: "Read real stories and 5-star reviews from our patients. Discover why Grei's Dental Clinic is the trusted destination for premium dental care in Tirana.",
    type: "website",
    locale: "en_US",
    siteName: "Grei's Dental Clinic",
  },
};

export default function TestimonialsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}