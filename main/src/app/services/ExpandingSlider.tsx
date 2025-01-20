'use client'

import { useState } from 'react'
import Image from 'next/image'

interface Slide {
  id: number
  title: string
  image: string
  subtitle: string
}

const slides: Slide[] = [
  {
    id: 1,
    title: "Metal-porcelain crown",
    image: "/assets/metal.jpg",
    subtitle: "A dental crown with a metal base coated with porcelain to match the natural tooth color."
  },
  {
    id: 2,
    title: "Zirconia crown",
    image: "/assets/zirkon.jpg",
    subtitle: "A crown made from zirconium dioxide, known for its strength and natural appearance."
  },
  {
    id: 3,
    title: "Full zirconia crown",
    image: "/assets/fzirkon.jpg",
    subtitle: "A crown entirely made of zirconia, offering enhanced durability and aesthetics."
  },
  {
    id: 4,
    title: "Emax crown",
    image: "/assets/emax.jpg",
    subtitle: "A crown crafted from lithium disilicate ceramic, valued for its translucency and strength."
  },
  {
    id: 5,
    title: "Removable partial dentures (skeletal/elastic)",
    image: "/assets/skelet.jpg",
    subtitle: "Dentures designed to replace multiple missing teeth, available in skeletal (metal framework) or flexible (elastic) materials."
  },
  {
    id: 6,
    title: "Total elastic dentures",
    image: "/assets/elastik.jpg",
    subtitle: "Complete dentures made from flexible materials, providing comfort and adaptability"
  }
]

export default function ExpandingSlider() {
  const [activeSlide, setActiveSlide] = useState(1)

  return (
    <div
      className=" bg-cover bg-center "
      style={{ backgroundImage: `url('/assets/Services BG.png')` }}
    >
      <div className=" justify-center container mx-auto px-4">
        <div className="text-center mb-16">
        <div className="text-center mb-16">
  <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-complementary mb-12 md:mb-6 max-w-3xl mx-auto">
    Our Services
  </h1>
  <h2 className="text-3xl md:text-4xl lg:text-4xl font-medium text-complementary mb-12 md:mb-16 max-w-3xl mx-auto">
    Prosthetics
  </h2>
  <p className="text-lg text-gray-600 max-w-2xl mx-auto">
    Discover our comprehensive range of solutions designed to help your business grow and succeed in the digital age.
  </p>
</div>
        </div>

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
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                className="object-cover"
                priority={slide.id === 1}
              />
              <div className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent transition-opacity duration-300
                ${activeSlide === slide.id ? 'opacity-100' : 'opacity-70 md:opacity-100'}`}>
                <div className={`absolute bottom-0 left-0 right-0 p-6 text-white transform transition-all duration-300
                  ${activeSlide === slide.id 
                    ? 'translate-y-0 opacity-100' 
                    : 'md:translate-y-4 md:opacity-0 md:rotate-[-90deg] md:origin-bottom-left'
                  }`}>
                  <h3 className={`font-bold mb-2 transition-all duration-300
                    ${activeSlide === slide.id ? 'text-2xl' : 'text-lg md:text-base'}`}>
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
