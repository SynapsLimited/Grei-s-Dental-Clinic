"use client";

import { useState, useCallback } from 'react';
import { SlideItem } from '../types/slider';
import { rotateArray } from '../utils/arrayUtils';

export function useSlider(initialSlides: SlideItem[]) {
  // Initialize slides with a circular array: [last, ...initialSlides, first]
  const [slides, setSlides] = useState<SlideItem[]>(() => {
    if (initialSlides.length === 0) return [];
    return [
      initialSlides[initialSlides.length - 1],
      ...initialSlides,
      initialSlides[0],
    ];
  });

  // Start from the first actual slide
  const [slideIndex, setSlideIndex] = useState(1);
  const [isSliding, setIsSliding] = useState(false);

  // Handler for moving to the next slide
  const nextSlide = useCallback(() => {
    if (isSliding) return; // Prevent multiple simultaneous slides
    setIsSliding(true);
    setSlideIndex((prevIndex) => {
      const nextIndex = prevIndex + 1;
      if (nextIndex >= slides.length - 1) {
        // If at the end, reset to the first slide after the transition
        setTimeout(() => {
          setSlides((currentSlides) => rotateArray(currentSlides));
          setSlideIndex(1);
          setIsSliding(false);
        }, 500); // Duration should match your CSS transition duration
        return slides.length - 1;
      }
      setTimeout(() => setIsSliding(false), 500);
      return nextIndex;
    });
  }, [isSliding, slides.length]);

  // Handler for moving to the previous slide
  const prevSlide = useCallback(() => {
    if (isSliding) return; // Prevent multiple simultaneous slides
    setIsSliding(true);
    setSlideIndex((prevIndex) => {
      const nextIndex = prevIndex - 1;
      if (nextIndex <= 0) {
        // If at the beginning, reset to the last slide after the transition
        setTimeout(() => {
          setSlides((currentSlides) => rotateArray(currentSlides, true));
          setSlideIndex(slides.length - 2);
          setIsSliding(false);
        }, 500); // Duration should match your CSS transition duration
        return 0;
      }
      setTimeout(() => setIsSliding(false), 500);
      return nextIndex;
    });
  }, [isSliding, slides.length]);

  // Determine the slides to display based on the current index
  const currentSlides = [
    slides[slideIndex - 1], // Previous slide
    slides[slideIndex],     // Current slide
    slides[slideIndex + 1], // Next slide
    slides[slideIndex + 2], // Optional: Preview slide
  ];

  return { slides: currentSlides, nextSlide, prevSlide, isSliding };
}
