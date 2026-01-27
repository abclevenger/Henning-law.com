"use client";

import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { images } from '@/data/images';

const heroSlides = [
  {
    title: "Creating Your Individual Path to the United States",
    subtitle: "Tailored Strategies to Navigate Work, Residency, and Business Success",
    ctaText: "LEARN MORE ABOUT OUR Practice Areas",
    ctaLink: "/practice-areas",
    backgroundImage: images.passports || 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?ixlib=rb-4.0.3&auto=format&fit=crop&w=2600&q=80'
  },
  {
    title: "Supporting your Business with Tailored Visa and Immigration Strategies",
    subtitle: "Navigating Work, Residency, and Long-Term Business Success for Immigrants Worldwide",
    ctaText: "LEARN MORE ABOUT OUR Practice Areas",
    ctaLink: "/practice-areas",
    backgroundImage: images.attorneyProfessional || 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?ixlib=rb-4.0.3&auto=format&fit=crop&w=2600&q=80'
  },
  {
    title: "Securing Your American Dream with Tailored Immigration Strategies for Your Family",
    subtitle: "Navigating Work, Residency, and Business Success for Immigrants Worldwide",
    ctaText: "LEARN MORE ABOUT OUR Practice Areas",
    ctaLink: "/practice-areas",
    backgroundImage: images.consultation || 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?ixlib=rb-4.0.3&auto=format&fit=crop&w=2600&q=80'
  },
  {
    title: "Let us Help You Design Your Path to Success in the United States",
    subtitle: "The rules and regulations that govern living, working, or purchasing property in the United States can be time consuming and overwhelming. Spend your time doing what you do best and let us do what we do best.",
    ctaText: "LEARN MORE ABOUT OUR Practice Areas",
    ctaLink: "/practice-areas",
    backgroundImage: images.passports || 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?ixlib=rb-4.0.3&auto=format&fit=crop&w=2600&q=80'
  }
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000); // Change slide every 6 seconds

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="hero">
      <div className="hero-underlay"></div>
      <div className="hero-overlay"></div>
      <div className="hero-slides">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
            style={{
              backgroundImage: `url(${slide.backgroundImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="container hero-content">
              <h1>{slide.title}</h1>
              <p>{slide.subtitle}</p>
              <div className="hero-actions">
                <Link href={slide.ctaLink} className="btn btn-primary">
                  {slide.ctaText}
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="hero-dots">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            className={`hero-dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <style jsx>{`
        .hero {
          position: relative;
          height: 85vh;
          min-height: 600px;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          background-color: transparent;
          color: var(--color-white);
          overflow: hidden;
        }

        .hero-underlay {
          position: absolute;
          inset: 0;
          background-image: url('/images/hero-underlay.png');
          background-size: cover;
          background-position: center;
          z-index: 0;
          opacity: 0.9;
        }
        
        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(rgba(10, 25, 47, 0.4), rgba(10, 25, 47, 0.6));
          z-index: 1;
        }
        
        .hero-slides {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 2;
        }
        
        .hero-slide {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transform: scale(1.04);
          transition: opacity 1s ease-in-out, transform 1.6s ease;
        }
        
        .hero-slide.active {
          opacity: 1;
          transform: scale(1.01);
        }
        
        .hero-content {
          position: relative;
          z-index: 3;
          max-width: 900px;
          padding: 2rem;
        }
        
        .hero h1 {
          color: var(--color-white);
          font-size: 3.5rem;
          font-weight: 700;
          text-shadow: 0 4px 6px rgba(0,0,0,0.3);
          margin-bottom: 2rem;
          line-height: 1.2;
        }
        
        .hero p {
          color: rgba(255,255,255,0.95);
          font-size: 1.4rem;
          max-width: 800px;
          margin: 0 auto 3rem;
          line-height: 1.6;
        }
        
        .hero-actions {
          margin-top: 2rem;
        }
        
        .hero-dots {
          position: absolute;
          bottom: 2rem;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 1rem;
          z-index: 4;
        }
        
        .hero-dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          border: 2px solid rgba(255,255,255,0.5);
          background: transparent;
          cursor: pointer;
          transition: all 0.3s ease;
          padding: 0;
        }
        
        .hero-dot.active,
        .hero-dot:hover {
          background: var(--color-secondary);
          border-color: var(--color-secondary);
        }
        
        @media (max-width: 768px) {
          .hero {
            height: 70vh;
            min-height: 500px;
          }
          
          .hero h1 {
            font-size: 2.5rem;
          }
          
          .hero p {
            font-size: 1.2rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;