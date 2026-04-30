"use client";

import { useState } from "react";
import { ChevronDown, Plus, Minus } from "lucide-react";
import { AnimatedSection } from "./animated-section";
import { useLanguage } from "@/components/language-provider";

export function FaqSection() {
  const { t } = useLanguage();
  const [showAllFaqs, setShowAllFaqs] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  // Instead of static data, we pull the items array from the dictionary
  const translatedFaqs: Array<{ q: string; a: string }> = t("faqSection.items") as any;
  const displayedFaqs = showAllFaqs ? translatedFaqs : translatedFaqs.slice(0, 4);

  return (
    <section className="py-24">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <AnimatedSection className="text-center mb-16">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold tracking-widest uppercase text-brand-blue mb-3">{t("faqSection.badge")}</h2>
            <h3 className="text-4xl font-display font-bold">{t("faqSection.title")}</h3>
          </div>

          <div className="space-y-4">
            {displayedFaqs.map((faq, i) => (
              <div 
                key={i} 
                className="group border border-gray-200 dark:border-gray-800 rounded-2xl overflow-hidden bg-white dark:bg-white/5 transition-all hover:border-brand-blue/30"
              >
                <button 
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="font-bold pr-8">{faq.q}</span>
                  <div className={`shrink-0 p-2 rounded-full transition-colors ${activeFaq === i ? 'bg-brand-blue text-white' : 'bg-gray-100 dark:bg-gray-800'}`}>
                    {activeFaq === i ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${activeFaq === i ? 'max-h-96' : 'max-h-0'}`}>
                  <p className="p-6 pt-0 text-gray-600 dark:text-gray-400 leading-relaxed border-t border-gray-100 dark:border-gray-800">
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {!showAllFaqs && (
            <div className="mt-12 text-center">
              <button 
                onClick={() => setShowAllFaqs(true)}
                className="inline-flex items-center gap-2 font-bold text-brand-blue hover:underline"
              >
                {t("faqSection.loadMore")} <ChevronDown className="w-4 h-4" />
              </button>
            </div>
          )}
        </AnimatedSection>
      </div>
    </section>
  );
}