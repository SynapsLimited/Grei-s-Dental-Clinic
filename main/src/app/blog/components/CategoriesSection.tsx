"use client"

import type React from "react"
import { motion } from "framer-motion"

interface CategoriesSectionProps {
  categories: string[]
  selectedCategory: string
  setSelectedCategory: (category: string) => void
}

const CategoriesSection: React.FC<CategoriesSectionProps> = ({ categories, selectedCategory, setSelectedCategory }) => {
  return (
    <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-2 sm:gap-3 md:gap-4 mb-8 sm:mb-10 md:mb-12 px-4 sm:px-6 md:px-8">
      {categories.map((category, index) => (
        <motion.button
          key={category}
          onClick={() => setSelectedCategory(category)}
          className={`w-full sm:w-auto mb-2 sm:mb-0 px-3 py-2 sm:px-4 rounded-full text-sm sm:text-base text-white transition-colors duration-300 ${
            selectedCategory === category ? "bg-secondary" : "bg-gray-300 hover:bg-primary"
          }`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {category}
        </motion.button>
      ))}
    </div>
  )
}

export default CategoriesSection

