"use client";

import Link from 'next/link';
import React from 'react';
import { practiceAreas, PracticeAreaIconKey } from '@/data/practiceAreas';
import {
    IconBriefcase,
    IconCorporate,
    IconCitizenship,
    IconFamily,
    IconHome,
    IconResidency,
} from '@/components/Icons';

export default function PracticeAreas() {
    const services = practiceAreas;
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
            <section className="page-header section-padding text-center reveal" style={{ backgroundColor: 'var(--color-primary)', color: '#fff' }}>
                <div className="container">
                    <h1 style={{ color: '#fff' }}>Practice Areas</h1>
                    <p style={{ maxWidth: '900px', margin: '1.5rem auto 0', color: 'rgba(255,255,255,0.9)', fontSize: '1.2rem' }}>
                        Comprehensive Representation of Families, Companies and Entrepreneurs Seeking to Live and/or Work in the U.S.A.
                    </p>
                </div>
            </section>

            <section className="section-padding">
                <div className="container">
                    <div className="intro-text reveal" style={{ maxWidth: '900px', margin: '0 auto 4rem', textAlign: 'center' }}>
                        <h2>How We Can Help You</h2>
                        <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginTop: '1.5rem' }}>
                            Navigating your path to the United States can be challenging. Let Henning Law Firm PLLC help simplify the process by designing a plan that is right for your company or family.
                        </p>
                        <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                            Click on the tiles below to open general descriptions of some of the most popular visa categories available.
                        </p>
                        <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: 0 }}>
                            <strong>Startups - don’t let visa eligibility for key personnel be an afterthought!</strong> We work with your corporate counsel to help create the right structures to allow you or your employees to enter the United States to pursue your goals.
                        </p>
                        <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginTop: '1.5rem' }}>
                            Contact us to discuss your individual situation and learn how we can assist you with everything from work and residency visas to U.S. property ownership.
                        </p>
                    </div>

                    <div className="services-grid">
                        {services.map((service) => (
                            <div key={service.id} className="service-card reveal">
                                <div className="service-icon">
                                    {iconMap[service.icon]}
                                </div>
                                <h3>{service.title}</h3>
                                <p style={{ lineHeight: '1.7', color: 'var(--color-text-light)' }}>{service.shortDescription}</p>
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

                    <div className="longform-section reveal" style={{ marginTop: '5rem' }}>
                        <h2 className="text-center" style={{ marginBottom: '2.5rem' }}>Navigating Success for Immigrants</h2>
                        <div className="longform-grid">
                            {services.map((service) => (
                                <div key={`${service.id}-detail`} className="longform-card">
                                    <div className="longform-header">
                                        <span className="longform-icon">{iconMap[service.icon]}</span>
                                        <h3>{service.title}</h3>
                                    </div>
                                    <p style={{ marginBottom: '1.5rem' }}>{service.fullDescription}</p>
                                    <p style={{ fontWeight: 600, color: 'var(--color-primary)', marginBottom: '0.75rem' }}>
                                        Popular Visas we can help you obtain include:
                                    </p>
                                    <ul className="longform-list">
                                        {service.services.map((item, index) => (
                                            <li key={`${service.id}-service-${index}`}>{item}</li>
                                        ))}
                                    </ul>
                                    <div style={{ marginTop: '1.5rem' }}>
                                        <Link href={`/practice-areas/${service.slug}`} className="read-more-link">
                                            Learn More →
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="cta-section reveal" style={{ marginTop: '4rem', textAlign: 'center', padding: '3rem', backgroundColor: 'var(--color-bg-light)', borderRadius: '12px', boxShadow: 'var(--shadow-sm)' }}>
                        <h3 style={{ marginBottom: '1.5rem' }}>Ready to Get Started?</h3>
                        <p style={{ fontSize: '1.1rem', marginBottom: '2rem', maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto' }}>
                            Let us help you navigate your path to success in the United States. Contact us today for a consultation.
                        </p>
                        <Link href="/contact" className="btn btn-primary" style={{ marginRight: '1rem' }}>
                            Contact Us
                        </Link>
                        <Link href="/attorney-bio" className="btn btn-outline">
                            Learn About Our Attorney
                        </Link>
                    </div>
                </div>

                <style jsx>{`
                    .services-grid {
                        display: grid;
                        grid-template-columns: 1fr;
                        gap: 2.5rem;
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
                        padding: 2.5rem;
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
                        font-size: 1.5rem;
                        margin-bottom: 1.25rem;
                        color: var(--color-primary);
                        line-height: 1.3;
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
                        margin-bottom: 1.5rem;
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

                    .longform-grid {
                        display: grid;
                        grid-template-columns: 1fr;
                        gap: 2.5rem;
                        margin-top: 2.5rem;
                    }

                    @media (min-width: 968px) {
                        .longform-grid {
                            grid-template-columns: repeat(2, 1fr);
                        }
                    }

                    .longform-card {
                        background: #fff;
                        border: 1px solid rgba(15, 23, 42, 0.08);
                        border-radius: 12px;
                        padding: 2.5rem;
                        box-shadow: var(--shadow-sm);
                        display: flex;
                        flex-direction: column;
                    }

                    .longform-header {
                        display: flex;
                        align-items: center;
                        gap: 1rem;
                        margin-bottom: 1.5rem;
                    }

                    .longform-icon {
                        color: var(--color-secondary);
                        width: 40px;
                        height: 40px;
                    }

                    .longform-icon :global(svg) {
                        width: 40px;
                        height: 40px;
                    }

                    .longform-card h3 {
                        margin: 0;
                        font-size: 1.35rem;
                        color: var(--color-primary);
                    }

                    .longform-list {
                        list-style: none;
                        padding: 0;
                        margin: 0;
                        display: grid;
                        gap: 0.75rem;
                    }

                    .longform-list li {
                        padding-left: 1.5rem;
                        position: relative;
                        color: var(--color-text-light);
                        line-height: 1.7;
                    }

                    .longform-list li::before {
                        content: '•';
                        position: absolute;
                        left: 0;
                        color: var(--color-secondary);
                    }
                `}</style>
            </section>
        </>
    );
}