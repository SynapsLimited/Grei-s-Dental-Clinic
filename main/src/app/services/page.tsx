import React from 'react';
import Head from 'next/head';
import ServicesHero from './ServicesHero';
import ExpandingSlide from './ExpandingSlider';
import OtherServices from './OtherServices';

const ServicesPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Services - Your Website</title>
        <meta name="description" content="Explore the wide range of services offered by Your Website. We provide high-quality solutions tailored to your needs." />
        <meta name="keywords" content="services, your website, solutions, expanding slider, other services" />
        <meta property="og:title" content="Services - Your Website" />
        <meta property="og:description" content="Explore the wide range of services offered by Your Website. We provide high-quality solutions tailored to your needs." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.yourwebsite.com/services" />
        <meta property="og:image" content="https://www.yourwebsite.com/images/services-og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Services - Your Website" />
        <meta name="twitter:description" content="Explore the wide range of services offered by Your Website. We provide high-quality solutions tailored to your needs." />
        <meta name="twitter:image" content="https://www.yourwebsite.com/images/services-twitter-image.jpg" />
      </Head>
      <div
        className="bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/Services BG.png')" }}
      >
        {/* Services Hero Section */}
        <div className="relative">
          <ServicesHero />
        </div>

        {/* Expanding Slide Section */}
        <div className="relative">
          <ExpandingSlide />
        </div>

        {/* Service Card Section */}
        <div className="relative">
          <OtherServices />
        </div>
      </div>
    </>
  );
};

export default ServicesPage;