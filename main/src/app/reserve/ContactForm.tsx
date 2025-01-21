// src/app/components/ContactSection.tsx

'use client';

import { useState } from 'react';
import { Phone, MapPin } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';

const ContactSection: React.FC = () => {
  const { t } = useTranslation('translation');
  const [isMapLoaded, setIsMapLoaded] = useState(false);

  return (
    <div className="px-6 md:-mt-[500px] lg:mt-[40px]">
      <section className="relative pb-20 align-center">
        {/* Optional: Overlay to enhance text readability */}
        <div className="absolute inset-0 opacity-20"></div>

        <div className="relative max-w-3xl mx-auto">
          <h2 className="text-center text-4xl md:text-5xl lg:text-6xl font-medium text-complementary mb-12 md:mb-16 max-w-3xl">
            {t('ContactSection.title')}
          </h2>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="relative h-0 pb-[60.25%]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.7844253669264!2d19.804813276047724!3d41.31355310057184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x135030f89ce18d59%3A0x975a181a866ad42e!2sGrei%27s%20Dental%20Clinic!5e0!3m2!1sen!2sbe!4v1735216425147!5m2!1sen!2sbe"
                className="absolute top-0 left-0 w-full h-full border-2"
                allowFullScreen
                loading="lazy"
                onLoad={() => setIsMapLoaded(true)}
              ></iframe>
              {!isMapLoaded && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
                  <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
                </div>
              )}
            </div>
            <div className="p-6 space-y-4">
              <div className="flex items-center space-x-3 group">
                <Link href="tel:+355697563877" className="flex items-center space-x-2">
                  <Phone className="h-6 w-6 text-complementary group-hover:text-secondary transition-colors duration-200" />
                  <p className="not-italic text-lg text-gray-700 group-hover:text-secondary transition-colors duration-200">
                    +355 69 756 3877
                  </p>
                </Link>
              </div>
              <div className="flex items-start space-x-3 group">
                <MapPin className="h-6 w-6 text-complementary group-hover:text-secondary transition-colors duration-200 mt-1" />
                <address className="not-italic text-lg text-gray-700 group-hover:text-secondary transition-colors duration-200">
                  {t('ContactSection.addressLabel')}
                </address>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactSection;
