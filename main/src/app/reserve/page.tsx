'use client'

import React from 'react';
import ReserveHero from './ReserveHero';
import ContactForm from './ContactForm';



const Reserve: React.FC = () => {
  return (
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
      {/*LOCATION  Section */}
      {/* Contact Form Section */}



    </div>
  );
};

export default Reserve;
