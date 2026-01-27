"use client";

import Link from 'next/link';
import { images } from '@/data/images';
import { useState } from 'react';

export default function AttorneyBio() {
    const [imgError, setImgError] = useState(false);
    const [honoraryImgError, setHonoraryImgError] = useState(false);
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
            <section className="page-header section-padding text-center" style={{ backgroundColor: 'var(--color-primary)', color: '#fff' }}>
                <div className="container">
                    <h1 style={{ color: '#fff' }}>Attorney Bio</h1>
                    <p style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.9)', marginTop: '1rem' }}>
                        Meet Norma Henning, J.D.
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
                                    alt="Norma Henning, J.D."
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
                            <h1>Norma Henning, J.D.</h1>
                            <h3 style={{ color: 'var(--color-secondary)', marginBottom: '2rem', fontSize: '1.5rem', fontWeight: '400' }}>
                                Founding Attorney
                            </h3>

                            <div style={{ marginBottom: '2rem' }}>
                                <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                                    Welcome to <strong>Henning Law Firm PLLC</strong>, where nothing gives us greater satisfaction than assisting our clients in realizing their very own personal, professional or commercial goals in the United States.
                                </p>
                            </div>

                            <div style={{ marginBottom: '2rem' }}>
                                <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                                    Henning Law Firm is guided by Ms. Henning's own background as an immigrant, her service as former Honorary Consul of Germany in Florida, and her experience as a practicing attorney. Her background provides a unique perspective when it comes to the legal and cultural aspects of navigating market entry, establishing lasting business and personal relationships, and raising a family in the United States.
                                </p>
                            </div>

                            <div style={{ marginBottom: '2rem' }}>
                                <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                                    Her approach to the practice is based on her appreciation for the opportunities the United States offers to newcomers as well as a deep respect for the contributions that immigrants have made and continue to make to this country. Based on this philosophy, the firm focuses on designing tailored visa and immigration strategies and counseling clients in areas of property ownership and U.S. market entry for business ventures in the United States.
                                </p>
                            </div>

                            <div style={{ marginBottom: '2rem' }}>
                                <h3 style={{ marginBottom: '1rem', marginTop: '2rem' }}>What Sets Us Apart</h3>
                                <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                                    When it comes to moving your life to the United States, we have answers to the questions you may not even know to ask. Particularly for investors and immigrants from Civil Law countries, the U.S. common law legal system presents challenges that should not be underestimated. Our holistic approach takes into account our clients' individual goals and addresses complexities such as tax and estate planning considerations as well as corporate, contractual, intellectual property, and other aspects of the law.
                                </p>
                            </div>

                            <div style={{ marginBottom: '2rem' }}>
                                <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                                    We work with a network of like-minded specialists who ensure you receive personalized guidance every step of the way.
                                </p>
                            </div>

                            <div style={{ marginTop: '3rem', padding: '2rem', backgroundColor: 'var(--color-bg-light)', borderRadius: '8px' }}>
                                <h4 style={{ marginBottom: '1rem' }}>Education & Professional Background</h4>
                                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                    <li style={{ marginBottom: '1rem', paddingLeft: '2rem', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: 'var(--color-secondary)', fontSize: '1.2rem' }}>•</span>
                                        Juris Doctor (J.D.)
                                    </li>
                                    <li style={{ marginBottom: '1rem', paddingLeft: '2rem', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: 'var(--color-secondary)', fontSize: '1.2rem' }}>•</span>
                                        Former Honorary Consul of Germany in Florida
                                    </li>
                                    <li style={{ marginBottom: '1rem', paddingLeft: '2rem', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: 'var(--color-secondary)', fontSize: '1.2rem' }}>•</span>
                                        Member of the Florida Bar
                                    </li>
                                    <li style={{ marginBottom: '1rem', paddingLeft: '2rem', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: 'var(--color-secondary)', fontSize: '1.2rem' }}>•</span>
                                        Extensive experience in U.S. immigration law
                                    </li>
                                    <li style={{ marginBottom: '1rem', paddingLeft: '2rem', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: 'var(--color-secondary)', fontSize: '1.2rem' }}>•</span>
                                        Personal experience as an immigrant
                                    </li>
                                </ul>
                            </div>

                            <div className="bio-cta" style={{ marginTop: '3rem' }}>
                                <Link href="/contact" className="btn btn-primary">
                                    Schedule a Consultation
                                </Link>
                                <Link href="/practice-areas" className="btn btn-outline">
                                    Learn About Our Practice Areas
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Honorary Consul Section */}
                <div className="container" style={{ marginTop: '4rem' }}>
                    <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                        <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Honorary Consul of Germany in Florida</h2>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem', alignItems: 'center' }}>
                            <div className="honorary-consul-image" style={{ borderRadius: '8px', overflow: 'hidden', boxShadow: '0 8px 24px rgba(0,0,0,0.12)' }}>
                                <img
                                    src={honoraryImgError ? 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800' : images.attorneyHonoraryConsul}
                                    alt="Norma Henning as Honorary Consul of Germany in Florida"
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
                                    Ms. Henning served as the Honorary Consul of Germany in Florida, bringing a unique international perspective and deep understanding of cross-cultural legal matters to her practice. This experience, combined with her personal background as an immigrant, enables her to provide exceptional guidance to clients navigating the complexities of immigration and business law.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container" style={{ marginTop: '4rem' }}>
                    <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
                        <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Gallery</h2>
                        <div className="bio-gallery">
                            {galleryImages.map((image) => (
                                <div key={image.src} className="bio-gallery-item">
                                    <img src={image.src} alt={image.alt} loading="lazy" />
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
                    
                    .bio-content h1 {
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