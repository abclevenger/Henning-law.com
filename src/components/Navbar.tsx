"use client";

import Link from 'next/link';
import Image from 'next/image';
import React, { useState } from 'react';
import LanguageToggle from '@/components/LanguageToggle';
import { images } from '@/data/images';
import { useLanguage } from '@/contexts/LanguageContext';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { t } = useLanguage();
    const closeMenus = () => setIsMenuOpen(false);

    return (
        <nav className="navbar" aria-label="Main navigation">
            <div className="container navbar-content">
                <Link href="/" className="logo">
                    <Image
                        src={images.logo || '/favicon.png'}
                        alt="Henning Law Firm PLLC - Home"
                        width={150}
                        height={50}
                        className="logo-image"
                        priority
                        sizes="150px"
                        style={{ objectFit: 'contain' }}
                    />
                </Link>
                
                <ul className={`nav-links ${isMenuOpen ? 'nav-links-open' : ''}`}>
                    <li><Link href="/" onClick={closeMenus}>{t('nav.home')}</Link></li>
                    <li><Link href="/attorney-bio" onClick={closeMenus}>{t('nav.about')}</Link></li>
                    <li><Link href="/practice-areas/us-market-entry" onClick={closeMenus}>{t('nav.usMarketEntry')}</Link></li>
                    <li><Link href="/practice-areas/private-client-advisory" onClick={closeMenus}>{t('nav.privateClientAdvisory')}</Link></li>
                    <li><Link href="/practice-areas/us-mobility-immigration-strategy" onClick={closeMenus}>{t('nav.mobilityImmigration')}</Link></li>
                    <li><Link href="/contact" onClick={closeMenus}>{t('nav.contact')}</Link></li>
                </ul>
                
                <div className="navbar-right">
                    <a href="tel:2398216504" className="navbar-phone">
                        Call (239) 821-6504
                    </a>
                    <Link href="/contact" className="navbar-cta">
                        {t('cta.getInTouch')}
                    </Link>
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
                    flex-wrap: nowrap;
                    gap: 1.5rem;
                    max-width: 1600px;
                }

                .logo {
                    display: flex;
                    align-items: center;
                    gap: 0.75rem;
                    text-decoration: none;
                }

                .logo-image {
                    height: 50px;
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
                    gap: 1rem;
                    flex-wrap: nowrap;
                    flex-shrink: 0;
                }

                .language-toggle-wrapper {
                    display: flex;
                    align-items: center;
                }

                .navbar-phone {
                    font-size: 0.85rem;
                    font-weight: 600;
                    color: var(--color-primary);
                    text-decoration: none;
                    padding: 0.4rem 0.75rem;
                    border: 2px solid var(--color-secondary);
                    border-radius: 4px;
                    transition: all 0.3s ease;
                    white-space: nowrap;
                }

                .navbar-phone:hover {
                    background-color: var(--color-secondary);
                    color: var(--color-white);
                }

                .navbar-cta {
                    font-size: 0.85rem;
                    font-weight: 600;
                    color: var(--color-white);
                    text-decoration: none;
                    padding: 0.5rem 1rem;
                    background-color: var(--color-secondary);
                    border-radius: 4px;
                    transition: all 0.3s ease;
                    white-space: nowrap;
                }

                .navbar-cta:hover {
                    background-color: var(--color-primary);
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
                    gap: 1.25rem;
                    list-style: none;
                    margin: 0;
                    padding: 0;
                    flex-wrap: nowrap;
                    flex: 1;
                    justify-content: center;
                }

                .nav-links a {
                    font-size: 0.85rem;
                    font-weight: 500;
                    color: var(--color-primary);
                    text-transform: uppercase;
                    letter-spacing: 0.3px;
                    text-decoration: none;
                    transition: color 0.3s ease;
                    padding: 0.5rem 0;
                    white-space: nowrap;
                }

                .nav-links a:hover {
                    color: var(--color-secondary);
                }

                @media (max-width: 968px) {
                    .navbar-phone {
                        display: none;
                    }

                    .navbar-cta {
                        display: none;
                    }

                    .menu-toggle {
                        display: block;
                    }

                    .nav-links {
                        display: none;
                        position: fixed;
                        top: 72px;
                        left: 0;
                        right: 0;
                        bottom: 0;
                        width: 100%;
                        flex-direction: column;
                        gap: 0;
                        margin: 0;
                        padding: 1rem 0 2rem;
                        background: var(--color-white);
                        z-index: 999;
                        overflow-y: auto;
                        border: none;
                        box-shadow: 0 4px 20px rgba(0,0,0,0.1);
                    }

                    .nav-links-open {
                        display: flex;
                    }

                    .nav-links li {
                        width: 100%;
                    }

                    .nav-links a {
                        display: block;
                        padding: 1rem 1.5rem;
                        border-bottom: 1px solid var(--color-border);
                    }

                    .language-toggle-wrapper {
                        padding: 1rem 1.5rem;
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
                        padding: 1rem 1.5rem;
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