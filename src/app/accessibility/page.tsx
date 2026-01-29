'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Accessibility() {
  const { t } = useLanguage();

  return (
    <section className="section-padding">
      <div className="container" style={{ maxWidth: '900px' }}>
        <h1>{t('accessibility.title')}</h1>
        <p>{t('accessibility.intro')}</p>

        <h2>{t('accessibility.measuresHeading')}</h2>
        <ul style={{ listStyle: 'disc', paddingLeft: '1.25rem' }}>
          <li>{t('accessibility.measures1')}</li>
          <li>{t('accessibility.measures2')}</li>
          <li>{t('accessibility.measures3')}</li>
          <li>{t('accessibility.measures4')}</li>
        </ul>

        <h2>{t('accessibility.feedbackHeading')}</h2>
        <p>{t('accessibility.feedbackP1')}</p>
        <p>
          {t('accessibility.feedbackP2')}{' '}
          <a href="mailto:nhenning@henning-law.com">nhenning@henning-law.com</a>{' '}
          {t('accessibility.feedbackP3')}{' '}
          <a href="tel:2398216504">(239) 821-6504</a>.
        </p>
        <p>
          {t('accessibility.feedbackP4')}{' '}
          <Link href="/contact">{t('accessibility.feedbackP5')}</Link>.
        </p>

        <div
          style={{
            marginTop: '3rem',
            padding: '2rem',
            backgroundColor: 'var(--color-bg-light)',
            borderRadius: '8px',
            textAlign: 'center',
          }}
        >
          <h3 style={{ marginBottom: '1rem' }}>{t('cta.immigrationQuestions')}</h3>
          <p style={{ marginBottom: '1.5rem', color: 'var(--color-text-light)' }}>
            {t('cta.scheduleSubtext')}
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn btn-primary">
              {t('nav.contact')}
            </Link>
            <Link href="/practice-areas" className="btn btn-outline">
              {t('cta.viewPracticeAreas')}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
