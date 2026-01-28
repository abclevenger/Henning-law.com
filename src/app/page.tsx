"use client";

import Link from 'next/link';
import type { ReactNode } from 'react';
import Hero from '@/components/Hero';
import { IconStrategy, IconGlobe, IconKey } from '@/components/Icons';
import { images } from '@/data/images';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Home() {
  const { language, t: translate } = useLanguage();
  const t = (en: ReactNode, de?: ReactNode) => (language === 'de' ? de ?? en : en);
  const faqItems = [
    {
      question: t(
        'Do you work with clients outside the U.S.?',
        'Arbeiten Sie mit Mandanten außerhalb der USA?'
      ),
      answer:
        t(
          'Yes. We regularly assist clients abroad through virtual consultations and strategic planning.',
          'Ja. Wir beraten Mandanten im Ausland regelmäßig per Videokonferenz und strategischer Planung.'
        ),
    },
    {
      question: t(
        'Which visa categories are common for professionals and companies?',
        'Welche Visakategorien sind für Fachkräfte und Unternehmen häufig relevant?'
      ),
      answer:
        t(
          'Common options include E-1/E-2 treaty visas, L-1 intra-company transfers, O-1 extraordinary ability, and EB categories for permanent residency.',
          'Häufige Optionen sind E-1/E-2, L-1, O-1 sowie EB-Kategorien für die dauerhafte Aufenthaltsgenehmigung.'
        ),
    },
    {
      question: t(
        'Can you help with U.S. market entry and property ownership?',
        'Können Sie bei Markteintritt und Immobilienthemen in den USA helfen?'
      ),
      answer:
        t(
          'Yes. We advise on market entry strategy, corporate structure, and legal considerations for property ownership as a non-resident.',
          'Ja. Wir beraten zu Markteintritt, Unternehmensstruktur und rechtlichen Fragen beim Immobilieneigentum als Nicht‑Resident.'
        ),
    },
    {
      question: t(
        'How do we start a consultation?',
        'Wie starten wir eine Beratung?'
      ),
      answer:
        t(
          'Start by contacting us with a short summary of your goals. We will outline the next steps and required documents.',
          'Starten Sie mit einer kurzen Zusammenfassung Ihrer Ziele. Wir skizzieren die nächsten Schritte und benötigten Unterlagen.'
        ),
    },
  ];

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
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
            <h2>{t('U.S. Immigration Strategy for Individuals & Businesses', 'US‑Einwanderungsstrategie für Privatpersonen und Unternehmen')}</h2>
            <p style={{ marginTop: '1.5rem', fontSize: '1.1rem' }}>
              {t(
                'The rules that govern living, working, or purchasing property in the United States can be time consuming and overwhelming. Spend your time doing what you do best and let us do what we do best.',
                'Die Regeln für Leben, Arbeiten oder Immobilieneigentum in den USA können zeitaufwendig und komplex sein. Konzentrieren Sie sich auf Ihr Kerngeschäft – wir kümmern uns um den rechtlichen Rahmen.'
              )}
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
                {t('Guidance available in German', 'Willkommen – Beratung auf Deutsch')}
              </h3>
              <p style={{ marginBottom: '0.75rem', fontSize: '1.05rem' }}>
                {t(
                  'We advise clients on U.S. immigration, market entry, and property questions. Our strategies are individualized and aligned with your goals in the United States.',
                  'Wir beraten zu US‑Einwanderung, Markteintritt und Immobilienfragen. Unsere Strategien sind individuell und auf Ihre Ziele in den USA abgestimmt.'
                )}
              </p>
              <p style={{ marginBottom: 0, fontSize: '1.05rem' }}>
                {t(
                  <>Schedule a conversation through our <Link href="/contact">contact page</Link>.</>,
                  <>Vereinbaren Sie ein Gespräch über unsere <Link href="/contact">Kontaktseite</Link>.</>
                )}
              </p>
            </div>
            <p style={{ marginTop: '1.25rem', fontSize: '1.05rem' }}>
              {t(
                <>Explore our <Link href="/practice-areas">practice areas</Link>, meet our <Link href="/attorney-bio">attorney</Link>, or <Link href="/contact">schedule a consultation</Link>.</>,
                <>Entdecken Sie unsere <Link href="/practice-areas">Rechtsgebiete</Link>, lernen Sie unsere <Link href="/attorney-bio">Anwältin</Link> kennen oder <Link href="/contact">vereinbaren Sie eine Beratung</Link>.</>
              )}
            </p>
            
            <div style={{ marginTop: '3rem', textAlign: 'left', maxWidth: '700px', marginLeft: 'auto', marginRight: 'auto' }}>
              <h3 style={{ marginBottom: '1.5rem', textAlign: 'center' }}>
                {t('What We Do Best', 'Worin wir besonders stark sind')}
              </h3>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ marginBottom: '1.5rem', paddingLeft: '2rem', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 0, color: 'var(--color-secondary)', fontSize: '1.5rem' }}>•</span>
                  <strong style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--color-primary)' }}>
                    {t(
                      'Clarifying the visa process and identifying the right solutions for you, your family, or your business',
                      'Den Visaprozess verständlich machen und passende Lösungen für Sie, Ihre Familie oder Ihr Unternehmen finden'
                    )}
                  </strong>
                </li>
                <li style={{ marginBottom: '1.5rem', paddingLeft: '2rem', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 0, color: 'var(--color-secondary)', fontSize: '1.5rem' }}>•</span>
                  <strong style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--color-primary)' }}>
                    {t(
                      'Understanding the legalities of owning U.S. property as a non-resident',
                      'Rechtliche Aspekte des Immobilieneigentums in den USA als Nicht‑Resident verstehen'
                    )}
                  </strong>
                </li>
                <li style={{ marginBottom: '1.5rem', paddingLeft: '2rem', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 0, color: 'var(--color-secondary)', fontSize: '1.5rem' }}>•</span>
                  <strong style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--color-primary)' }}>
                    {t(
                      'Navigating the complexities of starting and managing a U.S. business',
                      'Komplexität bei Gründung und Führung eines US‑Unternehmens souverän meistern'
                    )}
                  </strong>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Building Bridges Section */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-bg-light)' }}>
        <div className="container text-center reveal">
          <h2 style={{ fontSize: '3rem', marginBottom: '2rem' }}>
            {t('Building Bridges to U.S. Opportunity', 'Brücken in Richtung USA schaffen')}
          </h2>
        </div>
      </section>

      {/* From Temporary and Permanent Residence Section */}
      <section className="section-padding">
        <div className="container">
          <div className="content-image-grid">
            <div className="content-text reveal">
              <h2>{t('U.S. Visas, Green Cards, and Citizenship', 'US‑Visa, Green Cards und Staatsbürgerschaft')}</h2>
              <p style={{ fontSize: '1.1rem', marginTop: '1.5rem' }}>
                {t(
                  'If your personal or business plans include living, working, or investing in the United States, we assist with strategies that open doors and avoid costly pitfalls.',
                  'Wenn Ihre privaten oder geschäftlichen Pläne Leben, Arbeiten oder Investitionen in den USA umfassen, unterstützen wir Sie mit klaren Strategien und vermeiden kostspielige Fehler.'
                )}
              </p>
              <p style={{ fontSize: '1.1rem', marginTop: '1rem' }}>
                {t(
                  "It's not just about paperwork. It's about understanding your unique story and ambitions and helping you get to where you want to be as smoothly as possible.",
                  'Es geht nicht nur um Formulare, sondern um Ihre Ziele und den bestmöglichen Weg dorthin.'
                )}
              </p>

              <div style={{ marginTop: '2.5rem' }}>
                <h3 style={{ marginBottom: '1.5rem' }}>{t('How We Guide Clients', 'So begleiten wir Mandanten')}</h3>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  <li style={{ marginBottom: '2rem' }}>
                    <strong style={{ display: 'block', marginBottom: '0.75rem', color: 'var(--color-primary)', fontSize: '1.1rem' }}>
                      {t('Personalized Visa Plans:', 'Individuelle Visa‑Strategien:')}
                    </strong>
                    <p style={{ marginBottom: 0 }}>
                      {t(
                        'One size does not fit all. Your journey deserves attention to detail and solutions that work for your company or personal life. That may involve creating a path to U.S. residency or optimizing your ability to visit without incurring the obligations of residency.',
                        'Standardlösungen passen selten. Wir entwickeln einen Weg, der zu Ihrem Unternehmen oder Privatleben passt – ob mit Perspektive auf dauerhaften Aufenthalt oder für flexible Aufenthalte ohne Wohnsitzpflichten.'
                      )}
                    </p>
                    <p style={{ marginTop: '0.75rem', marginBottom: 0 }}>
                      {t(
                        <>Compare official guidance at{' '}
                          <a href="https://www.uscis.gov/" target="_blank" rel="noopener noreferrer">
                            USCIS
                          </a>{' '}
                          and the{' '}
                          <a href="https://travel.state.gov/" target="_blank" rel="noopener noreferrer">
                            U.S. Department of State
                          </a>
                          .</>,
                        <>Offizielle Hinweise finden Sie bei{' '}
                          <a href="https://www.uscis.gov/" target="_blank" rel="noopener noreferrer">
                            USCIS
                          </a>{' '}
                          und beim{' '}
                          <a href="https://travel.state.gov/" target="_blank" rel="noopener noreferrer">
                            U.S. Department of State
                          </a>
                          .</>
                      )}
                    </p>
                  </li>
                  <li style={{ marginBottom: '2rem' }}>
                    <strong style={{ display: 'block', marginBottom: '0.75rem', color: 'var(--color-primary)', fontSize: '1.1rem' }}>
                      {t('Comprehensive Representation in Other Areas of the Law:', 'Umfassende Beratung in weiteren Rechtsgebieten:')}
                    </strong>
                    <p style={{ marginBottom: 0 }}>
                      {t(
                        'Whether you are starting a new business venture or purchasing property for personal reasons, we can assist you with U.S. market entry and the legal complexities of buying and owning property as a non-resident.',
                        'Ob Unternehmensgründung oder Immobilienkauf – wir unterstützen bei Markteintritt und den rechtlichen Besonderheiten des Eigentums als Nicht‑Resident.'
                      )}
                    </p>
                  </li>
                  <li style={{ marginBottom: '2rem' }}>
                    <strong style={{ display: 'block', marginBottom: '0.75rem', color: 'var(--color-primary)', fontSize: '1.1rem' }}>
                      {t('Global Perspective:', 'Internationale Perspektive:')}
                    </strong>
                    <p style={{ marginBottom: 0 }}>
                      {t(
                        'Our international background and decades of serving clients from around the world mean sensitivity to cultural issues, the immigrant experience, and a holistic approach that supports informed decisions.',
                        'Unser internationaler Hintergrund und die langjährige Arbeit mit Mandanten weltweit sorgen für kulturelles Verständnis und einen ganzheitlichen Blick.'
                      )}
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="content-image reveal">
              <div style={{
                width: '100%',
                height: '100%',
                minHeight: '500px',
                backgroundColor: '#ddd',
                borderRadius: '8px',
                backgroundImage: 'url(https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800)',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }} />
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
            <h2>{t('Why Clients Choose Henning Law', 'Warum Mandanten Henning Law wählen')}</h2>
          </div>

          <div className="features-grid">
            <div className="feature-card reveal">
              <div className="feature-icon">
                <IconStrategy />
              </div>
              <h3>{t('Personalized U.S. Immigration Strategies for Families and Businesses', 'Individuelle Einwanderungsstrategien für Familien und Unternehmen')}</h3>
              <p>
                {t(
                  'We recognize that each immigration journey is distinct and shaped by individual backgrounds and aspirations. You benefit from personalized advice and creativity based on years of experience in the U.S. market.',
                  'Jede Einwanderung ist individuell. Sie profitieren von Erfahrung, Weitblick und maßgeschneiderten Strategien für Ihre langfristigen Ziele.'
                )}
              </p>
            </div>

            <div className="feature-card reveal">
              <div className="feature-icon">
                <IconGlobe />
              </div>
              <h3>{t('Global Perspective for International Clients', 'Internationale Perspektive für Mandanten weltweit')}</h3>
              <p>
                {t(
                  "Ms. Henning brings personal experience as an immigrant and decades of advising individuals, businesses, and families in their transition to the United States. The firm's expertise supports a smooth landing.",
                  'Ms. Henning bringt eigene Migrationserfahrung und jahrzehntelange Beratung internationaler Mandanten mit. So entsteht ein sicherer, gut vorbereiteter Weg in die USA.'
                )}
              </p>
            </div>

            <div className="feature-card reveal">
              <div className="feature-icon">
                <IconKey />
              </div>
              <h3>{t('Comprehensive U.S. Market Entry and Property Guidance', 'Umfassende Begleitung bei Markteintritt und Immobilien')}</h3>
              <p>
                {t(
                  'Not all questions are immigration questions. We offer comprehensive representation in real estate, corporate, taxation, estate planning, and related areas, and coordinate with specialists as needed.',
                  'Nicht jede Frage ist rein immigration‑rechtlich. Wir beraten zu Immobilien, Unternehmen, Steuern, Nachlassplanung und koordinieren bei Bedarf Spezialisten.'
                )}
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
              {t('Supporting Immigrants to Thrive in the U.S.', 'Menschen auf ihrem Weg in die USA begleiten')}
            </h2>
            <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>
              {t(
                <>Welcome to <strong>Henning Law Firm PLLC</strong>, where nothing gives us greater satisfaction than assisting clients in realizing personal, professional, or commercial goals in the United States.</>,
                <>Willkommen bei <strong>Henning Law Firm PLLC</strong>. Wir begleiten Mandanten dabei, persönliche, berufliche oder unternehmerische Ziele in den USA zu erreichen.</>
              )}
            </p>
            <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>
              {t(
                "Ms. Henning's background as an immigrant, her service as former Honorary Consul of Germany in Florida, and her experience as a practicing attorney provide a unique perspective on the legal and cultural aspects of U.S. market entry and immigration.",
                'Ms. Hennings eigener Migrationshintergrund, ihre Tätigkeit als frühere Honorarkonsulin Deutschlands in Florida und ihre Erfahrung als Anwältin bieten eine besondere Perspektive auf rechtliche und kulturelle Aspekte von Markteintritt und Einwanderung.'
              )}
            </p>
            <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>
              {t(<strong>What sets us apart?</strong>, <strong>Was uns auszeichnet?</strong>)}
            </p>
            <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>
              {t(
                "We address questions you may not even know to ask. Our holistic approach considers individual goals and complex issues like tax planning, estate planning, corporate structure, and contracts. We also work with a trusted specialist network to ensure personalized guidance.",
                'Wir beantworten Fragen, die man oft erst spät stellt. Unser ganzheitlicher Ansatz berücksichtigt Ziele und komplexe Themen wie Steuer‑ und Nachlassplanung, Unternehmensstruktur und Verträge. Zudem arbeiten wir mit einem Netzwerk spezialisierter Partner.'
              )}
            </p>
            <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>
              {t(<strong>What we do not do</strong>, <strong>Was wir nicht tun</strong>)}
            </p>
            <p style={{ fontSize: '1.1rem', marginBottom: 0 }}>
              {t(
                'While we stand ready to help with legal challenges, we do not provide financial advice or investment recommendations. Financial decisions are made by clients or with their independently selected advisors.',
                'Wir unterstützen bei rechtlichen Fragen, bieten jedoch keine Finanz‑ oder Anlageberatung. Finanzentscheidungen treffen Mandanten selbst oder mit ihren eigenen Beratern.'
              )}
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
            <h2>{t('What Our Clients Say', 'Was unsere Mandanten sagen')}</h2>
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
              {t('Frequently Asked Questions', 'Häufige Fragen')}
            </h2>
            <div style={{ display: 'grid', gap: '1.5rem' }}>
              {faqItems.map((item) => (
                <div
                  key={item.question}
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
                    {item.question}
                  </h3>
                  <p style={{ margin: 0, color: 'var(--color-text-light)', lineHeight: '1.7' }}>
                    {item.answer}
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
              {t('Your Path & Next Steps', 'Ihr Weg & nächste Schritte')}
            </h2>
            <p className="text-center reveal" style={{ fontSize: '1.1rem', marginBottom: '2.5rem' }}>
              {t(
                'A clear, step-by-step process for planning U.S. immigration or market entry.',
                'Ein klarer, schrittweiser Prozess für Einwanderung oder Markteintritt in die USA.'
              )}
            </p>
            <div style={{ display: 'grid', gap: '1.5rem' }}>
              {[
                {
                  title: t('1) Contact & Intake', '1) Kontakt & Erstaufnahme'),
                  text: t(
                    'Fill out the contact form or call us. We review your goals, timeline, and current status.',
                    'Füllen Sie das Formular aus oder rufen Sie an. Wir prüfen Ziele, Zeitrahmen und Status.'
                  ),
                },
                {
                  title: t('2) Strategy & Options', '2) Strategie & Optionen'),
                  text: t(
                    'We identify the best visa or residency pathway and outline risks, costs, and timelines.',
                    'Wir identifizieren den passenden Weg und erläutern Risiken, Kosten und Ablauf.'
                  ),
                },
                {
                  title: t('3) Document Plan', '3) Dokumentenplan'),
                  text: t(
                    'You receive a document checklist and guidance for evidence, translations, and filings.',
                    'Sie erhalten eine Checkliste sowie Hinweise zu Nachweisen, Übersetzungen und Einreichungen.'
                  ),
                },
                {
                  title: t('4) Filing & Follow‑Up', '4) Einreichung & Nachverfolgung'),
                  text: t(
                    'We prepare and submit your case, track updates, and respond to government requests.',
                    'Wir bereiten den Fall vor, reichen ein, verfolgen Updates und reagieren auf Behördenanfragen.'
                  ),
                },
                {
                  title: t('5) Decision & Next Steps', '5) Entscheidung & nächste Schritte'),
                  text: t(
                    'We prepare you for interviews, approvals, and long‑term compliance requirements.',
                    'Wir bereiten auf Interviews, Entscheidungen und langfristige Anforderungen vor.'
                  ),
                },
              ].map((step) => (
                <div
                  key={step.title}
                  className="reveal"
                  style={{
                    padding: '1.5rem',
                    borderRadius: '12px',
                    border: '1px solid var(--color-border)',
                    backgroundColor: '#fff',
                    boxShadow: 'var(--shadow-sm)',
                  }}
                >
                  <h3 style={{ marginBottom: '0.5rem', color: 'var(--color-primary)' }}>{step.title}</h3>
                  <p style={{ margin: 0, color: 'var(--color-text-light)', lineHeight: '1.7' }}>{step.text}</p>
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
            {t('Unlock Your American Dream Today', 'Starten Sie Ihren Weg in die USA')}
          </h2>
          <p style={{ 
            fontSize: '1.3rem', 
            marginBottom: '2.5rem', 
            color: 'rgba(255,255,255,0.95)',
            maxWidth: '700px',
            marginLeft: 'auto',
            marginRight: 'auto'
          }}>
            {t('Tailored solutions for your U.S. immigration journey', 'Individuelle Lösungen für Ihren Einwanderungsweg')}
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