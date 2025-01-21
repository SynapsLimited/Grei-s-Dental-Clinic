import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  FaLocationArrow,
  FaWhatsapp,
  FaInstagram,
  FaFacebook,
  FaTiktok,
} from 'react-icons/fa'
import { BiSolidPhoneCall } from 'react-icons/bi'
import { TbMailFilled } from 'react-icons/tb'

const Footer: React.FC = () => {
  return (
    <footer className="relative py-12 bg-gradient-to-b from-transparent to-teal-500 backdrop-blur-sm text-white">
      {/* Footer Content */}
      <div className="relative z-10 container mx-auto px-4">
        {/* Logo and Clinic Name */}
        <div className="flex flex-col items-center mb-12">
          <Image
            src="/assets/logo.png"
            alt="Grei&rsquo;s Dental Clinic Logo"
            width={200}
            height={100}
            priority
            className="mb-5 max-w-[150px]"
          />
          <h2 className="text-2xl font-semibold text-white/80">
            Grei&rsquo;s Dental Clinic
          </h2>
        </div>

        {/* Footer Sections */}
        <div className="flex flex-col md:flex-row justify-between mb-12">
          {/* Location Section */}
          <div className="mb-8 md:mb-0">
            <h4 className="text-lg font-semibold mb-5 text-white/80">Location</h4>
            <div className="flex items-center">
              <FaLocationArrow
                className="w-6 h-6 mr-3 text-white/80 transition-transform duration-300 hover:scale-110"
                aria-hidden="true"
              />
              <Link
                href="#"
                className="hover:text-secondary hover:opacity-80 transition-colors duration-300"
              >
                Bilal Golemi 33, Tirana, Albania
              </Link>
            </div>
          </div>

          {/* Contact Section */}
          <div className="mb-8 md:mb-0">
            <h4 className="text-lg font-semibold mb-5 text-white/80">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-center">
                <BiSolidPhoneCall
                  className="w-6 h-6 mr-3 text-white/80 transition-transform duration-300 hover:scale-110"
                  aria-hidden="true"
                />
                <Link
                  href="tel:+355691234567"
                  className="hover:text-secondary hover:opacity-80 transition-colors duration-300"
                >
                  +355 69 123 4567
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
                  greidentalclinic@gmail.com
                </Link>
              </div>
            </div>
          </div>

          {/* Social Networks Section */}
          <div>
            <h4 className="text-lg font-semibold mb-5 text-white/80">Social Networks</h4>
            <div className="space-y-4">
              {[
                { icon: FaWhatsapp, label: 'WhatsApp', href: 'https://wa.link' },
                { icon: FaInstagram, label: 'Instagram', href: 'https://www.instagram.com/grei_dental_clinic/' },
                { icon: FaFacebook, label: 'Facebook', href: 'https://www.facebook.com/greidentalclinic' },
                { icon: FaTiktok, label: 'TikTok', href: 'https://www.tiktok.com/@greidentalclinic' },
              ].map((social, index) => (
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
          <p>© Grei&rsquo;s Dental Clinic. All rights reserved.</p>
          <p className="mt-2">
            Designed by{' '}
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
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
