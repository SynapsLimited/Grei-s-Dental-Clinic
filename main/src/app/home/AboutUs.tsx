// src/components/AboutUs.tsx
'use client'

import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Link from "next/link"
import Image from "next/image"
import { useTranslation } from 'react-i18next'

export default function AboutUs() {
  const { t } = useTranslation()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section ref={ref} className="container mx-auto px-4 py-16 md:py-24 overflow-hidden">
      <motion.div 
        className="grid gap-12 md:grid-cols-2 items-center"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Left side - PNG Illustration */}
        <motion.div 
          className="relative w-full aspect-square"
          variants={itemVariants}
        >
          <Image
            src="/assets/About Us.png"
            alt={t('about_us_title')}
            fill
            style={{ objectFit: 'cover' }}
            className="rounded-lg"
            priority
          />
        </motion.div>

        {/* Right side - Content */}
        <motion.div 
          className="space-y-6"
          variants={itemVariants}
        >
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-medium text-complementary mb-12 md:mb-16 max-w-3xl"
            variants={itemVariants}
          >
            {t('about_us_title')}
          </motion.h1>
          <motion.p 
            className="text-lg text-complementary font-medium leading-relaxed"
            variants={itemVariants}
          >
            {t('about_us_description')}
          </motion.p>
          <motion.div variants={itemVariants}>
            <Link href="/about" className="btn btn-primary">
              {t('see_more')}
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}
