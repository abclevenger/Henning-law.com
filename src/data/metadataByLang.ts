import type { Metadata } from 'next';

type Lang = 'en' | 'de' | 'es';

const rootMeta: Record<Lang, { title: string; description: string; ogTitle: string; ogDesc: string; twitterTitle: string; twitterDesc: string }> = {
  en: {
    title: 'Henning Law Firm PLLC | U.S. Immigration & Visa for German and International Clients',
    description:
      'U.S. immigration attorney with counsel in English. Visas, green cards, and citizenship for clients from Germany, Austria, Switzerland, and worldwide. Offices in Florida and Minnesota.',
    ogTitle: 'U.S. Immigration Attorney | Counsel in English | Henning Law Firm',
    ogDesc: 'U.S. immigration, visas, and green cards. Counsel for clients from Germany, Austria, Switzerland, and worldwide.',
    twitterTitle: 'U.S. Immigration Attorney | Henning Law Firm',
    twitterDesc: 'U.S. immigration, visas, and green cards for clients worldwide.',
  },
  de: {
    title: 'Henning Law Firm PLLC | US-Einwanderung & Visa für Deutsche und internationale Mandanten',
    description:
      'US-Einwanderungsanwältin mit Beratung auf Deutsch. Visa, Green Cards und Staatsbürgerschaft für Mandanten aus Deutschland, Österreich, Schweiz und weltweit. Kanzleien in Florida und Minnesota.',
    ogTitle: 'US-Einwanderungsanwältin | Beratung auf Deutsch | Henning Law Firm',
    ogDesc: 'US-Einwanderung, Visa und Green Cards. Beratung auf Deutsch für Mandanten aus Deutschland, Österreich, Schweiz und weltweit.',
    twitterTitle: 'US-Einwanderungsanwältin | Henning Law Firm',
    twitterDesc: 'US-Einwanderung, Visa und Green Cards für Mandanten weltweit.',
  },
  es: {
    title: 'Henning Law Firm PLLC | Inmigración y visa EE.UU. para clientes alemanes e internacionales',
    description:
      'Abogada de inmigración EE.UU. con asesoramiento en español. Visas, green cards y ciudadanía para clientes de Alemania, Austria, Suiza y todo el mundo. Oficinas en Florida y Minnesota.',
    ogTitle: 'Abogada de inmigración EE.UU. | Asesoramiento en español | Henning Law Firm',
    ogDesc: 'Inmigración EE.UU., visas y green cards. Asesoramiento para clientes de Alemania, Austria, Suiza y todo el mundo.',
    twitterTitle: 'Abogada de inmigración EE.UU. | Henning Law Firm',
    twitterDesc: 'Inmigración EE.UU., visas y green cards para clientes en todo el mundo.',
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
    title: 'Norma Henning, J.D. - U.S. Immigration Attorney',
    description:
      'Meet Norma Henning, J.D., founding attorney at Henning Law Firm. Former Honorary Consul of Germany in Florida with decades of experience in U.S. immigration law.',
  },
  de: {
    title: 'Norma Henning, J.D. - US-Einwanderungsanwältin',
    description:
      'Lernen Sie Norma Henning, J.D., Gründerin von Henning Law Firm, kennen. Ehemalige Honorarkonsulin Deutschlands in Florida mit jahrzehntelanger Erfahrung im US-Einwanderungsrecht.',
  },
  es: {
    title: 'Norma Henning, J.D. - Abogada de inmigración EE.UU.',
    description:
      'Conozca a Norma Henning, J.D., abogada fundadora de Henning Law Firm. Antigua Cónsul Honoraria de Alemania en Florida con décadas de experiencia en derecho de inmigración.',
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
