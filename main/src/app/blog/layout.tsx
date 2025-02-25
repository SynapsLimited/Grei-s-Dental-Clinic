import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog - Grei Dental Clinic',
  description: 'Stay updated with the latest news and articles on dental health, tips, and procedures from Grei Dental Clinic.',
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}