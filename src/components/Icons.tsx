import React from 'react';

type IconProps = {
  className?: string;
  size?: number;
};

const baseProps = (size: number) => ({
  width: size,
  height: size,
  viewBox: '0 0 48 48',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2.25,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
});

export const IconBriefcase = ({ className, size = 48 }: IconProps) => (
  <svg {...baseProps(size)} className={className} aria-hidden="true">
    <rect x="8" y="16" width="32" height="20" rx="4" />
    <path d="M18 16v-4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v4" />
    <path d="M8 24h32" />
  </svg>
);

export const IconResidency = ({ className, size = 48 }: IconProps) => (
  <svg {...baseProps(size)} className={className} aria-hidden="true">
    <path d="M24 6l14 6v10c0 10-6.5 16.5-14 20-7.5-3.5-14-10-14-20V12l14-6z" />
    <path d="M18 24l4 4 8-8" />
  </svg>
);

export const IconFamily = ({ className, size = 48 }: IconProps) => (
  <svg {...baseProps(size)} className={className} aria-hidden="true">
    <circle cx="16" cy="18" r="4" />
    <circle cx="32" cy="18" r="4" />
    <path d="M8 38c0-5 4-9 9-9h2" />
    <path d="M40 38c0-5-4-9-9-9h-2" />
    <circle cx="24" cy="14" r="3.5" />
    <path d="M19 38c0-4 2.5-7 5-7s5 3 5 7" />
  </svg>
);

export const IconCitizenship = ({ className, size = 48 }: IconProps) => (
  <svg {...baseProps(size)} className={className} aria-hidden="true">
    <path d="M12 36h24" />
    <path d="M24 8l6 10-6 4-6-4 6-10z" />
    <path d="M18 22v8c0 3.3 2.7 6 6 6s6-2.7 6-6v-8" />
  </svg>
);

export const IconCorporate = ({ className, size = 48 }: IconProps) => (
  <svg {...baseProps(size)} className={className} aria-hidden="true">
    <rect x="10" y="8" width="12" height="32" rx="2" />
    <rect x="26" y="14" width="12" height="26" rx="2" />
    <path d="M14 14h4M14 20h4M14 26h4M14 32h4" />
    <path d="M30 20h4M30 26h4M30 32h4" />
  </svg>
);

export const IconHome = ({ className, size = 48 }: IconProps) => (
  <svg {...baseProps(size)} className={className} aria-hidden="true">
    <path d="M8 22l16-12 16 12" />
    <path d="M12 20v18h24V20" />
    <path d="M20 38V28h8v10" />
  </svg>
);

export const IconStrategy = ({ className, size = 48 }: IconProps) => (
  <svg {...baseProps(size)} className={className} aria-hidden="true">
    <path d="M8 34l10-10 6 6 12-12" />
    <circle cx="18" cy="24" r="3" />
    <circle cx="24" cy="30" r="3" />
    <path d="M32 10h8v8" />
  </svg>
);

export const IconGlobe = ({ className, size = 48 }: IconProps) => (
  <svg {...baseProps(size)} className={className} aria-hidden="true">
    <circle cx="24" cy="24" r="16" />
    <path d="M8 24h32" />
    <path d="M24 8c4.5 5 4.5 27 0 32-4.5-5-4.5-27 0-32z" />
  </svg>
);

export const IconKey = ({ className, size = 48 }: IconProps) => (
  <svg {...baseProps(size)} className={className} aria-hidden="true">
    <circle cx="18" cy="22" r="6" />
    <path d="M24 22h16" />
    <path d="M34 22v6M30 22v4" />
  </svg>
);
