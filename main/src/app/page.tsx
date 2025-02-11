'use client';

import React from 'react';
import Head from 'next/head';
import './css/home.css'; // Import the CSS file
import HeroSection from './home/HeroSection';
import CardSlider from './home/CardSlider';
import AboutUs from './home/AboutUs';
import TestimonialSlider from './home/TestimonialSlider';
import ResultSlider from './home/ResultSlider';
import BlogSection from './home/BlogSection';

const Home = () => {
  return (
    <>
      <Head>
        <title>Home - Your Website</title>
        <meta name="description" content="Welcome to Your Website! Explore our services, read testimonials, and stay updated with our latest blog posts." />
        <meta name="keywords" content="your website, services, testimonials, blog, about us" />
        <meta property="og:title" content="Home - Your Website" />
        <meta property="og:description" content="Welcome to Your Website! Explore our services, read testimonials, and stay updated with our latest blog posts." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.yourwebsite.com" />
        <meta property="og:image" content="https://www.yourwebsite.com/images/home-og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Home - Your Website" />
        <meta name="twitter:description" content="Welcome to Your Website! Explore our services, read testimonials, and stay updated with our latest blog posts." />
        <meta name="twitter:image" content="https://www.yourwebsite.com/images/home-twitter-image.jpg" />
      </Head>
      <div className="services-background">
        {/* Hero Section */}
        <div className="hero-section">
          <HeroSection />
        </div>

        {/* Card Slider Section */}
        <div className="card-slider">
          <CardSlider />
        </div>

        {/* About Us Section */}
        <div className="aboutus-section">
          <AboutUs />
        </div>

        {/* Results Slider Section */}
        <div className="testimonials-slider">
          <ResultSlider />
        </div>

        {/* Blog Section */}
        <div className="blog-section">
          <BlogSection />
        </div>

        {/* Testimonials Slider Section */}
        <div className="testimonials-slider">
          <TestimonialSlider />
        </div>
      </div>
    </>
  );
};

export default Home;