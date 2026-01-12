"use client";

import Link from 'next/link';
import React from 'react';
import { practiceAreas } from '@/data/practiceAreas';

export default function PracticeAreas() {
    const services = practiceAreas;

    return (
        <>
            <section className="page-header section-padding text-center" style={{ backgroundColor: 'var(--color-primary)', color: '#fff' }}>
                <div className="container">
                    <h1 style={{ color: '#fff' }}>Practice Areas</h1>
                    <p style={{ maxWidth: '700px', margin: '1.5rem auto 0', color: 'rgba(255,255,255,0.9)', fontSize: '1.2rem' }}>
                        Comprehensive Representation for Families, Companies and Entrepreneurs
                    </p>
                </div>
            </section>

            <section className="section-padding">
                <div className="container">
                    <div className="intro-text" style={{ maxWidth: '900px', margin: '0 auto 4rem', textAlign: 'center' }}>
                        <h2>How We Can Help You</h2>
                        <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginTop: '1.5rem' }}>
                            At Henning Law Firm PLLC, we understand that immigration law is not one-size-fits-all. Each client's situation is unique, and we tailor our approach to meet your specific needs and long-term goals. Whether you're an individual seeking a visa, a family looking to reunite, or a business expanding to the United States, we have the expertise to guide you through the process.
                        </p>
                    </div>

                    <div className="services-grid">
                        {services.map((service) => (
                            <div key={service.id} className="service-card">
                                <div className="service-icon" style={{ fontSize: '3.5rem', marginBottom: '1.5rem' }}>
                                    {service.icon}
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

                    <div className="cta-section" style={{ marginTop: '4rem', textAlign: 'center', padding: '3rem', backgroundColor: 'var(--color-bg-light)', borderRadius: '8px' }}>
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
                        border: 1px solid #eee;
                        padding: 2.5rem;
                        display: flex;
                        flex-direction: column;
                        transition: all 0.3s ease;
                        border-left: 4px solid var(--color-secondary);
                        border-radius: 8px;
                        box-shadow: 0 4px 6px rgba(0,0,0,0.05);
                    }
                    
                    .service-card:hover {
                        box-shadow: 0 12px 30px rgba(0,0,0,0.12);
                        transform: translateY(-5px);
                        border-left-color: var(--color-primary);
                    }
                    
                    .service-card h3 {
                        font-size: 1.5rem;
                        margin-bottom: 1.25rem;
                        color: var(--color-primary);
                        line-height: 1.3;
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
                `}</style>
            </section>
        </>
    );
}