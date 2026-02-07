"use client";

import Link from 'next/link';
import type { ReactNode } from 'react';
import { practiceAreas, PracticeAreaIconKey } from '@/data/practiceAreas';
import {
    IconBriefcase,
    IconCorporate,
    IconCitizenship,
    IconFamily,
    IconHome,
    IconResidency,
} from '@/components/Icons';
import { useLanguage } from '@/contexts/LanguageContext';

export default function PracticeAreas() {
    const services = practiceAreas;
    const { language, t: translate } = useLanguage();
    const t = (en: ReactNode, de?: ReactNode) => (language === 'de' ? de ?? en : en);
    const faqItems = language === 'de'
        ? [
            {
                question: 'Arbeiten Sie mit Mandanten außerhalb der USA?',
                answer:
                    'Ja. Wir beraten Mandanten weltweit per Videokonferenz und strategischer Planung.',
            },
            {
                question: 'Welche Visakategorien sind für Investoren und Unternehmen relevant?',
                answer:
                    'Häufige Optionen: E-1/E-2, L-1, O-1, EB-Kategorien einschließlich EB-5 für dauerhaften Aufenthalt. Nur Einwanderungsberatung.',
            },
            {
                question: 'Bieten Sie Anlage- oder Finanzberatung?',
                answer:
                    'Nein. Wir bieten ausschließlich Einwanderungsberatung. Keine Anlageberatung, keine Projektauswahl, keine Finanzberatung.',
            },
            {
                question: 'Wie starte ich eine Beratung?',
                answer:
                    'Kontaktieren Sie uns mit einer kurzen Zusammenfassung Ihrer Ziele. Wir skizzieren die nächsten Schritte.',
            },
        ]
        : [
            {
                question: 'Do you work with clients outside the U.S.?',
                answer:
                    'Yes. We regularly assist clients abroad through virtual consultations and strategic planning.',
            },
            {
                question: 'Which visa categories are common for investors and companies?',
                answer:
                    'Common options include E-1/E-2 treaty visas, L-1 intra-company transfers, O-1 extraordinary ability, and EB categories including EB-5 for permanent residency. Immigration counsel only.',
            },
            {
                question: 'Do you provide investment or financial advice?',
                answer:
                    'No. We provide immigration counsel only. We do not advise on investments, select projects, or provide financial advice.',
            },
            {
                question: 'How do we start a consultation?',
                answer:
                    'Contact us with a short summary of your immigration objectives. We will outline the next steps and required documents.',
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
    const iconMap: Record<PracticeAreaIconKey, React.ReactNode> = {
        briefcase: <IconBriefcase />,
        residency: <IconResidency />,
        family: <IconFamily />,
        citizenship: <IconCitizenship />,
        corporate: <IconCorporate />,
        home: <IconHome />,
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <section className="page-header section-padding text-center reveal" style={{ backgroundColor: 'var(--color-primary)', color: '#fff' }}>
                <div className="container">
                    <h1 style={{ color: '#fff' }}>
                        {translate('practiceAreas.pageHeading')}
                    </h1>
                    <p style={{ maxWidth: '900px', margin: '1.5rem auto 0', color: 'rgba(255,255,255,0.9)', fontSize: '1.2rem' }}>
                        {translate('practiceAreas.pageSubheading')}
                    </p>
                </div>
            </section>

            <section className="section-padding">
                <div className="container">
                    <div className="intro-text reveal" style={{ maxWidth: '900px', margin: '0 auto 4rem', textAlign: 'center' }}>
                        <h2>{t('How We Help Clients', 'So helfen wir Mandanten')}</h2>
                        <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginTop: '1.5rem' }}>
                            {t(
                                'We provide strategic immigration counsel for principals, families, and businesses. Global mobility and residence strategy—including EB-5 and investor-based pathways. Immigration counsel only; no investment or financial advice.',
                                'Strategische Einwanderungsberatung für Mandanten, Familien und Unternehmen. Globale Mobilität und Aufenthaltsstrategie—u. a. EB-5 und investorenbasierte Wege. Nur Rechtsberatung.'
                            )}
                        </p>
                        <div
                            style={{
                                marginTop: '1.5rem',
                                padding: '1.5rem',
                                borderRadius: '12px',
                                backgroundColor: 'var(--color-bg-light)',
                                textAlign: 'left',
                            }}
                        >
                            <h3 style={{ marginBottom: '0.75rem' }}>
                                {translate('practiceAreas.languageSupport')}
                            </h3>
                            <p style={{ marginBottom: '0.75rem', fontSize: '1.05rem' }}>
                                {t(
                                    'Counsel is available in English, German, and Spanish. We serve clients worldwide.',
                                    'Beratung auf Englisch, Deutsch und Spanisch. Mandanten weltweit.'
                                )}
                            </p>
                            <p style={{ marginBottom: 0, fontSize: '1.05rem' }}>
                                {t(
                                    <>Schedule a conversation through our <Link href="/contact">contact page</Link>.</>,
                                    <>Vereinbaren Sie ein Gespräch über unsere <Link href="/contact">Kontaktseite</Link>.</>
                                )}
                            </p>
                        </div>
                        <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                            {t(
                                'Click the tiles below to explore practice areas: global mobility and residence, EB-5 and investor-based pathways, travel and work visas, family immigration, and citizenship.',
                                'Klicken Sie auf die Kacheln: globale Mobilität, EB-5 und investorenbasierte Wege, Reise- und Arbeitsvisa, Familieneinwanderung, Staatsbürgerschaft.'
                            )}
                        </p>
                        <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: 0 }}>
                            <strong>
                                {t(
                                    'Startups - don’t let visa eligibility for key personnel be an afterthought!',
                                    'Start-ups – Visa-Fragen für Schlüsselpersonen sollten kein Nachgedanke sein!'
                                )}
                            </strong>{' '}
                            {t(
                                'We work with your corporate counsel to help create the right structures to allow you or your employees to enter the United States to pursue your goals.',
                                'Wir arbeiten mit Ihrer Unternehmensberatung zusammen, um die passenden Strukturen für Ihren Eintritt in die USA zu schaffen.'
                            )}
                        </p>
                        <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginTop: '1.5rem' }}>
                            {t(
                                'Contact us to discuss your situation and learn how we can assist with work visas, residency options, and U.S. property ownership.',
                                'Kontaktieren Sie uns, um Ihre Situation zu besprechen – von Arbeits‑ und Aufenthaltsvisa bis zu Immobilieneigentum in den USA.'
                            )}
                        </p>
                        <p style={{ fontSize: '1.05rem', lineHeight: '1.7', marginTop: '1.25rem' }}>
                            {t(
                                <>Meet <Link href="/attorney-bio">Norma Henning, J.D.</Link>, or <Link href="/contact">schedule a consultation</Link> to review your goals.</>,
                                <>Lernen Sie <Link href="/attorney-bio">Norma Henning, J.D.</Link> kennen oder <Link href="/contact">vereinbaren Sie eine Beratung</Link>.</>
                            )}
                        </p>
                        <p style={{ fontSize: '1rem', lineHeight: '1.7', marginTop: '1rem' }}>
                            {t(
                                <>Helpful resources:{' '}
                                    <a href="https://www.uscis.gov/" target="_blank" rel="noopener noreferrer">
                                        USCIS
                                    </a>{' '}
                                    and{' '}
                                    <a href="https://travel.state.gov/" target="_blank" rel="noopener noreferrer">
                                        U.S. Department of State
                                    </a>
                                    .</>,
                                <>Hilfreiche Quellen:{' '}
                                    <a href="https://www.uscis.gov/" target="_blank" rel="noopener noreferrer">
                                        USCIS
                                    </a>{' '}
                                    und das{' '}
                                    <a href="https://travel.state.gov/" target="_blank" rel="noopener noreferrer">
                                        U.S. Department of State
                                    </a>
                                    .</>
                            )}
                        </p>
                    </div>

                    <div className="services-grid">
                        {services.map((service) => (
                            <div key={service.id} className="service-card reveal">
                                <div className="service-icon">
                                    {iconMap[service.icon]}
                                </div>
                                <h3
                                    style={{
                                        display: '-webkit-box',
                                        WebkitLineClamp: 2,
                                        WebkitBoxOrient: 'vertical',
                                        overflow: 'hidden',
                                    }}
                                >
                                    {translate(`pa.${service.id}.title`)}
                                </h3>
                                <p
                                    style={{
                                        lineHeight: '1.6',
                                        color: 'var(--color-text-light)',
                                        display: '-webkit-box',
                                        WebkitLineClamp: 2,
                                        WebkitBoxOrient: 'vertical',
                                        overflow: 'hidden',
                                    }}
                                >
                                    {translate(`pa.${service.id}.shortDescription`)}
                                </p>
                                <div style={{ display: 'flex', gap: '1rem', marginTop: 'auto', paddingTop: '1rem' }}>
                                    <Link href={`/practice-areas/${service.slug}`} className="read-more-link">
                                        Learn More →
                                    </Link>
                                    <Link href="/contact" className="read-more-link" style={{ color: 'var(--color-primary)' }}>
                                        Contact Us →
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="reveal" style={{ marginTop: '4rem' }}>
                        <h2 className="text-center" style={{ marginBottom: '2rem' }}>
                            {t('Frequently Asked Questions', 'Häufige Fragen')}
                        </h2>
                        <div style={{ display: 'grid', gap: '1.5rem', maxWidth: '900px', margin: '0 auto' }}>
                            {faqItems.map((item) => (
                                <div
                                    key={item.question}
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

                    <div className="cta-section reveal" style={{ marginTop: '4rem', textAlign: 'center', padding: '3rem', backgroundColor: 'var(--color-bg-light)', borderRadius: '12px', boxShadow: 'var(--shadow-sm)' }}>
                        <h3 style={{ marginBottom: '1.5rem' }}>
                            {t('Ready to Start Your U.S. Immigration Plan?', 'Bereit für Ihren US‑Einwanderungsplan?')}
                        </h3>
                        <p style={{ fontSize: '1.1rem', marginBottom: '2rem', maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto' }}>
                            {t(
                                'We help you design your path to U.S. residence and long-term presence. Contact us for a consultation.',
                                'Wir unterstützen Sie bei Aufenthalts- und Mobilitätsfragen. Kontaktieren Sie uns für eine Beratung.'
                            )}
                        </p>
                        <div className="cta-buttons">
                            <Link href="/contact" className="btn btn-primary">
                                {translate('cta.contactForm')}
                            </Link>
                            <a href="tel:2398216504" className="btn btn-outline">
                                {translate('cta.callUs')}
                            </a>
                        </div>
                    </div>
                </div>

                <style jsx>{`
                    .services-grid {
                        display: grid;
                        grid-template-columns: 1fr;
                        gap: 3.25rem;
                    }
                    
                    @media (min-width: 768px) {
                        .services-grid {
                            grid-template-columns: repeat(2, 1fr);
                        }
                    }
                    
                    @media (min-width: 1200px) {
                        .services-grid {
                            grid-template-columns: repeat(3, 1fr);
                        }
                    }
                    
                    .service-card {
                        background: #fff;
                        border: 1px solid rgba(15, 23, 42, 0.08);
                        padding: 3rem;
                        display: flex;
                        flex-direction: column;
                        transition: transform var(--transition-base), box-shadow var(--transition-base), border-color var(--transition-base);
                        border-left: 4px solid var(--color-secondary);
                        border-radius: 12px;
                        box-shadow: var(--shadow-sm);
                    }
                    
                    .service-card:hover {
                        box-shadow: var(--shadow-md);
                        transform: translateY(-8px);
                        border-left-color: var(--color-primary);
                    }
                    
                    .service-card h3 {
                        font-size: 1.25rem;
                        margin-bottom: 0.75rem;
                        color: var(--color-primary);
                        line-height: 1.3;
                        font-weight: 600;
                    }

                    .service-icon {
                        color: var(--color-secondary);
                        width: 56px;
                        height: 56px;
                        margin-bottom: 1.5rem;
                    }

                    .service-icon :global(svg) {
                        width: 56px;
                        height: 56px;
                    }
                    
                    .service-card p {
                        flex-grow: 1;
                        margin-bottom: 1.25rem;
                        font-size: 0.98rem;
                    }
                    
                    .read-more-link {
                        margin-top: auto;
                        padding-top: 1rem;
                        font-weight: 600;
                        color: var(--color-secondary);
                        font-size: 1rem;
                        text-transform: uppercase;
                        letter-spacing: 0.5px;
                        text-decoration: none;
                        display: inline-block;
                        transition: color 0.3s ease;
                    }
                    
                    .read-more-link:hover {
                        color: var(--color-primary);
                    }
                `}</style>
            </section>
        </>
    );
}