"use client";

import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import { Moon, Sun, Menu, X, Globe, MessageCircle, Calendar, ChevronDown } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/components/language-provider";

const LANGUAGES = ["EN", "AL", "IT"] as const;

export function Navbar() {
  const { theme, setTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();
  const [mounted, setMounted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  
  const langMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close lang menu on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (langMenuRef.current && !langMenuRef.current.contains(event.target as Node)) {
        setIsLangMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navLinks = [
    { name: t("navbar.about"), href: "/about" },
    { name: t("navbar.services"), href: "/services" },
    { name: t("navbar.testimonials"), href: "/testimonials" },
    { name: t("navbar.blog"), href: "/blog" },
    { name: t("navbar.contact"), href: "/contact" },
  ];

  const WHATSAPP_URL = "https://wa.me/355697563877";

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? "bg-white/90 dark:bg-brand-dark/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 py-3" : "bg-transparent py-5"
    }`}>
      <div className="container mx-auto px-6 md:px-3 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group shrink-0">
          <Image 
            src="/logo.png" 
            alt="Grei's Dental Clinic" 
            width={45} 
            height={45} 
            priority
            className="rounded-full shadow-sm group-hover:scale-105 transition-transform"
          />
          <div className="flex flex-col">
            <span className="font-display font-bold text-lg leading-none">Grei's</span>
            <span className="text-[10px] uppercase tracking-widest text-brand-blue font-semibold">Dental Clinic</span>
          </div>
        </Link>

        {/* Desktop Links */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="text-sm font-medium hover:text-brand-blue transition-colors">
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-4 shrink-0">
          
          <div className="flex items-center gap-3 pr-2 border-r border-gray-200 dark:border-gray-700">
            <Link 
              href="/reserve"
              className="flex items-center gap-2 bg-brand-blue hover:bg-blue-600 text-white px-5 py-2.5 rounded-full font-bold text-sm transition-all shadow-md hover:shadow-lg active:scale-95"
            >
              <Calendar className="w-4 h-4" />
              {t("navbar.reserveNow")}
            </Link>
            <a 
              href={WHATSAPP_URL} 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-2 bg-[#25D366] hover:bg-[#20BD5A] text-white px-5 py-2.5 rounded-full font-bold text-sm transition-all hover:shadow-lg hover:shadow-green-500/20 active:scale-95"
            >
              <MessageCircle className="w-4 h-4" />
              {t("navbar.whatsapp")}
            </a>
          </div>

          <div className="relative flex items-center gap-1 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-full p-1 shadow-sm hover:shadow-md transition-shadow">
            <span className="absolute -top-1 -right-1 flex h-3 w-3 z-10">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-blue opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-blue border-2 border-white dark:border-gray-900"></span>
            </span>

            {/* Language Dropdown Container */}
            <div className="relative" ref={langMenuRef}>
              <button 
                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)} 
                className="flex items-center gap-1.5 text-sm font-medium px-3 justify-center hover:text-brand-blue transition-colors rounded-full py-1.5"
                aria-label="Select Language"
              >
                <Globe className="w-4 h-4" /> 
                <span>{language}</span>
                <ChevronDown className={`w-3 h-3 transition-transform ${isLangMenuOpen ? "rotate-180" : ""}`} />
              </button>

              {/* Dropdown Menu */}
              <AnimatePresence>
                {isLangMenuOpen && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full mt-2 right-0 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl shadow-xl overflow-hidden min-w-[100px] z-50"
                  >
                    <div className="flex flex-col py-1">
                      {LANGUAGES.map((lang) => (
                        <button
                          key={lang}
                          onClick={() => {
                            setLanguage(lang as any);
                            setIsLangMenuOpen(false);
                          }}
                          className={`px-4 py-2 text-sm text-left font-medium transition-colors hover:bg-gray-100 dark:hover:bg-gray-800 ${
                            language === lang ? "text-brand-blue bg-brand-blue/5" : "text-gray-700 dark:text-gray-300"
                          }`}
                        >
                          {lang === "EN" ? "English" : lang === "AL" ? "Shqip" : "Italiano"}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
            {mounted && (
              <button 
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")} 
                className="p-1.5 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-300 hover:text-brand-blue dark:hover:text-brand-blue transition-colors"
                aria-label="Toggle Dark Mode"
              >
                {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>
            )}
          </div>

        </div>

        <button className="lg:hidden p-2 text-gray-600 dark:text-gray-300" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }} 
            animate={{ opacity: 1, y: 0 }} 
            exit={{ opacity: 0, y: -10 }} 
            className="absolute top-full left-0 right-0 bg-white dark:bg-brand-dark border-b border-gray-200 dark:border-gray-800 p-6 flex flex-col gap-6 lg:hidden shadow-2xl"
          >
            <nav className="flex flex-col gap-4 text-center">
              {navLinks.map((link) => (
                <Link key={link.name} href={link.href} onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium hover:text-brand-blue transition-colors">
                  {link.name}
                </Link>
              ))}
            </nav>
            
            <div className="flex flex-col gap-4 pt-6 border-t border-gray-100 dark:border-gray-800">
              
              <div className="flex flex-col gap-3">
                <Link 
                  href="/reserve"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 bg-brand-blue hover:bg-blue-600 text-white px-6 py-3.5 rounded-full font-bold text-center transition-colors"
                >
                  <Calendar className="w-5 h-5" /> {t("navbar.reserveWebsiteMobile")}
                </Link>
                <a 
                  href={WHATSAPP_URL} 
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setMobileMenuOpen(false)} 
                  className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white px-6 py-3.5 rounded-full font-bold text-center transition-colors"
                >
                  <MessageCircle className="w-5 h-5" /> {t("navbar.reserveWhatsappMobile")}
                </a>
              </div>

              <div className="flex items-center justify-center gap-4 pt-4">
                {/* Mobile Language Selector */}
                <div className="flex bg-gray-100 dark:bg-gray-800 rounded-full p-1">
                  {LANGUAGES.map(lang => (
                    <button 
                      key={lang}
                      onClick={() => setLanguage(lang as any)} 
                      className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                        language === lang ? "bg-white dark:bg-gray-700 shadow-sm text-brand-blue" : "text-gray-600 dark:text-gray-400"
                      }`}
                    >
                      {lang}
                    </button>
                  ))}
                </div>

                {mounted && (
                  <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className="p-2.5 rounded-full bg-gray-100 dark:bg-gray-800">
                    {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                  </button>
                )}
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}