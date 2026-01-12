"use client";

import React, { useState, useEffect } from 'react';

type AppointmentDuration = '30min' | '60min';

const BookingWidget = () => {
  const [duration, setDuration] = useState<AppointmentDuration>('30min');

  useEffect(() => {
    // Load the embed script
    const existingScript = document.querySelector('script[src="https://link.ymbs.pro/js/embed.js"]');
    if (existingScript) {
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://link.ymbs.pro/js/embed.js';
    script.type = 'text/javascript';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      const scriptToRemove = document.querySelector('script[src="https://link.ymbs.pro/js/embed.js"]');
      if (scriptToRemove && scriptToRemove.parentNode) {
        scriptToRemove.parentNode.removeChild(scriptToRemove);
      }
    };
  }, []);

  const bookingIds = {
    '30min': 'NMHxnh5PGXkfPxBSkci5',
    '60min': 'amF0sUNL3IWh0nu9UtJj',
  };

  return (
    <div className="booking-widget">
      <div className="booking-toggle-container">
        <h3 style={{ marginBottom: '1.5rem', textAlign: 'center' }}>Schedule a Consultation</h3>
        <div className="duration-toggle">
          <button
            className={`toggle-button ${duration === '30min' ? 'active' : ''}`}
            onClick={() => setDuration('30min')}
            type="button"
          >
            30 Minute Consultation
          </button>
          <button
            className={`toggle-button ${duration === '60min' ? 'active' : ''}`}
            onClick={() => setDuration('60min')}
            type="button"
          >
            60 Minute Consultation
          </button>
        </div>
      </div>

      <div className="booking-iframe-container">
        <iframe
          src={`https://link.ymbs.pro/widget/booking/${bookingIds[duration]}`}
          style={{ width: '100%', border: 'none', overflow: 'hidden' }}
          scrolling="no"
          id={`msgsndr-calendar-${duration}`}
          title={`${duration} Appointment Booking`}
          key={duration} // Force re-render when duration changes
        />
      </div>

      <style jsx>{`
        .booking-widget {
          width: 100%;
          margin-top: 2rem;
        }

        .booking-toggle-container {
          margin-bottom: 2rem;
        }

        .duration-toggle {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
        }

        .toggle-button {
          flex: 1;
          min-width: 200px;
          padding: 1rem 2rem;
          font-size: 1rem;
          font-weight: 600;
          color: var(--color-primary);
          background-color: #fff;
          border: 2px solid var(--color-border);
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.3s ease;
          font-family: inherit;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .toggle-button:hover {
          border-color: var(--color-secondary);
          background-color: var(--color-bg-light);
        }

        .toggle-button.active {
          background-color: var(--color-secondary);
          color: var(--color-white);
          border-color: var(--color-secondary);
          box-shadow: 0 4px 12px rgba(197, 160, 89, 0.3);
        }

        .booking-iframe-container {
          width: 100%;
          min-height: 600px;
          border-radius: 8px;
          overflow: hidden;
          background-color: #fff;
        }

        .booking-iframe-container iframe {
          width: 100%;
          min-height: 600px;
          border: none;
        }

        @media (max-width: 768px) {
          .duration-toggle {
            flex-direction: column;
          }

          .toggle-button {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
};

export default BookingWidget;