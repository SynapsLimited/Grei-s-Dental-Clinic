import type { Metadata } from "next";
import './globals.css';
import React from 'react';
import ClientWrapper from './components/ClientWrapper';
import I18nProvider from './components/i18nProvider';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CookieConsent from './components/CookieConsent';

export const metadata: Metadata = {
  title: {
    default: "Grei's Dental Clinic - Your Smile, Our Priority!",
    template: "%s - Grei's Dental Clinic"
  },
  description: 'Welcome to Grei Dental Clinic, where we prioritize your dental health and provide top-notch services for a brighter smile!',
  keywords: [
    'Grei Dental Clinic', 'Dentistry', 'Dental Care', 'Oral Health',
    'Teeth Whitening', 'Dental Implants', 'Cosmetic Dentistry',
    'Family Dentistry', 'Pediatric Dentistry', 'Emergency Dental Care',
    'Dental Hygiene', 'Orthodontics', 'Braces', 'Root Canal',
    'Dental Checkup', 'Preventive Care', 'Dental Services'
  ],
  icons: {
    icon: '/assets/Logo no BG.ico',
    shortcut: '/favicon.ico',
    apple: '/assets/Logo no BG.png',
  },
  openGraph: {
    title: "Grei's Dental Clinic - Your Smile, Our Priority!",
    description: 'Experience exceptional dental care at Grei Dental Clinic. Our expert team is dedicated to ensuring your oral health and a beautiful smile.',
    url: 'https://www.greisdentalclinic.com', // Replace with your actual URL
    type: 'website',
    images: [
      {
        url: 'https://www.greisdentalclinic.com/assets/grei-dental-clinic-meta.png', // Replace with your actual image URL
        width: 1200,
        height: 630,
        alt: "Grei's Dental Clinic",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Grei's Dental Clinic",
    description: 'Your trusted partner in dental health. Visit us for comprehensive dental services!',
    images: ['https://www.greisdentalclinic.com/assets/grei-dental-clinic-meta.png'], // Replace with your actual image URL
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const backgroundClass = 'homepage-background'; // Replace with dynamic logic as needed

  return (
    <html lang="en">
      <body className={``}>
        <I18nProvider>
          <CookieConsent />
          <Navbar />
          
          <ClientWrapper backgroundClass={backgroundClass}>
            {children}
            <Footer />
          </ClientWrapper>
        </I18nProvider>
      </body>
    </html>
  );
}