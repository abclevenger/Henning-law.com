 "use client";

import React, { useState, type ReactNode } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { images } from '@/data/images';
import { useLanguage } from '@/contexts/LanguageContext';

export default function AttorneyBio() {
    const [imgError, setImgError] = useState(false);
    const [honoraryImgError, setHonoraryImgError] = useState(false);
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
                        <React.Fragment key={`${key}-${index}`}>
                            {segment}
                        </React.Fragment>
                    );
                })}
            </>
        );
    };
    const faqItems = [
        {
            questionKey: 'attorney.faq.q1.question',
            answerKey: 'attorney.faq.q1.answer',
        },
        {
            questionKey: 'attorney.faq.q2.question',
            answerKey: 'attorney.faq.q2.answer',
        },
        {
            questionKey: 'attorney.faq.q3.question',
            answerKey: 'attorney.faq.q3.answer',
        },
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
                        {translate('attorney.page.heading')}
                    </h1>
                    <p style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.9)', marginTop: '1rem' }}>
                        {translate('attorney.page.subheading')}
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
                                {translate('attorney.founding.title')}
                            </h3>

                            <div style={{ marginBottom: '2rem', padding: '1.5rem', backgroundColor: 'var(--color-bg-light)', borderRadius: '12px' }}>
                                <h3 style={{ marginBottom: '0.75rem' }}>
                                    {translate('attorney.german.heading')}
                                </h3>
                                <p style={{ fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '0.75rem' }}>
                                    {translate('home.design.german.paragraph1')}
                                </p>
                                <p style={{ marginBottom: 0 }}>
                                    {renderWithReplacements('attorney.german.schedule', {
                                        contactLink: (
                                            <Link href="/contact">
                                                {translate('home.design.contactLinkLabel')}
                                            </Link>
                                        ),
                                    })}
                                </p>
                            </div>

                            <div style={{ marginBottom: '2rem' }}>
                                <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                                    {renderWithReplacements('attorney.welcome', {
                                        firmName: <strong>Henning Law Firm PLLC</strong>,
                                    })}
                                </p>
                            </div>

                            <div style={{ marginBottom: '2rem' }}>
                                <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                                    {translate('attorney.background')}
                                </p>
                                <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginTop: '1rem', marginBottom: 0 }}>
                                    {translate('attorney.chamber')}
                                </p>
                            </div>

                            <div style={{ marginBottom: '2rem' }}>
                                <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                                    {translate('attorney.approach')}
                                </p>
                            </div>

                            <div style={{ marginBottom: '2rem' }}>
                                <h3 style={{ marginBottom: '1rem', marginTop: '2rem' }}>
                                    {translate('attorney.setsApartHeading')}
                                </h3>
                                <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                                    {translate('home.support.setsApartDetail')}
                                </p>
                            </div>

                            <div style={{ marginBottom: '2rem' }}>
                                <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                                    {translate('attorney.network')}
                                </p>
                            </div>

                            <div style={{ marginTop: '3rem', padding: '2rem', backgroundColor: 'var(--color-bg-light)', borderRadius: '8px' }}>
                                <h4 style={{ marginBottom: '1rem' }}>
                                    {translate('attorney.education.heading')}
                                </h4>
                                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                    <li style={{ marginBottom: '1rem', paddingLeft: '2rem', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: 'var(--color-secondary)', fontSize: '1.2rem' }}>•</span>
                                        {translate('attorney.education.jd')}
                                    </li>
                                    <li style={{ marginBottom: '1rem', paddingLeft: '2rem', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: 'var(--color-secondary)', fontSize: '1.2rem' }}>•</span>
                                        {translate('attorney.education.honorary')}
                                    </li>
                                    <li style={{ marginBottom: '1rem', paddingLeft: '2rem', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: 'var(--color-secondary)', fontSize: '1.2rem' }}>•</span>
                                        {translate('attorney.education.bars')}
                                    </li>
                                    <li style={{ marginBottom: '1rem', paddingLeft: '2rem', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: 'var(--color-secondary)', fontSize: '1.2rem' }}>•</span>
                                        {translate('attorney.education.experience')}
                                    </li>
                                    <li style={{ marginBottom: '1rem', paddingLeft: '2rem', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: 'var(--color-secondary)', fontSize: '1.2rem' }}>•</span>
                                        {translate('attorney.education.personal')}
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
                            {translate('attorney.honorary.heading')}
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
                                    {translate('attorney.honorary.paragraph')}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container" style={{ marginTop: '4rem' }}>
                    <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                        <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>
                            {translate('home.faq.heading')}
                        </h2>
                        <div style={{ display: 'grid', gap: '1.5rem' }}>
                            {faqItems.map((item) => (
                                <div
                                    key={item.questionKey}
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

                <div className="container" style={{ marginTop: '4rem' }}>
                    <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
                        <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>
                            {translate('attorney.gallery.heading')}
                        </h2>
                        <div className="bio-gallery">
                            {galleryImages.map((image) => (
                                <div key={image.src} className="bio-gallery-item" style={{ position: 'relative', aspectRatio: '4/3', overflow: 'hidden' }}>
                                    <Image src={image.src} alt={image.alt} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
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