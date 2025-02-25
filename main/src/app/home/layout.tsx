import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home - Grei Dental Clinic',
  description: 'Welcome to Grei Dental Clinic, your trusted partner in dental health. Explore our services and book an appointment today.',
};

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}