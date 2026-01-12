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
                    </div>
                    
                    <div className="footer-col">
                        <h4>Quick Links</h4>
                        <ul className="footer-links">
                            <li><Link href="/">Home</Link></li>
                            <li><Link href="/attorney-bio">Attorney Bio</Link></li>
                            <li><Link href="/practice-areas">Practice Areas</Link></li>
                            <li><Link href="/contact">Contact</Link></li>
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