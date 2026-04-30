import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Grei's Dental Clinic",
  description: "Read the Terms of Service for Grei's Dental Clinic. Understand our clinic policies, appointment cancellations, and medical disclaimers.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function TermsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}