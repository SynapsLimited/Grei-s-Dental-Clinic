// src/components/HeroSection.tsx
'use client';

import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection() {
  const { t } = useTranslation();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image Wrapper with Border and Parallax Effect */}
      <div
        className="absolute inset-0 overflow-hidden border-4 border-white"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      >
        <Image
          src="/assets/IS10.jpg"
          alt="Hero background"
          fill
          style={{ objectFit: 'cover' }}
          quality={100}
          priority
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-teal-500/30 to-transparent" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center">
        <div className="text-center text-white">
          <h1 className="mb-12 text-4xl font-medium text-white md:mb-16 md:text-5xl lg:text-6xl max-w-3xl">
            {t('title')}
          </h1>
          <p className="mb-8 text-xl sm:text-2xl">{t('subtitle')}</p>
          <Link href="/reserve" className="btn btn-primary">
            {t('reserve')}
          </Link>
        </div>
      </div>
    </div>
  );
}
