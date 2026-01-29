'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

const PrivacyPage = () => {
  const { t } = useLanguage();

  return (
    <section className="section-padding">
      <div className="container" style={{ maxWidth: '900px' }}>
        <h1>{t('privacy.title')}</h1>
        <p>{t('privacy.intro')}</p>

        <h2>{t('privacy.collectHeading')}</h2>
        <ul>
          <li>{t('privacy.collect1')}</li>
          <li>{t('privacy.collect2')}</li>
          <li>{t('privacy.collect3')}</li>
          <li>{t('privacy.collect4')}</li>
        </ul>

        <h2>{t('privacy.useHeading')}</h2>
        <ul>
          <li>{t('privacy.use1')}</li>
          <li>{t('privacy.use2')}</li>
          <li>{t('privacy.use3')}</li>
          <li>{t('privacy.use4')}</li>
        </ul>

        <h2>{t('privacy.sharingHeading')}</h2>
        <p>{t('privacy.sharingP1')}</p>
        <p>
          <strong>{t('privacy.sharingP2')}</strong>
        </p>

        <h2>{t('privacy.textHeading')}</h2>
        <p>{t('privacy.textP1')}</p>
        <p>
          {t('privacy.textP2')}{' '}
          <a href="mailto:nhenning@henning-law.com">nhenning@henning-law.com</a>.
        </p>

        <h2>{t('privacy.cookiesHeading')}</h2>
        <p>{t('privacy.cookiesP')}</p>

        <h2>{t('privacy.securityHeading')}</h2>
        <p>{t('privacy.securityP')}</p>

        <h2>{t('privacy.choicesHeading')}</h2>
        <p>{t('privacy.choicesP1')}</p>
        <p>{t('privacy.choicesP2')}</p>

        <h2>{t('privacy.contactHeading')}</h2>
        <p>
          {t('privacy.contactP')}{' '}
          <a href="mailto:nhenning@henning-law.com">nhenning@henning-law.com</a>.
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
};

export default PrivacyPage;
