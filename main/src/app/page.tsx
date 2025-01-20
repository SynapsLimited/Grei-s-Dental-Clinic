'use client';

import React from 'react';
import './css/home.css'; // Import the CSS file
import HeroSection from './home/HeroSection';
import CardSlider from './home/CardSlider';
import AboutUs from './home/AboutUs';
import TestimonialSlider from './home/TestimonialSlider';
import ResultSlider from './home/ResultSlider';
import BlogSection from './home/BlogSection';

const Home = () => {
  return (
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

     
      {/* Resutls Slider Section */}
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
  );
};

export default Home;
