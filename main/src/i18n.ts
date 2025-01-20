// src/i18n.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import translations
import translationEN from './app/locales/en/translation.json';
import translationAL from './app/locales/al/translation.json';
import translationIT from './app/locales/it/translation.json';

// Define resources
const resources = {
  en: { translation: translationEN },
  al: { translation: translationAL },
  it: { translation: translationIT },
};

// Initialize i18n only on client
if (typeof window !== 'undefined') {
  const savedLanguage = localStorage.getItem('language') || 'en';

  i18n
    .use(initReactI18next)
    .init({
      resources,
      lng: savedLanguage,
      fallbackLng: 'en',
      interpolation: {
        escapeValue: false,
      },
      react: {
        useSuspense: false,
      },
    });

  // Save language to localStorage on change
  i18n.on('languageChanged', (lng) => {
    localStorage.setItem('language', lng);
  });
}

export default i18n;
