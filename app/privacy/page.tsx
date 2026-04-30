"use client";

import { AnimatedSection } from "@/components/animated-section";
import { useLanguage } from "@/components/language-provider";

export default function PrivacyPage() {
  const { t } = useLanguage();

  return (
    <div className="container mx-auto px-6 md:px-12 py-20 max-w-4xl">
      <AnimatedSection>
        <h1 className="text-4xl md:text-5xl font-display font-bold mb-10">{t("privacy.title")}</h1>
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p>{t("privacy.lastUpdated")} {new Date().toLocaleDateString()}</p>
          <p>{t("privacy.intro")}</p>
          <h2>{t("privacy.collectTitle")}</h2>
          <p>{t("privacy.collectText")}</p>
          <h2>{t("privacy.useTitle")}</h2>
          <p>{t("privacy.useText")}</p>
          <h2>{t("privacy.contactTitle")}</h2>
          <p>
            {t("privacy.contactText")}
            <br />
            Grei's Dental Clinic
            <br />
            Bilal Golemi 33
            <br />
            Tirana, Albania
          </p>
        </div>
      </AnimatedSection>
    </div>
  );
}