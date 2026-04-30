import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Busting Dental Myths vs Facts | Grei's Dental Clinic",
  description: "Discover the truth behind common dental misconceptions. Learn the scientific facts about gum health, teeth whitening, implants, and more from our expert dental team in Tirana.",
  openGraph: {
    title: "Busting Dental Myths vs Facts | Grei's Dental Clinic",
    description: "Discover the truth behind common dental misconceptions. Learn the scientific facts about gum health, teeth whitening, implants, and more from our expert dental team in Tirana.",
    type: "website",
    locale: "en_US",
    siteName: "Grei's Dental Clinic",
  },
};

export default function MythsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}