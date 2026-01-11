"use client";

import Link from 'next/link';
import Hero from '@/components/Hero';

export default function Home() {
  return (
    <>
      <Hero />

      {/* Why Choose Us Section */}
      <section className="section-padding">
        <div className="container">
          <div className="text-center" style={{ marginBottom: '3rem' }}>
            <h2>Why Choose Us</h2>
            <p style={{ marginTop: '1rem' }}>Personalized Immigration Strategies for individuals, families, startups and employers</p>
          </div>

          <div className="features-grid">
            <div className="feature-card">
              <h3>Personalized Strategies</h3>
              <p>We recognize that each immigration journey is distinct. By choosing us, you benefit from expert advice and creativity based on years of experience in the U.S. market. We pride ourselves on fashioning customized strategies that are created with your best long-term interest in mind.</p>
            </div>

            <div className="feature-card">
              <h3>Global Perspective</h3>
              <p>Ms. Henning brings to the table a wealth of personal experience as an immigrant and in advising individuals, businesses and families from various corners of the globe. Whether you’re looking to live, work or play in the United States, our expertise ensures a soft landing.</p>
            </div>

            <div className="feature-card">
              <h3>Comprehensive Representation</h3>
              <p>Not all questions are immigration questions. We offer comprehensive representation to protect our clients’ interests in real estate, corporate, taxation, and estate planning. Ms. Henning often acts as "general counsel" to build relationships and call in experts as needed.</p>
            </div>
          </div>

          <div className="text-center" style={{ marginTop: '3rem' }}>
            <Link href="/practice-areas" className="btn btn-primary">
              Learn More About Our Practice Areas
            </Link>
          </div>
        </div>

        <style jsx>{`
          .features-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
          }
          
          .feature-card {
            background: #fff;
            padding: 2rem;
            border: 1px solid var(--color-border);
            border-radius: 8px;
            transition: all 0.3s ease;
            box-shadow: 0 4px 6px rgba(0,0,0,0.05);
          }
          
          .feature-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 12px 24px rgba(0,0,0,0.1);
            border-color: var(--color-secondary);
          }
          
          .feature-card h3 {
            font-size: 1.5rem;
            margin-bottom: 1rem;
            color: var(--color-primary);
          }
        `}</style>
      </section>

      {/* Testimonial / Trust Section Placeholder */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-bg-light)' }}>
        <div className="container text-center">
          <h3>Supporting Immigrants to Thrive in The U.S.</h3>
          <p style={{ maxWidth: '600px', margin: '2rem auto' }}>
            "We’re good at what we do. From Temporary and Permanent Residence to Citizenship - We’ve Got the Answers to Your Questions."
          </p>
          <Link href="/contact" className="btn btn-outline" style={{ borderColor: 'var(--color-primary)', color: 'var(--color-primary)' }}>
            Let Us Guide You
          </Link>
        </div>
      </section>
    </>
  );
}
