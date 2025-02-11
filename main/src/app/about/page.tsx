'use client';

import React from 'react';
import Head from 'next/head';
import WhoIs from './WhoIs';
import AboutHero from './AboutHero';

const AboutUs: React.FC = () => {
  return (
    <>
      <Head>
        <title>About Us - Your Website</title>
        <meta name="description" content="Learn more about Your Website, our mission, and why we are the best choice for your needs." />
        <meta name="keywords" content="about us, your website, mission, why choose us" />
        <meta property="og:title" content="About Us - Your Website" />
        <meta property="og:description" content="Learn more about Your Website, our mission, and why we are the best choice for your needs." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.yourwebsite.com/about-us" />
        <meta property="og:image" content="https://www.yourwebsite.com/images/about-us-og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Us - Your Website" />
        <meta name="twitter:description" content="Learn more about Your Website, our mission, and why we are the best choice for your needs." />
        <meta name="twitter:image" content="https://www.yourwebsite.com/images/about-us-twitter-image.jpg" />
      </Head>
      <div
        className="bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/Services BG.png')" }}
      >
        {/* About Us Hero */}
        <div className="relative">
          <AboutHero />
        </div>

        {/* Why Us Section */}
        <div className="why-use-section">
          <WhoIs />
        </div>
      </div>
    </>
  );
};

export default AboutUs;