"use client";

export default function AttorneyBio() {
    return (
        <section className="section-padding">
            <div className="container">
                <div className="bio-grid">
                    <div className="bio-image">
                        {/* Placeholder for attorney image */}
                        <div style={{
                            width: '100%',
                            height: '500px',
                            backgroundColor: '#ddd',
                            borderRadius: '8px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: '#666',
                            backgroundImage: 'url(https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80)',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center'
                        }}>
                        </div>
                    </div>

                    <div className="bio-content">
                        <h1>Norma Henning, J.D.</h1>
                        <h3 style={{ color: 'var(--color-secondary)', marginBottom: '1.5rem', fontSize: '1.5rem' }}>Founding Attorney</h3>

                        <p><strong>Meet Your Attorney</strong></p>
                        <p>
                            Norma Henning is the founder and principal attorney of Henning Law Firm, PLLC.
                            As an immigrant herself, she brings a unique personal perspective to her practice,
                            understanding the complexities and emotional aspects of the immigration journey.
                        </p>
                        <p>
                            With extensive experience in U.S. immigration law, specifically business and family immigration,
                            Ms. Henning has helped countless individuals, families, and businesses navigate the complex
                            U.S. legal system. Her approach combines legal expertise with practical, strategic advice
                            tailored to each client's specific long-term goals.
                        </p>
                        <p>
                            In addition to immigration law, Ms. Henning provides counsel in related areas such as
                            real estate, corporate structure, and estate planning for international clients, acting
                            as a trusted advisor for their transition to life in the United States.
                        </p>

                        <div style={{ marginTop: '2rem' }}>
                            <h4>Education & Admissions</h4>
                            <ul style={{ paddingLeft: '1.2rem', marginBottom: '2rem', color: 'var(--color-text-light)' }}>
                                <li>Juris Doctor (J.D.)</li>
                                <li>Member of the Florida Bar</li>
                                <li>Admitted to practice in U.S. Federal Courts</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
        .bio-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 3rem;
            align-items: center;
        }
        
        @media (min-width: 768px) {
            .bio-grid {
                grid-template-columns: 1fr 1fr;
            }
        }
        
        .bio-content h1 {
            margin-bottom: 0.5rem;
        }
      `}</style>
        </section>
    );
}
