"use client";

import { FaqSection } from "@/components/faq-section";
import { useLanguage } from "@/components/language-provider";

export default function FaqPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-brand-dark transition-colors pt-20">
      
      <div className="bg-brand-blue/5 border-b border-brand-blue/10 py-16">
        <div className="container mx-auto px-6 md:px-12 text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            {t("faq.title")}
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            {t("faq.subtitle")}
          </p>
        </div>
      </div>

      <FaqSection />
      
    </div>
  );
}