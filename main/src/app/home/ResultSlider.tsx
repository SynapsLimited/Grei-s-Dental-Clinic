// src/components/ResultSlider.tsx
'use client'

import React, { useRef, useCallback, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

// Array of 15 testimonials
const testimonials = Array.from({ length: 15 }, (_, i) => ({
  id: i + 1,
  imageUrl: `/assets/result${i + 1}.jpeg`,
  name: `Risultato ${i + 1}`,
}));

export default function ResultSlider() {
  const { t } = useTranslation()
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "center",
      slidesToScroll: 1,
    },
    [Autoplay({ delay: 4000, stopOnInteraction: true })]
  );
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <motion.div
      ref={ref}
      className="w-full max-w-6xl mx-auto px-4 py-12"
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <motion.div className="relative" variants={itemVariants}>
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                className="flex-[0_0_100%] min-w-0 pl-4 md:flex-[0_0_50%] lg:flex-[0_0_33.333%] transition-opacity duration-300"
                style={{
                  opacity: selectedIndex === index ? 1 : 0.2,
                }}
                variants={itemVariants}
              >
                <div className="p-1">
                  <Card className="rounded-xl overflow-hidden transform transition-all duration-300 hover:scale-105">
                    <img
                      src={testimonial.imageUrl}
                      alt={`${t('testimonial')} ${testimonial.id}`}
                      className="w-full h-[400px] object-cover"
                    />
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.button
          onClick={scrollPrev}
          className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 items-center justify-center rounded-full bg-white/80 shadow-md hover:bg-white"
          aria-label={t('previous_slide')}
          variants={itemVariants}
        >
          <ChevronLeft className="w-6 h-6" />
        </motion.button>
        <motion.button
          onClick={scrollNext}
          className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 items-center justify-center rounded-full bg-white/80 shadow-md hover:bg-white"
          aria-label={t('next_slide')}
          variants={itemVariants}
        >
          <ChevronRight className="w-6 h-6" />
        </motion.button>
      </motion.div>

      <motion.div className="flex justify-center gap-2 mt-8" variants={itemVariants}>
        {scrollSnaps.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => scrollTo(index)}
            className={cn(
              "w-5 h-5 rounded-full transition-all duration-300",
              selectedIndex === index
                ? "bg-secondary scale-100"
                : "bg-secondary-transparent scale-75 hover:scale-90"
            )}
            aria-label={t('go_to_slide', { number: index + 1 })}
            variants={itemVariants}
          />
        ))}
      </motion.div>
    </motion.div>
  );
}
