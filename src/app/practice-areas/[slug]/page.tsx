import Link from 'next/link';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getPracticeAreaBySlug, getPracticeAreasByIds, practiceAreas, PracticeAreaIconKey } from '@/data/practiceAreas';
import type { ReactNode } from 'react';
import {
  IconBriefcase,
  IconCorporate,
  IconCitizenship,
  IconFamily,
  IconHome,
  IconResidency,
} from '@/components/Icons';

type PageProps = {
  params:
    | {
        slug: string | string[];
      }
    | Promise<{
        slug: string | string[];
      }>;
};

export const dynamicParams = true;
export const dynamic = 'force-dynamic';

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await Promise.resolve(params);
  const rawSlug = Array.isArray(resolvedParams.slug) ? resolvedParams.slug[0] : resolvedParams.slug;
  const safeSlug = rawSlug ?? '';
  const area = getPracticeAreaBySlug(safeSlug);
  if (!area) {
    return {
      title: 'Practice Area Not Found',
    };
  }

  const title = `${area.title} | Henning Law Firm PLLC`;

  return {
    title,
    description: area.shortDescription,
    alternates: {
      canonical: `https://henning-law.com/practice-areas/${area.slug}`,
    },
    openGraph: {
      title,
      description: area.shortDescription,
      url: `https://henning-law.com/practice-areas/${area.slug}`,
    },
    twitter: {
      title,
      description: area.shortDescription,
    },
  };
}

export function generateStaticParams() {
  return practiceAreas.map((area) => ({
    slug: area.slug,
  }));
}

export default async function PracticeAreaPage({ params }: PageProps) {
  const resolvedParams = await Promise.resolve(params);
  const slugParam = Array.isArray(resolvedParams.slug) ? resolvedParams.slug[0] : resolvedParams.slug;
  if (!slugParam) {
    notFound();
  }
  const practiceArea = getPracticeAreaBySlug(slugParam);
  if (!practiceArea) {
    notFound();
  }

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: practiceArea.title,
    description: practiceArea.shortDescription,
    areaServed: ['Florida', 'Minnesota', 'Germany'],
    provider: {
      '@type': 'LegalService',
      name: 'Henning Law Firm PLLC',
      url: 'https://henning-law.com',
      telephone: '+1-239-821-6504',
      email: 'nhenning@henning-law.com',
      inLanguage: ['en', 'de'],
      knowsLanguage: ['English', 'German'],
    },
    serviceType: practiceArea.title,
    url: `https://henning-law.com/practice-areas/${practiceArea.slug}`,
  };

  const iconMap: Record<PracticeAreaIconKey, ReactNode> = {
    briefcase: <IconBriefcase />,
    residency: <IconResidency />,
    family: <IconFamily />,
    citizenship: <IconCitizenship />,
    corporate: <IconCorporate />,
    home: <IconHome />,
  };

  const relatedAreas = practiceArea.relatedAreas
    ? getPracticeAreasByIds(practiceArea.relatedAreas)
    : [];
  const faqItems = practiceArea.faqs ?? [];
  const guidanceMap: Record<
    string,
    {
      overview: string;
      goodFit: string[];
      notIdeal: string[];
      useCases: string[];
      pitfalls: string[];
      links: { href: string; label: string }[];
    }
  > = {
    'temporary-business-work-visas': {
      overview:
        'This option is generally suited for founders, executives, specialized employees, and professionals who need temporary, lawful entry to work or conduct business in the U.S. It typically solves the problem of short‑term work authorization, cross‑border business activity, and compliant market entry.',
      goodFit: [
        'You need a temporary work or business‑visitor solution tied to a specific role or assignment',
        'Your company needs to transfer executives or specialized employees to the U.S.',
        'You need a compliant option while planning long‑term residency',
      ],
      notIdeal: [
        'You need immediate permanent residency without a temporary phase',
        'Your intended activities fall outside the scope of business visitor rules',
      ],
      useCases: [
        'E‑1/E‑2 for treaty traders or investors expanding U.S. operations',
        'L‑1 for intra‑company transfers of executives or specialized staff',
        'O‑1 for individuals with extraordinary ability',
        'B‑1/B‑2 for short business visits (not employment)',
        'F‑1 for degree or language study leading to U.S. experience',
      ],
      pitfalls: [
        'Misclassification of activities as “business visitor” work',
        'Selecting a category that does not match the role or employer structure',
        'Incomplete evidence of qualifying relationship or investment',
        'Timing mismatches between visa validity and project timelines',
      ],
      links: [
        { href: '/practice-areas/permanent-residency-green-cards', label: 'Employment‑based green cards' },
        { href: '/practice-areas/corporate-business-support', label: 'Corporate support for transfers and expansion' },
      ],
    },
    'permanent-residency-green-cards': {
      overview:
        'This option is generally suited for professionals, executives, and investors seeking permanent residency through employment or investment. It typically solves the problem of long‑term U.S. status and stable work authorization for individuals and families.',
      goodFit: [
        'You have an employer sponsor or qualify to self‑petition',
        'You need a long‑term U.S. residence strategy for family or business',
        'You are considering an investment‑based route such as EB‑5',
      ],
      notIdeal: [
        'You need a short‑term visit or temporary work authorization only',
        'Your qualifications do not match employment‑based categories',
      ],
      useCases: [
        'EB‑1A/EB‑1B for extraordinary ability or outstanding researchers',
        'EB‑1C for multinational executives or managers',
        'EB‑2/NIW for advanced‑degree professionals and national interest work',
        'EB‑3 for skilled workers or professionals with employer sponsorship',
        'EB‑5 for qualifying investors meeting job‑creation thresholds',
      ],
      pitfalls: [
        'Assuming a job offer is optional when it is required',
        'Underestimating documentation or evidence thresholds',
        'Incorrect timing around PERM or priority dates',
        'Incomplete investment documentation for EB‑5 cases',
      ],
      links: [
        { href: '/practice-areas/temporary-business-work-visas', label: 'Temporary work visa planning' },
        { href: '/practice-areas/citizenship-naturalization', label: 'Naturalization after residency' },
      ],
    },
    'family-based-immigration': {
      overview:
        'This option is generally suited for U.S. citizens or permanent residents sponsoring close family members. It typically solves the problem of lawful family reunification and long‑term residence in the U.S.',
      goodFit: [
        'You are sponsoring a spouse, child, or parent as a U.S. citizen',
        'You are a permanent resident sponsoring eligible relatives',
        'You need guidance on marriage‑based residency or conditional green cards',
      ],
      notIdeal: [
        'You need a faster employment‑based or investment‑based pathway',
        'The family relationship does not meet eligibility categories',
      ],
      useCases: [
        'Immediate Relative (IR) cases for spouses, children, and parents',
        'Family Preference (F1‑F4) categories for adult children or siblings',
        'K‑1 fiancé(e) visas for couples preparing to marry in the U.S.',
        'Adjustment of Status or Consular Processing based on location',
      ],
      pitfalls: [
        'Incorrect assumptions about eligibility categories or wait times',
        'Insufficient evidence of relationship bona fides',
        'Timing mistakes around conditional residence removal',
        'Overlooking inadmissibility issues or waiver needs',
      ],
      links: [
        { href: '/practice-areas/citizenship-naturalization', label: 'Naturalization after residency' },
        { href: '/practice-areas/permanent-residency-green-cards', label: 'Employment‑based green cards' },
      ],
    },
    'citizenship-naturalization': {
      overview:
        'This option is generally suited for permanent residents ready for U.S. citizenship. It typically solves the problem of long‑term stability, voting rights, and travel flexibility for individuals and families.',
      goodFit: [
        'You meet residency and physical‑presence requirements',
        'You want permanent status without renewal obligations',
        'You are prepared for the civics test and interview process',
      ],
      notIdeal: [
        'You are not yet eligible based on residency timelines',
        'You have unresolved issues that could impact good moral character',
      ],
      useCases: [
        'N‑400 applications for standard naturalization',
        'Three‑year eligibility for spouses of U.S. citizens',
        'Five‑year eligibility for general lawful permanent residents',
        'Certificate of Citizenship for eligible children',
      ],
      pitfalls: [
        'Inaccurate travel history or physical‑presence calculations',
        'Incomplete disclosure of prior incidents or records',
        'Misunderstanding eligibility after marriage‑based residence',
      ],
      links: [
        { href: '/practice-areas/family-based-immigration', label: 'Family‑based immigration' },
        { href: '/practice-areas/permanent-residency-green-cards', label: 'Employment‑based residency' },
      ],
    },
    'corporate-business-support': {
      overview:
        'This option is generally suited for international companies establishing or expanding U.S. operations. It typically solves the problem of aligning immigration strategy with entity formation, contracts, and compliance.',
      goodFit: [
        'Your company is entering the U.S. market or relocating executives',
        'You need ongoing counsel for immigration and corporate compliance',
        'You want a coordinated approach across business and immigration needs',
      ],
      notIdeal: [
        'You only need a personal, non‑business immigration solution',
        'You do not require U.S. market entry or corporate structuring support',
      ],
      useCases: [
        'L‑1 transfers for executives or specialized employees',
        'B‑1 business visitor planning for short‑term activities',
        'Entity formation for U.S. operations and compliance planning',
      ],
      pitfalls: [
        'Structuring entities without immigration strategy alignment',
        'Misclassification of business activities or visitor status',
        'Incomplete compliance planning for staffing or audits',
      ],
      links: [
        { href: '/practice-areas/temporary-business-work-visas', label: 'L‑1 and treaty visa options' },
        { href: '/practice-areas/permanent-residency-green-cards', label: 'Long‑term residency planning' },
      ],
    },
    'real-estate-estate-planning': {
      overview:
        'This option is generally suited for international clients investing in U.S. real estate or planning cross‑border estates. It typically solves the problem of ownership structure, tax exposure, and succession planning.',
      goodFit: [
        'You are buying or holding U.S. property as a non‑resident',
        'You need estate planning aligned with U.S. and foreign rules',
        'You require civil law notary services for international documents',
      ],
      notIdeal: [
        'You only need a short‑term immigration or visa solution',
        'You do not own or plan to acquire U.S. assets',
      ],
      useCases: [
        'Real estate acquisition planning for non‑resident investors',
        'Estate planning structures for cross‑border families',
        'Civil law notary services for international transactions',
      ],
      pitfalls: [
        'Incorrect ownership structure leading to unexpected tax exposure',
        'Assuming U.S. property rules mirror civil‑law jurisdictions',
        'Lack of coordination between U.S. and foreign advisors',
      ],
      links: [
        { href: '/practice-areas/corporate-business-support', label: 'Corporate structuring support' },
        { href: '/practice-areas/temporary-business-work-visas', label: 'Temporary U.S. entry planning' },
      ],
    },
  };
  const guidance = guidanceMap[practiceArea.id];
  const processSteps = [
    'Strategy assessment and eligibility review',
    'Evidence planning and document preparation',
    'Filing and government review',
    'Interview or follow‑up responses (if applicable)',
    'Long‑term planning for extensions or permanent status',
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <section className="page-header section-padding text-center reveal" style={{ backgroundColor: 'var(--color-primary)', color: '#fff' }}>
        <div className="container">
          <div className="page-icon">{iconMap[practiceArea.icon]}</div>
          <h1 style={{ color: '#fff' }}>{practiceArea.title}</h1>
          <p style={{ maxWidth: '700px', margin: '1.5rem auto 0', color: 'rgba(255,255,255,0.9)', fontSize: '1.2rem' }}>
            {practiceArea.shortDescription}
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            {/* Above-fold CTA */}
            <div className="reveal" style={{ 
              marginBottom: '2rem', 
              padding: '1.5rem', 
              backgroundColor: 'var(--color-secondary)',
              borderRadius: '8px',
              display: 'flex',
              flexWrap: 'wrap',
              gap: '1rem',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
              <p style={{ margin: 0, color: '#fff', fontWeight: 500, fontSize: '1.05rem' }}>
                Ready to discuss your options? Schedule a free consultation.
              </p>
              <Link href="/contact" className="btn" style={{ 
                backgroundColor: '#fff', 
                color: 'var(--color-primary)',
                fontWeight: 600,
              }}>
                Get Started →
              </Link>
            </div>

            {/* Decision-First Opening */}
            <div className="reveal" style={{ marginBottom: '3rem' }}>
              <h2 style={{ marginBottom: '1rem' }}>Is this path the right fit?</h2>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--color-text-light)' }}>
                {guidance.overview}
              </p>
              <p style={{ marginTop: '1rem', fontWeight: 600, color: 'var(--color-primary)' }}>
                Beratung auf Deutsch verfügbar – strukturiert, transparent und individuell.
              </p>
              <div style={{ display: 'grid', gap: '1.5rem', marginTop: '1.5rem' }}>
                <div>
                  <h3 style={{ marginBottom: '0.75rem' }}>This option is often a good fit if…</h3>
                  <ul style={{ margin: 0, paddingLeft: '1.25rem', color: 'var(--color-text-light)', lineHeight: '1.7' }}>
                    {guidance.goodFit.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 style={{ marginBottom: '0.75rem' }}>This option is usually not ideal if…</h3>
                  <ul style={{ margin: 0, paddingLeft: '1.25rem', color: 'var(--color-text-light)', lineHeight: '1.7' }}>
                    {guidance.notIdeal.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Process Snapshot */}
            <div className="reveal" style={{ marginBottom: '3rem' }}>
              <h2 style={{ marginBottom: '1rem' }}>How the process typically works</h2>
              <ol style={{ margin: 0, paddingLeft: '1.25rem', color: 'var(--color-text-light)', lineHeight: '1.7' }}>
                {processSteps.map((step) => (
                  <li key={step} style={{ marginBottom: '0.5rem' }}>
                    {step}
                  </li>
                ))}
              </ol>
            </div>

            {/* Full Description */}
            <div className="reveal" style={{ marginBottom: '3rem' }}>
              <h2 style={{ marginBottom: '1.5rem' }}>What this option covers in detail</h2>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--color-text-light)' }}>
                {practiceArea.fullDescription}
              </p>
            </div>

            {/* Services */}
            <div className="reveal" style={{ marginBottom: '3rem' }}>
              <h2 style={{ marginBottom: '1rem' }}>Popular visas and solutions we handle</h2>
              <p style={{ fontWeight: 600, color: 'var(--color-primary)', marginBottom: '0.75rem' }}>
                Popular Visas we can help you obtain include:
              </p>
              <ul style={{ listStyle: 'none', padding: 0, marginBottom: '1.5rem' }}>
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
              <p style={{ marginBottom: '0.75rem', color: 'var(--color-text-light)' }}>
                How clients typically use these categories:
              </p>
              <ul style={{ margin: 0, paddingLeft: '1.25rem', color: 'var(--color-text-light)', lineHeight: '1.7' }}>
                {guidance.useCases.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              
              {/* Mid-page CTA */}
              <div style={{ 
                marginTop: '2rem', 
                padding: '1.25rem', 
                backgroundColor: 'var(--color-bg-light)',
                borderRadius: '8px',
                display: 'flex',
                flexWrap: 'wrap',
                gap: '1rem',
                alignItems: 'center',
              }}>
                <p style={{ margin: 0, flex: 1, minWidth: '200px', color: 'var(--color-text-light)' }}>
                  Questions about which category fits your situation?
                </p>
                <Link href="/contact" className="btn btn-primary" style={{ whiteSpace: 'nowrap' }}>
                  Ask Us →
                </Link>
              </div>
            </div>

            {/* Benefits */}
            <div className="reveal" style={{ marginBottom: '3rem', padding: '2.5rem', backgroundColor: 'var(--color-bg-light)', borderRadius: '12px', boxShadow: 'var(--shadow-sm)' }}>
              <h2 style={{ marginBottom: '1.5rem' }}>Why clients choose Henning Law for this path</h2>
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

            {/* Common Pitfalls */}
            <div className="reveal" style={{ marginBottom: '3rem' }}>
              <h2 style={{ marginBottom: '1rem' }}>Common issues we help clients avoid</h2>
              <ul style={{ margin: 0, paddingLeft: '1.25rem', color: 'var(--color-text-light)', lineHeight: '1.7' }}>
                {guidance.pitfalls.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            {/* Strategic Links */}
            <div className="reveal" style={{ marginBottom: '3rem' }}>
              <h2 style={{ marginBottom: '1rem' }}>Related paths worth considering</h2>
              <p style={{ color: 'var(--color-text-light)', lineHeight: '1.7' }}>
                {guidance.links.map((link, index) => (
                  <span key={link.href}>
                    <Link href={link.href} style={{ color: 'var(--color-primary)', fontWeight: 600 }}>
                      {link.label}
                    </Link>
                    {index < guidance.links.length - 1 ? ' • ' : ''}
                  </span>
                ))}
              </p>
            </div>

            {/* FAQ */}
            {faqItems.length > 0 && (
              <div className="reveal" style={{ marginBottom: '3rem' }}>
                <h2 style={{ marginBottom: '1.5rem' }}>Frequently Asked Questions for German Clients</h2>
                <div style={{ display: 'grid', gap: '1.25rem' }}>
                  {faqItems.map((item) => (
                    <div
                      key={item.question}
                      className="faq-card"
                    >
                      <h3 style={{ marginBottom: '0.5rem', fontSize: '1.1rem', color: 'var(--color-primary)' }}>
                        {item.question}
                      </h3>
                      <p style={{ margin: 0, color: 'var(--color-text-light)', lineHeight: '1.7' }}>
                        {item.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Related Practice Areas */}
            {relatedAreas.length > 0 && (
              <div className="reveal" style={{ marginBottom: '3rem' }}>
                <h2 style={{ marginBottom: '1.5rem' }}>Related U.S. Immigration Practice Areas</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
                  {relatedAreas.map((area) => (
                    <Link
                      key={area.id}
                      href={`/practice-areas/${area.slug}`}
                      className="reveal related-card"
                    >
                      <div className="related-icon">{iconMap[area.icon]}</div>
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
            <div className="reveal" style={{
              textAlign: 'center',
              padding: '3rem',
              backgroundColor: 'var(--color-bg-light)',
              borderRadius: '12px',
              marginTop: '4rem',
              boxShadow: 'var(--shadow-sm)',
            }}>
              <h3 style={{ marginBottom: '1.5rem' }}>Plan the right next step</h3>
              <p style={{ fontSize: '1.1rem', marginBottom: '2rem', maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto', color: 'var(--color-text-light)' }}>
                Discuss whether this option fits your situation and map your best path forward.
              </p>
              <div className="cta-buttons">
                <Link href="/contact" className="btn btn-primary">
                  Discuss whether this option fits your situation
                </Link>
                <Link href="/contact" className="btn btn-outline">
                  Review eligibility and strategy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}