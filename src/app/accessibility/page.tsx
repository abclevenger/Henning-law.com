import Link from 'next/link';

export default function Accessibility() {
  return (
    <section className="section-padding">
      <div className="container" style={{ maxWidth: '900px' }}>
        <h1>Accessibility Statement</h1>
        <p>
          Henning Law Firm PLLC is committed to providing a website that is accessible to the widest
          possible audience, including individuals with disabilities. We aim to conform to
          applicable accessibility standards and continuously improve the user experience.
        </p>
        <h2>Measures We Support</h2>
        <ul style={{ listStyle: 'disc', paddingLeft: '1.25rem' }}>
          <li>Clear heading structure and readable typography</li>
          <li>Keyboard-friendly navigation and focus visibility</li>
          <li>Meaningful link text and alternative text for images</li>
          <li>Responsive layouts for different devices</li>
        </ul>
        <h2>Feedback</h2>
        <p>
          If you experience any difficulty accessing content on this website, please contact us so
          we can assist you and improve our accessibility.
        </p>
        <p>
          Email us at{' '}
          <a href="mailto:nhenning@henning-law.com">nhenning@henning-law.com</a> or call{' '}
          <a href="tel:2398216504">(239) 821-6504</a>.
        </p>
        <p>
          You can also use the <Link href="/contact">contact form</Link>.
        </p>
        
        {/* CTA Section */}
        <div style={{
          marginTop: '3rem',
          padding: '2rem',
          backgroundColor: 'var(--color-bg-light)',
          borderRadius: '8px',
          textAlign: 'center',
        }}>
          <h3 style={{ marginBottom: '1rem' }}>Have Immigration Questions?</h3>
          <p style={{ marginBottom: '1.5rem', color: 'var(--color-text-light)' }}>
            Schedule a consultation to discuss your goals.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn btn-primary">
              Contact Us
            </Link>
            <Link href="/practice-areas" className="btn btn-outline">
              View Practice Areas
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
