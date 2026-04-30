"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar, Star, Phone, MessageCircle, MapPin, Activity, Smile, Sparkles, Sun, Stethoscope, Shield, Heart, Diamond } from "lucide-react";
import { AnimatedSection } from "@/components/animated-section";
import googleData from "@/data/google-reviews.json";
import { ServiceCard } from "@/components/service-card";
import { FaqSection } from "@/components/faq-section";
import { MythsVsFactsSection } from "@/components/myths-vs-facts-section";
import { servicesData } from "@/lib/services-data";
import { useLanguage } from "@/components/language-provider";

const getIconForService = (slug: string) => {
  const icons: Record<string, any> = {
    "composite-bonding": Sparkles,
    "whitening": Sun,
    "prosthetics": Shield,
    "orthodontics": Smile,
    "gingivectomy": Activity,
    "endodontics": Stethoscope,
    "prophylaxis": Heart,
    "implantology": Activity,
    "piercings": Diamond,
  };
  return icons[slug] || Sparkles;
};

export default function Home() {
  const { t } = useLanguage();
  const homeReviews = googleData.filter(r => r.text.length > 0).slice(0, 3);
  
  return (
    <div className="flex flex-col w-full overflow-hidden bg-white dark:bg-brand-dark transition-colors">
      <section className="relative min-h-[90vh] flex items-center pt-10 pb-20">
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            <AnimatedSection direction="right" className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-blue/10 text-brand-blue font-medium text-sm mb-8">
                <span className="w-2 h-2 rounded-full bg-brand-blue animate-pulse"></span>
                {t("home.accepting")}
              </div>
              <h1 className="text-5xl md:text-7xl font-display font-bold leading-[1.1] mb-6 text-brand-text-light dark:text-brand-text-dark whitespace-pre-line">
                {t("home.heroTitle1")}
                <span className="text-brand-blue italic pr-2">{t("home.heroTitle2")}</span>
                {t("home.heroTitle3")}
                <span className="text-brand-red">{t("home.heroTitle4")}</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-10 max-w-lg leading-relaxed">
                {t("home.heroSubtitle")}
              </p>
              <div className="flex flex-col sm:flex-row flex-wrap gap-4">
                <Link href="/reserve" className="group relative inline-flex items-center justify-center gap-2 bg-brand-red text-white px-8 py-4 rounded-full font-medium text-lg overflow-hidden transition-transform hover:scale-105 active:scale-95">
                  <span className="relative z-10 flex items-center gap-2">
                    {t("home.reserveNow")} <Calendar className="w-5 h-5" />
                  </span>
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
                </Link>

                <a href="https://wa.me/355697563877" target="_blank" rel="noreferrer" className="group relative inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-full font-medium text-lg overflow-hidden transition-transform hover:scale-105 active:scale-95">
                  <span className="relative z-10 flex items-center gap-2">
                    <MessageCircle className="w-5 h-5" /> {t("home.whatsapp")}
                  </span>
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
                </a>
                
                <Link href="/services" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-medium text-lg border border-gray-300 dark:border-gray-700 hover:border-brand-blue hover:text-brand-blue transition-colors text-brand-text-light dark:text-white">
                  {t("home.exploreServices")}
                </Link>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="left" delay={0.2} className="relative h-[600px] w-full rounded-[2.5rem] overflow-hidden shadow-2xl shadow-brand-blue/10">
              <Image 
                src="/images/hero-image.jpeg" 
                alt="Doctor and smiling patient in modern clinic" 
                fill 
                className="object-cover"
                priority
              />
              <div className="absolute bottom-8 left-8 bg-white/90 dark:bg-brand-dark/90 backdrop-blur-md p-4 rounded-2xl shadow-xl flex items-center gap-4 border border-gray-100 dark:border-gray-800">
                <div>
                  <div className="flex items-center gap-1 text-yellow-500">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="font-bold text-brand-text-light dark:text-brand-text-dark">5.0</span>
                  </div>
                  <p className="text-xs font-medium text-gray-500 dark:text-gray-400">{t("home.happyPatients")}</p>
                </div>
              </div>
            </AnimatedSection>

          </div>
        </div>
        <div className="absolute top-1/4 right-0 w-1/3 h-1/2 bg-brand-blue/5 blur-[120px] rounded-full -z-10"></div>
        <div className="absolute bottom-0 left-1/4 w-1/4 h-1/3 bg-brand-red/5 blur-[100px] rounded-full -z-10"></div>
      </section>

      <section className="py-24 bg-gray-50 dark:bg-gray-900/50">
        <div className="container mx-auto px-6 md:px-12">
          <AnimatedSection className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-sm font-bold tracking-widest uppercase text-brand-blue mb-3">{t("home.excellence")}</h2>
              <h3 className="text-4xl md:text-5xl font-display font-bold text-brand-text-light dark:text-brand-text-dark">{t("home.comprehensive")}</h3>
            </div>
            <Link href="/services" className="flex items-center gap-2 font-medium hover:text-brand-blue transition-colors group dark:text-white">
              {t("home.viewAllServices")} <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(servicesData).map(([slug, service], idx) => {
              // Pull text dynamically
              const title = t(`servicesData.${slug}.title`);
              const shortDesc = t(`servicesData.${slug}.shortDesc`);

              return (
                <AnimatedSection key={slug} delay={idx * 0.05} direction="up">
                  <ServiceCard 
                    title={title}
                    description={shortDesc}
                    features={[]} 
                    icon={getIconForService(slug)}
                    href={`/services/${slug}`}
                  />
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-32 relative overflow-hidden">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="right" className="relative">
              <div className="aspect-square rounded-full bg-brand-blue/5 absolute -top-10 -left-10 w-full h-full -z-10 blur-3xl"></div>
              <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden border border-gray-200 dark:border-gray-800 shadow-2xl">
                <Image 
                  src="/images/home-page-about-image.png" 
                  alt="Modern clinic interior and expertise" 
                  fill 
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-brand-red rounded-full flex items-center justify-center text-white p-6 shadow-xl hidden md:flex">
                <p className="font-display font-bold text-xl text-center leading-tight whitespace-pre-line">{t("home.yearsExp")}</p>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="left" className="lg:pl-10">
              <h2 className="text-sm font-bold tracking-widest uppercase text-brand-red mb-3">{t("home.philosophy")}</h2>
              <h3 className="text-4xl md:text-5xl font-display font-bold mb-6 text-brand-text-light dark:text-brand-text-dark">{t("home.whereExpertise")}</h3>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                {t("home.philosophyText1")}
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-10 leading-relaxed">
                {t("home.philosophyText2")}
              </p>
              <Link href="/about" className="inline-flex items-center gap-2 font-medium text-brand-blue hover:text-brand-blue/80 transition-colors group">
                <span className="border-b-2 border-brand-blue pb-1">{t("home.discoverStory")}</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-sm font-bold tracking-widest uppercase text-brand-red mb-3">{t("home.patientStories")}</h2>
              <h3 className="text-4xl font-display font-bold text-brand-text-light dark:text-brand-text-dark">{t("home.smilesSpeak")}</h3>
            </div>
            <Link href="/testimonials" className="hidden md:flex items-center gap-2 text-brand-blue font-bold hover:underline">
              {t("home.viewAllReviews")} <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {homeReviews.map((rev, i) => (
              <div key={i} className="bg-white dark:bg-white/5 p-8 rounded-3xl border border-gray-100 dark:border-white/10 shadow-xl shadow-brand-blue/5">
                <div className="flex gap-1 text-yellow-500 mb-4">
                  {[1, 2, 3, 4, 5].map(s => <Star key={s} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="text-gray-600 dark:text-gray-300 italic mb-6">"{rev.text}"</p>
                <h5 className="font-bold text-sm text-brand-text-light dark:text-brand-text-dark">{rev.name}</h5>
              </div>
            ))}
          </div>
          
          <Link href="/testimonials" className="md:hidden flex items-center justify-center gap-2 text-brand-blue font-bold mt-8">
            {t("home.viewAllReviews")} <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <MythsVsFactsSection limit={3} />
      <FaqSection />

      <section className="py-24">
        <div className="container mx-auto px-6 md:px-12">
          <AnimatedSection className="bg-gray-50 dark:bg-gray-900/50 rounded-[3rem] p-10 md:p-20 border border-gray-200 dark:border-gray-800 text-center max-w-5xl mx-auto relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-brand-blue to-brand-red"></div>
            
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-brand-text-light dark:text-brand-text-dark">{t("home.ctaTitle")}</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto">
              {t("home.ctaSubtitle")}
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link href="/reserve" className="bg-brand-blue hover:bg-brand-blue/90 text-white px-8 py-4 rounded-full font-medium text-lg transition-all hover:shadow-lg hover:shadow-brand-blue/20 w-full sm:w-auto">
                {t("home.bookAppt")}
              </Link>
              <a href="https://wa.me/355697563877" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20BD5A] text-white px-8 py-4 rounded-full font-medium text-lg transition-all hover:shadow-lg hover:shadow-[#25D366]/20 w-full sm:w-auto">
                <MessageCircle className="w-5 h-5" /> {t("home.whatsapp")}
              </a>
            </div>

            <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-8 text-sm text-gray-500 font-medium">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-brand-blue" /> +355 69 756 3877
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-brand-red" /> Bilal Golemi 33, Tirana
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

    </div>
  );
}