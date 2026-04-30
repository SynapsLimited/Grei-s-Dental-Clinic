"use client";

import { AnimatedSection } from "@/components/animated-section";
import { CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/components/language-provider";

export default function InsurancePage() {
  const { t } = useLanguage();

  return (
    <div className="container mx-auto px-6 md:px-12 py-20">
      <AnimatedSection className="max-w-3xl mx-auto text-center mb-20">
        <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">{t("insurance.title")}</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          {t("insurance.subtitle")}
        </p>
      </AnimatedSection>

      <div className="grid lg:grid-cols-2 gap-16">
        <AnimatedSection direction="right">
          <h2 className="text-3xl font-display font-bold mb-8">{t("insurance.acceptedTitle")}</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            {t("insurance.acceptedText")}
          </p>
          <div className="grid grid-cols-2 gap-4">
            {['Sigal Uniqa', 'SiCRED', 'Albsig', 'Eurosig', 'Intersig', 'Atlantik'].map(ins => (
              <div key={ins} className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-gray-900/50 rounded-xl border border-gray-200 dark:border-gray-800">
                <CheckCircle2 className="w-5 h-5 text-brand-blue" />
                <span className="font-medium">{ins}</span>
              </div>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection direction="left">
          <h2 className="text-3xl font-display font-bold mb-8">{t("insurance.flexibleTitle")}</h2>
          <div className="bg-brand-blue text-white p-8 rounded-3xl mb-8">
            <h3 className="text-2xl font-bold mb-4">{t("insurance.zeroInterestTitle")}</h3>
            <p className="mb-6 opacity-90">
              {t("insurance.zeroInterestText")}
            </p>
            <button className="bg-white text-brand-blue px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors">
              {t("insurance.learnMore")}
            </button>
          </div>
          <p className="text-gray-600 dark:text-gray-400">
            {t("insurance.methodsText")}
          </p>
        </AnimatedSection>
      </div>
    </div>
  );
}