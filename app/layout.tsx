import type { Metadata, Viewport } from 'next';
import { Syne, Manrope } from 'next/font/google';
import './globals.css';
import { Providers } from '@/app/providers';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { FloatingButtons } from '@/components/floating-buttons';
import { LanguageProvider } from '@/components/language-provider';

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
  display: 'swap',
});

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
});

// Dynamically resolve the Base URL for Vercel Deployments vs Production
const getBaseUrl = () => {
  if (process.env.NEXT_PUBLIC_SITE_URL) return process.env.NEXT_PUBLIC_SITE_URL;
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
  return "http://localhost:3000";
};
const baseUrl = getBaseUrl();

export const viewport: Viewport = {
  themeColor: "#ffffff", 
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

// Global SEO Configuration
export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Grei's Dental Clinic | Premium Dental Care in Tirana",
    template: "%s | Grei's Dental Clinic", 
  },
  // OPTIMIZED: Exactly 158 characters. Hits keywords: premium dental care, Tirana, advanced technology, perfect lasting smile.
  description: "Experience premium dental care at Grei's Dental Clinic in Tirana. We combine advanced technology with artistic precision to craft your perfect, lasting smile.",
  keywords: [
    "Dentist Tirana", 
    "Dental Clinic Albania", 
    "Veneers Tirana", 
    "Dental Implants Albania", 
    "Orthodontics Tirana", 
    "Grei's Dental Clinic", 
    "Composite Bonding Albania",
    "Best Dentist in Tirana"
  ],
  authors: [{ name: "Dr. Grei Shehaj" }],
  creator: "Grei's Dental Clinic",
  publisher: "Grei's Dental Clinic",
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseUrl,
    siteName: "Grei's Dental Clinic",
    title: "Grei's Dental Clinic | Premium Dental Care in Tirana",
    // OPTIMIZED to match the main description
    description: "Experience premium dental care at Grei's Dental Clinic in Tirana. We combine advanced technology with artistic precision to craft your perfect, lasting smile.",
    images: [
      {
        url: `${baseUrl}/opengraph-image.jpg`, 
        width: 1200,
        height: 630,
        alt: "Grei's Dental Clinic Tirana",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Grei's Dental Clinic | Premium Dental Care in Tirana",
    // OPTIMIZED to match the main description
    description: "Experience premium dental care at Grei's Dental Clinic in Tirana. We combine advanced technology with artistic precision to craft your perfect, lasting smile.",
    images: [`${baseUrl}/opengraph-image.jpg`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    "name": "Grei's Dental Clinic",
    "image": `${baseUrl}/logo.png`,
    "@id": baseUrl,
    "url": baseUrl,
    "telephone": "+355697563877",
    "email": "greidentalclinic@gmail.com",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Bilal Golemi 33",
      "addressLocality": "Tirana",
      "addressCountry": "AL"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "41.3275", 
      "longitude": "19.8187"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "19:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "09:00",
        "closes": "14:00"
      }
    ],
    "sameAs": [
      "https://www.instagram.com/grei_dental_clinic/",
      "https://www.facebook.com/greidentalclinic"
    ]
  };

  return (
    <html lang="en" suppressHydrationWarning className={`${syne.variable} ${manrope.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico?v=3" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-icon.png?v=3" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col font-sans antialiased">
        <LanguageProvider>
          <Providers
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            <Navbar />
            <main className="flex-grow pt-24">
              {children}
            </main>
            <Footer />
            <FloatingButtons />
          </Providers>
        </LanguageProvider>
      </body>
    </html>
  );
}