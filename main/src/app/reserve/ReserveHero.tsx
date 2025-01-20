'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useState } from 'react'
import Link from 'next/link'

export default function Hero() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <section
      className="relative w-full min-h-screen overflow-hidden pt-20 md:pt-0" // Changed to min-h-screen and added padding
      style={{
        backgroundImage: `url('/assets/Services BG.png')`, // Updated path to match '/assets/Contact BG.png'
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="container mx-auto px-4 py-12 md:py-24 lg:py-32">
        <div className="flex flex-col md:flex-row-reverse items-center justify-between">
          {/* Image Vector on the Right */}
          <motion.div 
            className="w-full md:w-1/2 mb-8 md:mb-0"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src="/assets/Reserve Hero.svg"
              alt="Hero Vector"
              width={450}
              height={450}
              className="w-full h-auto"
            />
          </motion.div>

          {/* Text Content on the Left */}
          <motion.div 
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-complementary mb-12 md:mb-16 max-w-3xl">
              Reserve
            </h1>
            <p className="text-2xl md:text-3xl lg:text-2xl font-medium text-complementary mb-12 md:mb-16 max-w-3xl">
              Discover the power of our innovative solutions that will transform your business and boost your productivity.
            </p>
            <Link 
              href="tel:+355691234567" // Removed spaces for correct formatting
              className="btn btn-primary"
              onMouseEnter={() => setIsHovered(true)} // Added event handlers
              onMouseLeave={() => setIsHovered(false)}
            >
              Call Us
            </Link>
            {isHovered && (
              <motion.p
                className="mt-2 text-sm text-gray-500"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
              >
                Click to begin your journey!
              </motion.p>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
