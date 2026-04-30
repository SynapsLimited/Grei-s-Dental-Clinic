"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { MapPin, Phone, Mail, Instagram, Facebook, MessageCircle } from "lucide-react";
import { useLanguage } from "@/components/language-provider";

export function Footer() {
  const { t } = useLanguage();
  const [isMapLoaded, setIsMapLoaded] = useState(false);

  const services = [
    { name: t("servicesData.composite-bonding.title"), slug: "composite-bonding" },
    { name: t("servicesData.whitening.title"), slug: "whitening" },
    { name: t("servicesData.prosthetics.title"), slug: "prosthetics" },
    { name: t("servicesData.orthodontics.title"), slug: "orthodontics" },
    { name: t("servicesData.gingivectomy.title"), slug: "gingivectomy" },
    { name: t("servicesData.endodontics.title"), slug: "endodontics" },
    { name: t("servicesData.prophylaxis.title"), slug: "prophylaxis" },
    { name: t("servicesData.implantology.title"), slug: "implantology" },
    { name: t("servicesData.piercings.title"), slug: "piercings" },
  ];

  const quickLinks = [
    { label: t("footer.links.about"), href: "/about" },
    { label: t("footer.links.services"), href: "/services" },
    { label: t("footer.links.testimonials"), href: "/testimonials" },
    { label: t("footer.links.blog"), href: "/blog" },
    { label: t("footer.links.reserve"), href: "/reserve" },
    { label: t("footer.links.contact"), href: "/contact" },
    { label: t("footer.links.faq"), href: "/faq" },
    { label: t("footer.links.myths"), href: "/myths-vs-facts" },
  ];

  const legalLinks = [
    { label: t("footer.links.insurance"), href: "/insurance" },
    { label: t("footer.links.terms"), href: "/terms" },
    { label: t("footer.links.privacy"), href: "/privacy" },
  ];

  return (
    <footer className="bg-gray-50 dark:bg-brand-dark pt-20 pb-10 border-t border-gray-200 dark:border-gray-800 transition-colors">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-3">
              <Image src="/logo.png" alt="Logo" priority width={42} height={42} className="rounded-full shadow-sm" />
              <div className="flex flex-col">
                <span className="font-display font-bold text-lg leading-none">Grei's</span>
                <span className="text-[10px] uppercase tracking-widest text-brand-blue font-semibold">Dental Clinic</span>
              </div>
            </Link>
            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
              {t("footer.description")}
            </p>
            <div className="space-y-3 pt-2 text-sm">
              <a href="tel:+355697563877" className="flex items-center gap-3 hover:text-brand-blue transition-colors">
                <Phone className="w-4 h-4 text-brand-blue" /> +355 69 756 3877
              </a>
              <a href="mailto:greidentalclinic@gmail.com" className="flex items-center gap-1 hover:text-brand-blue transition-colors">
                <Mail className="w-4 h-4 text-brand-blue" /> greidentalclinic@gmail.com
              </a>
            </div>
          </div>

          <div className="space-y-10">
            <div>
              <h4 className="font-bold mb-6 text-brand-text-light dark:text-white">{t("footer.quickLinksTitle")}</h4>
              <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
                {quickLinks.map((item, idx) => (
                  <li key={idx}>
                    <Link href={item.href} className="hover:text-brand-blue transition-colors">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-6 text-brand-text-light dark:text-white">{t("footer.legalTitle")}</h4>
              <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
                {legalLinks.map((item, idx) => (
                  <li key={idx}>
                    <Link href={item.href} className="hover:text-brand-blue transition-colors">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-brand-text-light dark:text-white">{t("footer.servicesTitle")}</h4>
            <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link href={`/services/${service.slug}`} className="hover:text-brand-blue transition-colors">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-bold text-brand-text-light dark:text-white">{t("footer.locationTitle")}</h4>
            <div className="relative h-44 w-full rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 shadow-inner group">
              {!isMapLoaded && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-900">
                  <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-brand-blue"></div>
                </div>
              )}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.12345!2d19.818!3d41.327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDE5JzM3LjIiTiAxOcKwNDknMDQuOCJF!5e0!3m2!1sen!2sal!4v1620000000000!5m2!1sen!2sal"
                className="absolute inset-0 w-full h-full grayscale group-hover:grayscale-0 transition-all duration-500"
                allowFullScreen
                loading="lazy"
                onLoad={() => setIsMapLoaded(true)}
              ></iframe>
            </div>
            <p className="text-xs text-gray-500 flex items-start gap-2">
              <MapPin className="w-3 h-3 text-brand-blue shrink-0 mt-0.5" />
              {t("footer.locationAddress")}
            </p>
          </div>

        </div>

        <div className="flex flex-col items-center gap-4 border-t border-gray-200 dark:border-gray-800 pt-8">
          
          <div className="flex items-center gap-5 mb-2">
            <a href="https://www.instagram.com/grei_dental_clinic/" className="text-gray-400 hover:text-brand-blue transition-colors"><Instagram className="w-5 h-5" /></a>
            <a href="https://www.facebook.com/greidentalclinic" className="text-gray-400 hover:text-brand-blue transition-colors"><Facebook className="w-5 h-5" /></a>
            <a href="https://wa.me/355697563877" className="text-gray-400 hover:text-green-500 transition-colors"><MessageCircle className="w-5 h-5" /></a>
          </div>

          <a
            href="https://www.synapslimited.eu"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2.5 text-base text-brand-blue/80 hover:text-brand-blue transition-colors"
          >
            {t("footer.designedBy")}
            <div 
              className="h-6 w-6 bg-brand-blue opacity-80 group-hover:opacity-100 transition-opacity"
              style={{
                WebkitMaskImage: 'url(/images/synaps-logo.png)',
                WebkitMaskSize: 'contain',
                WebkitMaskRepeat: 'no-repeat',
                WebkitMaskPosition: 'center',
                maskImage: 'url(/images/synaps-logo.png)',
                maskSize: 'contain',
                maskRepeat: 'no-repeat',
                maskPosition: 'center',
              }}
              aria-label="Synaps Limited Logo"
              role="img"
            />
            <span className="font-semibold text-brand-blue group-hover:brightness-110 transition-all">
              Synaps Digital Solutions
            </span>
          </a>
          
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {t("footer.rights")}
          </p>
        </div>
      </div>
    </footer>
  );
}