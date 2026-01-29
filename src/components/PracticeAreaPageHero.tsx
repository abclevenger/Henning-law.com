'use client';

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

type Props = {
  areaId: string;
  icon: React.ReactNode;
};

export default function PracticeAreaPageHero({ areaId, icon }: Props) {
  const { t } = useLanguage();

  return (
    <section
      className="page-header section-padding text-center reveal"
      style={{ backgroundColor: 'var(--color-primary)', color: '#fff' }}
    >
      <div className="container">
        <div className="page-icon">{icon}</div>
        <h1 style={{ color: '#fff' }}>{t(`pa.${areaId}.title`)}</h1>
        <p
          style={{
            maxWidth: '700px',
            margin: '1.5rem auto 0',
            color: 'rgba(255,255,255,0.9)',
            fontSize: '1.2rem',
          }}
        >
          {t(`pa.${areaId}.shortDescription`)}
        </p>
      </div>
    </section>
  );
}
