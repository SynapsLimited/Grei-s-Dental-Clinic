"use client";

import { AnimatedSection } from "@/components/animated-section";
import { useLanguage } from "@/components/language-provider";

export default function TermsPage() {
  const { t } = useLanguage();

  return (
    <div className="container mx-auto px-6 md:px-12 py-20 max-w-4xl">
      <AnimatedSection>
        <h1 className="text-4xl md:text-5xl font-display font-bold mb-10">{t("terms.title")}</h1>
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p>{t("terms.lastUpdated")} {new Date().toLocaleDateString()}</p>
          <p>{t("terms.intro")}</p>
          <h2>{t("terms.disclaimerTitle")}</h2>
          <p>{t("terms.disclaimerText")}</p>
          <h2>{t("terms.apptTitle")}</h2>
          <p>{t("terms.apptText")}</p>
          <h2>{t("terms.contactTitle")}</h2>
          <p>{t("terms.contactText")}</p>
        </div>
      </AnimatedSection>
    </div>
  );
}