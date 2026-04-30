import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book a Dental Appointment | Grei's Dental Clinic Tirana",
  description: "Schedule your visit at Grei's Dental Clinic in Tirana. Book a consultation, general checkup, or specialized dental treatment online quickly and easily.",
  openGraph: {
    title: "Book a Dental Appointment | Grei's Dental Clinic Tirana",
    description: "Schedule your visit at Grei's Dental Clinic in Tirana. Book a consultation, general checkup, or specialized dental treatment online quickly and easily.",
    type: "website",
    locale: "en_US",
    siteName: "Grei's Dental Clinic",
  },
};

export default function ReserveLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}