"use client";

import Link from 'next/link';
import type { ReactNode } from 'react';
import { images } from '@/data/images';
import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function AttorneyBio() {
    const [imgError, setImgError] = useState(false);
    const [honoraryImgError, setHonoraryImgError] = useState(false);
    const { language, t: translate } = useLanguage();
    const t = (en: ReactNode, de?: ReactNode) => (language === 'de' ? de ?? en : en);
    const faqItems = language === 'de'
        ? [
            {
                question: 'Bieten Sie Beratung auf Deutsch an?',
                answer:
                    'Ja. Wir beraten Mandanten zu US‑Einwanderung, Unternehmensgründung und Immobilienfragen.',
            },
            {
                question: 'Welche Erfahrung bringen Sie mit?',
                answer:
                    'Ms. Henning war Honorarkonsulin der Bundesrepublik Deutschland in Florida und berät seit vielen Jahren internationale Mandanten.',
            },
            {
                question: 'Wie läuft die erste Beratung ab?',
                answer:
                    'Nach einer kurzen Schilderung Ihrer Ziele besprechen wir die nächsten Schritte und Unterlagen.',
            },
        ]
        : [
            {
                question: 'Do you offer bilingual guidance?',
                answer:
                    'Yes. We advise clients on U.S. immigration, business formation, and property questions.',
            },
            {
                question: 'What experience do you bring?',
                answer:
                    'Ms. Henning served as Honorary Consul of Germany in Florida and has advised international clients for many years.',
            },
            {
                question: 'How does an initial consultation work?',
                answer:
                    'After a short summary of your goals, we outline next steps and required documents.',
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
    const galleryImages = [
        {
            src: '/images/2krCRQV6hI3DnsbJCcHzoQOt4LDpH7Mw5nYkkfyf-_x600-resize-trim(0,0,1500,2250).jpg',
            alt: 'Norma Henning speaking at event',
        },
        {
            src: '/images/BsDwgkl51eIjLKieDxHYz2c9Rvp8JzD8ec2FcfYl-_x600-resize-trim(0,0,3264,2448).jpg',
            alt: 'Honorary consul ceremony',
        },
        {
            src: '/images/nLXDt74qHlkBZ2fm03j72SLkdwgW8UFTzVwSJJV4-_x600-resize-trim(0,0,3024,4032).jpg',
            alt: 'Aboard naval vessel',
        },
        {
            src: '/images/C4ASTuDUUtisY4BU8ZXwWQIhE6yhO08tHuJlBQzs-_x600-resize-trim(0,0,1550,913).jpg',
            alt: 'German embassy group photo',
        },
        {
            src: '/images/7PWgsf7ekyxExcbqsPx56M9JvVBoxh9qBQjfF9te-_x600-resize-trim(0,0,1280,960).png',
            alt: 'Public policy lecture',
        },
        {
            src: '/images/anS41g8Ar2pXAEjsz8HxxF8uXZ1rcQPdd5F6DG0O-_x600-resize-trim(0,0,800,800).jpg',
            alt: 'Uli Stein cartoon',
        },
        {
            src: '/images/UN7YODP2OLJi16bTeXhjlHnPFtgPFi4Q06v7Qd7M-1920x_-resize-trim(0,0,3840,2563).jpg',
            alt: 'US Market Entry Bootcamp group',
        },
        {
            src: '/images/UxiuLeh5Z56lqdD2JNYqDvsg5tVtHqjDEnGJrT8w-638x_-resize-trim(0,0,3024,4032).jpg',
            alt: 'Event photo with German emblem',
        },
    ];

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <section className="page-header section-padding text-center" style={{ backgroundColor: 'var(--color-primary)', color: '#fff' }}>
                <div className="container">
                    <h1 style={{ color: '#fff' }}>
                        {t('U.S. Immigration Attorney', 'US‑Einwanderungsanwältin')}
                    </h1>
                    <p style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.9)', marginTop: '1rem' }}>
                        {t('Meet Norma Henning, J.D.', 'Norma Henning, J.D. kennenlernen')}
                    </p>
                </div>
            </section>

            <section className="section-padding">
                <div className="container">
                    <div className="bio-grid">
                        <div className="bio-image">
                            <div className="image-wrapper">
                                <img
                                    src={imgError ? 'https://images.pexels.com/photos/5668859/pexels-photo-5668859.jpeg?auto=compress&cs=tinysrgb&w=800' : images.attorneyPortrait2}
                                    alt="Norma Henning, J.D., founding attorney at Henning Law Firm specializing in U.S. immigration law"
                                    decoding="async"
                                    style={{
                                        width: '100%',
                                        height: 'auto',
                                        borderRadius: '8px',
                                        objectFit: 'cover',
                                        boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
                                        display: 'block',
                                        minHeight: '500px',
                                        backgroundColor: '#f0f0f0'
                                    }}
                                    onError={(e) => {
                                        if (!imgError) {
                                            setImgError(true);
                                            (e.target as HTMLImageElement).src = 'https://images.pexels.com/photos/5668859/pexels-photo-5668859.jpeg?auto=compress&cs=tinysrgb&w=800';
                                        }
                                    }}
                                />
                            </div>
                        </div>

                        <div className="bio-content">
                            <h2>Norma Henning, J.D.</h2>
                            <h3 style={{ color: 'var(--color-secondary)', marginBottom: '2rem', fontSize: '1.5rem', fontWeight: '400' }}>
                                {t('Founding Attorney', 'Gründungsanwältin')}
                            </h3>

                            <div style={{ marginBottom: '2rem', padding: '1.5rem', backgroundColor: 'var(--color-bg-light)', borderRadius: '12px' }}>
                                <h3 style={{ marginBottom: '0.75rem' }}>
                                    {t('Guidance available in German', 'Beratung auf Deutsch')}
                                </h3>
                                <p style={{ fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '0.75rem' }}>
                                    {t(
                                        'We advise clients on U.S. immigration, market entry, and property questions. Our strategy aligns with your goals and timeline.',
                                        'Wir beraten Mandanten zu US‑Einwanderung, Markteintritt und Immobilienfragen. Unsere Strategie orientiert sich an Ihren Zielen und Ihrem Zeitplan.'
                                    )}
                                </p>
                                <p style={{ marginBottom: 0 }}>
                                    {t(
                                        <>Reach out via the <Link href="/contact">contact page</Link> for an initial assessment.</>,
                                        <>Kontaktieren Sie uns über die <Link href="/contact">Kontaktseite</Link> für eine erste Einschätzung.</>
                                    )}
                                </p>
                            </div>

                            <div style={{ marginBottom: '2rem' }}>
                                <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                                    {t(
                                        <>Welcome to <strong>Henning Law Firm PLLC</strong>, where nothing gives us greater satisfaction than assisting clients in achieving personal, professional, or commercial goals in the United States.</>,
                                        <>Willkommen bei <strong>Henning Law Firm PLLC</strong>. Wir unterstützen Mandanten dabei, persönliche, berufliche oder unternehmerische Ziele in den USA zu erreichen.</>
                                    )}
                                </p>
                            </div>

                            <div style={{ marginBottom: '2rem' }}>
                                <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                                    {t(
                                        "Ms. Henning's background as an immigrant, her service as former Honorary Consul of Germany in Florida, and her experience as a practicing attorney provide a unique perspective on the legal and cultural aspects of U.S. market entry and immigration.",
                                        'Ms. Hennings eigener Migrationshintergrund, ihre Tätigkeit als frühere Honorarkonsulin Deutschlands in Florida und ihre Erfahrung als Anwältin bieten eine besondere Perspektive auf rechtliche und kulturelle Fragen.'
                                    )}
                                </p>
                            </div>

                            <div style={{ marginBottom: '2rem' }}>
                                <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                                    {t(
                                        'Her approach focuses on tailored visa and immigration strategies and counseling in areas of property ownership and U.S. market entry for business ventures.',
                                        'Ihr Ansatz konzentriert sich auf maßgeschneiderte Visa‑ und Einwanderungsstrategien sowie Beratung zu Immobilieneigentum und Markteintritt.'
                                    )}
                                </p>
                            </div>

                            <div style={{ marginBottom: '2rem' }}>
                                <h3 style={{ marginBottom: '1rem', marginTop: '2rem' }}>
                                    {t('What Sets Us Apart', 'Was uns auszeichnet')}
                                </h3>
                                <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                                    {t(
                                        'We address questions you may not even know to ask. Our holistic approach considers individual goals and complexities such as tax planning, estate planning, corporate structure, and contracts.',
                                        'Wir beantworten Fragen, die man oft erst spät stellt. Unser Ansatz berücksichtigt Ziele und komplexe Themen wie Steuer‑ und Nachlassplanung, Unternehmensstruktur und Verträge.'
                                    )}
                                </p>
                            </div>

                            <div style={{ marginBottom: '2rem' }}>
                                <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                                    {t(
                                        'We work with a network of trusted specialists to ensure personalized guidance at every step.',
                                        'Wir arbeiten mit einem Netzwerk spezialisierter Partner, um eine individuelle Begleitung sicherzustellen.'
                                    )}
                                </p>
                            </div>

                            <div style={{ marginTop: '3rem', padding: '2rem', backgroundColor: 'var(--color-bg-light)', borderRadius: '8px' }}>
                                <h4 style={{ marginBottom: '1rem' }}>
                                    {t('Education & Professional Background', 'Ausbildung & beruflicher Hintergrund')}
                                </h4>
                                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                    <li style={{ marginBottom: '1rem', paddingLeft: '2rem', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: 'var(--color-secondary)', fontSize: '1.2rem' }}>•</span>
                                        {t('Juris Doctor (J.D.)', 'Juris Doctor (J.D.)')}
                                    </li>
                                    <li style={{ marginBottom: '1rem', paddingLeft: '2rem', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: 'var(--color-secondary)', fontSize: '1.2rem' }}>•</span>
                                        {t('Former Honorary Consul of Germany in Florida', 'Ehemalige Honorarkonsulin der Bundesrepublik Deutschland in Florida')}
                                    </li>
                                    <li style={{ marginBottom: '1rem', paddingLeft: '2rem', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: 'var(--color-secondary)', fontSize: '1.2rem' }}>•</span>
                                        {t('Member of the Florida Bar and Minnesota Bar', 'Mitglied der Florida Bar und Minnesota Bar')}
                                    </li>
                                    <li style={{ marginBottom: '1rem', paddingLeft: '2rem', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: 'var(--color-secondary)', fontSize: '1.2rem' }}>•</span>
                                        {t('Extensive experience in U.S. immigration law', 'Umfangreiche Erfahrung im US-Einwanderungsrecht')}
                                    </li>
                                    <li style={{ marginBottom: '1rem', paddingLeft: '2rem', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: 'var(--color-secondary)', fontSize: '1.2rem' }}>•</span>
                                        {t('Personal experience as an immigrant', 'Persönliche Erfahrung als Einwanderin')}
                                    </li>
                                </ul>
                            </div>

                            <div className="bio-cta" style={{ marginTop: '3rem' }}>
                                <Link href="/contact" className="btn btn-primary">
                                    {translate('cta.contactForm')}
                                </Link>
                                <a href="tel:2398216504" className="btn btn-outline">
                                    {translate('cta.callUs')}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Honorary Consul Section */}
                <div className="container" style={{ marginTop: '4rem' }}>
                    <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                        <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>
                            {t('Honorary Consul of Germany in Florida', 'Honorarkonsulin der Bundesrepublik Deutschland in Florida')}
                        </h2>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem', alignItems: 'center' }}>
                            <div className="honorary-consul-image" style={{ borderRadius: '8px', overflow: 'hidden', boxShadow: '0 8px 24px rgba(0,0,0,0.12)' }}>
                                <img
                                    src={honoraryImgError ? 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800' : images.attorneyHonoraryConsul}
                                    alt="Norma Henning standing with the Honorary Consul emblem of the Federal Republic of Germany in Florida"
                                    loading="lazy"
                                    decoding="async"
                                    style={{
                                        width: '100%',
                                        height: 'auto',
                                        display: 'block',
                                        minHeight: '400px',
                                        backgroundColor: '#f0f0f0'
                                    }}
                                    onError={(e) => {
                                        if (!honoraryImgError) {
                                            setHonoraryImgError(true);
                                            (e.target as HTMLImageElement).src = 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800';
                                        }
                                    }}
                                />
                            </div>
                            <div>
                                <p style={{ fontSize: '1.1rem', lineHeight: '1.8', textAlign: 'center' }}>
                                    {t(
                                        'Ms. Henning served as the Honorary Consul of Germany in Florida, bringing an international perspective and deep understanding of cross-cultural legal matters to her practice.',
                                        'Ms. Henning war Honorarkonsulin Deutschlands in Florida und bringt eine internationale Perspektive sowie tiefes Verständnis für grenzüberschreitende Rechtsfragen ein.'
                                    )}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container" style={{ marginTop: '4rem' }}>
                    <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                        <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>
                            {t('Frequently Asked Questions', 'Häufige Fragen')}
                        </h2>
                        <div style={{ display: 'grid', gap: '1.5rem' }}>
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
                </div>

                <div className="container" style={{ marginTop: '4rem' }}>
                    <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
                        <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>
                            {t('Gallery: Legal Community Highlights', 'Galerie: Einblicke aus der Rechtscommunity')}
                        </h2>
                        <div className="bio-gallery">
                            {galleryImages.map((image) => (
                                <div key={image.src} className="bio-gallery-item">
                                                    <img src={image.src} alt={image.alt} loading="lazy" decoding="async" />
                                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <style jsx>{`
                    .bio-grid {
                        display: grid;
                        grid-template-columns: 1fr;
                        gap: 4rem;
                        align-items: start;
                    }
                    
                    @media (min-width: 968px) {
                        .bio-grid {
                            grid-template-columns: 1fr 1.5fr;
                        }
                    }
                    
                    .bio-image .image-wrapper {
                        width: 100%;
                        border-radius: 8px;
                        overflow: hidden;
                    }
                    
                    .bio-content h2 {
                        margin-bottom: 0.5rem;
                        font-size: 3rem;
                    }
                    
                    .bio-content h3 {
                        font-size: 1.5rem;
                        margin-bottom: 2rem;
                    }
                    
                    .bio-content h4 {
                        font-size: 1.3rem;
                        margin-bottom: 1rem;
                    }

                    .bio-cta {
                        display: flex;
                        flex-wrap: wrap;
                        gap: 1rem;
                        align-items: center;
                    }
                    
                    @media (min-width: 768px) {
                        .honorary-consul-image {
                            max-width: 700px;
                            margin: 0 auto;
                        }
                    }

                    .bio-gallery {
                        display: grid;
                        grid-template-columns: repeat(2, 1fr);
                        gap: 1.5rem;
                    }

                    .bio-gallery-item {
                        border-radius: 12px;
                        overflow: hidden;
                        box-shadow: var(--shadow-sm);
                        background: #fff;
                    }

                    .bio-gallery-item img {
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                        display: block;
                    }

                    @media (min-width: 968px) {
                        .bio-gallery {
                            grid-template-columns: repeat(4, 1fr);
                        }
                    }
                `}</style>
            </section>
        </>
    );
}