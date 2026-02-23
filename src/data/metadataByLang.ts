import type { Metadata } from 'next';

type Lang = 'en' | 'de' | 'es' | 'ru' | 'fr';

const rootMeta: Record<Lang, { title: string; description: string; ogTitle: string; ogDesc: string; twitterTitle: string; twitterDesc: string }> = {
  en: {
    title: 'Henning Law Firm PLLC | Strategic U.S. Counsel for International Companies and Private Clients',
    description:
      'Strategic U.S. counsel for international companies and private clients. U.S. market entry, mobility strategy, and ongoing legal oversight. 20+ years experience. Former Honorary Consul. Legal counsel only—no investment or financial advice.',
    ogTitle: 'Strategic U.S. Counsel for International Companies and Private Clients | Henning Law Firm',
    ogDesc: 'U.S. market entry, private client advisory, and mobility strategy. Strategic legal counsel. Offices in Florida and Minnesota.',
    twitterTitle: 'Strategic U.S. Counsel for International Companies and Private Clients | Henning Law Firm',
    twitterDesc: 'Strategic U.S. counsel for market entry, mobility, and residence. Legal counsel only.',
  },
  de: {
    title: 'Henning Law Firm PLLC | Rechtsberatung für den US-Markt',
    description:
      'Rechtsberatung für Unternehmen und Privatkunden. Markteintritt USA, Mobilität, Strukturierung. Über 20 Jahre Erfahrung. Ehemalige Honorarkonsulin. Nur Rechtsberatung.',
    ogTitle: 'Rechtsberatung für den US-Markt | Henning Law Firm',
    ogDesc: 'Markteintritt USA, Private Clients, Mobilität. Rechtsberatung in Florida und Minnesota.',
    twitterTitle: 'Rechtsberatung für den US-Markt | Henning Law Firm',
    twitterDesc: 'Markteintritt, Mobilität, Aufenthalt—Rechtsberatung für internationale Mandanten.',
  },
  es: {
    title: 'Henning Law Firm PLLC | Asesoramiento jurídico en EE.UU.',
    description:
      'Asesoramiento jurídico para empresas y patrimonios familiares. Entrada al mercado, movilidad, estructuración. Más de 20 años de experiencia. Ex cónsul honoraria. Solo asesoría jurídica.',
    ogTitle: 'Asesoramiento jurídico en EE.UU. | Henning Law Firm',
    ogDesc: 'Entrada al mercado, clientes privados, movilidad. Oficinas en Florida y Minnesota.',
    twitterTitle: 'Asesoramiento jurídico en EE.UU. | Henning Law Firm',
    twitterDesc: 'Entrada al mercado, movilidad y residencia—asesoramiento para clientes internacionales.',
  },
  ru: {
    title: 'Henning Law Firm PLLC | Юридическое сопровождение в США',
    description:
      'Юридическое сопровождение для компаний и частных клиентов. Выход на рынок США, мобильность, структурирование. Более 20 лет опыта. Бывший почётный консул. Только юридические услуги.',
    ogTitle: 'Юридическое сопровождение в США | Henning Law Firm',
    ogDesc: 'Выход на рынок, частные клиенты, мобильность. Офисы во Флориде и Миннесоте.',
    twitterTitle: 'Юридическое сопровождение в США | Henning Law Firm',
    twitterDesc: 'Выход на рынок, мобильность и проживание—сопровождение международных клиентов.',
  },
  fr: {
    title: 'Henning Law Firm PLLC | Conseil juridique aux États-Unis',
    description:
      'Conseil juridique pour entreprises et clients privés. Entrée sur le marché, mobilité, structuration. Plus de 20 ans d\'expérience. Ancienne consule honoraire. Conseil juridique uniquement.',
    ogTitle: 'Conseil juridique aux États-Unis | Henning Law Firm',
    ogDesc: 'Entrée sur le marché, clients privés, mobilité. Bureaux en Floride et au Minnesota.',
    twitterTitle: 'Conseil juridique aux États-Unis | Henning Law Firm',
    twitterDesc: 'Entrée sur le marché, mobilité et résidence—conseil pour clients internationaux.',
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
      'Henning Law Firm—Einwanderungsberatung. Büros in Tampa und Minneapolis. Tel. (239) 821-6504 oder Kontaktformular.',
  },
  es: {
    title: 'Contacto',
    description:
      'Henning Law Firm—consultas de inmigración en EE.UU. Oficinas en Tampa y Minneapolis. Tel. (239) 821-6504 o formulario de contacto.',
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
    title: 'Norma Henning, J.D. - Rechtsberatung für den US-Markt',
    description:
      'Norma Henning, J.D., Gründerin von Henning Law Firm. Über 20 Jahre Erfahrung. Ehemalige Honorarkonsulin in Florida. Beratung auf Deutsch, Englisch und Spanisch.',
  },
  es: {
    title: 'Norma Henning, J.D. - Asesoramiento jurídico en EE.UU.',
    description:
      'Norma Henning, J.D., abogada fundadora de Henning Law Firm. Más de 20 años de experiencia. Ex cónsul honoraria de Alemania en Florida. Asesoramiento en alemán, inglés y español.',
  },
  ru: {
    title: 'Норма Хеннинг, J.D. — Юридическое сопровождение в США',
    description:
      'Норма Хеннинг, J.D., основатель Henning Law Firm. Более 20 лет опыта. Бывший почётный консул Германии во Флориде. Консультации на немецком, английском и испанском.',
  },
  fr: {
    title: 'Norma Henning, J.D. - Conseil juridique aux États-Unis',
    description:
      'Norma Henning, J.D., avocate fondatrice de Henning Law Firm. Plus de 20 ans d\'expérience. Ancienne consule honoraire d\'Allemagne en Floride. Conseil en allemand, anglais et espagnol.',
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
