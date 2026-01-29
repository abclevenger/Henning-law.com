'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

const TermsPage = () => {
  const { t } = useLanguage();

  return (
    <section className="section-padding">
      <div className="container" style={{ maxWidth: '900px' }}>
        <h1>{t('terms.title')}</h1>
        <p>{t('terms.intro')}</p>

        <h2>{t('terms.noLegalHeading')}</h2>
        <p>{t('terms.noLegalP')}</p>

        <h2>{t('terms.useHeading')}</h2>
        <ul>
          <li>{t('terms.use1')}</li>
          <li>{t('terms.use2')}</li>
          <li>{t('terms.use3')}</li>
        </ul>

        <h2>{t('terms.textHeading')}</h2>
        <p>{t('terms.textP1')}</p>
        <p>
          {t('terms.textP2')}{' '}
          <a href="mailto:nhenning@henning-law.com">nhenning@henning-law.com</a>.
        </p>
        <p>{t('terms.textP3')}</p>

        <h2>{t('terms.thirdPartyHeading')}</h2>
        <p>{t('terms.thirdPartyP')}</p>

        <h2>{t('terms.liabilityHeading')}</h2>
        <p>{t('terms.liabilityP')}</p>

        <h2>{t('terms.changesHeading')}</h2>
        <p>{t('terms.changesP')}</p>

        <h2>{t('terms.contactHeading')}</h2>
        <p>
          {t('terms.contactP')}{' '}
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

export default TermsPage;
