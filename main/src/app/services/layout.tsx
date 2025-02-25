import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Services - Grei Dental Clinic',
  description: 'Discover the range of dental services we offer at Grei Dental Clinic, from routine check-ups to advanced cosmetic procedures.',
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}