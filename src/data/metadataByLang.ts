import type { Metadata } from 'next';

type Lang = 'en' | 'de' | 'es';

const rootMeta: Record<Lang, { title: string; description: string; ogTitle: string; ogDesc: string; twitterTitle: string; twitterDesc: string }> = {
  en: {
    title: 'Henning Law Firm PLLC | Investor Visa & EB-5 Immigration Counsel for Global Investors',
    description:
      'U.S. immigration counsel for ultra-high-net-worth global investors seeking Investor Visa, EB-5, residence options, and travel flexibility. 20+ years experience. Former Honorary German Consul. Immigration counsel only—no investment or financial advice.',
    ogTitle: 'Investor Visa & EB-5 Immigration Counsel | Henning Law Firm',
    ogDesc: 'U.S. immigration counsel for global investors: Investor Visa, EB-5, residence and mobility strategy. Offices in Florida and Minnesota.',
    twitterTitle: 'Investor Visa & EB-5 Immigration Counsel | Henning Law Firm',
    twitterDesc: 'U.S. immigration counsel for global investors seeking residence and mobility. Immigration counsel only.',
  },
  de: {
    title: 'Henning Law Firm PLLC | Investorenvisum & EB-5 Einwanderungsberatung',
    description:
      'Einwanderungsberatung für internationale Investoren: Investorenvisum, EB-5, Aufenthalts- und Mobilitätsstrategie. Über 20 Jahre Erfahrung. Ehemalige Honorarkonsulin. Nur Rechtsberatung—keine Anlage- oder Finanzberatung.',
    ogTitle: 'Investorenvisum & EB-5 Einwanderungsberatung | Henning Law Firm',
    ogDesc: 'Einwanderungsberatung für internationale Investoren: Investorenvisum, EB-5, Aufenthalts- und Mobilitätsstrategie.',
    twitterTitle: 'Investorenvisum & EB-5 Einwanderungsberatung | Henning Law Firm',
    twitterDesc: 'Einwanderungsberatung für internationale Investoren. Nur Rechtsberatung.',
  },
  es: {
    title: 'Henning Law Firm PLLC | Visa de Inversionista y EB-5 para Inversionistas Globales',
    description:
      'Asesoría migratoria en EE.UU. para inversionistas globales: Visa de Inversionista, EB-5, opciones de residencia y flexibilidad de viaje. Más de 20 años de experiencia. Ex cónsul honoraria. Solo asesoría migratoria—sin asesoría de inversión o financiera.',
    ogTitle: 'Visa de Inversionista y EB-5 | Henning Law Firm',
    ogDesc: 'Asesoría migratoria para inversionistas globales: Visa de Inversionista, EB-5, estrategia de residencia y movilidad.',
    twitterTitle: 'Visa de Inversionista y EB-5 | Henning Law Firm',
    twitterDesc: 'Asesoría migratoria para inversionistas globales. Solo asesoría migratoria.',
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
};

const attorneyBioMeta: Record<Lang, { title: string; description: string }> = {
  en: {
    title: 'Norma Henning, J.D. - Investor Visa & EB-5 Immigration Counsel',
    description:
      'Norma Henning, J.D., founding attorney at Henning Law Firm. 20+ years advising in the legal field. Former Honorary Consul of Germany in Florida fostering transatlantic relations. U.S. immigration counsel for global investors.',
  },
  de: {
    title: 'Norma Henning, J.D. - Einwanderungsberatung',
    description:
      'Norma Henning, J.D., Gründerin von Henning Law Firm. Über 20 Jahre Erfahrung in der Rechtsberatung. Ehemalige Honorarkonsulin in Florida. Einwanderungsberatung für internationale Mandanten.',
  },
  es: {
    title: 'Norma Henning, J.D. - Asesoría en Visa de Inversionista y EB-5',
    description:
      'Norma Henning, J.D., abogada fundadora de Henning Law Firm. Más de 20 años asesorando en el campo legal. Ex cónsul honoraria de Alemania en Florida. Asesoría migratoria para inversionistas globales.',
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
  if (cookie === 'de' || cookie === 'es' || cookie === 'en') return cookie;
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
      locale: lang === 'de' ? 'de_DE' : lang === 'es' ? 'es_ES' : 'en_US',
      alternateLocale: lang === 'de' ? ['en_US', 'es_ES'] : lang === 'es' ? ['en_US', 'de_DE'] : ['de_DE', 'es_ES'],
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
