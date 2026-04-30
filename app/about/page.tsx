"use client";

import Image from "next/image";
import { useState, useEffect, useRef, useCallback } from "react";
import { AnimatedSection } from "@/components/animated-section";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "@/components/language-provider";

const galleryImages = [1, 2, 3, 4, 5, 6].map((num) => ({
  id: num,
  src: `/about/clinic${num}.jpg`,
  alt: `Grei's Dental Clinic Facility ${num}`,
}));

export default function AboutPage() {
  const { t } = useLanguage();
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const thumbnailRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const closeModal = () => setSelectedIndex(null);

  const nextImage = useCallback((e?: React.MouseEvent | KeyboardEvent) => {
    if (e && 'stopPropagation' in e) e.stopPropagation();
    setSelectedIndex((prev) => (prev !== null ? (prev + 1) % galleryImages.length : null));
  }, []);

  const prevImage = useCallback((e?: React.MouseEvent | KeyboardEvent) => {
    if (e && 'stopPropagation' in e) e.stopPropagation();
    setSelectedIndex((prev) => (prev !== null ? (prev - 1 + galleryImages.length) % galleryImages.length : null));
  }, []);

  useEffect(() => {
    if (selectedIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === "Escape") setSelectedIndex(null);
      if (e.key === "ArrowRight") nextImage(e);
      if (e.key === "ArrowLeft") prevImage(e);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedIndex, nextImage, prevImage]);

  useEffect(() => {
    if (selectedIndex !== null && thumbnailRefs.current[selectedIndex]) {
      thumbnailRefs.current[selectedIndex]?.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest"
      });
    }
  }, [selectedIndex]);

  return (
    <div className="container mx-auto px-6 md:px-12 py-20">
      
      <AnimatedSection className="max-w-3xl mx-auto text-center mb-20">
        <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">{t("about.title")}</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 text-balance">
          {t("about.subtitle")}
        </p>
      </AnimatedSection>

      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-32">
        <AnimatedSection direction="right" className="order-2 lg:order-1">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">{t("about.historyTitle")}</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
            {t("about.historyText1")}
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            {t("about.historyText2")}
          </p>
        </AnimatedSection>
        
        <AnimatedSection direction="left" className="relative order-1 lg:order-2">
          <div className="absolute -inset-4 bg-brand-blue/5 rounded-[3rem] -z-10 transform rotate-3"></div>
          <div className="relative w-full aspect-video sm:aspect-[4/3] rounded-[2rem] overflow-hidden shadow-xl border border-gray-100 dark:border-gray-800">
            <Image 
              src="/about/clinic1.jpg" 
              alt="Grei's Dental Clinic Interior" 
              fill 
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </AnimatedSection>
      </div>

      <AnimatedSection className="mb-32">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16 max-w-5xl mx-auto bg-gray-50 dark:bg-white/5 p-8 md:p-12 rounded-[3rem] border border-gray-100 dark:border-white/10 shadow-lg">
          <div className="w-full md:w-2/5 shrink-0">
            <div className="relative w-full max-w-sm mx-auto aspect-[3/4] rounded-2xl overflow-hidden shadow-md">
              <Image 
                src="/about/doctor.jpg" 
                alt="Dr. Grei Shehaj" 
                fill 
                className="object-cover hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 400px"
              />
            </div>
          </div>
          
          <div className="w-full md:w-3/5 text-center md:text-left">
            <h2 className="text-sm font-bold tracking-widest uppercase text-brand-blue mb-2">{t("about.doctorLabel")}</h2>
            <h3 className="text-4xl font-bold font-display mb-6">Dr. Grei Shehaj</h3>
            
            <p className="text-gray-600 dark:text-gray-400 text-lg mb-6 leading-relaxed">
              {t("about.doctorText1")}
            </p>
            <p className="text-gray-600 dark:text-gray-400 text-lg mb-6 leading-relaxed">
              {t("about.doctorText2")}
            </p>
            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
              {t("about.doctorText3")}
            </p>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection>
        <div className="text-center mb-12">
          <h2 className="text-sm font-bold tracking-widest uppercase text-brand-red mb-3">{t("about.tourLabel")}</h2>
          <h3 className="text-4xl font-display font-bold">{t("about.galleryTitle")}</h3>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {galleryImages.map((image, index) => (
            <AnimatedSection key={image.id} delay={index * 0.1} className="group cursor-pointer">
              <div 
                className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow border border-gray-100 dark:border-gray-800"
                onClick={() => setSelectedIndex(index)}
              >
                <Image 
                  src={image.src} 
                  alt={image.alt} 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-brand-blue/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <div className="bg-white text-brand-blue p-4 rounded-full shadow-lg transform scale-50 group-hover:scale-100 transition-transform duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/></svg>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </AnimatedSection>

      {/* Lightbox Modal rendering code remains identical to original... */}
      {selectedIndex !== null && (
        <div className="fixed inset-0 z-[100] flex flex-col items-center justify-between bg-white/80 dark:bg-brand-dark/90 backdrop-blur-2xl overflow-hidden" onClick={closeModal}>
          <button className="absolute top-6 right-6 md:top-8 md:right-8 p-3 bg-white/50 hover:bg-white text-gray-800 dark:bg-black/40 dark:hover:bg-brand-blue dark:text-white rounded-full transition-all duration-300 z-50 shadow-md backdrop-blur-md" onClick={closeModal}>
            <X className="w-6 h-6" />
          </button>
          <div className="relative w-full flex-1 flex items-center justify-center mt-16 md:mt-12 mb-4 px-4 md:px-16">
            <div className="relative w-full max-w-6xl h-full max-h-[65vh] md:max-h-[70vh]">
              <Image src={galleryImages[selectedIndex].src} alt={galleryImages[selectedIndex].alt} fill className="object-contain drop-shadow-2xl" sizes="100vw" priority />
            </div>
            <button className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 p-3 md:p-4 bg-white/50 hover:bg-white hover:text-brand-blue text-gray-800 dark:bg-black/40 dark:hover:bg-brand-blue dark:text-white rounded-full transition-all duration-300 shadow-md backdrop-blur-md" onClick={prevImage}>
              <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
            </button>
            <button className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 p-3 md:p-4 bg-white/50 hover:bg-white hover:text-brand-blue text-gray-800 dark:bg-black/40 dark:hover:bg-brand-blue dark:text-white rounded-full transition-all duration-300 shadow-md backdrop-blur-md" onClick={nextImage}>
              <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
            </button>
          </div>
          <div className="w-full bg-white/40 dark:bg-black/40 backdrop-blur-md border-t border-white/20 dark:border-white/5 py-4">
            <div className="flex gap-3 overflow-x-auto overflow-y-hidden max-w-5xl mx-auto px-4 snap-x [&::-webkit-scrollbar]:hidden" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }} onClick={(e) => e.stopPropagation()}>
              {galleryImages.map((img, idx) => (
                <button key={img.id} ref={(el) => { thumbnailRefs.current[idx] = el; }} onClick={() => setSelectedIndex(idx)} className={`relative h-20 w-28 md:h-24 md:w-36 shrink-0 rounded-xl overflow-hidden border-2 transition-all duration-300 snap-center ${selectedIndex === idx ? "border-brand-blue shadow-lg shadow-brand-blue/30 scale-105 opacity-100 z-10" : "border-transparent opacity-50 hover:opacity-100 hover:scale-100 scale-95"}`}>
                  <Image src={img.src} alt={`Thumbnail ${idx + 1}`} fill className="object-cover" sizes="(max-width: 768px) 120px, 150px" />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}