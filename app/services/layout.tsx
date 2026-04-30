import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dental Services & Treatments in Tirana | Grei's Dental Clinic",
  description: "Explore comprehensive dental services at Grei's Dental Clinic in Tirana. We offer Composite Bonding, Teeth Whitening, Dental Implants, Orthodontics, Prosthetics, and more.",
  openGraph: {
    title: "Dental Services & Treatments in Tirana | Grei's Dental Clinic",
    description: "Explore comprehensive dental services at Grei's Dental Clinic in Tirana. We offer Composite Bonding, Teeth Whitening, Dental Implants, Orthodontics, Prosthetics, and more.",
    type: "website",
    locale: "en_US",
    siteName: "Grei's Dental Clinic",
  },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}