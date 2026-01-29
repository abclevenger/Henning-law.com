'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

export default function NotFound() {
  const { t } = useLanguage();

  return (
    <section className="section-padding">
      <div className="container" style={{ maxWidth: '600px', textAlign: 'center' }}>
        <h1>{t('notFound.title')}</h1>
        <p>{t('notFound.message')}</p>
        <p>
          <Link href="/" className="button primary">
            {t('notFound.backToHome')}
          </Link>
        </p>
      </div>
    </section>
  );
}
