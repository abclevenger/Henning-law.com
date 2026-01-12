"use client";

import React, { useState, useRef, useEffect } from 'react';
import { useLanguage, languages } from '@/contexts/LanguageContext';

const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentLanguage = languages.find(lang => lang.code === language) || languages[0];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLanguageChange = (langCode: string) => {
    setLanguage(langCode as any);
    setIsOpen(false);
  };

  return (
    <div className="language-toggle" ref={dropdownRef}>
      <button
        className="language-toggle-button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Change language"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <span className="language-icon">🌐</span>
        <span className="language-text">{currentLanguage.nativeName}</span>
        <span className="language-arrow">{isOpen ? '▲' : '▼'}</span>
      </button>

      {isOpen && (
        <div className="language-dropdown">
          {languages.map((lang) => (
            <button
              key={lang.code}
              className={`language-option ${language === lang.code ? 'active' : ''}`}
              onClick={() => handleLanguageChange(lang.code)}
            >
              <span className="language-option-name">{lang.nativeName}</span>
              <span className="language-option-english">{lang.name}</span>
            </button>
          ))}
        </div>
      )}

      <style jsx>{`
        .language-toggle {
          position: relative;
          display: inline-block;
        }

        .language-toggle-button {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1rem;
          background: transparent;
          border: 1px solid var(--color-border);
          border-radius: 4px;
          cursor: pointer;
          font-size: 0.9rem;
          font-weight: 500;
          color: var(--color-primary);
          transition: all 0.3s ease;
          font-family: inherit;
        }

        .language-toggle-button:hover {
          background-color: var(--color-bg-light);
          border-color: var(--color-secondary);
        }

        .language-icon {
          font-size: 1.1rem;
        }

        .language-text {
          min-width: 60px;
          text-align: left;
        }

        .language-arrow {
          font-size: 0.7rem;
          color: var(--color-text-light);
          transition: transform 0.3s ease;
        }

        .language-dropdown {
          position: absolute;
          top: calc(100% + 0.5rem);
          right: 0;
          background: var(--color-white);
          border: 1px solid var(--color-border);
          border-radius: 8px;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
          min-width: 180px;
          z-index: 1000;
          overflow: hidden;
          animation: fadeIn 0.2s ease;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .language-option {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          width: 100%;
          padding: 0.75rem 1rem;
          background: transparent;
          border: none;
          border-bottom: 1px solid var(--color-border);
          cursor: pointer;
          transition: background-color 0.2s ease;
          text-align: left;
          font-family: inherit;
        }

        .language-option:last-child {
          border-bottom: none;
        }

        .language-option:hover {
          background-color: var(--color-bg-light);
        }

        .language-option.active {
          background-color: rgba(197, 160, 89, 0.1);
          font-weight: 600;
        }

        .language-option-name {
          font-size: 0.95rem;
          color: var(--color-primary);
          margin-bottom: 0.25rem;
        }

        .language-option-english {
          font-size: 0.8rem;
          color: var(--color-text-light);
        }

        @media (max-width: 968px) {
          .language-toggle-button {
            padding: 0.5rem;
            min-width: auto;
          }

          .language-text {
            display: none;
          }

          .language-dropdown {
            right: 0;
            left: auto;
          }
        }
      `}</style>
    </div>
  );
};

export default LanguageToggle;