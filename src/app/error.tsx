'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const { t } = useLanguage();

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="section-padding">
      <div className="container" style={{ maxWidth: '600px', textAlign: 'center' }}>
        <h1>{t('error.title')}</h1>
        <p>{t('error.message')}</p>
        <p style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '1.5rem' }}>
          <button type="button" onClick={reset} className="button primary">
            {t('error.tryAgain')}
          </button>
          <Link href="/" className="button primary">
            {t('notFound.backToHome')}
          </Link>
        </p>
      </div>
    </section>
  );
}
