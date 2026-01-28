import React from 'react';
import Link from 'next/link';

const TermsPage = () => {
  return (
    <section className="section-padding">
      <div className="container" style={{ maxWidth: '900px' }}>
        <h1>Terms and Conditions</h1>
        <p>
          By using this website, you agree to the following terms and conditions.
          If you do not agree, please do not use the site.
        </p>

        <h2>No Legal Advice</h2>
        <p>
          Information on this website is for general informational purposes only and
          does not constitute legal advice. Contacting us does not create an
          attorney-client relationship.
        </p>

        <h2>Use of Website</h2>
        <ul>
          <li>You agree to use this site for lawful purposes only.</li>
          <li>You agree not to attempt to disrupt or misuse the site.</li>
          <li>Content may not be copied or reused without permission.</li>
        </ul>

        <h2>Text Messaging Terms (A2P Compliance)</h2>
        <p>
          If you provide your mobile number and opt in to receive text messages from us, you
          consent to receive informational messages related to your inquiry, appointments,
          and services. Message frequency varies. Message and data rates may apply.
        </p>
        <p>
          You can opt out at any time by replying STOP. For help, reply HELP or contact us at{' '}
          <a href="mailto:nhenning@henning-law.com">nhenning@henning-law.com</a>.
        </p>
        <p>
          Carriers are not liable for delayed or undelivered messages.
        </p>

        <h2>Third-Party Links</h2>
        <p>
          This website may include links to third-party websites. We are not
          responsible for their content or privacy practices.
        </p>

        <h2>Limitation of Liability</h2>
        <p>
          Henning Law Firm PLLC is not liable for any damages arising from your use
          of this website or reliance on any information provided here.
        </p>

        <h2>Changes to These Terms</h2>
        <p>
          We may update these terms from time to time. Continued use of the website
          after changes are posted constitutes acceptance of the updated terms.
        </p>

        <h2>Contact</h2>
        <p>
          Questions about these terms? Email{' '}
          <a href="mailto:nhenning@henning-law.com">nhenning@henning-law.com</a>.
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
};

export default TermsPage;
