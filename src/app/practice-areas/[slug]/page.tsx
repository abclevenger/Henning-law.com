"use client";

import Link from 'next/link';
import { getPracticeAreaBySlug, practiceAreas, getPracticeAreasByIds, PracticeArea } from '@/data/practiceAreas';
import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function PracticeAreaPage() {
  const params = useParams();
  const router = useRouter();
  const [practiceArea, setPracticeArea] = useState<PracticeArea | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const slug = params?.slug as string | undefined;
    
    if (!slug) {
      router.push('/practice-areas');
      return;
    }

    const area = getPracticeAreaBySlug(slug);
    if (!area) {
      router.push('/practice-areas');
    } else {
      setPracticeArea(area);
      setIsLoading(false);
    }
  }, [params, router]);

  if (isLoading || !practiceArea) {
    return (
      <div style={{ 
        minHeight: '60vh', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center' 
      }}>
        <div style={{ textAlign: 'center' }}>
          <p style={{ fontSize: '1.1rem', color: 'var(--color-text-light)' }}>Loading...</p>
        </div>
      </div>
    );
  }

  const relatedAreas = practiceArea.relatedAreas
    ? getPracticeAreasByIds(practiceArea.relatedAreas)
    : [];

  return (
    <>
      <section className="page-header section-padding text-center" style={{ backgroundColor: 'var(--color-primary)', color: '#fff' }}>
        <div className="container">
          <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>{practiceArea.icon}</div>
          <h1 style={{ color: '#fff' }}>{practiceArea.title}</h1>
          <p style={{ maxWidth: '700px', margin: '1.5rem auto 0', color: 'rgba(255,255,255,0.9)', fontSize: '1.2rem' }}>
            {practiceArea.shortDescription}
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            {/* Full Description */}
            <div style={{ marginBottom: '3rem' }}>
              <h2 style={{ marginBottom: '1.5rem' }}>Overview</h2>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--color-text-light)' }}>
                {practiceArea.fullDescription}
              </p>
            </div>

            {/* Services */}
            <div style={{ marginBottom: '3rem' }}>
              <h2 style={{ marginBottom: '1.5rem' }}>Services We Offer</h2>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {practiceArea.services.map((service, index) => (
                  <li
                    key={index}
                    style={{
                      marginBottom: '1rem',
                      paddingLeft: '2rem',
                      position: 'relative',
                      fontSize: '1.05rem',
                      lineHeight: '1.7',
                      color: 'var(--color-text-light)',
                    }}
                  >
                    <span style={{ position: 'absolute', left: 0, color: 'var(--color-secondary)', fontSize: '1.2rem' }}>✓</span>
                    {service}
                  </li>
                ))}
              </ul>
            </div>

            {/* Benefits */}
            <div style={{ marginBottom: '3rem', padding: '2.5rem', backgroundColor: 'var(--color-bg-light)', borderRadius: '8px' }}>
              <h2 style={{ marginBottom: '1.5rem' }}>Why Choose Us</h2>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.5rem' }}>
                {practiceArea.benefits.map((benefit, index) => (
                  <div
                    key={index}
                    style={{
                      display: 'flex',
                      alignItems: 'start',
                      gap: '1rem',
                    }}
                  >
                    <div style={{ fontSize: '1.5rem', color: 'var(--color-secondary)', flexShrink: 0 }}>★</div>
                    <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: 'var(--color-text-light)', margin: 0 }}>
                      {benefit}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Related Practice Areas */}
            {relatedAreas.length > 0 && (
              <div style={{ marginBottom: '3rem' }}>
                <h2 style={{ marginBottom: '1.5rem' }}>Related Practice Areas</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
                  {relatedAreas.map((area) => (
                    <Link
                      key={area.id}
                      href={`/practice-areas/${area.slug}`}
                      style={{
                        display: 'block',
                        padding: '1.5rem',
                        backgroundColor: '#fff',
                        border: '1px solid var(--color-border)',
                        borderRadius: '8px',
                        textDecoration: 'none',
                        transition: 'all 0.3s ease',
                        borderLeft: '4px solid var(--color-secondary)',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.boxShadow = '0 8px 16px rgba(0,0,0,0.1)';
                        e.currentTarget.style.transform = 'translateY(-3px)';
                        e.currentTarget.style.borderLeftColor = 'var(--color-primary)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.boxShadow = 'none';
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.borderLeftColor = 'var(--color-secondary)';
                      }}
                    >
                      <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>{area.icon}</div>
                      <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: 'var(--color-primary)' }}>
                        {area.title}
                      </h3>
                      <p style={{ fontSize: '0.95rem', color: 'var(--color-text-light)', margin: 0 }}>
                        {area.shortDescription.substring(0, 100)}...
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* CTA Section */}
            <div style={{ 
              textAlign: 'center', 
              padding: '3rem', 
              backgroundColor: 'var(--color-bg-light)', 
              borderRadius: '8px',
              marginTop: '4rem'
            }}>
              <h3 style={{ marginBottom: '1.5rem' }}>Ready to Get Started?</h3>
              <p style={{ fontSize: '1.1rem', marginBottom: '2rem', maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto', color: 'var(--color-text-light)' }}>
                Contact us today for a consultation about your {practiceArea.title.toLowerCase()} needs.
              </p>
              <Link href="/contact" className="btn btn-primary" style={{ marginRight: '1rem' }}>
                Schedule Consultation
              </Link>
              <Link href="/practice-areas" className="btn btn-outline">
                View All Practice Areas
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}