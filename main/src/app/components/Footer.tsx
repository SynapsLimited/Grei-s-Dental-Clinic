// src/app/components/Footer.tsx

'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  FaLocationArrow,
  FaWhatsapp,
  FaInstagram,
  FaFacebook,
  FaTiktok,
} from 'react-icons/fa';
import { BiSolidPhoneCall } from 'react-icons/bi';
import { TbMailFilled } from 'react-icons/tb';
import { useTranslation } from "react-i18next";

const Footer: React.FC = () => {
  const { t } = useTranslation('translation');

  const socialLinks = [
    { icon: FaWhatsapp, label: t('Footer.socialNetworks.whatsapp'), href: 'https://wa.link/38yea3' },
    { icon: FaInstagram, label: t('Footer.socialNetworks.instagram'), href: 'https://www.instagram.com/grei_dental_clinic/' },
    { icon: FaFacebook, label: t('Footer.socialNetworks.facebook'), href: 'https://www.facebook.com/greidentalclinic' },
    { icon: FaTiktok, label: t('Footer.socialNetworks.tiktok'), href: 'https://www.tiktok.com/@greidentalclinic' },
  ];

  return (
    <footer className="relative py-12 bg-gradient-to-b from-transparent to-teal-500 backdrop-blur-sm text-white">
      {/* Footer Content */}
      <div className="relative z-10 container mx-auto px-4">
        {/* Logo and Clinic Name */}
        <div className="flex flex-col items-center mb-12">
          <Image
            src="/assets/logo.png"
            alt="Grei’s Dental Clinic Logo"
            width={200}
            height={100}
            priority
            className="mb-5 max-w-[150px]"
          />
          <h2 className="text-2xl font-semibold text-white/80">
            {t('Footer.clinicName')}
          </h2>
        </div>

        {/* Footer Sections */}
        <div className="flex flex-col md:flex-row justify-between mb-12">
          {/* Location Section */}
          <div className="mb-8 md:mb-0">
            <h4 className="text-lg font-semibold mb-5 text-white/80">{t('Location')}</h4>
            <div className="flex items-center">
              <FaLocationArrow
                className="w-6 h-6 mr-3 text-white/80 transition-transform duration-300 hover:scale-110"
                aria-hidden="true"
              />
              <Link
                href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.7844253669264!2d19.804813276047724!3d41.31355310057184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x135030f89ce18d59%3A0x975a181a866ad42e!2sGrei%27s%20Dental%20Clinic!5e0!3m2!1sen!2sbe!4v1735216425147!5m2!1sen!2sbe"
                className="hover:text-secondary hover:opacity-80 transition-colors duration-300"
              >
                {t('Footer.location')}
              </Link>
            </div>
          </div>

          {/* Contact Section */}
          <div className="mb-8 md:mb-0">
            <h4 className="text-lg font-semibold mb-5 text-white/80">{t('Footer.contact.title')}</h4>
            <div className="space-y-4">
              <div className="flex items-center">
                <BiSolidPhoneCall
                  className="w-6 h-6 mr-3 text-white/80 transition-transform duration-300 hover:scale-110"
                  aria-hidden="true"
                />
                <Link
                  href="tel:+355697563877"
                  className="hover:text-secondary hover:opacity-80 transition-colors duration-300"
                >
                  {t('Footer.contact.phone')}
                </Link>
              </div>
              <div className="flex items-center">
                <TbMailFilled
                  className="w-6 h-6 mr-3 text-white/80 transition-transform duration-300 hover:scale-110"
                  aria-hidden="true"
                />
                <Link
                  href="mailto:greidentalclinic@gmail.com"
                  className="hover:text-secondary hover:opacity-80 transition-colors duration-300"
                >
                  {t('Footer.contact.email')}
                </Link>
              </div>
            </div>
          </div>

          {/* Social Networks Section */}
          <div>
            <h4 className="text-lg font-semibold mb-5 text-white/80">{t('Footer.socialNetworks.whatsapp')}</h4>
            <div className="space-y-4">
              {socialLinks.map((social, index) => (
                <div key={index} className="flex items-center">
                  <social.icon
                    className="w-6 h-6 mr-3 text-white/80 transition-transform duration-300 hover:scale-110"
                    aria-hidden="true"
                  />
                  <Link
                    href={social.href}
                    className="hover:text-secondary hover:opacity-80 transition-colors duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {social.label}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center text-sm opacity-80">
          <p>{t('Footer.rightsReserved')}</p>
          <p className="mt-2">
            {t('Footer.designedBy')}
            <Link
              href="http://www.synapslimited.eu"
              className="text-white text-lg underline hover:text-secondary transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              Synaps
            </Link>
          </p>
        </div>
        <div className="text-center mt-10">
          <Link
            href="/privacypolicy"
            className="text-white opacity-50 hover:text-secondary transition-colors duration-300 text-sm"
          >
            {t('Footer.privacyPolicy')}
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
