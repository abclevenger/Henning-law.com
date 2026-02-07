"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Language, languages } from '@/constants/languages';

export type { Language };
import { translations } from '@/data/translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguageState] = useState<Language>('en');

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const savedLanguage = (localStorage.getItem('language') ?? document.cookie.replace(/(?:(?:^|.*;\s*)language\s*=\s*([^;]*).*$)|^.*$/, '$1')) as Language | null;
    if (savedLanguage && languages.some((lang) => lang.code === savedLanguage)) {
      setLanguageState(savedLanguage);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('language', lang);
      document.cookie = `language=${lang};path=/;max-age=31536000;SameSite=Lax`;
    }
  };

  const t = (key: string): string => {
    return translations[key]?.[language] ?? translations[key]?.en ?? key;
  };

  useEffect(() => {
    if (typeof document === 'undefined') return;
    const root = document.documentElement;
    if (root.lang !== language) root.lang = language;
    if (root.dir !== 'ltr') root.dir = 'ltr';
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
