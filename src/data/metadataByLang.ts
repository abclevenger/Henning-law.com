import type { Metadata } from 'next';

type Lang = 'en' | 'de' | 'es' | 'ru' | 'fr';

const rootMeta: Record<Lang, { title: string; description: string; ogTitle: string; ogDesc: string; twitterTitle: string; twitterDesc: string }> = {
  en: {
    title: 'Henning Law Firm PLLC | Strategic U.S. Immigration Counsel',
    description:
      'Strategic U.S. immigration counsel for global principals and investors. Global mobility and residence strategy, including Investor Visa and EB-5 pathways. 20+ years experience. Former Honorary German Consul. Immigration counsel only—no investment or financial advice.',
    ogTitle: 'Strategic U.S. Immigration Counsel | Henning Law Firm',
    ogDesc: 'Global mobility and residence strategy for UHNW clients. Strategic immigration counsel. Offices in Florida and Minnesota.',
    twitterTitle: 'Strategic U.S. Immigration Counsel | Henning Law Firm',
    twitterDesc: 'Strategic immigration counsel for global mobility and residence. Immigration counsel only.',
  },
  de: {
    title: 'Henning Law Firm PLLC | Strategische Einwanderungsberatung USA',
    description:
      'Strategische Einwanderungsberatung für internationale Mandanten. Globale Mobilität und Aufenthaltsstrategie—u. a. EB-5 und investorenbasierte Wege. Über 20 Jahre Erfahrung. Ehemalige Honorarkonsulin. Nur Rechtsberatung.',
    ogTitle: 'Strategische Einwanderungsberatung USA | Henning Law Firm',
    ogDesc: 'Globale Mobilität und Aufenthaltsstrategie. Strategische Einwanderungsberatung.',
    twitterTitle: 'Strategische Einwanderungsberatung USA | Henning Law Firm',
    twitterDesc: 'Strategische Einwanderungsberatung für globale Mobilität und Aufenthalt.',
  },
  es: {
    title: 'Henning Law Firm PLLC | Asesoría migratoria estratégica en EE.UU.',
    description:
      'Asesoría migratoria estratégica para clientes globales. Movilidad global y estrategia de residencia, incluidas EB-5 y vías basadas en inversión. Más de 20 años de experiencia. Ex cónsul honoraria. Solo asesoría migratoria.',
    ogTitle: 'Asesoría migratoria estratégica en EE.UU. | Henning Law Firm',
    ogDesc: 'Movilidad global y estrategia de residencia. Asesoría migratoria estratégica.',
    twitterTitle: 'Asesoría migratoria estratégica | Henning Law Firm',
    twitterDesc: 'Asesoría migratoria estratégica para movilidad global y residencia.',
  },
  ru: {
    title: 'Henning Law Firm PLLC | Стратегическая иммиграционная практика в США',
    description:
      'Стратегическая иммиграционная практика для международных клиентов. Глобальная мобильность и стратегия проживания, включая инвесторские визы и EB-5. Более 20 лет опыта. Бывший почётный консул Германии. Только иммиграционная практика—без инвестиционных и финансовых консультаций.',
    ogTitle: 'Стратегическая иммиграционная практика в США | Henning Law Firm',
    ogDesc: 'Глобальная мобильность и стратегия проживания. Стратегическая иммиграционная практика. Офисы во Флориде и Миннесоте.',
    twitterTitle: 'Стратегическая иммиграционная практика в США | Henning Law Firm',
    twitterDesc: 'Стратегическая иммиграционная практика для глобальной мобильности и проживания.',
  },
  fr: {
    title: 'Henning Law Firm PLLC | Conseil en immigration américaine stratégique',
    description:
      'Conseil en immigration américaine pour clients internationaux. Mobilité globale et stratégie de résidence, dont visa investisseur et EB-5. Plus de 20 ans d\'expérience. Ancienne consule honoraire d\'Allemagne. Conseil en immigration uniquement—sans conseil en investissement ou financier.',
    ogTitle: 'Conseil en immigration américaine stratégique | Henning Law Firm',
    ogDesc: 'Mobilité globale et stratégie de résidence. Conseil en immigration stratégique. Bureaux en Floride et au Minnesota.',
    twitterTitle: 'Conseil en immigration américaine stratégique | Henning Law Firm',
    twitterDesc: 'Conseil en immigration stratégique pour mobilité globale et résidence.',
  },
};

const contactMeta: Record<Lang, { title: string; description: string }> = {
  en: {
    title: 'Contact Us',
    description:
      'Contact Henning Law Firm for U.S. immigration consultations. Offices in Tampa and Minneapolis. Call (239) 821-6504 or submit our contact form.',
  },
  de: {
    title: 'Kontakt',
    description:
      'Kontaktieren Sie Henning Law Firm für US-Einwanderungsberatung. Büros in Tampa und Minneapolis. Rufen Sie (239) 821-6504 an oder nutzen Sie unser Kontaktformular.',
  },
  es: {
    title: 'Contáctenos',
    description:
      'Contacte a Henning Law Firm para consultas de inmigración en EE.UU. Oficinas en Tampa y Minneapolis. Llame al (239) 821-6504 o use nuestro formulario.',
  },
  ru: {
    title: 'Контакты',
    description:
      'Свяжитесь с Henning Law Firm для консультаций по иммиграции в США. Офисы в Тампе и Миннеаполисе. Звоните (239) 821-6504 или заполните форму на сайте.',
  },
  fr: {
    title: 'Nous contacter',
    description:
      'Contacter Henning Law Firm pour des consultations en immigration américaine. Bureaux à Tampa et Minneapolis. Tél. (239) 821-6504 ou formulaire de contact.',
  },
};

const attorneyBioMeta: Record<Lang, { title: string; description: string }> = {
  en: {
    title: 'Norma Henning, J.D. - Strategic U.S. Immigration Counsel',
    description:
      'Norma Henning, J.D., founding attorney at Henning Law Firm. 20+ years advising in the legal field. Former Honorary Consul of Germany in Florida fostering transatlantic relations. Strategic immigration counsel for global mobility and residence.',
  },
  de: {
    title: 'Norma Henning, J.D. - Strategische Einwanderungsberatung',
    description:
      'Norma Henning, J.D., Gründerin von Henning Law Firm. Über 20 Jahre Erfahrung in der Rechtsberatung. Ehemalige Honorarkonsulin in Florida. Einwanderungsberatung für internationale Mandanten.',
  },
  es: {
    title: 'Norma Henning, J.D. - Asesoría migratoria estratégica',
    description:
      'Norma Henning, J.D., abogada fundadora de Henning Law Firm. Más de 20 años asesorando en el campo legal. Ex cónsul honoraria de Alemania en Florida. Asesoría migratoria estratégica para movilidad global y residencia.',
  },
  ru: {
    title: 'Норма Хеннинг, J.D. — Стратегическая иммиграционная практика в США',
    description:
      'Норма Хеннинг, J.D., основатель Henning Law Firm. Более 20 лет юридической практики. Бывший почётный консул Германии во Флориде. Стратегическая иммиграционная практика для глобальной мобильности и проживания.',
  },
  fr: {
    title: 'Norma Henning, J.D. - Conseil en immigration américaine stratégique',
    description:
      'Norma Henning, J.D., avocate fondatrice de Henning Law Firm. Plus de 20 ans de conseil juridique. Ancienne consule honoraire d\'Allemagne en Floride. Conseil en immigration pour mobilité globale et résidence.',
  },
};

export function getContactMetadata(lang: Lang): Pick<Metadata, 'title' | 'description' | 'openGraph'> {
  const m = contactMeta[lang];
  return {
    title: m.title,
    description: m.description,
    openGraph: {
      title: `${m.title} | Henning Law Firm PLLC`,
      description: m.description,
      url: 'https://henning-law.com/contact',
    },
  };
}

export function getAttorneyBioMetadata(lang: Lang): Pick<Metadata, 'title' | 'description' | 'openGraph'> {
  const m = attorneyBioMeta[lang];
  return {
    title: m.title,
    description: m.description,
    openGraph: {
      title: `${m.title} | Henning Law Firm PLLC`,
      description: m.description,
      url: 'https://henning-law.com/attorney-bio',
    },
  };
}

export function parseLang(cookie: string | undefined): Lang {
  if (cookie === 'de' || cookie === 'es' || cookie === 'en' || cookie === 'ru' || cookie === 'fr') return cookie;
  return 'en';
}

export function getRootMetadata(lang: Lang): Pick<Metadata, 'title' | 'description' | 'openGraph' | 'twitter'> {
  const m = rootMeta[lang];
  return {
    title: {
      default: m.title,
      template: '%s | Henning Law Firm PLLC',
    },
    description: m.description,
    openGraph: {
      type: 'website',
      locale: lang === 'de' ? 'de_DE' : lang === 'es' ? 'es_ES' : lang === 'ru' ? 'ru_RU' : lang === 'fr' ? 'fr_FR' : 'en_US',
      alternateLocale: lang === 'de' ? ['en_US', 'es_ES', 'ru_RU', 'fr_FR'] : lang === 'es' ? ['en_US', 'de_DE', 'ru_RU', 'fr_FR'] : lang === 'ru' ? ['en_US', 'de_DE', 'es_ES', 'fr_FR'] : lang === 'fr' ? ['en_US', 'de_DE', 'es_ES', 'ru_RU'] : ['de_DE', 'es_ES', 'ru_RU', 'fr_FR'],
      url: 'https://henning-law.com',
      siteName: 'Henning Law Firm PLLC',
      title: m.ogTitle,
      description: m.ogDesc,
    },
    twitter: {
      card: 'summary_large_image',
      title: m.twitterTitle,
      description: m.twitterDesc,
    },
  };
}
