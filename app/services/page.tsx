"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { AnimatedSection } from "@/components/animated-section";
import { servicesData } from "@/lib/services-data";
import { useLanguage } from "@/components/language-provider";

export default function ServicesPage() {
  const { t } = useLanguage();

  return (
    <div className="container mx-auto px-6 md:px-12 py-20 bg-white dark:bg-brand-dark transition-colors min-h-screen">
      <AnimatedSection className="max-w-3xl mx-auto text-center mb-20">
        <h1 className="text-5xl md:text-6xl font-display font-bold mb-6 text-brand-text-light dark:text-brand-text-dark">{t("services.title")}</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          {t("services.subtitle")}
        </p>
      </AnimatedSection>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Object.entries(servicesData).map(([slug, service], idx) => {
          // Pull text dynamically
          const title = t(`servicesData.${slug}.title`);
          const shortDesc = t(`servicesData.${slug}.shortDesc`);

          return (
            <AnimatedSection key={slug} delay={idx * 0.05} direction="up">
              <Link 
                href={`/services/${slug}`}
                className="group block p-8 rounded-3xl bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800 hover:border-brand-blue dark:hover:border-brand-blue transition-colors h-full flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-2xl font-display font-bold mb-4 group-hover:text-brand-blue transition-colors text-brand-text-light dark:text-white">
                    {title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    {shortDesc}
                  </p>
                </div>
                <div className="flex items-center gap-2 text-brand-blue font-medium mt-auto">
                  {t("services.explore")} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </AnimatedSection>
          );
        })}
      </div>
    </div>
  );
}