import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dental FAQ | Common Dental Questions Answered | Grei's Dental Clinic",
  description: "Have questions about dental treatments? Browse our Frequently Asked Questions to learn more about teeth whitening, implants, root canals, and general oral care in Tirana.",
  openGraph: {
    title: "Dental FAQ | Common Dental Questions Answered",
    description: "Have questions about dental treatments? Browse our Frequently Asked Questions to learn more about teeth whitening, implants, root canals, and general oral care in Tirana.",
    type: "website",
    locale: "en_US",
    siteName: "Grei's Dental Clinic",
  },
};

export default function FaqLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}