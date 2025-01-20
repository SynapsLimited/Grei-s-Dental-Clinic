// src/components/Navbar.tsx
'use client';

import React, { useState, useEffect } from "react";
import Link from "next/link";
import styles from './../css/navbar.module.css';
import Image from "next/image";
import { ChevronDown, Menu, X } from "lucide-react";
import { useTranslation } from "react-i18next";

const languages = [
  { code: "en", name: "English", flag: "🇬🇧" },
  { code: "al", name: "Albanian", flag: "🇦🇱" },
  { code: "it", name: "Italian", flag: "🇮🇹" },
];

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [currentLanguage, setCurrentLanguage] = useState(languages[0]);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const handleMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setIsLanguageDropdownOpen(false);
  };

  const handleMenuClose = () => {
    setIsMobileMenuOpen(false);
    setIsLanguageDropdownOpen(false);
  };

  const handleScroll = () => {
    if (window.innerWidth <= 800) {
      // Do not set isScrolled in mobile view
      return;
    }
    const scrollTop = window.scrollY;
    setIsScrolled(scrollTop > 50);
  };

  const handleLanguageChange = (language: (typeof languages)[0]) => {
    setCurrentLanguage(language);
    i18n.changeLanguage(language.code);
    setIsLanguageDropdownOpen(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close mobile menu on window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 800) {
        setIsMobileMenuOpen(false);
        setIsLanguageDropdownOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={`${styles.pageWrapper} ${isScrolled ? styles.scrolled : ""}`}>
      <div className={`${styles.navWrapper} ${isScrolled ? styles.scrolled : ""}`}>
        <nav className={styles.navbar}>
          <div className={`${styles.menuToggle} ${isMobileMenuOpen ? styles.isActive : ""}`} onClick={handleMenuToggle}>
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
          </div>

          <Link href="/" onClick={handleMenuClose}>
            <Image
              src="/assets/logo.png"
              width={200}
              height={100}
              alt="Grei's Dental Clinic Logo"
              priority
              className={isScrolled ? styles.scrolled : ""}
            />
          </Link>

          <ul className={`${styles.nav} ${isMobileMenuOpen ? styles.mobileNav : ""}`}>
            <li className={styles.navItem}>
              <Link href="/" onClick={handleMenuClose}>
                {t('home')}
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/about" onClick={handleMenuClose}>
                {t('about')}
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/services" onClick={handleMenuClose}>
                {t('services')}
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/blog" onClick={handleMenuClose}>
                {t('blog')}
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/reserve" onClick={handleMenuClose}>
                {t('reserve')}
              </Link>
            </li>
            <li className={styles.languageDropdown}>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsLanguageDropdownOpen(!isLanguageDropdownOpen);
                }}
                className={styles.languageButton}
              >
                {currentLanguage.flag} {currentLanguage.code.toUpperCase()} <ChevronDown className={`${styles.dropdownIcon} ${isLanguageDropdownOpen ? styles.open : ""}`} />
              </button>
              <ul className={`${styles.languageMenu} ${isLanguageDropdownOpen ? styles.open : ""}`}>
                {languages.map((lang) => (
                  <li key={lang.code}>
                    <button
                      onClick={() => handleLanguageChange(lang)}
                      className={`${styles.languageOption} ${lang.code === currentLanguage.code ? styles.active : ""}`}
                    >
                      {lang.flag} {lang.name}
                    </button>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
