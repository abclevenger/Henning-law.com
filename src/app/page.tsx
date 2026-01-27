"use client";

import Link from 'next/link';
import Hero from '@/components/Hero';
import { IconStrategy, IconGlobe, IconKey } from '@/components/Icons';
import { images } from '@/data/images';

export default function Home() {
  return (
    <>
      <Hero />

      {/* Let us Help You Design Your Path Section */}
      <section className="section-padding">
        <div className="container">
          <div className="text-center reveal" style={{ maxWidth: '900px', margin: '0 auto' }}>
            <h2>Let us Help You Design Your Path to Success in the United States</h2>
            <p style={{ marginTop: '1.5rem', fontSize: '1.1rem' }}>
              The rules and regulations that govern living, working, or purchasing property in the United States can be time consuming and overwhelming. Spend your time doing what you do best and let us do what we do best.
            </p>
            
            <div style={{ marginTop: '3rem', textAlign: 'left', maxWidth: '700px', marginLeft: 'auto', marginRight: 'auto' }}>
              <h3 style={{ marginBottom: '1.5rem', textAlign: 'center' }}>We're good at what we do:</h3>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ marginBottom: '1.5rem', paddingLeft: '2rem', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 0, color: 'var(--color-secondary)', fontSize: '1.5rem' }}>•</span>
                  <strong style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--color-primary)' }}>
                    Deciphering the visa process and helping you achieve the best solutions for you, your family or your business
                  </strong>
                </li>
                <li style={{ marginBottom: '1.5rem', paddingLeft: '2rem', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 0, color: 'var(--color-secondary)', fontSize: '1.5rem' }}>•</span>
                  <strong style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--color-primary)' }}>
                    Understanding the legalities of owning U.S. property as a non-resident
                  </strong>
                </li>
                <li style={{ marginBottom: '1.5rem', paddingLeft: '2rem', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 0, color: 'var(--color-secondary)', fontSize: '1.5rem' }}>•</span>
                  <strong style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--color-primary)' }}>
                    Navigating the complexities of starting and managing a U.S. business
                  </strong>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Building Bridges Section */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-bg-light)' }}>
        <div className="container text-center reveal">
          <h2 style={{ fontSize: '3rem', marginBottom: '2rem' }}>Building Bridges To The Land of Opportunity</h2>
        </div>
      </section>

      {/* From Temporary and Permanent Residence Section */}
      <section className="section-padding">
        <div className="container">
          <div className="content-image-grid">
            <div className="content-text reveal">
              <h2>From Temporary and Permanent Residence to Citizenship - We've Got the Answers to Your Questions</h2>
              <p style={{ fontSize: '1.1rem', marginTop: '1.5rem' }}>
                If your personal or business plans include living, working or investing in the United States, we assist with strategies that open doors for you and avoid costly pitfalls.
              </p>
              <p style={{ fontSize: '1.1rem', marginTop: '1rem' }}>
                It's not just about paperwork. It's about understanding your unique story and ambitions and helping you get to where you want to be as smoothly as possible.
              </p>

              <div style={{ marginTop: '2.5rem' }}>
                <h3 style={{ marginBottom: '1.5rem' }}>Let us Guide You:</h3>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  <li style={{ marginBottom: '2rem' }}>
                    <strong style={{ display: 'block', marginBottom: '0.75rem', color: 'var(--color-primary)', fontSize: '1.1rem' }}>
                      Personalized Visa Plans:
                    </strong>
                    <p style={{ marginBottom: 0 }}>
                      One size does not fit all. Your journey deserves attention to detail and solutions that work for your company or personal life. That may involve creating a path to U.S. residency - or optimizing your ability to visit without incurring the obligations of residency.
                    </p>
                  </li>
                  <li style={{ marginBottom: '2rem' }}>
                    <strong style={{ display: 'block', marginBottom: '0.75rem', color: 'var(--color-primary)', fontSize: '1.1rem' }}>
                      Comprehensive Representation in Other Areas of the Law:
                    </strong>
                    <p style={{ marginBottom: 0 }}>
                      Whether you are starting a new business venture or purchasing property for personal reasons, we can assist you with market entry into the U.S.A. and the legal complexities of buying and owning property as a non-resident.
                    </p>
                  </li>
                  <li style={{ marginBottom: '2rem' }}>
                    <strong style={{ display: 'block', marginBottom: '0.75rem', color: 'var(--color-primary)', fontSize: '1.1rem' }}>
                      Global Perspective:
                    </strong>
                    <p style={{ marginBottom: 0 }}>
                      Our international background and decades of serving clients from all corners of the globe mean sensitivity to cultural issues, the immigrant experience and creating a holistic approach that ensures educated decisions.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="content-image reveal">
              <div style={{
                width: '100%',
                height: '100%',
                minHeight: '500px',
                backgroundColor: '#ddd',
                borderRadius: '8px',
                backgroundImage: 'url(https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800)',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }} />
            </div>
          </div>
        </div>

        <style jsx>{`
          .content-image-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 3rem;
            align-items: start;
          }
          
          @media (min-width: 968px) {
            .content-image-grid {
              grid-template-columns: 1.2fr 1fr;
            }
          }
          
          .content-text h2 {
            font-size: 2.5rem;
            margin-bottom: 1.5rem;
          }
        `}</style>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-bg-light)' }}>
        <div className="container">
          <div className="text-center reveal" style={{ marginBottom: '4rem' }}>
            <h2>Why Choose Us</h2>
          </div>

          <div className="features-grid">
            <div className="feature-card reveal">
              <div className="feature-icon">
                <IconStrategy />
              </div>
              <h3>Personalized Immigration Strategies for individuals, families, startups and employers</h3>
              <p>
                We recognize that each immigration journey is distinct, and shaped by individual backgrounds and aspirations. By choosing us, you benefit from expert advice and creativity based on years of experience in the U.S. market. We pride ourselves on fashioning customized strategies that are created with your best long-term interest in mind.
              </p>
            </div>

            <div className="feature-card reveal">
              <div className="feature-icon">
                <IconGlobe />
              </div>
              <h3>Global Perspective and Expert Guidance to protect your interests in the long term</h3>
              <p>
                Ms. Henning brings to the table a wealth of personal experience as an immigrant and in advising individuals, businesses and families from various corners of the globe in their transition to the United States. Whether you're looking to live, work or play in the United States, the firm's expertise can help ensure a soft landing stateside.
              </p>
            </div>

            <div className="feature-card reveal">
              <div className="feature-icon">
                <IconKey />
              </div>
              <h3>Comprehensive representation to guide your property purchase or market entry into the U.S.A.</h3>
              <p>
                Not all questions are immigration questions. We offer comprehensive representation to protect our clients' interests in the areas of real estate, corporate, taxation, estate planning and other areas of the law. In that respect, Ms. Henning often acts as "general counsel" to help build relationships and calls in experts in other speciality areas as needed.
              </p>
            </div>
          </div>

          <div className="text-center reveal" style={{ marginTop: '4rem' }}>
            <Link href="/practice-areas" className="btn btn-primary">
              Learn More About Our Practice Areas
            </Link>
          </div>
        </div>

        <style jsx>{`
          .features-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 3rem;
          }
          
          @media (min-width: 768px) {
            .features-grid {
              grid-template-columns: repeat(3, 1fr);
            }
          }
          
          .feature-card {
            background: #fff;
            padding: 2.5rem;
            border-radius: 12px;
            transition: transform var(--transition-base), box-shadow var(--transition-base), border-color var(--transition-base);
            box-shadow: var(--shadow-sm);
            border: 1px solid rgba(15, 23, 42, 0.08);
            text-align: center;
          }

          .feature-icon {
            color: var(--color-secondary);
            width: 60px;
            height: 60px;
            margin: 0 auto 1.5rem;
          }

          .feature-icon :global(svg) {
            width: 60px;
            height: 60px;
          }
          
          .feature-card:hover {
            transform: translateY(-10px);
            box-shadow: var(--shadow-md);
          }
          
          .feature-card h3 {
            font-size: 1.4rem;
            margin-bottom: 1.5rem;
            color: var(--color-primary);
            line-height: 1.4;
          }
          
          .feature-card p {
            color: var(--color-text-light);
            line-height: 1.7;
          }
        `}</style>
      </section>

      {/* Supporting Immigrants Section */}
      <section className="section-padding">
        <div className="container">
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <h2 className="text-center reveal" style={{ marginBottom: '2rem' }}>Supporting Immigrants to Thrive in The U.S.</h2>
            <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>
              Welcome to <strong>Henning Law Firm PLLC</strong>, where nothing gives us greater satisfaction than assisting our clients in realizing their very own personal, professional or commercial goals in the United States.
            </p>
            <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>
              Henning Law Firm is guided by Ms. Henning's own background as an immigrant, her service as former Honorary Consul of Germany in Florida, and her experience as a practicing attorney. Her background provides a unique perspective when it comes to the legal and cultural aspects of navigating market entry, establishing lasting business and personal relationships, and raising a family in the United States. Her approach to the practice is based on her appreciation for the opportunities the United States offers to newcomers as well as a deep respect for the contributions that immigrants have made and continue to make to this country. Based on this philosophy, the firm focuses on designing tailored visa and immigration strategies and counseling clients in areas of property ownership and U.S. market entry for business ventures in the United States.
            </p>
            <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>
              <strong>What sets us apart?</strong>
            </p>
            <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>
              When it comes to moving your life to the United States, we have answers to the questions you may not even know to ask. Particularly for investors and immigrants from Civil Law countries, the U.S. common law legal system presents challenges that should not be underestimated. Our holistic approach takes into account our clients' individual goals and addresses complexities such as tax and estate planning considerations as well as corporate, contractual, intellectual property, and other aspects of the law. We work with a network of like-minded specialists who ensure you receive personalized guidance every step of the way.
            </p>
            <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>
              <strong>What we do not do</strong>:
            </p>
            <p style={{ fontSize: '1.1rem', marginBottom: 0 }}>
              While we stand ready to help you with all the legal challenges of coming to the United States, neither the firm nor Ms. Henning provide any financial advice or investment recommendations. All financial decisions are made by clients or in concert with their independently selected or retained licensed investment advisors or real estate brokers.
            </p>
            <div className="text-center" style={{ marginTop: '3rem' }}>
              <Link href="/practice-areas" className="btn btn-outline">
                Continue reading
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-bg-light)' }}>
        <div className="container">
          <div className="text-center reveal" style={{ marginBottom: '4rem' }}>
            <h2>Hear It Straight from Our Happy Clients</h2>
          </div>

          <div className="testimonials-grid">
            <div className="testimonial-card reveal">
              <blockquote style={{ margin: 0, fontStyle: 'italic', fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--color-text-light)' }}>
                <p style={{ marginBottom: '1.5rem' }}>
                  I was referred to Norma Henning by my CPA, who spoke <strong>highly</strong> about her <strong>knowledge</strong> when it comes to visa and immigration matters. I wanted to move from Germany to the US and was looking for the best way to get my visa or even permanent resident card (green card). She <strong>analyzed</strong> my professional background and found that I qualified for classification as an Alien of Extraordinary Ability in my field.
                </p>
                <p style={{ marginBottom: '1.5rem' }}>
                  Now some time ago, I opened my own consulting firm and get to contribute my experience and skills to U.S. clients while enjoying the flexibility that permanent residence brings with it. Traveling back and forth to Europe has been possible even during the pandemic, and I am very <strong>grateful</strong> to Ms. Henning for guiding and supporting me and my wife throughout the process.
                </p>
                <p style={{ marginBottom: '1.5rem' }}>
                  She has shown so much <strong>knowledge</strong> and <strong>experience</strong> in this matter, that I always felt like I was in the <strong>best</strong> of hands. And she navigated all matters of the process at the very <strong>high standard</strong> which I expected as an executive manager. Also, it has been a lot of <strong>fun</strong> to work with Norma Henning and I have recommended her in the past more than a dozen times to friends and other entrepreneurs.
                </p>
              </blockquote>
              <footer style={{ marginTop: '2rem', textAlign: 'right', fontStyle: 'normal' }}>
                <strong style={{ color: 'var(--color-primary)' }}>—Dr. Ulrich P., Naples FL</strong>
              </footer>
            </div>

            <div className="testimonial-card reveal">
              <blockquote style={{ margin: 0, fontStyle: 'italic', fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--color-text-light)' }}>
                <p style={{ marginBottom: '1.5rem' }}>
                  The immigration process can be a stressful and challenging journey. This is exactly how I felt before I met Norma Henning. I was going through a rough divorce, had an arrest record and did not have any family around. I was not sure if I would be able to have my case approved. Norma was able to prepare everything. She assured and supported me throughout the entire process. After going through another similar process without an attorney, this was a completely <strong>unique</strong> experience to have Norma by my side attending my interviews in the USCIS. She was like Immigration <strong>Fairy Godmother</strong> who made things magically happen.
                </p>
                <p style={{ marginBottom: '1.5rem' }}>
                  I am beyond <strong>grateful</strong> for all the <strong>professionalism</strong> and <strong>care</strong> that Norma always provided. After receiving my green card and citizenship, I referred Norma to my parents to apply for their green cards. It was also a challenging case due to my father's military background. But her level of <strong>experience</strong> and <strong>expertise</strong> helped us get the application done the right way. I told Norma once that I trusted her 110% and if she told me to dress up as a clown for the interview, I would have done it because she knows best. Do not hesitate, get your case managed by a professional immigration attorney who <strong>cares</strong>!
                </p>
              </blockquote>
              <footer style={{ marginTop: '2rem', textAlign: 'right', fontStyle: 'normal' }}>
                <strong style={{ color: 'var(--color-primary)' }}>—Maria S. and family, Tampa</strong>
              </footer>
            </div>

            <div className="testimonial-card reveal">
              <blockquote style={{ margin: 0, fontStyle: 'italic', fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--color-text-light)' }}>
                <p style={{ marginBottom: '1.5rem' }}>
                  It was a <strong>pleasure</strong> to work with Mrs. Henning from the initial consultation until the day our case was <strong>approved</strong> and green card was in our hand.
                </p>
                <p style={{ marginBottom: '1.5rem' }}>
                  She was always very <strong>accessible</strong>, <strong>responsive</strong>, and <strong>reliable</strong>, and was an extremely <strong>knowledgeable</strong> resource on timelines, procedures, current immigration laws and what to expect from the process from start to finish.
                </p>
                <p style={{ marginBottom: '1.5rem' }}>
                  Most important for us is the fact that Mrs. Henning was <strong>efficient</strong> and <strong>timely</strong> in preparing the paperwork and forms for every stage of the application and was diligent and thorough in creating a comprehensive case file to ensure we were providing all information necessary for a successful adjudication of our case.
                </p>
                <p style={{ marginBottom: '1.5rem' }}>
                  She was on top of things every step of the way and we knew we could <strong>rely</strong> on her to make sure everything was taken care. We were in <strong>fantastic</strong> hands and would not hesitate to highly recommend working with her to anyone. Thanks so much.
                </p>
              </blockquote>
              <footer style={{ marginTop: '2rem', textAlign: 'right', fontStyle: 'normal' }}>
                <strong style={{ color: 'var(--color-primary)' }}>—Michaela H.-W. and Heiko W., Florida and Georgia</strong>
              </footer>
            </div>
          </div>
        </div>

        <style jsx>{`
          .testimonials-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 3rem;
          }
          
          @media (min-width: 968px) {
            .testimonials-grid {
              grid-template-columns: repeat(3, 1fr);
            }
          }
          
          .testimonial-card {
            background: #fff;
            padding: 2.5rem;
            border-radius: 12px;
            box-shadow: var(--shadow-sm);
            border: 1px solid rgba(15, 23, 42, 0.08);
            transition: transform var(--transition-base), box-shadow var(--transition-base);
          }

          .testimonial-card:hover {
            transform: translateY(-8px);
            box-shadow: var(--shadow-md);
          }
          
          .testimonial-card blockquote p {
            margin-bottom: 1.5rem;
          }
        `}</style>
      </section>

      {/* Unlock Your American Dream CTA Section */}
      <section
        className="section-padding"
        style={{
          backgroundImage: `linear-gradient(rgba(10, 25, 47, 0.5), rgba(10, 25, 47, 0.75)), url(${images.consultation})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: 'var(--color-white)',
        }}
      >
        <div className="container text-center reveal">
          <h2 style={{ color: 'var(--color-white)', marginBottom: '1.5rem' }}>
            Unlock Your American Dream Today
          </h2>
          <p style={{ 
            fontSize: '1.3rem', 
            marginBottom: '2.5rem', 
            color: 'rgba(255,255,255,0.95)',
            maxWidth: '700px',
            marginLeft: 'auto',
            marginRight: 'auto'
          }}>
            Tailored Solutions for your U.S. Immigration Journey
          </p>
          <Link href="/contact" className="btn" style={{ 
            backgroundColor: 'var(--color-secondary)', 
            color: 'var(--color-white)',
            borderColor: 'var(--color-secondary)'
          }}>
            Contact
          </Link>
        </div>
      </section>
    </>
  );
}