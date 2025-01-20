'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { Star } from 'lucide-react'
import { motion, useInView } from "framer-motion"
import Image from "next/image"

// Add this custom hook at the top of the file
function useCountAnimation(end: number, duration: number = 2) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref)
  
  useEffect(() => {
    if (!isInView) return

    let startTime: number | null = null
    const startValue = 0
    
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1)
      
      setCount(Math.floor(startValue + (end - startValue) * progress))
      
      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }
    
    requestAnimationFrame(animate)
  }, [end, duration, isInView])
  
  return { count, ref }
}

export default function AboutSection() {
  const [isHovered, setIsHovered] = useState(false);
  
  // Only the stats section is modified, everything else remains the same
  return (
    <section className="w-full py-16 md:py-24 font-sans">
      <div className="max-w-[1400px] mx-auto">
        {/* Previous code remains unchanged */}
        <div className="grid lg:grid-cols-2 gap-12 px-[20px] md:px-[150px] items-start">
          {/* Left Column */} 
          <div className="space-y-8 text-center lg:text-left">
            {/* Rating */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex items-center gap-2 justify-center lg:justify-start"
            >
              <Star className="w-5 h-5 text-primary fill-primary" />
              <span className="text-primary text-lg">5.0</span>
            </motion.div>

            {/* Heading */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-complementary text-[2.5rem] lg:text-[3rem] font-medium leading-[1.2]"
            >
              Who is Dr. Grei?
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-gray-600 text-lg max-w-md mx-auto lg:mx-0"
            >
              Dr. Grei is a renowned dentist with a personal dental clinic in Albania. She is known for her amazing results and unwavering professionalism, providing top-notch dental care to her patients.
            </motion.p>

            {/* Buttons */}
            <div className="space-y-4">
              <Link 
                href="tel:+355691234567"
                className="btn btn-primary"
                onMouseEnter={() => setIsHovered(true)}
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
            </div>
          </div>

          {/* Right Column */}
          <div className="relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative"
            >
              {/* Background Shape */}
              <div className="absolute left-0 bottom-[47px] w-full h-1/2 bg-gradient-to-br from-primary to-primary rounded-t-[40px] rounded-b-[20px]" />
              
              {/* Main Image */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="relative w-[300px] h-[375px] mx-auto z-10"
              >
                <Image
                  src="/assets/dr.grei.svg"
                  alt="Dr. Grei - Dentist"
                  fill
                  className="object-contain object-center"
                  priority
                />
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Updated Stats section with counting animation */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-16"
        >
          {[
            { end: 100, suffix: '%', label: 'Satisfaction rate' },
            { end: 10, suffix: '+', label: 'Years of experience' },
            { end: 800, suffix: '+', label: 'Patients Treated' },
          ].map((stat, index) => {
            const { count, ref } = useCountAnimation(stat.end)
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
                ref={ref}
              >
                <div className="text-primary text-5xl lg:text-6xl font-bold mb-2">
                  {count}{stat.suffix}
                </div>
                <div className="text-gray-500 text-lg">{stat.label}</div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

