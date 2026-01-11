"use client";

export default function Contact() {
    return (
        <>
            <section className="page-header section-padding text-center" style={{ backgroundColor: 'var(--color-primary)', color: '#fff' }}>
                <div className="container">
                    <h1>Contact Us</h1>
                    <p>Start Your Journey Today</p>
                </div>
            </section>

            <section className="section-padding">
                <div className="container">
                    <div className="contact-layout">
                        <div className="contact-info">
                            <h2>Get in Touch</h2>
                            <p>
                                We look forward to hearing from you. Please contact us via phone or email,
                                or fill out the contact form to schedule a consultation.
                            </p>

                            <div className="info-item">
                                <h4>Address</h4>
                                <p>
                                    Henning Law Firm, PLLC<br />
                                    1089 N. Collier Blvd., #411<br />
                                    Marco Island, FL 34145
                                </p>
                            </div>

                            <div className="info-item">
                                <h4>Phone</h4>
                                <p>(239) 821-6504</p>
                            </div>

                            <div className="info-item">
                                <h4>Email</h4>
                                <p>office@henning-law.com</p>
                            </div>

                            <div className="info-item">
                                <h4>Hours</h4>
                                <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
                                <p>Saturday - Sunday: Closed</p>
                            </div>
                        </div>

                        <div className="contact-form-wrapper">
                            <form className="contact-form">
                                <div className="form-group">
                                    <label htmlFor="name">Full Name</label>
                                    <input type="text" id="name" name="name" required />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="email">Email Address</label>
                                    <input type="email" id="email" name="email" required />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="phone">Phone Number</label>
                                    <input type="tel" id="phone" name="phone" />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="message">How can we help you?</label>
                                    <textarea id="message" name="message" rows={5} required></textarea>
                                </div>

                                <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>

                <style jsx>{`
            .contact-layout {
                display: grid;
                grid-template-columns: 1fr;
                gap: 4rem;
            }
            
            @media (min-width: 900px) {
                .contact-layout {
                    grid-template-columns: 1fr 1fr;
                }
            }
            
            .info-item {
                margin-bottom: 2rem;
            }
            
            .contact-form-wrapper {
                background: #f9f9f9;
                padding: 2.5rem;
                border-radius: 8px;
            }
            
            .form-group {
                margin-bottom: 1.5rem;
            }
            
            .form-group label {
                display: block;
                margin-bottom: 0.5rem;
                font-weight: 700;
                font-size: 0.9rem;
            }
            
            .form-group input,
            .form-group textarea {
                width: 100%;
                padding: 12px;
                border: 1px solid #ddd;
                border-radius: 4px;
                font-family: inherit;
                font-size: 1rem;
            }
            
            .form-group input:focus,
            .form-group textarea:focus {
                border-color: var(--color-secondary);
                outline: none;
                box-shadow: 0 0 0 2px rgba(197, 160, 89, 0.2);
            }
        `}</style>
            </section>
        </>
    );
}
