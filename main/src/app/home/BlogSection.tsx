'use client'

import React, { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
// Removed the unused import of Button:
// import { Button } from "@/components/ui/button"
import { motion, useInView } from "framer-motion"
import { useTranslation } from 'react-i18next'

interface BlogPost {
  title: string
  date: string
  image: string
  alt: string
}

const blogPosts: BlogPost[] = [
  {
    title: "Comprendere i Canali Radicolari: Cosa Aspettarsi",
    date: "4 Settembre 2024",
    image: "/assets/blog1.jpg",
    alt: "Scopri il processo del trattamento del canale radicolare e come può salvare i tuoi denti naturali."
  },
  {
    title: "Le 5 Migliori Procedure di Odontoiatria Estetica per Migliorare il Tuo Sorriso",
    date: "5 Settembre 2024",
    image: "/assets/blog2.jpg",
    alt: "Esplora le opzioni di odontoiatria estetica più popolari per ottenere un sorriso più brillante e sicuro."
  },
  {
    title: "L'Importanza dei Controlli Dentali Regolari",
    date: "16 Settembre 2024",
    image: "/assets/blog3.jpg",
    alt: "Scopri perché le visite dentistiche di routine sono fondamentali per mantenere una salute orale ottimale."
  }
]

const fadeInUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

const staggerDelay = 0.2

export default function BlogSection() {
  const { t } = useTranslation()
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section ref={sectionRef} className="py-16 px-12 md:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.h1
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={fadeInUpVariants}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl lg:text-6xl font-medium text-complementary mb-12 md:mb-16 max-w-3xl"
      >
        {t('read_our_articles')}
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {blogPosts.map((post, index) => (
          <Link href="/blog" key={index} className="group">
            <motion.article
              className="flex flex-col h-full"
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={fadeInUpVariants}
              transition={{ duration: 0.6, delay: (index + 1) * staggerDelay }}
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg mb-4">
                <Image
                  src={post.image}
                  alt={post.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h2 className="text-xl md:text-2xl font-medium complementary mb-3 line-clamp-2 group-hover:text-secondary transition-colors">
                {post.title}
              </h2>
              <time className="text-gray-500 text-sm mt-auto">
                {post.date}
              </time>
            </motion.article>
          </Link>
        ))}
      </div>

      <motion.div
        className="text-center"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={fadeInUpVariants}
        transition={{ duration: 0.6, delay: (blogPosts.length + 1) * staggerDelay }}
      >
        <Link href="/blog" className="btn btn-primary">
          {t('see_more_blog')}
        </Link>
      </motion.div>
    </section>
  )
}
