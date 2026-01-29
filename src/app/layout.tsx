import type { Metadata } from 'next';
import React from 'react';
import Script from 'next/script';
import { cookies } from 'next/headers';
import './globals.css';
import { LanguageProvider } from '@/contexts/LanguageContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';
import LayoutA11yLinks from '@/components/LayoutA11yLinks';
import { getRootMetadata, parseLang } from '@/data/metadataByLang';

const staticMetadata: Metadata = {
  keywords: [
    // German keywords (primary)
    'US Einwanderungsanwalt',
    'Einwanderungsanwalt Florida',
    'Green Card USA',
    'Visum USA',
    'US Visum für Deutsche',
    'Auswandern USA',
    'Arbeitserlaubnis USA',
    'EB-5 Investor Visum',
    'E-2 Visum',
    // English keywords (secondary)
    'immigration attorney',
    'German-speaking immigration lawyer',
    'US immigration for Germans',
    'visa services Florida',
    'green card attorney',
    'citizenship attorney',
    'Florida immigration lawyer',
    'Minnesota immigration attorney',
  ],
  authors: [{ name: 'Norma Henning, J.D.' }],
  creator: 'Henning Law Firm PLLC',
  publisher: 'Henning Law Firm PLLC',
  metadataBase: new URL('https://henning-law.com'),
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
  alternates: {
    canonical: 'https://henning-law.com',
    languages: {
      'de-DE': 'https://henning-law.com',
      'en-US': 'https://henning-law.com',
      'es-ES': 'https://henning-law.com',
      'x-default': 'https://henning-law.com',
    },
  },
  robots: {
    index: true,
    follow: true,
  },
  other: {
    'geo.region': 'US-FL',
    'geo.placename': 'Tampa, Florida',
  },
};

export async function generateMetadata(): Promise<Metadata> {
  const cookieStore = await cookies();
  const lang = parseLang(cookieStore.get('language')?.value);
  const localeMeta = getRootMetadata(lang);
  return {
    ...staticMetadata,
    ...localeMeta,
  };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    '@id': 'https://henning-law.com/#organization',
    name: 'Henning Law Firm PLLC',
    alternateName: 'Henning Law - US-Einwanderungsanwältin',
    url: 'https://henning-law.com',
    telephone: '+1-239-821-6504',
    email: 'nhenning@henning-law.com',
    description: 'US-Einwanderungsanwältin mit Beratung auf Deutsch. Serving clients from Germany, Austria, Switzerland, and worldwide with U.S. immigration, visa, and green card services.',
    areaServed: [
      { '@type': 'Country', name: 'United States' },
      { '@type': 'Country', name: 'Germany' },
      { '@type': 'Country', name: 'Austria' },
      { '@type': 'Country', name: 'Switzerland' },
      { '@type': 'State', name: 'Florida' },
      { '@type': 'State', name: 'Minnesota' },
    ],
    serviceType: [
      'Immigration Law',
      'Visa Services',
      'Green Card Applications',
      'US Citizenship',
      'Business Immigration',
      'EB-5 Investor Visas',
      'E-2 Treaty Investor Visas',
      'German-speaking legal services',
      'Einwanderungsrecht',
      'Visum USA',
    ],
    availableLanguage: [
      { '@type': 'Language', name: 'English', alternateName: 'en' },
      { '@type': 'Language', name: 'German', alternateName: 'de' },
      { '@type': 'Language', name: 'Spanish', alternateName: 'es' },
    ],
    knowsLanguage: ['English', 'German', 'Spanish'],
    founder: {
      '@type': 'Person',
      name: 'Norma Henning',
      jobTitle: 'Attorney at Law',
      description: 'Former Honorary Consul of Germany in Florida',
    },
    address: [
      {
        '@type': 'PostalAddress',
        addressLocality: 'Tampa',
        addressRegion: 'FL',
        addressCountry: 'US',
      },
      {
        '@type': 'PostalAddress',
        addressLocality: 'Minneapolis',
        addressRegion: 'MN',
        addressCountry: 'US',
      },
    ],
    priceRange: '$$',
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      description: 'By appointment only',
    },
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <LanguageProvider>
          <ScrollReveal />
          <LayoutA11yLinks />
          <Navbar />
          <main id="main-content">{children}</main>
          <Footer />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
          />
          {/* Lead Connector Chat Widget */}
          <Script
            src="https://widgets.leadconnectorhq.com/loader.js"
            data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
            data-widget-id="691b47b4f4a10e654a163323"
            strategy="lazyOnload"
          />
        </LanguageProvider>
      </body>
    </html>
  );
}