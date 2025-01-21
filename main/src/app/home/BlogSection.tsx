'use client'

import React, { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { useTranslation } from 'react-i18next'

// Example import: Adjust the path to match your project structure
import { blogPosts } from "@/app/blog/data/blogposts"

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
        {/* Using i18n for the heading */}
        {t('read_our_articles')}
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {/* 
          Only show the first 3 blog posts. 
          Remove .slice(0, 3) if you want to display more (or all).
        */}
        {blogPosts.slice(0, 3).map((post, index) => (
          <Link
            href={`/blog/${post.slug}`}
            key={post.id}
            className="group"
          >
            <motion.article
              className="flex flex-col h-full"
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={fadeInUpVariants}
              transition={{
                duration: 0.6,
                delay: (index + 1) * staggerDelay
              }}
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg mb-4">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h2 className="text-xl md:text-2xl font-medium complementary mb-3 line-clamp-2 group-hover:text-secondary transition-colors">
                {post.title}
              </h2>
              <time className="text-gray-500 text-sm mt-auto">
                {new Date(post.date).toLocaleDateString("en-US", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
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
        transition={{
          duration: 0.6,
          delay: (blogPosts.length + 1) * staggerDelay
        }}
      >
        <Link href="/blog" className="btn btn-primary">
          {/* Using i18n for the button text */}
          {t('see_more_blog')}
        </Link>
      </motion.div>
    </section>
  )
}
