"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useCallback, useRef } from "react";
import { AnimatedSection } from "@/components/animated-section";
import { ChevronLeft, ChevronRight, X, ArrowLeft, Home } from "lucide-react";
import { servicesData } from "@/lib/services-data";
import { useLanguage } from "@/components/language-provider";

export default function ServiceDetailPage() {
  const { t } = useLanguage();
  const params = useParams();
  const slug = params.slug as keyof typeof servicesData;
  const service = servicesData[slug];
  
  const [currentImageIdx, setCurrentImageIdx] = useState(0);
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);
  
  const thumbnailRefs = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    if (!service || !service.images.length) return;
    const timer = setInterval(() => {
      setCurrentImageIdx((prev) => (prev + 1) % service.images.length);
    }, 4500); 
    return () => clearInterval(timer);
  }, [service]);

  const closeLightbox = () => setLightboxIdx(null);

  const nextImage = useCallback((e?: React.MouseEvent | KeyboardEvent) => {
    if (e && 'stopPropagation' in e) e.stopPropagation();
    setLightboxIdx((prev) => (prev !== null && service ? (prev + 1) % service.images.length : null));
  }, [service]);

  const prevImage = useCallback((e?: React.MouseEvent | KeyboardEvent) => {
    if (e && 'stopPropagation' in e) e.stopPropagation();
    setLightboxIdx((prev) => (prev !== null && service ? (prev - 1 + service.images.length) % service.images.length : null));
  }, [service]);

  useEffect(() => {
    if (lightboxIdx !== null) {
      document.body.style.overflow = "hidden"; 
    } else {
      document.body.style.overflow = "auto";
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIdx === null || !service) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") nextImage(e);
      if (e.key === "ArrowLeft") prevImage(e);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [lightboxIdx, service, nextImage, prevImage]);

  useEffect(() => {
    if (lightboxIdx !== null && thumbnailRefs.current[lightboxIdx]) {
      thumbnailRefs.current[lightboxIdx]?.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest"
      });
    }
  }, [lightboxIdx]);

  if (!service) return <div className="py-40 text-center">Service not found.</div>;

  // Retrieve Translations dynamically
  const title = t(`servicesData.${slug}.title`);
  const shortDesc = t(`servicesData.${slug}.shortDesc`);
  const overview = t(`servicesData.${slug}.overview`);

  // Get the other 8 services for bottom navigation
  const otherServices = Object.keys(servicesData).filter(key => key !== slug);

  return (
    <div className="container mx-auto px-6 md:px-12 py-24 transition-colors">
      <AnimatedSection className="mb-12">
        <Link 
          href="/services" 
          className="inline-flex items-center justify-center gap-2 px-6 py-3 mb-8 rounded-full font-bold transition-all border border-gray-300 dark:border-gray-700 hover:border-brand-blue hover:text-brand-blue text-sm"
        >
          <ArrowLeft className="w-4 h-4" /> {t("serviceDetail.backToServices")}
        </Link>
        <h1 className="text-4xl md:text-6xl font-display font-bold mb-4">{title}</h1>
        <p className="text-lg text-gray-500 max-w-2xl">{shortDesc}</p>
      </AnimatedSection>

      <div className="grid lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-16">
          
          {service.images.length > 0 && (
            <AnimatedSection>
              <div className="relative w-full aspect-[16/9] rounded-3xl overflow-hidden shadow-xl bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800">
                {service.images.map((img, i) => (
                  <div key={i} className={`absolute inset-0 transition-all duration-700 ease-in-out ${i === currentImageIdx ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}>
                    <Image src={img.src} alt={img.alt} fill className="object-contain p-4" priority={i === 0} />
                  </div>
                ))}
              </div>
            </AnimatedSection>
          )}

          <AnimatedSection>
            <h2 className="text-2xl font-bold mb-6">{t("serviceDetail.aboutTitle")}</h2>
            <div className="prose prose-lg dark:prose-invert max-w-none text-gray-600 dark:text-gray-400">
              {overview.split('\n').map((p, i) => <p key={i} className="mb-4">{p}</p>)}
            </div>
          </AnimatedSection>

          {service.images.length > 0 && (
            <AnimatedSection>
              <h2 className="text-2xl font-bold mb-8">{t("serviceDetail.caseResults")}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {service.images.map((img, i) => (
                  <div 
                    key={i} 
                    onClick={() => setLightboxIdx(i)}
                    className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-md hover:shadow-2xl transition-all duration-300 group cursor-pointer"
                  >
                    <Image 
                      src={img.src} 
                      alt={img.alt} 
                      fill 
                      className="object-contain p-6 transition-transform duration-500 group-hover:scale-105" 
                    />
                    <div className="absolute inset-0 bg-brand-blue/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                ))}
              </div>
            </AnimatedSection>
          )}
        </div>

        <div className="lg:col-span-1">
          <div className="sticky top-32 space-y-6">
            <AnimatedSection className="bg-brand-dark p-6 rounded-3xl text-white shadow-2xl">
              <h3 className="text-xl font-bold mb-2">{t("serviceDetail.bookTitle")}</h3>
              <p className="text-sm text-gray-400 mb-6">{t("serviceDetail.bookSubtitle")} {title} {t("serviceDetail.today")}</p>
              <div className="space-y-3">
                <Link href="/reserve" className="block w-full text-center bg-brand-red py-3 rounded-xl font-bold text-sm hover:scale-[1.02] transition-transform shadow-lg shadow-brand-red/20">
                  {t("serviceDetail.bookAppt")}
                </Link>
                <a href="https://wa.me/355697563877" target="_blank" rel="noreferrer" className="block w-full text-center border border-[#25D366] text-[#25D366] py-3 rounded-xl font-bold text-sm hover:bg-[#25D366] hover:text-white transition-all">
                  {t("serviceDetail.whatsapp")}
                </a>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>

      {/* BOTTOM NAVIGATION SECTION */}
      <AnimatedSection className="mt-32 pt-16 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-display font-bold mb-8">{t("serviceDetail.exploreOthers")}</h3>
          
          {/* Other Services Pills */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {otherServices.map((otherSlug) => (
              <Link 
                key={otherSlug} 
                href={`/services/${otherSlug}`} 
                className="px-6 py-3 rounded-full border border-gray-200 dark:border-gray-800 hover:border-brand-blue hover:text-brand-blue dark:hover:border-brand-blue transition-colors text-sm font-medium bg-gray-50 dark:bg-gray-900/50"
              >
                {t(`servicesData.${otherSlug}.title`)}
              </Link>
            ))}
          </div>

          {/* Primary Fallback Navigation */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="/services" 
              className="flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 rounded-full font-bold transition-all border border-gray-300 dark:border-gray-700 hover:border-brand-blue hover:text-brand-blue text-sm"
            >
              <ArrowLeft className="w-4 h-4" /> {t("serviceDetail.backToServices")}
            </Link>
            <Link 
              href="/" 
              className="flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 rounded-full font-bold transition-all bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-sm"
            >
              <Home className="w-4 h-4" /> {t("serviceDetail.backToHome")}
            </Link>
          </div>
        </div>
      </AnimatedSection>

      {/* LIGHTBOX MODAL */}
      {lightboxIdx !== null && (
        <div 
          className="fixed inset-0 z-[100] flex flex-col items-center justify-between bg-white/80 dark:bg-brand-dark/90 backdrop-blur-2xl overflow-hidden"
          onClick={closeLightbox} 
        >
          <button 
            className="absolute top-6 right-6 md:top-8 md:right-8 p-3 bg-white/50 hover:bg-white text-gray-800 dark:bg-black/40 dark:hover:bg-brand-blue dark:text-white rounded-full transition-all duration-300 z-50 shadow-md backdrop-blur-md"
            onClick={closeLightbox}
          >
            <X className="w-6 h-6" />
          </button>

          <div className="relative w-full flex-1 flex items-center justify-center mt-16 md:mt-12 mb-4 px-4 md:px-16">
            <div className="relative w-full max-w-6xl h-full max-h-[65vh] md:max-h-[70vh]">
              <Image 
                src={service.images[lightboxIdx].src} 
                alt={service.images[lightboxIdx].alt}
                fill
                className="object-contain drop-shadow-2xl"
                sizes="100vw"
                priority
              />
            </div>

            <button 
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 p-3 md:p-4 bg-white/50 hover:bg-white hover:text-brand-blue text-gray-800 dark:bg-black/40 dark:hover:bg-brand-blue dark:text-white rounded-full transition-all duration-300 shadow-md backdrop-blur-md"
              onClick={prevImage}
            >
              <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
            </button>

            <button 
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 p-3 md:p-4 bg-white/50 hover:bg-white hover:text-brand-blue text-gray-800 dark:bg-black/40 dark:hover:bg-brand-blue dark:text-white rounded-full transition-all duration-300 shadow-md backdrop-blur-md"
              onClick={nextImage}
            >
              <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
            </button>
          </div>

          <div className="w-full bg-white/40 dark:bg-black/40 backdrop-blur-md border-t border-white/20 dark:border-white/5 py-4">
            <div 
              className="flex gap-3 overflow-x-auto overflow-y-hidden max-w-5xl mx-auto px-4 snap-x [&::-webkit-scrollbar]:hidden"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
              onClick={(e) => e.stopPropagation()} 
            >
              {service.images.map((img, idx) => (
                <button
                  key={idx}
                  ref={(el) => { thumbnailRefs.current[idx] = el; }} 
                  onClick={() => setLightboxIdx(idx)}
                  className={`relative h-20 w-28 md:h-24 md:w-36 shrink-0 rounded-xl overflow-hidden border-2 transition-all duration-300 snap-center ${
                    lightboxIdx === idx 
                      ? "border-brand-blue shadow-lg shadow-brand-blue/30 scale-105 opacity-100 z-10" 
                      : "border-transparent opacity-50 hover:opacity-100 hover:scale-100 scale-95"
                  }`}
                >
                  <Image 
                    src={img.src} 
                    alt={`Thumbnail ${idx + 1}`}
                    fill
                    className="object-cover bg-white dark:bg-gray-900"
                    sizes="(max-width: 768px) 120px, 150px"
                  />
                </button>
              ))}
            </div>
          </div>
          
        </div>
      )}
    </div>
  );
}