'use client';

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';

const BlogHero = () => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative w-full h-[400px] sm:h-[600px] md:h-[800px] text-complementary flex items-center justify-center overflow-hidden">
      <motion.div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `url('/assets/bloghero.jpg')`,
          maskImage: 'linear-gradient(to bottom, black, transparent)',
          WebkitMaskImage: 'linear-gradient(to bottom, black, transparent)',
        }}
        initial={{ scale: 1 }}
        animate={{ scale: isVisible ? 1.05 : 1 }}
        transition={{ duration: 10, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-teal-500/30 to-transparent" />
      <div className="relative z-10 text-center space-y-4 sm:space-y-6 px-4 sm:px-6 md:px-8">
        <motion.h1 
          className="text-3xl sm:text-4xl md:text-5xl font-medium mb-2 sm:mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {t('blog.hero.welcomeTitle')}
        </motion.h1>
        <motion.p 
          className="mb-4 sm:mb-6 text-base sm:text-lg md:text-xl font-medium max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {t('blog.hero.welcomeSubtitle')}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {/* If you have any buttons or links, they can be added here with translations */}
        </motion.div>
      </div>
    </div>
  );
};

export default BlogHero;
