import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Grei's Dental Clinic | Expert Dentists in Tirana",
  description: "Learn about Grei's Dental Clinic's history, our expert team led by Dr. Grei Shehaj, and our philosophy of delivering advanced, minimally invasive dental care in Albania.",
  openGraph: {
    title: "About Grei's Dental Clinic | Expert Dentists in Tirana",
    description: "Learn about Grei's Dental Clinic's history, our expert team led by Dr. Grei Shehaj, and our philosophy of delivering advanced, minimally invasive dental care in Albania.",
    type: "website",
    locale: "en_US",
    siteName: "Grei's Dental Clinic",
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}