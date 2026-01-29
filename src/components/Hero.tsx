 "use client";

import Link from 'next/link';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { images } from '@/data/images';
import { useLanguage } from '@/contexts/LanguageContext';

interface HeroSlide {
  titleKey: string;
  subtitleKey: string;
  ctaKey: string;
  ctaLink: string;
}

const heroSlides: HeroSlide[] = [
  {
    titleKey: 'hero.slide1.title',
    subtitleKey: 'hero.slide1.subtitle',
    ctaKey: 'hero.slide.cta',
    ctaLink: '/practice-areas',
  },
  {
    titleKey: 'hero.slide2.title',
    subtitleKey: 'hero.slide2.subtitle',
    ctaKey: 'hero.slide.cta',
    ctaLink: '/practice-areas',
  },
  {
    titleKey: 'hero.slide3.title',
    subtitleKey: 'hero.slide3.subtitle',
    ctaKey: 'hero.slide.cta',
    ctaLink: '/practice-areas',
  },
  {
    titleKey: 'hero.slide4.title',
    subtitleKey: 'hero.slide4.subtitle',
    ctaKey: 'hero.slide.cta',
    ctaLink: '/practice-areas',
  },
];

const Hero = () => {
  const { t: translate } = useLanguage();
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
      <div className="hero-bg-image">
        <Image
          src="/images/hero-consultation.png"
          alt="Attorney consultation with clients"
          fill
          priority
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: 'center' }}
        />
      </div>
      <div className="hero-overlay"></div>
      <div className="hero-slides">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
          >
            <div className="container hero-content">
              <h1>{translate(slide.titleKey)}</h1>
              <p>{translate(slide.subtitleKey)}</p>
              <div className="hero-actions">
                <Link href="/contact" className="btn btn-primary">
                  {translate('cta.scheduleConsultation')}
                </Link>
                <Link href={slide.ctaLink} className="btn btn-outline-light">
                  {translate(slide.ctaKey)}
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
          background-color: #0a192f;
          color: var(--color-white);
          overflow: hidden;
        }

        .hero-bg-image {
          position: absolute;
          inset: 0;
          z-index: 0;
        }

        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(rgba(10, 25, 47, 0.55), rgba(10, 25, 47, 0.75));
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
          justify-content: flex-start;
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
          max-width: 560px;
          margin-left: clamp(2rem, 6vw, 4rem);
          margin-right: auto;
          padding: 2rem 2rem 2rem 0;
          text-align: left;
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
          max-width: 100%;
          margin: 0 0 3rem 0;
          line-height: 1.6;
        }
        
        .hero-actions {
          margin-top: 2rem;
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          justify-content: flex-start;
        }
        
        .btn-outline-light {
          background: transparent;
          border: 2px solid rgba(255,255,255,0.7);
          color: #fff;
          padding: 0.875rem 1.75rem;
          border-radius: 4px;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s ease;
        }
        
        .btn-outline-light:hover {
          background: rgba(255,255,255,0.15);
          border-color: #fff;
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
          width: 44px;
          height: 44px;
          border-radius: 50%;
          border: none;
          background: transparent;
          cursor: pointer;
          transition: all 0.3s ease;
          padding: 0;
          position: relative;
        }
        
        .hero-dot::after {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 12px;
          height: 12px;
          border-radius: 50%;
          border: 2px solid rgba(255,255,255,0.5);
          background: transparent;
          transition: all 0.3s ease;
        }
        
        .hero-dot.active::after,
        .hero-dot:hover::after {
          background: var(--color-secondary);
          border-color: var(--color-secondary);
        }
        
        .hero-dot:focus-visible {
          outline: 2px solid var(--color-secondary);
          outline-offset: 2px;
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