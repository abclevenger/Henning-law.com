"use client";

import Link from 'next/link';
import React from 'react';

export default function PracticeAreas() {
    const services = [
        {
            title: 'Temporary Business & Work Visas',
            description: 'E-2 Treaty Investor Visas, L-1 Intra-company Transferees, and O-1 Extraordinary Ability visas for artists, athletes, and business professionals.'
        },
        {
            title: 'Permanent Residency (Green Cards)',
            description: 'Employment-based residency (EB-1, EB-2, EB-3) and Investment-based immigration (EB-5) to secure your long-term future in the U.S.'
        },
        {
            title: 'Family-Based Immigration',
            description: 'Helping U.S. citizens and permanent residents reunite with family members through marriage-based green cards and family petitions.'
        },
        {
            title: 'Citizenship',
            description: 'Guiding permanent residents through the naturalization process to become fully integrated U.S. citizens with all attendant rights.'
        },
        {
            title: 'Corporate & Business Support',
            description: 'Acting as general counsel for international companies expanding to the U.S., assisting with entity formation, contracts, and compliance.'
        },
        {
            title: 'Real Estate & Estate Planning',
            description: 'Protecting your assets and investments in the U.S. through strategic property acquisition guidance and estate planning structures.'
        }
    ];

    return (
        <>
            <section className="page-header section-padding text-center" style={{ backgroundColor: 'var(--color-primary)', color: '#fff' }}>
                <div className="container">
                    <h1>Practice Areas</h1>
                    <p style={{ maxWidth: '700px', margin: '0 auto', color: 'rgba(255,255,255,0.9)' }}>
                        Comprehensive Representation for Families, Companies and Entrepreneurs
                    </p>
                </div>
            </section>

            <section className="section-padding">
                <div className="container">
                    <div className="services-grid">
                        {services.map((service, index) => (
                            <div key={index} className="service-card">
                                <h3>{service.title}</h3>
                                <p>{service.description}</p>
                                <Link href="/contact" className="read-more">
                                    Schedule Consultation &rarr;
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>

                <style jsx>{`
            .services-grid {
                display: grid;
                grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
                gap: 2rem;
            }
            
            .service-card {
                background: #fdfdfd;
                border: 1px solid #eee;
                padding: 2.5rem;
                display: flex;
                flex-direction: column;
                transition: all 0.3s ease;
                border-left: 4px solid var(--color-secondary);
            }
            
            .service-card:hover {
                box-shadow: 0 10px 30px rgba(0,0,0,0.08);
                transform: translateY(-5px);
            }
            
            .service-card h3 {
                font-size: 1.4rem;
                margin-bottom: 1rem;
            }
            
            .read-more {
                margin-top: auto;
                padding-top: 1.5rem;
                font-weight: 700;
                color: var(--color-primary);
                font-size: 0.9rem;
                text-transform: uppercase;
                letter-spacing: 0.5px;
            }
            
            .read-more:hover {
                color: var(--color-secondary);
            }
        `}</style>
            </section>
        </>
    );
}
