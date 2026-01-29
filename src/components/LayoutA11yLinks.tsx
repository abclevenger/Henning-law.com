'use client';

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function LayoutA11yLinks() {
  const { t } = useLanguage();

  return (
    <>
      <a className="skip-link" href="#main-content">
        {t('a11y.skipToMain')}
      </a>
      <div className="mobile-call-bar" aria-label={t('a11y.quickCallBar')}>
        <a href="tel:2398216504">{t('cta.callUs')}</a>
      </div>
    </>
  );
}
