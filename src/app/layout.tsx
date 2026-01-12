import type { Metadata } from 'next';
import React from 'react';
import './globals.css';
import { LanguageProvider } from '@/contexts/LanguageContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: {
    default: 'Henning Law Firm PLLC | Immigration Strategies',
    template: '%s | Henning Law Firm PLLC',
  },
  description: 'Tailored Strategies to Navigate Work, Residency, and Business Success in the United States. Personalized immigration strategies for individuals, families, startups and employers.',
  keywords: ['immigration law', 'visa services', 'green card', 'citizenship', 'immigration attorney', 'Florida', 'Minneapolis', 'immigration strategies'],
  authors: [{ name: 'Henning Law Firm PLLC' }],
  creator: 'Henning Law Firm PLLC',
  publisher: 'Henning Law Firm PLLC',
  metadataBase: new URL('https://henning-law.com'),
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://henning-law.com',
    siteName: 'Henning Law Firm PLLC',
    title: 'Henning Law Firm PLLC | Immigration Strategies',
    description: 'Tailored Strategies to Navigate Work, Residency, and Business Success in the United States.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Henning Law Firm PLLC | Immigration Strategies',
    description: 'Tailored Strategies to Navigate Work, Residency, and Business Success in the United States.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <LanguageProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}