// src/components/DentalServicesSection.tsx
'use client'

import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Link from 'next/link'
import { useTranslation } from 'react-i18next'

// Sample SVG Icons (Replace these with your actual SVG paths)
const ProstheticIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2a4 4 0 0 0-4 4v2H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2h-2V6a4 4 0 0 0-4-4z"/>
    <path d="M10 10h4"/>
    <path d="M10 14h4"/>
  </svg>
)

const EndodonticIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2v5"/>
    <path d="M8 7l4 4 4-4"/>
    <path d="M12 11v9"/>
    <path d="M8 17l4 4 4-4"/>
  </svg>
)

const WhiteningIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2v4"/>
    <path d="M12 18v4"/>
    <path d="M4.93 4.93l2.83 2.83"/>
    <path d="M16.24 16.24l2.83 2.83"/>
    <path d="M2 12h4"/>
    <path d="M18 12h4"/>
    <path d="M4.93 19.07l2.83-2.83"/>
    <path d="M16.24 7.76l2.83-2.83"/>
  </svg>
)

const ImplantIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2v20"/>
    <path d="M8 10h8"/>
    <path d="M6 14h12"/>
    <path d="M9 22h6"/>
  </svg>
)

const ProphylaxisIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <path d="M8 14s1.5 2 4 2 4-2 4-2"/>
    <line x1="9" y1="9" x2="9.01" y2="9"/>
    <line x1="15" y1="9" x2="15.01" y2="9"/>
  </svg>
)

const HypersensitivityIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2v2"/>
    <path d="M12 20v2"/>
    <path d="M4.93 4.93l1.41 1.41"/>
    <path d="M17.66 17.66l1.41 1.41"/>
    <path d="M2 12h2"/>
    <path d="M20 12h2"/>
    <path d="M6.34 17.66l-1.41 1.41"/>
    <path d="M19.07 4.93l-1.41 1.41"/>
  </svg>
)

const TherapyIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2a5 5 0 0 0-5 5v3H3v11a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V10h-4V7a5 5 0 0 0-5-5z"/>
    <path d="M8 10v10"/>
    <path d="M16 10v10"/>
    <path d="M12 10v10"/>
  </svg>
)

const VeneerIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 8c0 3.5 2 6.5 5 8 3 1.5 6 2 9 2s6-.5 9-2c3-1.5 5-4.5 5-8"/>
    <path d="M3 17c0 3.5 2 6.5 5 8 3 1.5 6 2 9 2s6-.5 9-2c3-1.5 5-4.5 5-8"/>
  </svg>
)

const OrthodonticIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 8h16"/>
    <path d="M4 16h16"/>
    <path d="M8 4v16"/>
    <path d="M16 4v16"/>
    <circle cx="6" cy="8" r="1"/>
    <circle cx="6" cy="16" r="1"/>
    <circle cx="18" cy="8" r="1"/>
    <circle cx="18" cy="16" r="1"/>
  </svg>
)

const FluoridationIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2v20"/>
    <path d="M2 12h20"/>
    <path d="M12 2a5 5 0 0 1 5 5"/>
    <path d="M12 22a5 5 0 0 0 5-5"/>
  </svg>
)

const services = [
  { icon: ProstheticIcon, nameKey: 'service_prosthetics' },
  { icon: EndodonticIcon, nameKey: 'service_endodontics' },
  { icon: WhiteningIcon, nameKey: 'service_professional_whitening' },
  { icon: ImplantIcon, nameKey: 'service_implantology' },
  { icon: ProphylaxisIcon, nameKey: 'service_prophylaxis' },
  { icon: HypersensitivityIcon, nameKey: 'service_hypersensitivity_treatment' },
  { icon: TherapyIcon, nameKey: 'service_therapy' },
  { icon: VeneerIcon, nameKey: 'service_composite_veneers' },
  { icon: OrthodonticIcon, nameKey: 'service_orthodontics' },
  { icon: FluoridationIcon, nameKey: 'service_fluoridation' },
]

const ServiceCard = ({ icon: Icon, nameKey }: { icon: React.ElementType; nameKey: string }) => {
  const { t } = useTranslation()

  return (
    <Link href="/services" className="block w-full h-full">
      <motion.div 
        className="bg-white-transparent-card backdrop-blur-sm p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center h-48 justify-between"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Icon className="w-12 h-12 mb-2" />
        <h3 className="text-lg font-semibold text-complementary">{t(nameKey)}</h3>
        <div className="mt-2"></div> {/* Spacer */}
      </motion.div>
    </Link>
  )
}

export default function DentalServicesSection() {
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
        staggerChildren: 0.1,
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
    <section ref={ref} className="py-16 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-center text-4xl md:text-5xl lg:text-6xl font-medium text-complementary mb-12 md:mb-16 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          {t('our_dental_services')}
        </motion.h2>
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {services.map((service /* , index */) => (
            <motion.div
              key={service.nameKey}
              variants={itemVariants}
            >
              <ServiceCard icon={service.icon} nameKey={service.nameKey} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
