import type { Metadata } from "next";
import './globals.css';
import React from 'react';
import ClientWrapper from './components/ClientWrapper';
import I18nProvider from './components/i18nProvider';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CookieConsent from './components/CookieConsent';



export const metadata: Metadata = {
  title: "Grei's Dental Clinic",
  description: 'The official site of Grei Dental Clinic',
  icons: {
    icon: '/assets/Logo no BG.ico',
    apple: '/assets/Logo no BG.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // Determine the background class based on the current page
  // This can be done using various methods, such as using a context, props, or a routing-based approach
  // For simplicity, let's assume you pass the backgroundClass from each page

  // Example: You might have a context or a prop to pass the backgroundClass
  // Here, we'll assume a default background
  const backgroundClass = 'homepage-background'; // Replace with dynamic logic as needed

  return (
    <html lang="en">
      <body className={``}>
        <I18nProvider>
          <CookieConsent />
          <Navbar />
          
          <ClientWrapper backgroundClass={backgroundClass}>
            {children}
            {/* Footer is now inside ClientWrapper */}
            <Footer />
          </ClientWrapper>
        </I18nProvider>
      </body>
    </html>
  );
}
