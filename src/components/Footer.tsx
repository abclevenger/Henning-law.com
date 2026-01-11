import React from 'react';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-col">
                        <h4>Henning Law Firm, PLLC</h4>
                        <p>1089 N. Collier Blvd., #411</p>
                        <p>Marco Island, FL 34145</p>
                        <p style={{ marginTop: '1rem' }}>(239) 821-6504</p>
                        <p>office@henning-law.com</p>
                    </div>
                    <div className="footer-col">
                        <h4>Quick Links</h4>
                        <ul className="footer-links">
                            <li><Link href="/attorney-bio">Attorney Bio</Link></li>
                            <li><Link href="/practice-areas">Practice Areas</Link></li>
                            <li><Link href="/contact">Contact</Link></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Connect</h4>
                        <p>Let us help you design your path to success in the United States.</p>
                        <Link href="/contact" className="btn btn-outline" style={{ marginTop: '1rem', borderColor: '#fff', color: '#fff' }}>
                            Get in Touch
                        </Link>
                    </div>
                </div>
                <div className="copyright">
                    <p>&copy; {new Date().getFullYear()} Henning Law Firm, PLLC. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
