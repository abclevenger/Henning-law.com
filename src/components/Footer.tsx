import React from 'react';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-col">
                        <h4>Contact</h4>
                        <div style={{ marginBottom: '1rem' }}>
                            <p style={{ marginBottom: '0.5rem', fontWeight: '600' }}>Tampa</p>
                            <p style={{ marginBottom: '1rem' }}>
                                <a href="tel:2398216504" style={{ color: 'rgba(255,255,255,0.9)', textDecoration: 'none' }}>
                                    (239) 821-6504
                                </a>
                            </p>
                        </div>
                        <div style={{ marginBottom: '1rem' }}>
                            <p style={{ marginBottom: '0.5rem', fontWeight: '600' }}>Minneapolis</p>
                            <p style={{ marginBottom: '1rem' }}>
                                <a href="tel:6124225700" style={{ color: 'rgba(255,255,255,0.9)', textDecoration: 'none' }}>
                                    (612) 422-5700
                                </a>
                            </p>
                        </div>
                        <p style={{ marginBottom: '0.5rem', fontWeight: '600' }}>Email</p>
                        <p>
                            <a href="mailto:nhenning@henning-law.com" style={{ color: 'rgba(255,255,255,0.9)', textDecoration: 'none' }}>
                                nhenning@henning-law.com
                            </a>
                        </p>
                    </div>
                    
                    <div className="footer-col">
                        <h4>Hours</h4>
                        <p>By Appointment Only</p>
                        
                        <h4 style={{ marginTop: '2rem' }}>Connect</h4>
                        <p>Let us help you design your path to success in the United States.</p>
                        <Link href="/contact" className="btn btn-outline" style={{ 
                            marginTop: '1rem', 
                            borderColor: 'rgba(255,255,255,0.5)', 
                            color: '#fff',
                            display: 'inline-block'
                        }}>
                            Get in Touch
                        </Link>
                        <div style={{ marginTop: '1.5rem' }}>
                            <a
                                href="https://www.linkedin.com/in/norma-henning-jd/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Norma Henning on LinkedIn"
                                style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '0.6rem',
                                    color: 'rgba(255,255,255,0.9)',
                                    textDecoration: 'none',
                                    fontWeight: 600,
                                }}
                            >
                                <svg viewBox="0 0 24 24" aria-hidden="true" style={{ width: '20px', height: '20px', fill: 'currentColor' }}>
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.025-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.047c.476-.9 1.637-1.85 3.368-1.85 3.6 0 4.268 2.369 4.268 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM6.856 20.452H3.818V9h3.038v11.452zM22.225 0H1.771C.792 0 0 .771 0 1.723v20.555C0 23.23.792 24 1.771 24h20.451C23.2 24 24 23.23 24 22.278V1.723C24 .771 23.2 0 22.222 0h.003z"/>
                                </svg>
                                <span>LinkedIn</span>
                            </a>
                        </div>
                    </div>
                    
                    <div className="footer-col">
                        <h4>Quick Links</h4>
                        <ul className="footer-links">
                            <li><Link href="/">Home</Link></li>
                            <li><Link href="/attorney-bio">Attorney Bio</Link></li>
                            <li><Link href="/practice-areas">Practice Areas</Link></li>
                            <li><Link href="/contact">Contact</Link></li>
                            <li><Link href="/privacy">Privacy Policy</Link></li>
                            <li><Link href="/terms">Terms &amp; Conditions</Link></li>
                        </ul>
                    </div>
                </div>
                
                <div className="bar-complaint-section" style={{ 
                    marginTop: '3rem', 
                    paddingTop: '2rem', 
                    borderTop: '1px solid rgba(255,255,255,0.2)',
                    fontSize: '0.75rem',
                    color: 'rgba(255,255,255,0.7)'
                }}>
                    <h4 style={{ fontSize: '0.9rem', marginBottom: '1rem', color: 'rgba(255,255,255,0.9)' }}>
                        Attorney Advertising | Bar Complaint Information
                    </h4>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.5rem', marginBottom: '1.5rem' }} className="bar-complaint-grid">
                        <div>
                            <p style={{ fontWeight: '600', marginBottom: '0.5rem', color: 'rgba(255,255,255,0.9)' }}>
                                Florida Bar Complaints
                            </p>
                            <p style={{ marginBottom: '0.5rem', lineHeight: '1.6' }}>
                                The hiring of a lawyer is an important decision that should not be based solely upon advertisements. Before you decide, ask us to send you free written information about our qualifications and experience.
                            </p>
                            <p style={{ marginBottom: '0.5rem', lineHeight: '1.6' }}>
                                Complaints may be filed with the Florida Bar by calling toll-free 1-866-352-0707 or visiting{' '}
                                <a href="https://www.floridabar.org" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.9)', textDecoration: 'underline' }}>
                                    www.floridabar.org
                                </a>
                            </p>
                        </div>
                        <div>
                            <p style={{ fontWeight: '600', marginBottom: '0.5rem', color: 'rgba(255,255,255,0.9)' }}>
                                Minnesota Bar Complaints
                            </p>
                            <p style={{ marginBottom: '0.5rem', lineHeight: '1.6' }}>
                                The hiring of a lawyer is an important decision that should not be based solely upon advertisements. Before you decide, ask us to send you free written information about our qualifications and experience.
                            </p>
                            <p style={{ marginBottom: '0.5rem', lineHeight: '1.6' }}>
                                Complaints may be filed with the Minnesota Board of Professional Responsibility by calling 1-800-657-3600 or visiting{' '}
                                <a href="https://www.mncourts.gov/lprb" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.9)', textDecoration: 'underline' }}>
                                    www.mncourts.gov/lprb
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
                
                <div className="copyright">
                    <p style={{ marginBottom: '0.5rem' }}>
                        © {new Date().getFullYear()} Henning Law Firm PLLC
                    </p>
                    <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.6)', marginBottom: '0.5rem' }}>
                        Powered by Next.js
                    </p>
                    <p style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)' }}>
                        Image credits: Images by NastyaSensei, PhotoMIX Company, Pixabay on PEXELS
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;