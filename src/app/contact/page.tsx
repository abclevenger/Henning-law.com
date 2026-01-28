"use client";

import Link from 'next/link';
import type { ReactNode } from 'react';
import { useEffect } from 'react';
import BookingWidget from '@/components/BookingWidget';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Contact() {
    const { language, t: translate } = useLanguage();
    const t = (en: ReactNode, de?: ReactNode) => (language === 'de' ? de ?? en : en);
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
                    <h1 style={{ color: '#fff' }}>{t('Contact', 'Kontakt')}</h1>
                    <p style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.9)', marginTop: '1rem' }}>
                        {t('Get in touch with us to start your immigration journey', 'Kontaktieren Sie uns, um Ihren Weg zu starten')}
                    </p>
                </div>
            </section>

            <section className="section-padding">
                <div className="container">
                    <div className="contact-layout">
                        <div className="contact-info">
                            <h2>{t('Contact', 'Kontakt')}</h2>
                            <p style={{ fontSize: '1.1rem', marginBottom: '2rem' }}>
                                {t(
                                    'We look forward to hearing from you. Please contact us via phone or email to schedule a consultation.',
                                    'Wir freuen uns auf Ihre Nachricht. Kontaktieren Sie uns per Telefon oder E‑Mail für eine Beratung.'
                                )}
                            </p>
                            <p style={{ fontSize: '1.05rem', marginBottom: '1.5rem' }}>
                                {t(
                                    <>Start with our <Link href="/practice-areas">practice areas</Link> or learn more about <Link href="/attorney-bio">Norma Henning, J.D.</Link>.</>,
                                    <>Starten Sie mit unseren <Link href="/practice-areas">Rechtsgebieten</Link> oder erfahren Sie mehr über <Link href="/attorney-bio">Norma Henning, J.D.</Link>.</>
                                )}
                            </p>
                            <div style={{ marginBottom: '2rem' }}>
                                <h3 style={{ marginBottom: '1rem' }}>{t('How It Works', 'So funktioniert es')}</h3>
                                <ol style={{ margin: 0, paddingLeft: '1.25rem', color: 'var(--color-text-light)', lineHeight: '1.7' }}>
                                    <li>{t('Submit the contact form or call us.', 'Formular absenden oder anrufen.')}</li>
                                    <li>{t('We review your goals and recommend a path.', 'Wir prüfen Ihre Ziele und empfehlen einen Weg.')}</li>
                                    <li>{t('You receive a document checklist and timeline.', 'Sie erhalten eine Dokumentenliste und einen Ablauf.')}</li>
                                    <li>{t('We prepare and file your case.', 'Wir bereiten Ihren Fall vor und reichen ihn ein.')}</li>
                                    <li>{t('We guide you through approvals and next steps.', 'Wir begleiten Sie durch Entscheidungen und nächste Schritte.')}</li>
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
                                <h4>Hours</h4>
                                <p style={{ fontSize: '1.1rem' }}>By Appointment Only</p>
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
                                    {t(
                                        '"She was always very accessible, responsive, and reliable, and was a knowledgeable resource on timelines, procedures, and current immigration laws."',
                                        '"Sie war immer sehr zugänglich, reaktionsschnell und zuverlässig und eine kompetente Ansprechpartnerin für Fristen, Verfahren und aktuelle Einwanderungsgesetze."'
                                    )}
                                </p>
                                <p style={{ 
                                    fontWeight: 600, 
                                    color: 'var(--color-primary)', 
                                    marginBottom: '0.5rem',
                                    fontSize: '0.9rem',
                                }}>
                                    {t('— Green Card Recipient, Minnesota', '— Green Card-Empfänger, Minnesota')}
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
                            <h3 style={{ marginBottom: '2rem' }}>{t('Send Us a Message', 'Nachricht senden')}</h3>
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
                                {t(
                                    <>Submitting this form does not create an attorney-client relationship. Please do not send confidential information until a formal engagement is confirmed. By submitting, you agree to our <Link href="/privacy">Privacy Policy</Link> and <Link href="/terms">Terms &amp; Conditions</Link>.</>,
                                    <>Das Absenden dieses Formulars begründet kein Mandatsverhältnis. Bitte senden Sie keine vertraulichen Informationen, bis eine formelle Beauftragung bestätigt wurde. Mit dem Absenden stimmen Sie unserer <Link href="/privacy">Datenschutzerklärung</Link> und den <Link href="/terms">Nutzungsbedingungen</Link> zu.</>
                                )}
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