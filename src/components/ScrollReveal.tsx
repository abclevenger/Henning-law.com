"use client";

import { useEffect } from 'react';

const ScrollReveal = () => {
  useEffect(() => {
    const elements = Array.from(
      document.querySelectorAll('.reveal, .section-padding > .container, .page-header')
    );

    elements.forEach((el) => {
      if (!el.classList.contains('reveal')) {
        el.classList.add('reveal');
      }
    });

    const markInitiallyVisible = () => {
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const inView = rect.top <= window.innerHeight * 0.9 && rect.bottom >= 0;
        if (inView) {
          el.classList.add('is-visible');
        }
      });
    };

    markInitiallyVisible();

    if (!('IntersectionObserver' in window)) {
      elements.forEach((el) => el.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -10% 0px' }
    );

    elements.forEach((el) => observer.observe(el));
    const fallbackTimer = window.setTimeout(() => {
      elements.forEach((el) => el.classList.add('is-visible'));
    }, 1200);

    return () => {
      observer.disconnect();
      window.clearTimeout(fallbackTimer);
    };
  }, []);

  return null;
};

export default ScrollReveal;
