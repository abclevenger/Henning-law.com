"use client";

import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { images } from '@/data/images';
import { useLanguage, Language } from '@/contexts/LanguageContext';

interface HeroSlide {
  title: Record<Language, string>;
  subtitle: Record<Language, string>;
  ctaText: Record<Language, string>;
  ctaLink: string;
}

const secondaryCTA = {
  text: {
    en: "Schedule a Consultation",
    de: "Beratung vereinbaren",
    es: "Programar una consulta",
    fr: "Planifier une consultation",
    zh: "预约咨询",
    ja: "相談を予約する",
    ar: "حدد موعداً للاستشارة",
  },
  link: "/contact",
};

const heroSlides: HeroSlide[] = [
  {
    title: {
      en: "U.S. Immigration for German-Speaking Clients Worldwide",
      de: "US-Einwanderung für deutschsprachige Mandanten weltweit",
      es: "Inmigración a EE.UU. para clientes de habla alemana en todo el mundo",
      fr: "Immigration aux États-Unis pour les clients germanophones du monde entier",
      zh: "为全球德语客户提供美国移民服务",
      ja: "世界中のドイツ語圏のお客様向け米国移民サービス",
      ar: "الهجرة إلى الولايات المتحدة للعملاء الناطقين بالألمانية حول العالم",
    },
    subtitle: {
      en: "Tailored strategies for work visas, residency, and business success in the United States",
      de: "Maßgeschneiderte Strategien für Arbeitsvisa, Aufenthalt und geschäftlichen Erfolg in den USA",
      es: "Estrategias personalizadas para visas de trabajo, residencia y éxito empresarial en los Estados Unidos",
      fr: "Stratégies personnalisées pour les visas de travail, la résidence et le succès commercial aux États-Unis",
      zh: "为工作签证、居留和美国商业成功量身定制的策略",
      ja: "就労ビザ、永住権、米国でのビジネス成功のためのカスタマイズ戦略",
      ar: "استراتيجيات مخصصة لتأشيرات العمل والإقامة والنجاح التجاري في الولايات المتحدة",
    },
    ctaText: {
      en: "Explore Our Practice Areas",
      de: "Unsere Rechtsgebiete entdecken",
      es: "Explorar nuestras áreas de práctica",
      fr: "Découvrir nos domaines de pratique",
      zh: "探索我们的业务领域",
      ja: "業務分野を見る",
      ar: "استكشف مجالات ممارستنا",
    },
    ctaLink: "/practice-areas",
  },
  {
    title: {
      en: "Business Immigration & Visa Strategy",
      de: "Geschäftseinwanderung & Visa-Strategie",
      es: "Inmigración de negocios y estrategia de visas",
      fr: "Immigration d'affaires et stratégie de visa",
      zh: "商业移民和签证策略",
      ja: "ビジネス移民とビザ戦略",
      ar: "هجرة الأعمال واستراتيجية التأشيرات",
    },
    subtitle: {
      en: "Helping international entrepreneurs and companies establish and grow in the U.S. market",
      de: "Wir unterstützen internationale Unternehmer und Firmen beim Aufbau und Wachstum im US-Markt",
      es: "Ayudando a empresarios y empresas internacionales a establecerse y crecer en el mercado estadounidense",
      fr: "Aider les entrepreneurs et entreprises internationaux à s'établir et se développer sur le marché américain",
      zh: "帮助国际企业家和公司在美国市场建立和发展业务",
      ja: "国際的な起業家や企業が米国市場で事業を確立し成長するのを支援",
      ar: "مساعدة رواد الأعمال والشركات الدولية على التأسيس والنمو في السوق الأمريكي",
    },
    ctaText: {
      en: "Explore Our Practice Areas",
      de: "Unsere Rechtsgebiete entdecken",
      es: "Explorar nuestras áreas de práctica",
      fr: "Découvrir nos domaines de pratique",
      zh: "探索我们的业务领域",
      ja: "業務分野を見る",
      ar: "استكشف مجالات ممارستنا",
    },
    ctaLink: "/practice-areas",
  },
  {
    title: {
      en: "Family Immigration & Green Cards",
      de: "Familieneinwanderung & Green Cards",
      es: "Inmigración familiar y tarjetas verdes",
      fr: "Immigration familiale et cartes vertes",
      zh: "家庭移民和绿卡",
      ja: "家族移民とグリーンカード",
      ar: "الهجرة العائلية والبطاقات الخضراء",
    },
    subtitle: {
      en: "Reuniting families and securing permanent residency for loved ones",
      de: "Familien zusammenführen und dauerhaften Aufenthalt für Angehörige sichern",
      es: "Reuniendo familias y asegurando la residencia permanente para sus seres queridos",
      fr: "Réunir les familles et sécuriser la résidence permanente pour vos proches",
      zh: "团聚家庭并为亲人获得永久居留权",
      ja: "家族を再会させ、愛する人の永住権を確保",
      ar: "لم شمل العائلات وتأمين الإقامة الدائمة لأحبائك",
    },
    ctaText: {
      en: "Explore Our Practice Areas",
      de: "Unsere Rechtsgebiete entdecken",
      es: "Explorar nuestras áreas de práctica",
      fr: "Découvrir nos domaines de pratique",
      zh: "探索我们的业务领域",
      ja: "業務分野を見る",
      ar: "استكشف مجالات ممارستنا",
    },
    ctaLink: "/practice-areas",
  },
  {
    title: {
      en: "Investment & EB-5 Visa Guidance",
      de: "Investitions- & EB-5-Visum-Beratung",
      es: "Orientación sobre inversión y visa EB-5",
      fr: "Conseils en investissement et visa EB-5",
      zh: "投资和EB-5签证指导",
      ja: "投資およびEB-5ビザガイダンス",
      ar: "إرشادات الاستثمار وتأشيرة EB-5",
    },
    subtitle: {
      en: "Navigate U.S. property ownership, business investment, and investor visa pathways",
      de: "US-Immobilieneigentum, Unternehmensinvestitionen und Investorenvisum-Wege navigieren",
      es: "Navegue por la propiedad inmobiliaria en EE.UU., la inversión empresarial y las vías de visa de inversor",
      fr: "Naviguer dans la propriété immobilière américaine, l'investissement commercial et les voies de visa investisseur",
      zh: "指导美国房产所有权、商业投资和投资者签证途径",
      ja: "米国の不動産所有、事業投資、投資家ビザの道を案内",
      ar: "التنقل في ملكية العقارات الأمريكية والاستثمار التجاري ومسارات تأشيرة المستثمر",
    },
    ctaText: {
      en: "Explore Our Practice Areas",
      de: "Unsere Rechtsgebiete entdecken",
      es: "Explorar nuestras áreas de práctica",
      fr: "Découvrir nos domaines de pratique",
      zh: "探索我们的业务领域",
      ja: "業務分野を見る",
      ar: "استكشف مجالات ممارستنا",
    },
    ctaLink: "/practice-areas",
  }
];

const Hero = () => {
  const { language } = useLanguage();
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
      <div className="hero-overlay"></div>
      <div className="hero-slides">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
          >
            <div className="container hero-content">
              <h1>{slide.title[language]}</h1>
              <p>{slide.subtitle[language]}</p>
              <div className="hero-actions">
                <Link href={secondaryCTA.link} className="btn btn-primary">
                  {secondaryCTA.text[language]}
                </Link>
                <Link href={slide.ctaLink} className="btn btn-outline-light">
                  {slide.ctaText[language]}
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
          background-image: url('/images/hero-background.png');
          background-size: cover;
          background-position: center;
          color: var(--color-white);
          overflow: hidden;
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
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          justify-content: center;
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