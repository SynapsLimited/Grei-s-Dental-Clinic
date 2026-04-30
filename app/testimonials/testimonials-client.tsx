"use client";

import { AnimatedSection } from "@/components/animated-section";
import { Star } from "lucide-react";
import ReviewForm from "./review-form";
import { useLanguage } from "@/components/language-provider";

export default function TestimonialsClient({ allReviews }: { allReviews: any[] }) {
  const { t } = useLanguage();

  return (
    <div className="container mx-auto px-6 py-20">
      <AnimatedSection className="text-center max-w-2xl mx-auto mb-20">
        <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">{t("testimonials.title")}</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          {t("testimonials.subtitle")}
        </p>
      </AnimatedSection>

      <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6 mb-24">
        {allReviews.map((rev, i) => (
          <div key={i} className="break-inside-avoid bg-gray-50 dark:bg-gray-900/40 p-8 rounded-[2rem] border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex gap-1 text-yellow-500 mb-5">
              {[...Array(5)].map((_, s) => (
                <Star key={s} className={`w-4 h-4 ${s < rev.rating ? "fill-current" : "text-gray-300"}`} />
              ))}
            </div>
            
            {rev.text ? (
              <p className="text-gray-700 dark:text-gray-300 mb-8 italic leading-relaxed">
                "{rev.text}"
              </p>
            ) : (
              <div className="mb-8 py-2 px-4 bg-yellow-500/10 text-yellow-600 dark:text-yellow-500 rounded-xl text-[10px] font-black tracking-tighter inline-block">
                {t("testimonials.starRating")}
              </div>
            )}

            <div className="flex justify-between items-center border-t border-gray-200 dark:border-gray-800 pt-6">
              <div>
                <h5 className="font-bold text-sm capitalize">{rev.name}</h5>
                <p className="text-[10px] text-brand-blue font-bold uppercase tracking-wider">{rev.service}</p>
              </div>
              <span className="text-[9px] font-black text-gray-400 dark:text-gray-600 uppercase border border-gray-200 dark:border-gray-800 px-2 py-1 rounded-md">
                {rev.source}
              </span>
            </div>
          </div>
        ))}
      </div>

      <ReviewForm />
    </div>
  );
}