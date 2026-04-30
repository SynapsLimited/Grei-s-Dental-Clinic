import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Insurance & Financing | Grei's Dental Clinic Tirana",
  description: "Premium dental care made accessible. Learn about our accepted insurance partners, flexible 0% interest payment plans, and financing options at Grei's Dental Clinic.",
  openGraph: {
    title: "Insurance & Financing | Grei's Dental Clinic Tirana",
    description: "Premium dental care made accessible. Learn about our accepted insurance partners, flexible 0% interest payment plans, and financing options at Grei's Dental Clinic.",
    type: "website",
    locale: "en_US",
    siteName: "Grei's Dental Clinic",
  },
};

export default function InsuranceLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}