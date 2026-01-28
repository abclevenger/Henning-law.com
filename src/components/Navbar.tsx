"use client";

import Link from 'next/link';
import React, { useState } from 'react';
import LanguageToggle from '@/components/LanguageToggle';
import { images } from '@/data/images';
import { practiceAreas } from '@/data/practiceAreas';
import { useLanguage } from '@/contexts/LanguageContext';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isPracticeOpen, setIsPracticeOpen] = useState(false);
    const { t } = useLanguage();
    const practiceAreaMenuMeta: Record<string, { title: string; description: string }> = {
        'temporary-business-work-visas': {
            title: 'Travel & Work Visas',
            description: 'Visitor, work, and start-up visa strategy',
        },
        'permanent-residency-green-cards': {
            title: 'Employment & Investment Residency',
            description: 'EB categories, NIW, and EB-5 planning',
        },
        'family-based-immigration': {
            title: 'Family & Marriage Green Cards',
            description: 'Marriage and family-based immigration support',
        },
        'citizenship-naturalization': {
            title: 'U.S. Citizenship',
            description: 'Naturalization guidance and preparation',
        },
        'corporate-business-support': {
            title: 'Corporate & Business Support',
            description: 'Entity formation + immigration-aligned strategy',
        },
        'real-estate-estate-planning': {
            title: 'Real Estate & Estate Planning',
            description: 'Cross-border planning + civil law notary services',
        },
    };
    const practiceColumns = [
        practiceAreas.slice(0, 2),
        practiceAreas.slice(2, 4),
        practiceAreas.slice(4, 6),
    ];
    const closeMenus = () => {
        setIsMenuOpen(false);
        setIsPracticeOpen(false);
    };

    return (
        <nav className="navbar">
            <div className="container navbar-content">
                <Link href="/" className="logo">
                    <img
                        src={images.logo || '/favicon.png'}
                        alt="Henning Law Firm PLLC - Home"
                        className="logo-image"
                        width="150"
                        height="50"
                    />
                </Link>
                
                <ul className={`nav-links ${isMenuOpen ? 'nav-links-open' : ''}`}>
                    <li><Link href="/" onClick={closeMenus}>{t('nav.home')}</Link></li>
                    <li><Link href="/attorney-bio" onClick={closeMenus}>{t('nav.about')}</Link></li>
                    <li
                        className={`nav-dropdown ${isPracticeOpen ? 'dropdown-open' : ''}`}
                        onMouseEnter={() => setIsPracticeOpen(true)}
                        onMouseLeave={() => setIsPracticeOpen(false)}
                    >
                        <div className="nav-dropdown-trigger">
                            <Link href="/practice-areas" onClick={closeMenus}>
                                {t('nav.practice')}
                            </Link>
                            <button
                                type="button"
                                className="nav-caret"
                                aria-label="Toggle practice areas menu"
                                aria-expanded={isPracticeOpen}
                                onClick={() => setIsPracticeOpen((prev) => !prev)}
                            >
                                ▾
                            </button>
                        </div>
                        <div className="dropdown-panel px-8 py-6">
                            <div className="dropdown-columns gap-x-12">
                                {practiceColumns.map((column, columnIndex) => (
                                        <ul
                                        key={`column-${columnIndex}`}
                                        className="dropdown-column"
                                    >
                                        {column.map((area) => (
                                            <li key={area.id}>
                                                <Link
                                                    href={`/practice-areas/${area.slug}`}
                                                    className="dropdown-link dropdown-item group relative block w-full rounded-xl border border-gray-100 bg-white px-5 py-4 transition-colors duration-200 hover:border-gray-200 hover:bg-gray-50 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-400"
                                                    onClick={closeMenus}
                                                >
                                                    <span className="flex flex-col gap-1">
                                                        <span className="dropdown-title block text-base font-semibold leading-tight text-gray-900 normal-case tracking-normal transition group-hover:underline">
                                                            {practiceAreaMenuMeta[area.id]?.title ?? area.title}
                                                        </span>
                                                        <span
                                                            className="dropdown-subtitle block text-sm leading-snug text-gray-600 normal-case tracking-normal"
                                                            style={{
                                                                display: '-webkit-box',
                                                                WebkitLineClamp: 1,
                                                                WebkitBoxOrient: 'vertical',
                                                                overflow: 'hidden',
                                                            }}
                                                        >
                                                            {practiceAreaMenuMeta[area.id]?.description ?? area.shortDescription}
                                                        </span>
                                                    </span>
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                ))}
                            </div>
                            <div className="dropdown-footer">
                                <Link href="/practice-areas" onClick={closeMenus}>
                                    {t('nav.viewAllPractice')} →
                                </Link>
                            </div>
                        </div>
                    </li>
                    <li><Link href="/testimonials" onClick={closeMenus}>{t('nav.testimonials')}</Link></li>
                    <li><Link href="/faqs" onClick={closeMenus}>{t('nav.faqs')}</Link></li>
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

                .nav-dropdown {
                    position: relative;
                }

                .nav-dropdown-trigger {
                    display: flex;
                    align-items: center;
                    gap: 0.35rem;
                }

                .nav-caret {
                    background: none;
                    border: none;
                    font-size: 0.9rem;
                    color: var(--color-primary);
                    cursor: pointer;
                    padding: 0.25rem;
                }

                .dropdown-panel {
                    position: absolute;
                    top: calc(100% + 0.75rem);
                    left: 50%;
                    transform: translateX(-50%);
                    background: #fff;
                    border: 1px solid rgba(15, 23, 42, 0.1);
                    border-radius: 12px;
                    box-shadow: 0 18px 40px rgba(15, 23, 42, 0.18);
                    padding: 2rem 2.5rem;
                    width: min(1100px, 94vw);
                    z-index: 999;
                    opacity: 0;
                    pointer-events: none;
                    transition: opacity 0.2s ease;
                }

                .nav-dropdown:hover .dropdown-panel,
                .nav-dropdown:focus-within .dropdown-panel,
                .nav-dropdown.dropdown-open .dropdown-panel {
                    opacity: 1;
                    pointer-events: auto;
                }

                .dropdown-columns {
                    display: grid;
                    grid-template-columns: repeat(3, minmax(0, 1fr));
                    gap: 1.5rem 2rem;
                }

                .dropdown-column {
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;
                    list-style: none;
                    margin: 0;
                    padding: 0;
                }

                .dropdown-link {
                    text-decoration: none !important;
                    text-transform: none !important;
                    letter-spacing: normal !important;
                    white-space: normal !important;
                    font-size: 1rem !important;
                }

                .dropdown-title {
                    text-transform: none !important;
                    letter-spacing: normal !important;
                    font-size: 0.95rem !important;
                    white-space: nowrap !important;
                    font-weight: 700 !important;
                }

                .dropdown-subtitle {
                    text-transform: none !important;
                    letter-spacing: normal !important;
                    font-size: 0.85rem !important;
                    white-space: nowrap !important;
                }

                .dropdown-item::before {
                    content: '';
                    position: absolute;
                    left: 0;
                    top: 10px;
                    bottom: 10px;
                    width: 3px;
                    border-radius: 999px;
                    background: var(--color-secondary);
                    opacity: 0;
                    transform: scaleY(0.6);
                    transition: opacity 0.2s ease, transform 0.2s ease;
                }

                .dropdown-item:hover::before,
                .dropdown-item:focus-visible::before {
                    opacity: 1;
                    transform: scaleY(1);
                }

                .dropdown-footer {
                    border-top: 1px solid var(--color-border);
                    margin-top: 1.5rem;
                    padding-top: 1rem;
                    text-align: center;
                }

                .dropdown-footer a {
                    text-decoration: none;
                    font-weight: 600;
                    color: var(--color-primary);
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
                    .nav-dropdown {
                        width: 100%;
                    }

                    .nav-dropdown-trigger {
                        width: 100%;
                        justify-content: space-between;
                        padding: 1rem;
                        border-bottom: 1px solid var(--color-border);
                    }

                    .dropdown-panel {
                        position: static;
                        transform: none;
                        opacity: 1;
                        pointer-events: auto;
                        box-shadow: none;
                        border: none;
                        padding: 0 1rem 1rem;
                        width: 100%;
                        display: ${isPracticeOpen ? 'block' : 'none'};
                    }

                    .dropdown-columns {
                        grid-template-columns: 1fr;
                    }

                    .dropdown-link {
                        padding: 0.75rem 0;
                    }

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