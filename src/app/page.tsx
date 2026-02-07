"use client";

import React, { type ReactNode } from 'react';
import Link from 'next/link';
import Hero from '@/components/Hero';
import { IconStrategy, IconGlobe, IconKey } from '@/components/Icons';
import { images } from '@/data/images';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Home() {
  const { t: translate } = useLanguage();

  const renderWithReplacements = (
    key: string,
    replacements: Record<string, ReactNode>
  ) => {
    const raw = translate(key);
    const segments = raw.split(/(\{[^}]+\})/g).filter(Boolean);
    return (
      <>
        {segments.map((segment, index) => {
          const match = segment.match(/^\{([^}]+)\}$/);
          if (match) {
            return (
              <React.Fragment key={`${key}-${index}`}>
                {replacements[match[1]] ?? null}
              </React.Fragment>
            );
          }
          return (
            <React.Fragment key={`${key}-${index}`}>{segment}</React.Fragment>
          );
        })}
      </>
    );
  };

  const faqItems = [
    {
      questionKey: 'home.faq.q1.question',
      answerKey: 'home.faq.q1.answer',
    },
    {
      questionKey: 'home.faq.q2.question',
      answerKey: 'home.faq.q2.answer',
    },
    {
      questionKey: 'home.faq.q3.question',
      answerKey: 'home.faq.q3.answer',
    },
    {
      questionKey: 'home.faq.q4.question',
      answerKey: 'home.faq.q4.answer',
    },
  ];

  const pathSteps = [
    { titleKey: 'home.path.step1.title', textKey: 'home.path.step1.text' },
    { titleKey: 'home.path.step2.title', textKey: 'home.path.step2.text' },
    { titleKey: 'home.path.step3.title', textKey: 'home.path.step3.text' },
    { titleKey: 'home.path.step4.title', textKey: 'home.path.step4.text' },
    { titleKey: 'home.path.step5.title', textKey: 'home.path.step5.text' },
  ];

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: translate(item.questionKey),
      acceptedAnswer: {
        '@type': 'Answer',
        text: translate(item.answerKey),
      },
    })),
  };

  return (
    <>
      <Hero />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Let us Help You Design Your Path Section */}
      <section className="section-padding">
        <div className="container">
          <div className="text-center reveal" style={{ maxWidth: '900px', margin: '0 auto' }}>
            <h2>{translate('home.design.heading')}</h2>
            <p style={{ marginTop: '1.5rem', fontSize: '1.1rem' }}>
              {translate('home.design.paragraph')}
            </p>
            <div
              className="german-intro"
              style={{
                marginTop: '1.75rem',
                padding: '1.5rem',
                borderRadius: '12px',
                backgroundColor: 'var(--color-bg-light)',
                textAlign: 'left',
              }}
            >
              <h3 style={{ marginBottom: '0.75rem' }}>
                {translate('home.design.german.heading')}
              </h3>
              <p style={{ marginBottom: '0.75rem', fontSize: '1.05rem' }}>
                {translate('home.design.german.paragraph1')}
              </p>
              <p style={{ marginBottom: 0, fontSize: '1.05rem' }}>
                {renderWithReplacements('home.design.scheduleConversation', {
                  contactLink: (
                    <Link href="/contact">
                      {translate('home.design.contactLinkLabel')}
                    </Link>
                  ),
                })}
              </p>
            </div>
            <p style={{ marginTop: '1.25rem', fontSize: '1.05rem' }}>
              {renderWithReplacements('home.design.linksSentence', {
                practiceLink: (
                  <Link href="/practice-areas">
                    {translate('home.design.practiceLinkLabel')}
                  </Link>
                ),
                attorneyLink: (
                  <Link href="/attorney-bio">
                    {translate('home.design.attorneyLinkLabel')}
                  </Link>
                ),
                consultLink: (
                  <Link href="/contact">
                    {translate('home.design.consultLinkLabel')}
                  </Link>
                ),
              })}
            </p>
            
            <div style={{ marginTop: '3rem', textAlign: 'left', maxWidth: '700px', marginLeft: 'auto', marginRight: 'auto' }}>
              <h3 style={{ marginBottom: '1.5rem', textAlign: 'center' }}>
                {translate('home.whatWeDo.heading')}
              </h3>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {['home.whatWeDo.item1', 'home.whatWeDo.item2', 'home.whatWeDo.item3'].map((itemKey) => (
                  <li key={itemKey} style={{ marginBottom: '1.5rem', paddingLeft: '2rem', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0, color: 'var(--color-secondary)', fontSize: '1.5rem' }}>•</span>
                    <strong style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--color-primary)' }}>
                      {translate(itemKey)}
                    </strong>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Building Bridges Section */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-bg-light)' }}>
        <div className="container text-center reveal">
          <h2 style={{ fontSize: '3rem', marginBottom: '2rem' }}>
            {translate('home.bridges.heading')}
          </h2>
        </div>
      </section>

      {/* From Temporary and Permanent Residence Section */}
      <section className="section-padding">
        <div className="container">
          <div className="content-image-grid">
            <div className="content-text reveal">
              <h2>{translate('home.visas.heading')}</h2>
              <p style={{ fontSize: '1.1rem', marginTop: '1.5rem' }}>
                {translate('home.visas.paragraph1')}
              </p>
              <p style={{ fontSize: '1.1rem', marginTop: '1rem' }}>
                {translate('home.visas.paragraph2')}
              </p>

              <div style={{ marginTop: '2.5rem' }}>
                <h3 style={{ marginBottom: '1.5rem' }}>{translate('home.guide.heading')}</h3>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  <li style={{ marginBottom: '2rem' }}>
                    <strong style={{ display: 'block', marginBottom: '0.75rem', color: 'var(--color-primary)', fontSize: '1.1rem' }}>
                      {translate('home.guide.item1.title')}
                    </strong>
                    <p style={{ marginBottom: 0 }}>
                      {translate('home.guide.item1.description')}
                    </p>
                    <p style={{ marginTop: '0.75rem', marginBottom: 0 }}>
                      {renderWithReplacements('home.guide.item1.resources', {
                        uscisLink: (
                          <a href="https://www.uscis.gov/" target="_blank" rel="noopener noreferrer">
                            USCIS
                          </a>
                        ),
                        stateDept: (
                          <a href="https://travel.state.gov/" target="_blank" rel="noopener noreferrer">
                            U.S. Department of State
                          </a>
                        ),
                      })}
                    </p>
                  </li>
                  <li style={{ marginBottom: '2rem' }}>
                    <strong style={{ display: 'block', marginBottom: '0.75rem', color: 'var(--color-primary)', fontSize: '1.1rem' }}>
                      {translate('home.guide.item2.title')}
                    </strong>
                    <p style={{ marginBottom: 0 }}>
                      {translate('home.guide.item2.description')}
                    </p>
                  </li>
                  <li style={{ marginBottom: '2rem' }}>
                    <strong style={{ display: 'block', marginBottom: '0.75rem', color: 'var(--color-primary)', fontSize: '1.1rem' }}>
                      {translate('home.guide.item3.title')}
                    </strong>
                    <p style={{ marginBottom: 0 }}>
                      {translate('home.guide.item3.description')}
                    </p>
                    <p style={{ marginTop: '0.75rem', marginBottom: 0 }}>
                      {translate('home.guide.item3.chamber')}
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="content-image reveal">
              <div
                style={{
                  width: '100%',
                  height: '100%',
                  minHeight: '500px',
                  backgroundColor: '#ddd',
                  borderRadius: '8px',
                  backgroundImage:
                    'url(https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
            </div>
          </div>
        </div>

        <style jsx>{`
          .content-image-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 3rem;
            align-items: start;
          }
          
          @media (min-width: 968px) {
            .content-image-grid {
              grid-template-columns: 1.2fr 1fr;
            }
          }
          
          .content-text h2 {
            font-size: 2.5rem;
            margin-bottom: 1.5rem;
          }
        `}</style>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-bg-light)' }}>
        <div className="container">
          <div className="text-center reveal" style={{ marginBottom: '4rem' }}>
            <h2>{translate('home.features.heading')}</h2>
          </div>

          <div className="features-grid">
            <div className="feature-card reveal">
              <div className="feature-icon">
                <IconStrategy />
              </div>
              <h3>{translate('home.features.strategy.heading')}</h3>
              <p>
                {translate('home.features.strategy.description')}
              </p>
            </div>

            <div className="feature-card reveal">
              <div className="feature-icon">
                <IconGlobe />
              </div>
              <h3>{translate('home.features.globe.heading')}</h3>
              <p>
                {translate('home.features.globe.description')}
              </p>
            </div>

            <div className="feature-card reveal">
              <div className="feature-icon">
                <IconKey />
              </div>
              <h3>{translate('home.features.market.heading')}</h3>
              <p>
                {translate('home.features.market.description')}
              </p>
            </div>
          </div>

          <div className="text-center reveal cta-buttons" style={{ marginTop: '4rem' }}>
            <Link href="/contact" className="btn btn-primary">
              {translate('cta.contactForm')}
            </Link>
            <a href="tel:2398216504" className="btn btn-outline">
              {translate('cta.callUs')}
            </a>
          </div>
        </div>

        <style jsx>{`
          .features-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 3rem;
          }
          
          @media (min-width: 768px) {
            .features-grid {
              grid-template-columns: repeat(3, 1fr);
            }
          }
          
          .feature-card {
            background: #fff;
            padding: 2.5rem;
            border-radius: 12px;
            transition: transform var(--transition-base), box-shadow var(--transition-base), border-color var(--transition-base);
            box-shadow: var(--shadow-sm);
            border: 1px solid rgba(15, 23, 42, 0.08);
            text-align: center;
          }

          .feature-icon {
            color: var(--color-secondary);
            width: 60px;
            height: 60px;
            margin: 0 auto 1.5rem;
          }

          .feature-icon :global(svg) {
            width: 60px;
            height: 60px;
          }
          
          .feature-card:hover {
            transform: translateY(-10px);
            box-shadow: var(--shadow-md);
          }
          
          .feature-card h3 {
            font-size: 1.4rem;
            margin-bottom: 1.5rem;
            color: var(--color-primary);
            line-height: 1.4;
          }
          
          .feature-card p {
            color: var(--color-text-light);
            line-height: 1.7;
          }
        `}</style>
      </section>

      {/* Supporting Immigrants Section */}
      <section className="section-padding">
        <div className="container">
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <h2 className="text-center reveal" style={{ marginBottom: '2rem' }}>
              {translate('home.support.heading')}
            </h2>
            <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>
              {renderWithReplacements('home.support.paragraph1', {
                firmName: <strong>Henning Law Firm PLLC</strong>,
              })}
            </p>
            <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>
              {translate('home.support.paragraph2')}
            </p>
            <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>
              <strong>{translate('home.support.setsApartHeading')}</strong>
            </p>
            <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>
              {translate('home.support.setsApartDetail')}
            </p>
            <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>
              <strong>{translate('home.support.doNotDoHeading')}</strong>
            </p>
            <p style={{ fontSize: '1.1rem', marginBottom: 0 }}>
              {translate('home.support.disclaimer')}
            </p>
            <div className="text-center" style={{ marginTop: '3rem' }}>
              <Link href="/contact" className="btn btn-outline">
                {translate('cta.contactForm')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-bg-light)' }}>
        <div className="container">
        <div className="text-center reveal" style={{ marginBottom: '4rem' }}>
            <h2>{translate('home.testimonials.heading')}</h2>
          </div>

          <div className="testimonials-grid">
            <div className="testimonial-card reveal">
              <blockquote style={{ margin: 0, fontStyle: 'italic', fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--color-text-light)' }}>
                <p style={{ marginBottom: '1.5rem' }}>
                  I was referred to Norma Henning by my CPA, who spoke <strong>highly</strong> about her <strong>knowledge</strong> when it comes to visa and immigration matters. I wanted to move from Germany to the US and was looking for the best way to get my visa or even permanent resident card (green card). She <strong>analyzed</strong> my professional background and found that I qualified for classification as an Alien of Extraordinary Ability in my field.
                </p>
                <p style={{ marginBottom: '1.5rem' }}>
                  Now some time ago, I opened my own consulting firm and get to contribute my experience and skills to U.S. clients while enjoying the flexibility that permanent residence brings with it. Traveling back and forth to Europe has been possible even during the pandemic, and I am very <strong>grateful</strong> to Ms. Henning for guiding and supporting me and my wife throughout the process.
                </p>
                <p style={{ marginBottom: '1.5rem' }}>
                  She has shown so much <strong>knowledge</strong> and <strong>experience</strong> in this matter, that I always felt confident in the process. And she navigated all matters of the process at the very <strong>high standard</strong> which I expected as an executive manager. Also, it has been a lot of <strong>fun</strong> to work with Norma Henning and I have recommended her in the past more than a dozen times to friends and other entrepreneurs.
                </p>
              </blockquote>
              <footer style={{ marginTop: '2rem', textAlign: 'right', fontStyle: 'normal' }}>
                <strong style={{ color: 'var(--color-primary)' }}>—Dr. Ulrich P., Naples FL</strong>
              </footer>
            </div>

            <div className="testimonial-card reveal">
              <blockquote style={{ margin: 0, fontStyle: 'italic', fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--color-text-light)' }}>
                <p style={{ marginBottom: '1.5rem' }}>
                  The immigration process can be a stressful and challenging journey. This is exactly how I felt before I met Norma Henning. I was going through a rough divorce, had an arrest record and did not have any family around. I was not sure if I would be able to have my case approved. Norma was able to prepare everything. She assured and supported me throughout the entire process. After going through another similar process without an attorney, this was a completely <strong>unique</strong> experience to have Norma by my side attending my interviews at USCIS. Her <strong>thorough preparation</strong> and support made all the difference.
                </p>
                <p style={{ marginBottom: '1.5rem' }}>
                  I am beyond <strong>grateful</strong> for all the <strong>professionalism</strong> and <strong>care</strong> that Norma always provided. After receiving my green card and citizenship, I referred Norma to my parents to apply for their green cards. It was also a challenging case due to my father's military background. But her level of <strong>experience</strong> helped us get the application done the right way. I felt confident in her guidance throughout the entire process.
                </p>
              </blockquote>
              <footer style={{ marginTop: '2rem', textAlign: 'right', fontStyle: 'normal' }}>
                <strong style={{ color: 'var(--color-primary)' }}>—Maria S. and family, Tampa</strong>
              </footer>
            </div>

            <div className="testimonial-card reveal">
              <blockquote style={{ margin: 0, fontStyle: 'italic', fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--color-text-light)' }}>
                <p style={{ marginBottom: '1.5rem' }}>
                  It was a <strong>pleasure</strong> to work with Mrs. Henning from the initial consultation until the day our case was <strong>approved</strong> and green card was in our hand.
                </p>
                <p style={{ marginBottom: '1.5rem' }}>
                  She was always very <strong>accessible</strong>, <strong>responsive</strong>, and <strong>reliable</strong>, and was an extremely <strong>knowledgeable</strong> resource on timelines, procedures, current immigration laws and what to expect from the process from start to finish.
                </p>
                <p style={{ marginBottom: '1.5rem' }}>
                  Most important for us is the fact that Mrs. Henning was <strong>efficient</strong> and <strong>timely</strong> in preparing the paperwork and forms for every stage of the application and was diligent and thorough in creating a comprehensive case file to ensure we were providing all information necessary for a successful adjudication of our case.
                </p>
                <p style={{ marginBottom: '1.5rem' }}>
                  She was on top of things every step of the way and we knew we could <strong>rely</strong> on her to make sure everything was taken care of. We felt confident throughout the process and would not hesitate to recommend working with her. Thanks so much.
                </p>
              </blockquote>
              <footer style={{ marginTop: '2rem', textAlign: 'right', fontStyle: 'normal' }}>
                <strong style={{ color: 'var(--color-primary)' }}>—Michaela H.-W. and Heiko W., Florida and Georgia</strong>
              </footer>
            </div>
          </div>
        </div>

        <style jsx>{`
          .testimonials-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 3rem;
          }
          
          @media (min-width: 968px) {
            .testimonials-grid {
              grid-template-columns: repeat(3, 1fr);
            }
          }
          
          .testimonial-card {
            background: #fff;
            padding: 2.5rem;
            border-radius: 12px;
            box-shadow: var(--shadow-sm);
            border: 1px solid rgba(15, 23, 42, 0.08);
            transition: transform var(--transition-base), box-shadow var(--transition-base);
          }

          .testimonial-card:hover {
            transform: translateY(-8px);
            box-shadow: var(--shadow-md);
          }
          
          .testimonial-card blockquote p {
            margin-bottom: 1.5rem;
          }
          
          .testimonial-disclaimer {
            text-align: center;
            margin-top: 3rem;
            padding: 1.5rem;
            background: rgba(255,255,255,0.5);
            border-radius: 8px;
            font-size: 0.85rem;
            color: var(--color-text-light);
            line-height: 1.6;
          }
        `}</style>
        
        <div className="testimonial-disclaimer reveal">
          <p style={{ margin: 0 }}>
            {translate('legal.testimonialDisclaimer')}
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding">
        <div className="container">
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <h2 className="text-center reveal" style={{ marginBottom: '2rem' }}>
              {translate('home.faq.heading')}
            </h2>
            <div style={{ display: 'grid', gap: '1.5rem' }}>
              {faqItems.map((item) => (
                <div
                  key={item.questionKey}
                  className="reveal"
                  style={{
                    padding: '1.5rem',
                    borderRadius: '12px',
                    border: '1px solid var(--color-border)',
                    backgroundColor: '#fff',
                    boxShadow: 'var(--shadow-sm)',
                  }}
                >
                  <h3 style={{ marginBottom: '0.5rem', color: 'var(--color-primary)' }}>
                    {translate(item.questionKey)}
                  </h3>
                  <p style={{ margin: 0, color: 'var(--color-text-light)', lineHeight: '1.7' }}>
                    {translate(item.answerKey)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Customer Path Section */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-bg-light)' }}>
        <div className="container">
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <h2 className="text-center reveal" style={{ marginBottom: '2rem' }}>
              {translate('home.path.heading')}
            </h2>
            <p className="text-center reveal" style={{ fontSize: '1.1rem', marginBottom: '2.5rem' }}>
              {translate('home.path.description')}
            </p>
            <div style={{ display: 'grid', gap: '1.5rem' }}>
              {pathSteps.map((step) => (
                <div
                  key={step.titleKey}
                  className="reveal"
                  style={{
                    padding: '1.5rem',
                    borderRadius: '12px',
                    border: '1px solid var(--color-border)',
                    backgroundColor: '#fff',
                    boxShadow: 'var(--shadow-sm)',
                  }}
                >
                  <h3 style={{ marginBottom: '0.5rem', color: 'var(--color-primary)' }}>
                    {translate(step.titleKey)}
                  </h3>
                  <p style={{ margin: 0, color: 'var(--color-text-light)', lineHeight: '1.7' }}>
                    {translate(step.textKey)}
                  </p>
                </div>
              ))}
            </div>
            <div className="text-center reveal cta-buttons" style={{ marginTop: '2.5rem' }}>
              <Link href="/contact" className="btn btn-primary">
                {translate('cta.contactForm')}
              </Link>
              <a href="tel:2398216504" className="btn btn-outline">
                {translate('cta.callUs')}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Unlock Your American Dream CTA Section */}
      <section
        className="section-padding"
        style={{
          backgroundImage: `linear-gradient(rgba(10, 25, 47, 0.5), rgba(10, 25, 47, 0.75)), url(${images.consultation})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: 'var(--color-white)',
        }}
      >
        <div className="container text-center reveal">
          <h2 style={{ color: 'var(--color-white)', marginBottom: '1.5rem' }}>
            {translate('home.cta.heading')}
          </h2>
          <p style={{ 
            fontSize: '1.3rem', 
            marginBottom: '2.5rem', 
            color: 'rgba(255,255,255,0.95)',
            maxWidth: '700px',
            marginLeft: 'auto',
            marginRight: 'auto'
          }}>
            {translate('home.cta.subtext')}
          </p>
          <Link href="/contact" className="btn" style={{ 
            backgroundColor: 'var(--color-secondary)', 
            color: 'var(--color-white)',
            borderColor: 'var(--color-secondary)'
          }}>
            {translate('cta.contactForm')}
          </Link>
        </div>
      </section>
    </>
  );
}