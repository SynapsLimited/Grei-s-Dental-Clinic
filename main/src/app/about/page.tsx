'use client'

import React from 'react';
import WhoIs from './WhoIs';
import AboutHero from './AboutHero';

const AboutUs: React.FC = () => {
  return (
    <div
      className="bg-cover bg-center"
      style={{ backgroundImage: "url('/assets/Services BG.png')" }}
    >
      {/* About Us Hero */}
      <div className="relative">
        <AboutHero  />
      </div>
     

      {/* Why Us Section */}
      <div className="why-use-section">
        <WhoIs />
      </div>
    </div>
  );
};

export default AboutUs;
