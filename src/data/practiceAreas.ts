export interface PracticeArea {
  id: string;
  title: string;
  slug: string;
  icon: string;
  shortDescription: string;
  fullDescription: string;
  services: string[];
  benefits: string[];
  relatedAreas?: string[];
}

export const practiceAreas: PracticeArea[] = [
  {
    id: 'temporary-business-work-visas',
    title: 'Travel and Work Visas for Non-Immigrants and Start-ups',
    slug: 'temporary-business-work-visas',
    icon: '💼',
    shortDescription: 'Visitor visas, work visas (Arbeitserlaubnis USA), and comprehensive solutions for international business people and start-ups navigating U.S. immigration.',
    fullDescription: 'We help international business people find solutions to their visa problems. Whether you need visitor visas, work visas (Arbeitserlaubnis USA), or are a start-up seeking to establish operations in the United States, we provide expert guidance through temporary work authorization to achieve your professional goals. Our comprehensive visa services are tailored to your specific situation.',
    services: [
      'Visitor Visas (B-1/B-2)',
      'E-2 Treaty Investor Visas',
      'L-1 Intra-company Transferee Visas (Multinational Executives/Managers)',
      'O-1 Extraordinary Ability Visas',
      'H-1B Specialty Occupation Visas',
      'Start-up Visa Guidance',
      'TN Professional Visas (NAFTA)',
      'E-3 Australian Professional Visas',
      'Work Authorization (Arbeitserlaubnis USA)',
      'Visa extensions and renewals',
      'Visa status changes',
    ],
    benefits: [
      'Expert guidance through complex visa requirements',
      'Solutions for international business people and start-ups',
      'Strategic planning for temporary to permanent residency transition',
      'Comprehensive application support',
      'Timeline management and compliance assistance',
      'Winning strategies for athletes and performers',
    ],
    relatedAreas: ['permanent-residency-green-cards', 'corporate-business-support'],
  },
  {
    id: 'permanent-residency-green-cards',
    title: 'Permanent Residency through Employment or Investment (EB-5)',
    slug: 'permanent-residency-green-cards',
    icon: '🟢',
    shortDescription: 'Visas for persons with outstanding achievements, multinational executives/managers, employment-based residency (EB-1, EB-2, EB-3), and investment-based immigration (EB-5) to secure your long-term future in the U.S.',
    fullDescription: 'Our comprehensive approach ensures you understand all options available to you and helps you select the best path forward. We assist with employment-based pathways including visas for persons with outstanding achievements and multinational executives/managers, as well as investment-based immigration (EB-5). We provide expert guidance through every stage of the permanent residency process, helping you secure your long-term future in the United States.',
    services: [
      'EB-1 Extraordinary Ability, Outstanding Professors/Researchers, Multinational Executives',
      'EB-2 Advanced Degree Professionals and Exceptional Ability',
      'EB-3 Skilled Workers, Professionals, and Other Workers',
      'EB-5 Investor Green Cards',
      'National Interest Waivers (NIW)',
      'Labor Certification (PERM)',
      'Adjustment of Status',
      'Consular Processing',
    ],
    benefits: [
      'Comprehensive eligibility assessment',
      'Strategic pathway planning',
      'Documentation and evidence preparation',
      'Ongoing support through the entire process',
    ],
    relatedAreas: ['temporary-business-work-visas', 'citizenship-naturalization'],
  },
  {
    id: 'family-based-immigration',
    title: 'Permanent Residency Through Family Based Immigration and Marriage',
    slug: 'family-based-immigration',
    icon: '👨‍👩‍👧‍👦',
    shortDescription: 'Helping U.S. citizens and permanent residents reunite with family members through family-based immigration and marriage-based green cards.',
    fullDescription: 'We understand the importance of keeping families together and work diligently to make that happen. Whether you\'re a U.S. citizen sponsoring a spouse, child, parent, or sibling, or a permanent resident sponsoring family members, we provide compassionate and comprehensive legal support.',
    services: [
      'Marriage-based Green Cards',
      'Fiancé(e) Visas (K-1)',
      'Immediate Relative Petitions (IR)',
      'Family Preference Petitions (F1-F4)',
      'Adjustment of Status for Family Members',
      'Consular Processing for Family Members',
      'Removal of Conditions',
      'Waivers for inadmissibility issues',
    ],
    benefits: [
      'Family-focused approach with compassionate service',
      'Expert handling of complex family immigration cases',
      'Efficient processing and timeline management',
      'Comprehensive support for interviews and documentation',
    ],
    relatedAreas: ['permanent-residency-green-cards', 'citizenship-naturalization'],
  },
  {
    id: 'citizenship-naturalization',
    title: 'U.S. Citizenship - the Final Step in Your Immigration Journey',
    slug: 'citizenship-naturalization',
    icon: '🇺🇸',
    shortDescription: 'The final step in your immigration journey. Guiding permanent residents through the naturalization process to become fully integrated U.S. citizens with all attendant rights.',
    fullDescription: 'U.S. Citizenship represents the final step in your immigration journey. We provide comprehensive support from application through interview and oath ceremony. Our team ensures you meet all eligibility requirements and guides you through every step of becoming a U.S. citizen, including test preparation and interview coaching. Reinvent yourself for the next phase of your life as a fully integrated U.S. citizen with all attendant rights.',
    services: [
      'Naturalization Applications (N-400)',
      'Citizenship through Parents',
      'Dual Citizenship Guidance',
      'Certificate of Citizenship',
      'Naturalization Test Preparation',
      'Interview Preparation and Support',
      'Citizenship Application Appeals',
      'Renunciation of Citizenship',
    ],
    benefits: [
      'Complete eligibility review and assessment',
      'Test and interview preparation support',
      'Documentation assistance',
      'Guidance on rights and responsibilities as a U.S. citizen',
    ],
    relatedAreas: ['permanent-residency-green-cards', 'family-based-immigration'],
  },
  {
    id: 'corporate-business-support',
    title: 'Corporate & Business Support',
    slug: 'corporate-business-support',
    icon: '🏢',
    shortDescription: 'Acting as general counsel for international companies expanding to the U.S., assisting with entity formation, contracts, and compliance.',
    fullDescription: 'We help businesses navigate the legal landscape while focusing on their immigration needs. From entity formation to ongoing compliance, we provide comprehensive corporate immigration services that support your business expansion goals in the United States.',
    services: [
      'Corporate Immigration Strategy',
      'Entity Formation for International Businesses',
      'Employment Authorization for Employees',
      'Compliance and Audits',
      'Contract Review and Negotiation',
      'Corporate Structure Guidance',
      'Intra-company Transfers (L-1)',
      'Business Visitor Visas (B-1)',
    ],
    benefits: [
      'Business-focused immigration solutions',
      'Comprehensive compliance support',
      'Strategic planning for business expansion',
      'Ongoing counsel for international businesses',
    ],
    relatedAreas: ['temporary-business-work-visas', 'permanent-residency-green-cards'],
  },
  {
    id: 'real-estate-estate-planning',
    title: 'Real Estate and Estate Planning - Civil Law Notary Services',
    slug: 'real-estate-estate-planning',
    icon: '🏠',
    shortDescription: 'Planning for the tax consequences of US residency. Protecting your assets and investments in the U.S. through strategic property acquisition guidance, estate planning structures, and civil law notary services.',
    fullDescription: 'We understand the unique challenges non-residents face when investing in U.S. real estate. Our services include planning for the tax consequences of US residency, protecting your assets while ensuring compliance with U.S. tax and legal requirements. We provide comprehensive real estate and estate planning services, including civil law notary services, providing peace of mind for international investors.',
    services: [
      'Real Estate Acquisition Guidance for Non-Residents',
      'Estate Planning for International Clients',
      'Tax Planning for Real Estate Investments',
      'Asset Protection Strategies',
      'Trust Formation and Administration',
      'Will and Estate Planning',
      'Succession Planning',
      'Real Estate Transaction Review',
    ],
    benefits: [
      'Expert guidance on U.S. real estate laws for non-residents',
      'Tax-efficient estate planning',
      'Asset protection strategies',
      'Comprehensive legal support for property investments',
    ],
    relatedAreas: ['corporate-business-support', 'permanent-residency-green-cards'],
  },
];

export const getPracticeAreaBySlug = (slug: string): PracticeArea | undefined => {
  return practiceAreas.find(area => area.slug === slug);
};

export const getPracticeAreasByIds = (ids: string[]): PracticeArea[] => {
  return practiceAreas.filter(area => ids.includes(area.id));
};