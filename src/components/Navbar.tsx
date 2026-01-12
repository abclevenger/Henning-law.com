"use client";

import Link from 'next/link';
import React, { useState } from 'react';
import LanguageToggle from '@/components/LanguageToggle';
import { images } from '@/data/images';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="navbar">
            <div className="container navbar-content">
                <Link href="/" className="logo">
                    <img 
                        src={images.logoPathElements || '/favicon.png'} 
                        alt="Henning Law Firm" 
                        className="logo-image"
                    />
                    <span className="logo-text">HENNING <span>LAW</span></span>
                </Link>
                
                <ul className={`nav-links ${isMenuOpen ? 'nav-links-open' : ''}`}>
                    <li><Link href="/" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
                    <li><Link href="/attorney-bio" onClick={() => setIsMenuOpen(false)}>Attorney Bio</Link></li>
                    <li><Link href="/practice-areas" onClick={() => setIsMenuOpen(false)}>Practice Areas</Link></li>
                    <li><Link href="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link></li>
                </ul>
                
                <div className="navbar-right">
                    <a href="tel:2398216504" className="navbar-phone">
                        Call (239) 821-6504
                    </a>
                    <div className="language-toggle-wrapper">
                        <LanguageToggle />
                    </div>
                    <button 
                        className="menu-toggle"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                        aria-expanded={isMenuOpen}
                    >
                        <span className="menu-icon">{isMenuOpen ? 'Close' : 'Menu'}</span>
                    </button>
                </div>
            </div>

            <style jsx>{`
                .navbar {
                    background-color: var(--color-white);
                    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
                    position: sticky;
                    top: 0;
                    z-index: 1000;
                    padding: 1rem 0;
                }

                .navbar-content {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    flex-wrap: wrap;
                    gap: 2rem;
                }

                .logo {
                    display: flex;
                    align-items: center;
                    gap: 0.75rem;
                    text-decoration: none;
                }

                .logo-image {
                    height: 40px;
                    width: auto;
                    object-fit: contain;
                }

                .logo-text {
                    font-family: var(--font-heading);
                    font-size: 1.5rem;
                    font-weight: 700;
                    color: var(--color-primary);
                }

                .logo-text span {
                    color: var(--color-secondary);
                }

                .navbar-right {
                    display: flex;
                    align-items: center;
                    gap: 1.5rem;
                }

                .language-toggle-wrapper {
                    display: flex;
                    align-items: center;
                }

                .navbar-phone {
                    font-size: 0.95rem;
                    font-weight: 600;
                    color: var(--color-primary);
                    text-decoration: none;
                    padding: 0.5rem 1rem;
                    border: 2px solid var(--color-secondary);
                    border-radius: 4px;
                    transition: all 0.3s ease;
                    white-space: nowrap;
                }

                .navbar-phone:hover {
                    background-color: var(--color-secondary);
                    color: var(--color-white);
                }

                .menu-toggle {
                    display: none;
                    background: none;
                    border: none;
                    cursor: pointer;
                    font-size: 1rem;
                    font-weight: 600;
                    color: var(--color-primary);
                    padding: 0.5rem;
                }

                .nav-links {
                    display: flex;
                    gap: 2rem;
                    list-style: none;
                    margin: 0;
                    padding: 0;
                }

                .nav-links a {
                    font-size: 0.95rem;
                    font-weight: 500;
                    color: var(--color-primary);
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                    text-decoration: none;
                    transition: color 0.3s ease;
                    padding: 0.5rem 0;
                }

                .nav-links a:hover {
                    color: var(--color-secondary);
                }

                @media (max-width: 968px) {
                    .navbar-phone {
                        display: none;
                    }

                    .menu-toggle {
                        display: block;
                    }

                    .nav-links {
                        display: none;
                        width: 100%;
                        flex-direction: column;
                        gap: 0;
                        margin-top: 1rem;
                        padding-top: 1rem;
                        border-top: 1px solid var(--color-border);
                    }

                    .nav-links-open {
                        display: flex;
                    }

                    .nav-links li {
                        width: 100%;
                    }

                    .nav-links a {
                        display: block;
                        padding: 1rem;
                        border-bottom: 1px solid var(--color-border);
                    }

                    .language-toggle-wrapper {
                        padding: 1rem;
                        border-bottom: 1px solid var(--color-border);
                        width: 100%;
                    }

                    .navbar-right {
                        flex-direction: column;
                        width: 100%;
                        gap: 0;
                    }

                    .navbar-phone {
                        display: block;
                        width: 100%;
                        text-align: center;
                        padding: 1rem;
                        border-bottom: 1px solid var(--color-border);
                        border-radius: 0;
                        border-left: none;
                        border-right: none;
                        border-top: none;
                    }
                }
            `}</style>
        </nav>
    );
};

export default Navbar;