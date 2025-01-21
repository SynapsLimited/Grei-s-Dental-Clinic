'use client'

import { useState } from 'react'
import Image from 'next/image'
import { useTranslation } from 'react-i18next'

export default function ExpandingSlider() {
  const { t } = useTranslation()
  const [activeSlide, setActiveSlide] = useState(1)

  // Build the slides array from the translation file
  const slides = [
    {
      id: 1,
      title: t('expandingSlider.slides.1.title'),
      subtitle: t('expandingSlider.slides.1.subtitle'),
      image: '/assets/metal.jpg'
    },
    {
      id: 2,
      title: t('expandingSlider.slides.2.title'),
      subtitle: t('expandingSlider.slides.2.subtitle'),
      image: '/assets/zirkon.jpg'
    },
    {
      id: 3,
      title: t('expandingSlider.slides.3.title'),
      subtitle: t('expandingSlider.slides.3.subtitle'),
      image: '/assets/fzirkon.jpg'
    },
    {
      id: 4,
      title: t('expandingSlider.slides.4.title'),
      subtitle: t('expandingSlider.slides.4.subtitle'),
      image: '/assets/emax.jpg'
    },
    {
      id: 5,
      title: t('expandingSlider.slides.5.title'),
      subtitle: t('expandingSlider.slides.5.subtitle'),
      image: '/assets/skelet.jpg'
    },
    {
      id: 6,
      title: t('expandingSlider.slides.6.title'),
      subtitle: t('expandingSlider.slides.6.subtitle'),
      image: '/assets/elastik.jpg'
    }
  ]

  return (
    <div
      className="bg-cover bg-center"
      style={{ backgroundImage: `url('/assets/Services BG.png')` }}
    >
      <div className="container mx-auto px-4">

        {/* Section Heading */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-complementary mb-12 md:mb-6 max-w-3xl mx-auto">
            {t('expandingSlider.sectionTitle')}
          </h1>
          <h2 className="text-3xl md:text-4xl lg:text-4xl font-medium text-complementary mb-12 md:mb-16 max-w-3xl mx-auto">
            {t('expandingSlider.sectionSubtitle')}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('expandingSlider.sectionDescription')}
          </p>
        </div>

        {/* Slider Items */}
        <div className="flex flex-col md:flex-row md:flex-wrap md:justify-center gap-4 md:gap-2">
          {slides.map((slide) => (
            <div
              key={slide.id}
              onClick={() => setActiveSlide(slide.id)}
              className={`relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-500 ease-in-out shadow-lg 
                ${activeSlide === slide.id 
                  ? 'h-80 md:w-[32rem] md:h-[28rem]' 
                  : 'h-20 md:w-24 md:h-[28rem]'
                }
                w-full
              `}
            >
              {/* Small Logo at the top */}
              <div
                className={`absolute top-4 left-1/2 -translate-x-1/2 z-10 transition-all duration-500 
                ${activeSlide === slide.id ? 'opacity-0' : 'opacity-100'}`}
              >
                <div className="bg-white rounded-full p-2 shadow-lg">
                  <Image
                    src="/assets/logo.png"
                    alt="Logo"
                    width={32}
                    height={32}
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Main Image */}
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                className="object-cover"
                priority={slide.id === 1}
              />

              {/* Text Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent transition-opacity duration-300
                ${activeSlide === slide.id ? 'opacity-100' : 'opacity-70 md:opacity-100'}`}
              >
                <div className={`absolute bottom-0 left-0 right-0 p-6 text-white transform transition-all duration-300
                  ${activeSlide === slide.id 
                    ? 'translate-y-0 opacity-100' 
                    : 'md:translate-y-4 md:opacity-0 md:rotate-[-90deg] md:origin-bottom-left'
                  }`}
                >
                  <h3 className={`font-bold mb-2 transition-all duration-300
                    ${activeSlide === slide.id ? 'text-2xl' : 'text-lg md:text-base'}`}
                  >
                    {slide.title}
                  </h3>
                  {activeSlide === slide.id && (
                    <p className="text-gray-200 transition-all duration-300 delay-100 hidden md:block">
                      {slide.subtitle}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}
