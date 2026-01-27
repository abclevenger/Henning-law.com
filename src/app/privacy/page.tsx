import React from 'react';

const PrivacyPage = () => {
  return (
    <section className="section-padding">
      <div className="container">
        <h1>Privacy Policy</h1>
        <p>
          Henning Law Firm PLLC respects your privacy and is committed to protecting
          your personal information. This Privacy Policy explains what information we
          collect, how we use it, and the choices you have.
        </p>

        <h2>Information We Collect</h2>
        <ul>
          <li>Contact details you provide through forms or email.</li>
          <li>Appointment details when you request a consultation.</li>
          <li>Mobile number and messaging preferences if you opt in to text updates.</li>
          <li>Basic analytics data such as pages visited and time on site.</li>
        </ul>

        <h2>How We Use Information</h2>
        <ul>
          <li>To respond to inquiries and provide requested services.</li>
          <li>To schedule and manage consultations.</li>
          <li>To send text message updates if you have opted in.</li>
          <li>To improve our website and client experience.</li>
        </ul>

        <h2>Information Sharing</h2>
        <p>
          We do not sell your personal information. We may share information only
          with service providers who assist in operating our website and delivering
          services, or as required by law.
        </p>
        <p>
          <strong>No mobile information will be shared with third parties or affiliates for
          marketing or promotional purposes.</strong> Information sharing is limited to service
          providers that support our operations (for example, scheduling or messaging
          platforms) and only for the purpose of providing our services.
        </p>

        <h2>Text Messaging (A2P Compliance)</h2>
        <p>
          If you opt in to receive text messages from us, we will use your mobile number to
          provide updates about your inquiry, appointment scheduling, and related service
          information. Message frequency varies. Message and data rates may apply.
        </p>
        <p>
          You can opt out at any time by replying STOP. For help, reply HELP or contact us at{' '}
          <a href="mailto:nhenning@henning-law.com">nhenning@henning-law.com</a>.
        </p>

        <h2>Cookies and Analytics</h2>
        <p>
          This website may use cookies or similar technologies for basic analytics and
          site functionality. You can adjust cookie settings in your browser.
        </p>

        <h2>Data Security</h2>
        <p>
          We take reasonable measures to protect your information. No method of
          transmission over the internet is 100% secure.
        </p>

        <h2>Your Choices</h2>
        <p>
          You may contact us to update, correct, or delete your information, subject
          to legal and ethical obligations.
        </p>
        <p>
          You may also opt out of text messages at any time by replying STOP.
        </p>

        <h2>Contact</h2>
        <p>
          If you have questions about this Privacy Policy, please contact us at{' '}
          <a href="mailto:nhenning@henning-law.com">nhenning@henning-law.com</a>.
        </p>
      </div>
    </section>
  );
};

export default PrivacyPage;
