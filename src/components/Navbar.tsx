import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="container navbar-content">
                <Link href="/" className="logo">
                    HENNING <span>LAW</span>
                </Link>
                <ul className="nav-links">
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/attorney-bio">Attorney Bio</Link></li>
                    <li><Link href="/practice-areas">Practice Areas</Link></li>
                    <li><Link href="/contact">Contact</Link></li>
                    {/* Placeholder for German toggle */}
                    <li><Link href="#">In German / Auf Deutsch</Link></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
