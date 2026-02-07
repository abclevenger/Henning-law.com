 "use client";

import React, { useEffect, type ReactNode } from 'react';
import Link from 'next/link';
import BookingWidget from '@/components/BookingWidget';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Contact() {
    const { t: translate } = useLanguage();

    const renderWithReplacements = (
        key: string,
        replacements: Record<string, ReactNode>
    ) => {
        const raw = translate(key);
        const segments = raw.split(/(\{[^}]+\})/g).filter(Boolean);
        return (
            <>
                {segments.map((segment, index) => {
                    const match = segment.match(/^\{([^}]+)\}$/);
                    if (match) {
                        return (
                            <React.Fragment key={`${key}-${index}`}>
                                {replacements[match[1]] ?? null}
                            </React.Fragment>
                        );
                    }
                    return (
                        <React.Fragment key={`${key}-${index}`}>
                            {segment}
                        </React.Fragment>
                    );
                })}
            </>
        );
    };
    useEffect(() => {
        // Check if script is already loaded
        const existingScript = document.querySelector('script[src="https://link.ymbs.pro/js/form_embed.js"]');
        if (existingScript) {
            return;
        }

        // Load the form embed script
        const script = document.createElement('script');
        script.src = 'https://link.ymbs.pro/js/form_embed.js';
        script.async = true;
        document.body.appendChild(script);

        return () => {
            // Cleanup: remove script on unmount if it exists
            const scriptToRemove = document.querySelector('script[src="https://link.ymbs.pro/js/form_embed.js"]');
            if (scriptToRemove && scriptToRemove.parentNode) {
                scriptToRemove.parentNode.removeChild(scriptToRemove);
            }
        };
    }, []);

    return (
        <>
            <section className="page-header section-padding text-center" style={{ backgroundColor: 'var(--color-primary)', color: '#fff' }}>
            <div className="container">
                    <h1 style={{ color: '#fff' }}>{translate('contact.page.heading')}</h1>
                    <p style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.9)', marginTop: '1rem' }}>
                        {translate('contact.page.subheading')}
                    </p>
                </div>
            </section>

            <section className="section-padding">
                <div className="container">
                    <div className="contact-layout">
                        <div className="contact-info">
                            <h2>{translate('contact.page.heading')}</h2>
                            <p style={{ fontSize: '1.1rem', marginBottom: '2rem' }}>
                                {translate('contact.info.description')}
                            </p>
                            <p style={{ fontSize: '1.05rem', marginBottom: '1.5rem' }}>
                                {renderWithReplacements('contact.info.linksSentence', {
                                    practiceLink: (
                                        <Link href="/practice-areas">
                                            {translate('contact.links.practiceLabel')}
                                        </Link>
                                    ),
                                    attorneyLink: (
                                        <Link href="/attorney-bio">
                                            {translate('contact.links.attorneyLabel')}
                                        </Link>
                                    ),
                                })}
                            </p>
                            <div style={{ marginBottom: '2rem' }}>
                                <h3 style={{ marginBottom: '1rem' }}>{translate('contact.workflow.heading')}</h3>
                                <ol style={{ margin: 0, paddingLeft: '1.25rem', color: 'var(--color-text-light)', lineHeight: '1.7' }}>
                                    <li>{translate('contact.workflow.step1')}</li>
                                    <li>{translate('contact.workflow.step2')}</li>
                                    <li>{translate('contact.workflow.step3')}</li>
                                    <li>{translate('contact.workflow.step4')}</li>
                                    <li>{translate('contact.workflow.step5')}</li>
                                </ol>
                            </div>

                            <div className="info-item">
                                <h4>Tampa</h4>
                                <p style={{ fontSize: '1.1rem', fontWeight: '600', color: 'var(--color-primary)' }}>
                                    <a href="tel:2398216504" style={{ color: 'inherit', textDecoration: 'none' }}>(239) 821-6504</a>
                                </p>
                            </div>

                            <div className="info-item">
                                <h4>Minneapolis</h4>
                                <p style={{ fontSize: '1.1rem', fontWeight: '600', color: 'var(--color-primary)' }}>
                                    <a href="tel:6124225700" style={{ color: 'inherit', textDecoration: 'none' }}>(612) 422-5700</a>
                                </p>
                            </div>

                            <div className="info-item">
                                <h4>Email</h4>
                                <p style={{ fontSize: '1.1rem' }}>
                                    <a href="mailto:nhenning@henning-law.com" style={{ color: 'var(--color-secondary)', textDecoration: 'none' }}>
                                        nhenning@henning-law.com
                                    </a>
                                </p>
                            </div>

                            <div className="info-item">
                                <h4>{translate('footer.hours')}</h4>
                                <p style={{ fontSize: '1.1rem' }}>{translate('footer.byAppointment')}</p>
                            </div>

                            {/* Trust Signal - Client Testimonial */}
                            <div className="testimonial-trust" style={{
                                marginTop: '2.5rem',
                                padding: '1.5rem',
                                backgroundColor: 'var(--color-bg-light)',
                                borderRadius: '8px',
                                borderLeft: '4px solid var(--color-secondary)',
                            }}>
                                <p style={{ 
                                    fontStyle: 'italic', 
                                    fontSize: '1rem', 
                                    lineHeight: '1.7',
                                    color: 'var(--color-text-light)',
                                    marginBottom: '1rem',
                                }}>
                                    "She was always very accessible, responsive, and reliable, and was a knowledgeable resource on timelines, procedures, and current immigration laws."
                                </p>
                                <p style={{ 
                                    fontWeight: 600, 
                                    color: 'var(--color-primary)', 
                                    marginBottom: '0.5rem',
                                    fontSize: '0.9rem',
                                }}>
                                    {translate('contact.testimonial.attribution')}
                                </p>
                                <p style={{ 
                                    fontSize: '0.75rem', 
                                    color: 'var(--color-text-light)',
                                    margin: 0,
                                }}>
                                    {translate('legal.resultsDisclaimer')}
                                </p>
                            </div>
                        </div>

                        <div className="contact-form-wrapper">
                            <h3 style={{ marginBottom: '0.5rem' }}>{translate('contact.form.heading')}</h3>
                            <p style={{ marginBottom: '2rem', color: 'var(--color-text-light)', fontSize: '0.95rem' }}>
                                {translate('contact.form.afterSubmit')}
                            </p>
                            <div className="embedded-form-container">
                                <iframe
                                    src="https://link.ymbs.pro/widget/form/vkKECO8y8SRTuPh4vNeM"
                                    style={{ width: '100%', height: '100%', border: 'none', borderRadius: '0px' }}
                                    id="inline-vkKECO8y8SRTuPh4vNeM"
                                    data-layout="{'id':'INLINE'}"
                                    data-trigger-type="alwaysShow"
                                    data-trigger-value=""
                                    data-activation-type="alwaysActivated"
                                    data-activation-value=""
                                    data-deactivation-type="neverDeactivate"
                                    data-deactivation-value=""
                                    data-form-name="Immigration Lawyer Contact "
                                    data-height="1200"
                                    data-layout-iframe-id="inline-vkKECO8y8SRTuPh4vNeM"
                                    data-form-id="vkKECO8y8SRTuPh4vNeM"
                                    title="Immigration Lawyer Contact "
                                />
                            </div>
                            <p className="form-disclaimer">
                                {renderWithReplacements('contact.form.disclaimer', {
                                    privacyLink: (
                                        <Link href="/privacy">
                                            {translate('footer.privacyPolicy')}
                                        </Link>
                                    ),
                                    termsLink: (
                                        <Link href="/terms">
                                            {translate('footer.terms')}
                                        </Link>
                                    ),
                                })}
                            </p>
                        </div>
                    </div>
                </div>

                <style jsx>{`
                    .contact-layout {
                        display: grid;
                        grid-template-columns: 1fr;
                        gap: 4rem;
                    }
                    
                    @media (min-width: 968px) {
                        .contact-layout {
                            grid-template-columns: 1fr 1.2fr;
                        }
                    }

                    @media (max-width: 768px) {
                        .embedded-form-container {
                            height: 1400px;
                        }

                        .contact-form-wrapper {
                            padding: 2rem;
                        }
                    }
                    
                    .info-item {
                        margin-bottom: 2.5rem;
                    }
                    
                    .info-item h4 {
                        font-size: 1.2rem;
                        margin-bottom: 0.75rem;
                        color: var(--color-primary);
                    }
                    
                    .info-item a:hover {
                        color: var(--color-secondary);
                        text-decoration: underline;
                    }
                    
                    .contact-form-wrapper {
                        background: #f9f9f9;
                        padding: 3rem;
                        border-radius: 8px;
                        box-shadow: 0 4px 6px rgba(0,0,0,0.08);
                    }

                    .embedded-form-container {
                        width: 100%;
                        height: 1200px;
                        border-radius: 8px;
                        overflow: hidden;
                    }

                    .embedded-form-container iframe {
                        width: 100%;
                        height: 100%;
                    }
                    
                    .contact-form-wrapper h3 {
                        color: var(--color-primary);
                    }

                    .form-disclaimer {
                        margin-top: 1.25rem;
                        font-size: 0.95rem;
                        color: var(--color-text-light);
                        line-height: 1.6;
                    }

                    .form-disclaimer a {
                        color: var(--color-secondary);
                        text-decoration: none;
                        font-weight: 600;
                    }

                    .form-disclaimer a:hover {
                        text-decoration: underline;
                    }
                    
                    .form-group {
                        margin-bottom: 1.5rem;
                    }
                    
                    .form-group label {
                        display: block;
                        margin-bottom: 0.5rem;
                        font-weight: 600;
                        font-size: 0.95rem;
                        color: var(--color-primary);
                    }
                    
                    .form-group input,
                    .form-group select,
                    .form-group textarea {
                        width: 100%;
                        padding: 12px 16px;
                        border: 1px solid #ddd;
                        border-radius: 4px;
                        font-family: inherit;
                        font-size: 1rem;
                        transition: border-color 0.3s ease;
                    }
                    
                    .form-group input:focus,
                    .form-group select:focus,
                    .form-group textarea:focus {
                        border-color: var(--color-secondary);
                        outline: none;
                        box-shadow: 0 0 0 3px rgba(122, 192, 225, 0.1);
                    }
                    
                    .form-group textarea {
                        resize: vertical;
                        min-height: 150px;
                    }
                `}</style>
            </section>

            {/* Booking Section */}
            <section className="section-padding" style={{ backgroundColor: 'var(--color-bg-light)' }}>
                <div className="container">
                    <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                        <BookingWidget />
                    </div>
                </div>
            </section>
        </>
    );
}