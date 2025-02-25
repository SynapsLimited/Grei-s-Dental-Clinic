import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Reserve an Appointment - Grei Dental Clinic',
  description: 'Book your appointment online at Grei Dental Clinic. We make it easy for you to schedule your dental visits.',
};

export default function ReserveLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}