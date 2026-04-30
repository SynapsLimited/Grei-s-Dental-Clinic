"use client";

import Link from "next/link";
import { AnimatedSection } from "@/components/animated-section";
import { MapPin, Phone, Mail, Clock, Calendar, MessageCircle } from "lucide-react";
import { useLanguage } from "@/components/language-provider";

export default function ContactPage() {
  const { t } = useLanguage();

  return (
    <div className="container mx-auto px-4 sm:px-6 md:px-12 py-16 md:py-20">
      
      <AnimatedSection className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 text-balance">
          {t("contact.title")}
        </h1>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-10 text-balance">
          {t("contact.subtitle")}
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link 
            href="/reserve" 
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-brand-blue hover:bg-blue-600 text-white px-8 py-4 rounded-full font-bold transition-all shadow-md hover:shadow-lg transform hover:-translate-y-1 text-base"
          >
            <Calendar className="w-5 h-5" />
            {t("contact.reserveNow")}
          </Link>
          <a 
            href="https://wa.me/355697563877" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white px-8 py-4 rounded-full font-bold transition-all shadow-md hover:shadow-lg transform hover:-translate-y-1 text-base"
          >
            <MessageCircle className="w-5 h-5" />
            {t("contact.reserveWhatsapp")}
          </a>
        </div>
      </AnimatedSection>

      <AnimatedSection className="mb-16 md:mb-24">
        <h2 className="text-3xl font-display font-bold mb-10 text-center">{t("contact.infoTitle")}</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          
          <div className="bg-gray-50 dark:bg-brand-dark/50 border border-gray-100 dark:border-gray-800 p-8 rounded-3xl flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow">
            <div className="w-14 h-14 rounded-full bg-brand-blue/10 flex items-center justify-center mb-6">
              <MapPin className="w-6 h-6 text-brand-blue" />
            </div>
            <h4 className="font-bold text-xl mb-3">{t("contact.location")}</h4>
            <p className="text-gray-600 dark:text-gray-400">
              Bilal Golemi 33<br/>Tirana, Albania
            </p>
          </div>

          <div className="bg-gray-50 dark:bg-brand-dark/50 border border-gray-100 dark:border-gray-800 p-8 rounded-3xl flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow">
            <div className="w-14 h-14 rounded-full bg-brand-blue/10 flex items-center justify-center mb-6">
              <Phone className="w-6 h-6 text-brand-blue" />
            </div>
            <h4 className="font-bold text-xl mb-3">{t("contact.phone")}</h4>
            <a href="tel:+355697563877" className="text-brand-blue hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium">
              +355 69 756 3877
            </a>
          </div>

          <div className="bg-gray-50 dark:bg-brand-dark/50 border border-gray-100 dark:border-gray-800 p-8 rounded-3xl flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow">
            <div className="w-14 h-14 rounded-full bg-brand-blue/10 flex items-center justify-center mb-6">
              <Mail className="w-6 h-6 text-brand-blue" />
            </div>
            <h4 className="font-bold text-xl mb-3">{t("contact.email")}</h4>
            <a href="mailto:greidentalclinic@gmail.com" className="text-brand-blue hover:text-blue-600 dark:hover:text-blue-400 transition-colors break-all font-medium">
              greidentalclinic@gmail.com
            </a>
          </div>

          <div className="bg-gray-50 dark:bg-brand-dark/50 border border-gray-100 dark:border-gray-800 p-8 rounded-3xl flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow">
            <div className="w-14 h-14 rounded-full bg-brand-blue/10 flex items-center justify-center mb-6">
              <Clock className="w-6 h-6 text-brand-blue" />
            </div>
            <h4 className="font-bold text-xl mb-3">{t("contact.hours")}</h4>
            <p className="text-gray-600 dark:text-gray-400 whitespace-pre-line">
              {t("contact.hoursText")}
            </p>
          </div>

        </div>
      </AnimatedSection>

      <AnimatedSection className="w-full h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-800 relative z-0">
        <iframe 
          src="https://maps.google.com/maps?q=Bilal%20Golemi%2033,%20Tirana,%20Albania&t=&z=15&ie=UTF8&iwloc=&output=embed" 
          className="absolute inset-0 w-full h-full border-none"
          allowFullScreen
          loading="lazy"
          title="Grei's Dental Clinic Location"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </AnimatedSection>
      
    </div>
  );
}