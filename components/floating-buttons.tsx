"use client";

import Link from "next/link";
import { Phone, MessageCircle, Calendar } from "lucide-react";
import { useLanguage } from "@/components/language-provider";

export function FloatingButtons() {
  const { t } = useLanguage();

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 flex flex-col items-end gap-2 sm:gap-3 z-50">
      <a
        href="tel:+355697563877"
        className="group flex items-center justify-center gap-2 w-10 h-10 sm:w-auto sm:h-auto sm:px-5 sm:py-3 rounded-full bg-brand-blue text-white shadow-lg hover:scale-105 transition-all"
        aria-label="Call Now"
        title="Call Now"
      >
        <Phone className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
      </a>
      
      <a
        href="https://wa.me/355697563877"
        target="_blank"
        rel="noreferrer"
        className="group flex items-center justify-center gap-2 w-10 h-10 sm:w-auto sm:h-auto sm:px-5 sm:py-3 rounded-full bg-[#25D366] text-white shadow-lg hover:scale-105 transition-all"
        aria-label="WhatsApp Us"
        title="WhatsApp Us"
      >
        <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
      </a>
      
      <Link
        href="/reserve"
        className="group flex items-center justify-center gap-2 w-10 h-10 sm:w-auto sm:h-auto sm:px-5 sm:py-3 rounded-full bg-brand-red text-white shadow-lg hover:scale-105 transition-all"
        aria-label="Reserve Now"
        title="Reserve Now"
      >
        <Calendar className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />

      </Link>
    </div>
  );
}