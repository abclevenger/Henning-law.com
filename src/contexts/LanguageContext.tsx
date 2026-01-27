"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Language = 'en' | 'de' | 'es' | 'fr' | 'zh' | 'ja' | 'ar';

export const languages: { code: Language; name: string; nativeName: string }[] = [
  { code: 'en', name: 'English', nativeName: 'English' },
  { code: 'de', name: 'German', nativeName: 'Deutsch' },
  { code: 'es', name: 'Spanish', nativeName: 'Español' },
  { code: 'fr', name: 'French', nativeName: 'Français' },
  { code: 'zh', name: 'Chinese', nativeName: '中文' },
  { code: 'ja', name: 'Japanese', nativeName: '日本語' },
  { code: 'ar', name: 'Arabic', nativeName: 'العربية' },
];

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguageState] = useState<Language>('en');
  const [translations, setTranslations] = useState<Record<string, Record<Language, string>>>({});

  // Load translations (in a real app, you'd fetch these from files)
  useEffect(() => {
    // This is a placeholder - in production, load from translation files
    setTranslations({
      'nav.home': {
        en: 'Home',
        de: 'Startseite',
        es: 'Inicio',
        fr: 'Accueil',
        zh: '首页',
        ja: 'ホーム',
        ar: 'الرئيسية',
      },
      'nav.attorney': {
        en: 'Attorney Bio',
        de: 'Anwalt Bio',
        es: 'Biografía del Abogado',
        fr: 'Bio Avocat',
        zh: '律师简介',
        ja: '弁護士のプロフィール',
        ar: 'سيرة المحامي',
      },
      'nav.practice': {
        en: 'Practice Areas',
        de: 'Rechtsgebiete',
        es: 'Áreas de Práctica',
        fr: 'Domaines de Pratique',
        zh: '业务领域',
        ja: '業務分野',
        ar: 'مجالات الممارسة',
      },
      'nav.contact': {
        en: 'Contact',
        de: 'Kontakt',
        es: 'Contacto',
        fr: 'Contact',
        zh: '联系方式',
        ja: 'お問い合わせ',
        ar: 'اتصل بنا',
      },
    });
  }, []);

  // Load language from localStorage on mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && languages.some(lang => lang.code === savedLanguage)) {
      setLanguageState(savedLanguage);
    }
  }, []);

  // Save language to localStorage when it changes
  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
    // Update HTML lang attribute
    if (typeof document !== 'undefined') {
      document.documentElement.lang = lang;
    }
  };

  const t = (key: string): string => {
    return translations[key]?.[language] || key;
  };

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