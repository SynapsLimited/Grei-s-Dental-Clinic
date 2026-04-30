"use client";

import Link from "next/link";
import { AnimatedSection } from "./animated-section";
import { XCircle, CheckCircle, ArrowRight } from "lucide-react";
import { useLanguage } from "@/components/language-provider";

interface MythsVsFactsProps {
  limit?: number;
  showHeader?: boolean;
}

export function MythsVsFactsSection({ limit, showHeader = true }: MythsVsFactsProps) {
  const { t } = useLanguage();
  
  // Pulling directly from dictionary to ensure translations apply
  const translatedItems: Array<{ topic: string; myth: string; fact: string }> = t("mythsSection.items") as any;
  const displayedItems = limit ? translatedItems.slice(0, limit) : translatedItems;

  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto px-6 md:px-12">
        {showHeader && (
          <AnimatedSection className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-sm font-bold tracking-widest uppercase text-brand-blue mb-3">{t("mythsSection.badge")}</h2>
              <h3 className="text-4xl font-display font-bold text-brand-text-light dark:text-brand-text-dark">
                {t("mythsSection.title")}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mt-4 text-lg">
                {t("mythsSection.subtitle")}
              </p>
            </div>
            {limit && (
              <Link href="/myths-vs-facts" className="flex items-center gap-2 font-medium hover:text-brand-blue transition-colors group dark:text-white shrink-0">
                {t("mythsSection.readAll")} <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            )}
          </AnimatedSection>
        )}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedItems.map((item, i) => (
            <AnimatedSection key={i} delay={i * 0.05} direction="up" className="flex flex-col h-full bg-white dark:bg-brand-dark rounded-3xl border border-gray-100 dark:border-gray-800 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              
              <div className="px-8 pt-8 pb-4">
                <span className="inline-block px-3 py-1 bg-gray-100 dark:bg-gray-800 text-xs font-bold uppercase tracking-wider rounded-md text-gray-500 dark:text-gray-400 mb-2">
                  {item.topic}
                </span>
              </div>

              <div className="px-8 pb-6 flex flex-col gap-3">
                <div className="flex items-start gap-3">
                  <XCircle className="w-6 h-6 text-brand-red shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-brand-red mb-1">{t("mythsSection.mythLabel")}</h4>
                    <p className="text-gray-700 dark:text-gray-300 font-medium">"{item.myth}"</p>
                  </div>
                </div>
              </div>

              <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-800 to-transparent"></div>

              <div className="px-8 py-6 bg-brand-blue/5 dark:bg-brand-blue/10 flex-grow">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-brand-blue shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-brand-blue mb-1">{t("mythsSection.factLabel")}</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{item.fact}</p>
                  </div>
                </div>
              </div>

            </AnimatedSection>
          ))}
        </div>

        {limit && (
          <AnimatedSection className="mt-12 text-center md:hidden">
            <Link href="/myths-vs-facts" className="inline-flex items-center justify-center gap-2 font-bold text-brand-blue hover:underline">
              {t("mythsSection.readAll")} <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimatedSection>
        )}
      </div>
    </section>
  );
}