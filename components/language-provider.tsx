"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import en from "@/dictionaries/en.json";
import al from "@/dictionaries/al.json";
import it from "@/dictionaries/it.json";

const dictionaries = {
  EN: en,
  AL: al,
  IT: it,
};

type Language = keyof typeof dictionaries;

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("EN");

  // Optional: Load saved language from localStorage on mount
  useEffect(() => {
    const savedLang = localStorage.getItem("app_lang") as Language;
    if (savedLang && dictionaries[savedLang]) {
      setLanguage(savedLang);
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem("app_lang", lang);
  };

  // Helper function to resolve nested keys like "about.title"
  const t = (path: string): string => {
    const keys = path.split(".");
    let current: any = dictionaries[language] || dictionaries["EN"];
    
    for (const key of keys) {
      if (current[key] === undefined) {
        return path; // Fallback to the key if translation is missing
      }
      current = current[key];
    }
    return current;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}