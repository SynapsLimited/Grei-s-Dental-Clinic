"use client";

import { MythsVsFactsSection } from "@/components/myths-vs-facts-section";
import { useLanguage } from "@/components/language-provider";

export default function MythsVsFactsPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-brand-dark transition-colors pt-20">
      <div className="bg-brand-blue/5 border-b border-brand-blue/10 py-16 md:py-24">
        <div className="container mx-auto px-6 md:px-12 text-center max-w-4xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 text-balance">
            {t("myths.title")}
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg md:text-xl text-balance">
            {t("myths.subtitle")}
          </p>
        </div>
      </div>
      <MythsVsFactsSection showHeader={false} />
    </div>
  );
}