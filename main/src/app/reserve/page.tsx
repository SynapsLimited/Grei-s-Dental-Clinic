'use client';

import React from 'react';
import Head from 'next/head';
import ReserveHero from './ReserveHero';
import ContactForm from './ContactForm';

const Reserve: React.FC = () => {
  return (
    <>
      <Head>
        <title>Reserve - Your Website</title>
        <meta name="description" content="Reserve your spot with Your Website. Contact us today to get started with our services." />
        <meta name="keywords" content="reserve, your website, contact form, book now, schedule" />
        <meta property="og:title" content="Reserve - Your Website" />
        <meta property="og:description" content="Reserve your spot with Your Website. Contact us today to get started with our services." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.yourwebsite.com/reserve" />
        <meta property="og:image" content="https://www.yourwebsite.com/images/reserve-og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Reserve - Your Website" />
        <meta name="twitter:description" content="Reserve your spot with Your Website. Contact us today to get started with our services." />
        <meta name="twitter:image" content="https://www.yourwebsite.com/images/reserve-twitter-image.jpg" />
      </Head>
      <div
        className="bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/Services BG.png')" }}
      >
        {/* Hero Section */}
        <div className="relative">
          <ReserveHero />
        </div>

        {/* Contact Form Section */}
        <div className="relative">
          <ContactForm />
        </div>
      </div>
    </>
  );
};

export default Reserve;