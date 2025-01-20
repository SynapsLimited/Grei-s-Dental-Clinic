// src/components/ServicesHero.tsx
'use client'

import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import Link from 'next/link'
import Image from 'next/image'

export default function ServicesHero() {
  return (
    <section 
      className="w-full min-h-screen bg-gradient-to-br from-[#E6F7F5] to-white overflow-hidden relative pt-[90px]"
      style={{
        backgroundImage: "url('/assets/Services BG.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="container px-4 md:px-6 py-8 md:py-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4 sm:space-y-6 pt-8 md:pt-0"
          >
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-medium text-complementary mb-12 md:mb-16 max-w-3xl "
            >
              Professional Dental Services
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-base sm:text-lg md:text-xl text-gray-600 max-w-[600px]"
            >
              Experience exceptional dental care with our comprehensive range of services. 
              Our expert team is dedicated to providing you with the highest quality treatments.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Link href="/reserve" className="btn btn-primary">
                Reserve now
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Content - SVG Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="relative h-[300px] sm:h-[400px] md:h-[500px] w-full mt-8 sm:mt-0 pt-8 md:pt-0"
          >
            {/* Wrapped Image in a div with relative positioning to ensure correct behavior with `fill` */}
            <motion.div
              animate={{ 
                y: [0, -10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="w-full h-full relative" // Added 'relative' here to ensure parent has correct position
            >
              <Image
                src="/assets/Services Hero.svg"
                alt="Dental Services Illustration"
                fill
                priority // Added priority if this image is above the fold
                className="object-contain"
              />
            </motion.div>

            {/* Decorative Elements */}
            <div className="absolute -z-10 top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
              <div className="w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64 bg-[#E6F7F5] rounded-full blur-3xl opacity-60" />
            </div>
            <div className="absolute -z-10 bottom-0 left-0 transform -translate-x-1/2">
              <div className="w-24 sm:w-32 md:w-48 h-24 sm:h-32 md:h-48 bg-[#D1F3F0] rounded-full blur-2xl opacity-50" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
