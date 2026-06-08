/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { createContext, useContext, useState, useEffect } from 'react';
import { TRANSLATIONS, TranslationDictionary } from '../translations.ts';

interface LanguageContextType {
  language: string;
  setLanguage: (lang: string) => void;
  t: TranslationDictionary;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<string>('en');

  // Load selected language from localStorage for excellent user persistence
  useEffect(() => {
    try {
      const saved = localStorage.getItem('tradixo_language');
      if (saved && TRANSLATIONS[saved]) {
        setLanguage(saved);
      }
    } catch (e) {
      console.warn('Failed to load language from localStorage', e);
    }
  }, []);

  const handleSetLanguage = (lang: string) => {
    if (TRANSLATIONS[lang]) {
      setLanguage(lang);
      try {
        localStorage.setItem('tradixo_language', lang);
      } catch (e) {
        console.warn('Failed to save language to localStorage', e);
      }
    }
  };

  // Safe fallback if target language keys aren't fully resolved
  const t = TRANSLATIONS[language] || TRANSLATIONS.en;

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      <div dir={language === 'ar' ? 'rtl' : 'ltr'} className={language === 'ar' ? 'font-sans' : ''}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
