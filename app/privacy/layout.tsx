import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Grei's Dental Clinic",
  description: "Read the privacy policy of Grei's Dental Clinic. Learn how we collect, use, and protect your personal and medical information when you use our website or services.",
  robots: {
    index: false, // Privacy policies generally don't need to be indexed heavily, but you can change this to true if preferred.
    follow: true,
  },
};

export default function PrivacyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}