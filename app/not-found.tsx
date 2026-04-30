"use client";

import Link from "next/link";
import { AnimatedSection } from "@/components/animated-section";
import { useLanguage } from "@/components/language-provider";

export default function NotFound() {
  const { t } = useLanguage();

  return (
    <div className="min-h-[80vh] flex items-center justify-center container mx-auto px-6">
      <AnimatedSection className="text-center max-w-2xl">
        <h1 className="text-6xl font-display font-bold mb-4 text-brand-blue">404</h1>
        <h2 className="text-3xl font-display font-bold mb-6">{t("notFound.title")}</h2>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-10">
          {t("notFound.text")}
        </p>
        <Link href="/" className="inline-block bg-brand-red hover:bg-brand-red/90 text-white px-8 py-4 rounded-full font-medium text-lg transition-all">
          {t("notFound.returnHome")}
        </Link>
      </AnimatedSection>
    </div>
  );
}