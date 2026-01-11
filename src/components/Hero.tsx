"use client";

import Link from 'next/link';
import React from 'react';

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-overlay"></div>
            <div className="container hero-content">
                <h1>Creating Your Individual Path to the United States</h1>
                <p>Tailored Strategies to Navigate Work, Residency, and Business Success</p>
                <div className="hero-actions">
                    <Link href="/contact" className="btn btn-primary">
                        Contact Us
                    </Link>
                    <Link href="/practice-areas" className="btn btn-outline" style={{ marginLeft: '1rem', color: '#fff', borderColor: '#fff' }}>
                        Our Services
                    </Link>
                </div>
            </div>

            <style jsx>{`
                .hero {
                    position: relative;
                    height: 80vh;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    text-align: center;
                    background-color: var(--color-primary);
                    background-image: url('https://images.unsplash.com/photo-1589829085413-56de8ae18c73?ixlib=rb-4.0.3&auto=format&fit=crop&w=2600&q=80'); /* Legal/Gavel Premium Background */
                    background-size: cover;
                    background-position: center;
                    color: var(--color-white);
                }
                
                .hero-overlay {
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: linear-gradient(rgba(10, 25, 47, 0.7), rgba(10, 25, 47, 0.85));
                }
                
                .hero-content {
                    position: relative;
                    z-index: 1;
                    max-width: 900px;
                }
                
                .hero h1 {
                    color: var(--color-white);
                    font-size: 4rem;
                    text-shadow: 0 4px 6px rgba(0,0,0,0.3);
                    margin-bottom: 2rem;
                }
                
                .hero p {
                    color: rgba(255,255,255,0.9);
                    font-size: 1.5rem;
                    max-width: 800px;
                    margin: 0 auto 3rem;
                }
            `}</style>
        </section>
    );
};

export default Hero;
