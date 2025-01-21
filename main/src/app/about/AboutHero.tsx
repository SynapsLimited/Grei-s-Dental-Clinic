'use client'

import { useState, useEffect } from 'react'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid'
import { useTranslation } from 'react-i18next'

const HeroSlider = () => {
  const { t } = useTranslation()

  const cards = [
    {
      titleKey: 'hero_slider_about_us',
      contentKey: 'hero_slider_about_us_content',
      bgImage: '/assets/about.jpg',
    },
    {
      titleKey: 'hero_slider_mission',
      contentKey: 'hero_slider_mission_content',
      bgImage: '/assets/mission.jpg',
    },
    {
      titleKey: 'hero_slider_vision',
      contentKey: 'hero_slider_vision_content',
      bgImage: '/assets/vision.jpg',
    },
    {
      titleKey: 'hero_slider_values',
      contentKey: 'hero_slider_values_content',
      bgImage: '/assets/values.jpg',
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length)
    }, 7000)

    return () => clearInterval(timer)
  }, [cards.length])

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length)
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length)
  }

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`absolute h-full w-full transform transition-all duration-500 ease-in-out ${
              index === currentIndex
                ? 'opacity-100'
                : 'opacity-0'
            }`}
            style={{
              transform: `translateX(${(index - currentIndex) * 100}%)`,
            }}
          >
            <div className="relative h-full w-full">
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ 
                  backgroundImage: `url(${card.bgImage})`,
                  maskImage: 'linear-gradient(to bottom, black, transparent)',
                  WebkitMaskImage: 'linear-gradient(to bottom, black, transparent)',
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-teal-500/30  to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="max-w-md text-center text-white">
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-white mb-12 md:mb-16 max-w-3xl">{t(card.titleKey)}</h2>
                  <p className="text-xl">{t(card.contentKey)}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 transform rounded-full bg-white/20 p-2 backdrop-blur-sm transition-all hover:bg-white/30"
        aria-label={t('previous_slide')}
      >
        <ChevronLeftIcon className="h-6 w-6 text-white" />
      </button>

      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 transform rounded-full bg-white/20 p-2 backdrop-blur-sm transition-all hover:bg-white/30"
        aria-label={t('next_slide')}
      >
        <ChevronRightIcon className="h-6 w-6 text-white" />
      </button>

      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 transform space-x-2">
        {cards.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-3 w-3 rounded-full transition-all ${
              index === currentIndex ? 'bg-white' : 'bg-white/50'
            }`}
            aria-label={t('go_to_slide', { number: index + 1 })}
          />
        ))}
      </div>

      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 transform">
        <div className="flex space-x-4">
          {cards.map((card, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`group relative h-16 w-24 rounded-lg overflow-hidden transition-all focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 ${
                index === currentIndex ? 'scale-110 opacity-100' : 'scale-100 opacity-50 hover:opacity-75'
              }`}
              aria-label={`Anteprima di ${t(card.titleKey)}`}
            >
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ 
                  backgroundImage: `url(${card.bgImage})`,
                  maskImage: 'linear-gradient(to bottom, black, transparent)',
                  WebkitMaskImage: 'linear-gradient(to bottom, black, transparent)',
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-teal-500/30 to-transparent" />
              <span className="sr-only">{t(card.titleKey)}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default HeroSlider
