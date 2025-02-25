import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us - Grei Dental Clinic',
  description: 'Learn more about Grei Dental Clinic, our team, and our commitment to providing exceptional dental care.',
};

export default function AboutUsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}