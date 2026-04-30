import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dental Blog & Insights | Grei's Dental Clinic Tirana",
  description: "Read the latest dental news, tips, and expert advice from the professionals at Grei's Dental Clinic in Tirana. Learn about cosmetic dentistry, oral health, and more.",
  openGraph: {
    title: "Dental Blog & Insights | Grei's Dental Clinic Tirana",
    description: "Read the latest dental news, tips, and expert advice from the professionals at Grei's Dental Clinic in Tirana. Learn about cosmetic dentistry, oral health, and more.",
    type: "website",
    locale: "en_US",
    siteName: "Grei's Dental Clinic",
  },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}