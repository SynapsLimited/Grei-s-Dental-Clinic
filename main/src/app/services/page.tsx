import React from 'react';
import ServicesHero from './ServicesHero';
import ExpandingSlide from './ExpandingSlider';
import OtherServices from './OtherServices';

const ServicesPage: React.FC = () => {
  return (
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
  );
};

export default ServicesPage;
