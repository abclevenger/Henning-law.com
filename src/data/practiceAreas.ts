export type PracticeAreaIconKey =
  | 'briefcase'
  | 'residency'
  | 'family'
  | 'citizenship'
  | 'corporate'
  | 'home';

export interface PracticeArea {
  id: string;
  title: string;
  slug: string;
  icon: PracticeAreaIconKey;
  shortDescription: string;
  fullDescription: string;
  services: string[];
  benefits: string[];
  faqs?: { question: string; answer: string }[];
  relatedAreas?: string[];
}

export const practiceAreas: PracticeArea[] = [
  {
    id: 'temporary-business-work-visas',
    title: 'Travel & Work Visas',
    slug: 'temporary-business-work-visas',
    icon: 'briefcase',
    shortDescription: 'Visitor, work, and start-up visas with guidance for business travel and short-term U.S. work.',
    fullDescription: 'Business and leisure travelers from many countries can travel to the U.S. briefly without a visa - but for all others or when frequency of trips increases and visits turn into "work" that may no longer be enough. We understand the complexities of moving yourself, your family or your company\'s essential personnel into the United States - step by step. We help international business people find solutions to their visa questions. Whether you need visitor visas, work visas (Arbeitserlaubnis USA), or are a start-up seeking to establish operations in the United States, we provide guidance through temporary work authorization to help you pursue your professional goals. There are visa categories for almost every letter in the alphabet for trainees, students, diplomats, religious workers and much more. Let us see if we can find one that may be right for you.',
    services: [
      'Visitor Visas (B-1/B-2) - Multiple entry visas for temporary visits for business or pleasure',
      'Treaty Trader (E-1) and Treaty Investor (E-2) Visas',
      'Multinational Transferee Visas for Executives/Managers (L-1A)',
      'L-1 Visas for Specialized Knowledge Employees',
      'O-1 Visas for Persons with Well-Documented Extraordinary Abilities',
      'Student Visas (F-1) for degree-seeking courses or English language programs',
      'H-1B Specialty Occupation Visas',
      'Start-up Visa Guidance',
      'TN Professional Visas (NAFTA)',
      'E-3 Australian Professional Visas',
      'Work Authorization (Arbeitserlaubnis USA)',
      'Visa extensions and renewals',
      'Visa status changes',
    ],
    benefits: [
      'Guidance through complex visa requirements',
      'Solutions for international business people and start-ups',
      'Strategic planning for temporary to permanent residency transition',
      'Comprehensive application support',
      'Timeline management and compliance assistance',
      'Experience representing athletes and performers',
    ],
    faqs: [
      {
        question: 'Which visa category fits my business goals?',
        answer:
          'We evaluate your role, company structure, and timeline to recommend the most realistic visa option and filing strategy.',
      },
      {
        question: 'Can I switch from a temporary visa to permanent residency?',
        answer:
          'Often, yes. We plan a long-term pathway that aligns with your employment, investment, or family goals.',
      },
      {
        question: 'Do you assist with visa renewals and extensions?',
        answer:
          'Yes. We handle extensions, amendments, and compliance reviews to keep your status secure.',
      },
    ],
    relatedAreas: ['permanent-residency-green-cards', 'corporate-business-support'],
  },
  {
    id: 'permanent-residency-green-cards',
    title: 'EB-5 & Employment Residency',
    slug: 'permanent-residency-green-cards',
    icon: 'residency',
    shortDescription: 'Employment- and investment-based green cards, including EB-1/2/3 and EB-5 options.',
    fullDescription: 'Employment-Based Immigration generally requires a job offer and clearance by the U.S. Labor Department involving a test of the U.S. labor market - a process called Labor Certification. Once that has been established, employers can then offer the advertised job to a qualified foreign worker on a permanent basis, and the worker can apply for permanent residency. Existing quotas may drag this process out for some time. Fortunately, the following categories of workers are exempt from the Labor Certification requirement and processes are often shorter: Aliens of Extraordinary Ability (EB-1A), Multinational Executives/Managers (EB-1C), Immigrant Investors (EB-5), and Individuals with advanced degrees/exceptional ability pursuing projects in the United States that are of substantial merit and in the U.S. National Interest (EB2-NIW). Aliens of extraordinary ability, immigrant investors and those qualifying for a national interest waiver can even self petition, eliminating the need for a job offer. Also excepted from the Labor Certification requirement and able to petition without an employer or job offer are immigrant investors under the EB-5 category who make a qualifying investment and create ten U.S. jobs - either with their own business enterprise or by participating in one of the many USCIS-approved EB-5 Regional Centers. Minimum investments range from $800,000 to $1,050,000 depending on the location of the investment enterprise. Based on or - if visa numbers are available - simultaneously with a successful petition, the immigrant may be able to apply for permanent residence at a consulate abroad or by adjusting status in the United States. Let us evaluate your background and your plans to see which one of these options may be suitable for you.',
    services: [
      'EB-1A - Aliens of Extraordinary Ability',
      'EB-1B - Outstanding Professors/Researchers',
      'EB-1C - Multinational Executives/Managers',
      'EB-2 Advanced Degree Professionals and Exceptional Ability',
      'EB-2 National Interest Waiver (NIW) - Self-Petition Option',
      'EB-3 Skilled Workers, Professionals, and Other Workers',
      'EB-5 Investor Green Cards ($800K-$1.05M investment)',
      'EB-5 Regional Center Investments',
      'Labor Certification (PERM)',
      'Adjustment of Status',
      'Consular Processing',
      'Work and Travel Authorization',
    ],
    benefits: [
      'Comprehensive eligibility assessment',
      'Strategic pathway planning',
      'Documentation and evidence preparation',
      'Ongoing support through the entire process',
    ],
    faqs: [
      {
        question: 'Do I need a job offer for a green card?',
        answer:
          'Some categories require a job offer, while others allow self-petitioning. We help determine the best route.',
      },
      {
        question: 'How long does an employment-based green card take?',
        answer:
          'Processing times vary by category and country of chargeability. We provide a timeline estimate after review.',
      },
      {
        question: 'Can my family apply with me?',
        answer:
          'Yes. Eligible spouses and children can typically apply as derivatives in the same case.',
      },
    ],
    relatedAreas: ['temporary-business-work-visas', 'citizenship-naturalization'],
  },
  {
    id: 'family-based-immigration',
    title: 'Family & Marriage Green Cards',
    slug: 'family-based-immigration',
    icon: 'family',
    shortDescription: 'Family reunification and marriage-based green cards for qualifying relatives.',
    fullDescription: 'U.S. citizens and Lawful Permanent Residents can petition to have certain close family members (or aspiring family members) come join them permanently in the United States by filing a "Petition for Alien Relative." Categories and processing options depend on the petitioner\'s U.S. status, the degree of family relationship and the beneficiaries\' location and - if in the U.S. - their own status and/or manner of entry. Filing the petition triggers issuance of a "priority date" by which one can follow the expected time frame in which visas become available. Visas are immediately available for spouses, children and parents of U.S. citizens, while adult sons and daughters and siblings of U.S. citizens are assigned preference categories that may entail long waiting times. Green Card holders can sponsor spouses, children and adult sons and daughters but not parents, fiances or siblings. Successful petitions allow the beneficiaries to apply for Immigrant Visas or Green Cards at a consulate abroad or within the United States under certain circumstances. Family members inside the United States may opt to apply for their Green Cards through the adjustment of their appropriate non-immigrant status within the United States. Simultaneously, the immigrant can apply for work and travel authorization. Although not everyone is invited, petitioners and beneficiaries should be prepared to present themselves at a personal interview before a USCIS officer at a local field office. In case of a marriage relationship and if the marriage is less than two years old at the time of the initial interview, a conditional green card is issued for a period of two years. 90 days before the first conditional residence card expires, the couple - or in case of a marriage termination - the foreign spouse must file an application to remove the condition. We have guided many families and couples in the planning of the steps toward permanent residence. Call us to discuss the steps involved to create a smooth transition for your loved one to the United States.',
    services: [
      'Petition for Alien Relative (I-130)',
      'Marriage-based Green Cards',
      'Fiancé(e) Visas (K-1)',
      'Immediate Relative Petitions (IR) - Spouses, Children, Parents of U.S. Citizens',
      'Family Preference Petitions (F1-F4) - Adult Children, Siblings',
      'Green Card Holders Sponsoring Family Members',
      'Adjustment of Status for Family Members',
      'Consular Processing for Family Members',
      'Conditional Green Cards (Marriage Less Than 2 Years)',
      'Removal of Conditions on Residence',
      'Work and Travel Authorization',
      'Waivers for inadmissibility issues',
    ],
    benefits: [
      'Family-focused approach with compassionate service',
      'Expert handling of complex family immigration cases',
      'Efficient processing and timeline management',
      'Comprehensive support for interviews and documentation',
    ],
    faqs: [
      {
        question: 'Who can I petition as a U.S. citizen or resident?',
        answer:
          'Eligibility depends on your status and the family relationship. We clarify which relatives qualify and timing.',
      },
      {
        question: 'What if my spouse is in the U.S. without status?',
        answer:
          'Options vary by entry history and prior filings. We analyze risks and possible waivers before filing.',
      },
      {
        question: 'How do conditional green cards work?',
        answer:
          'If the marriage is under two years, a conditional card is issued and later removed with a joint petition.',
      },
    ],
    relatedAreas: ['permanent-residency-green-cards', 'citizenship-naturalization'],
  },
  {
    id: 'citizenship-naturalization',
    title: 'U.S. Citizenship',
    slug: 'citizenship-naturalization',
    icon: 'citizenship',
    shortDescription: 'Naturalization guidance for permanent residents preparing to become U.S. citizens.',
    fullDescription: 'Green Cards are great but still come with requirements for renewal and physical presence that can make an international family\'s life difficult. In order to create true permanence, most immigrants therefore take the final step to naturalization. Particularly for families, this is a good idea, as an immigrant parent\'s naturalization usually means that the children automatically receive citizenship without having to file their own applications. Eligibility to apply for naturalization depends on how the Green Card was obtained. With some exceptions for military families, those who received a Green Card through marriage can apply after only three years as long as the marriage continues. Anyone else must wait five years. All applicants must meet their respective physical presence requirement and prove that they are persons of "good moral character," the show of which involves not only a clean criminal record for the qualifying period but a show that one meets ones obligations by paying taxes and child support where such obligations exist. Questions need to be carefully and truthfully answered, as youthful indiscretions or prior misstatements can come back to haunt the unwary. At Henning Law Firm, we have assisted many immigrants with this final step in their immigration journey. Call us for a consultation.',
    services: [
      'Naturalization Applications (N-400)',
      'Three-Year Naturalization (Marriage-Based)',
      'Five-Year Naturalization (General)',
      'Citizenship through Parents (Automatic for Children)',
      'Physical Presence Requirements',
      'Good Moral Character Evaluation',
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
    faqs: [
      {
        question: 'When can I apply for naturalization?',
        answer:
          'Most applicants qualify after five years of residency, or three years through marriage to a U.S. citizen.',
      },
      {
        question: 'Will a past mistake affect my application?',
        answer:
          'It can. We review your history to address good moral character and avoid surprises at interview.',
      },
      {
        question: 'Do my children become citizens automatically?',
        answer:
          'Often yes, depending on age and custody. We confirm eligibility and documentation needs.',
      },
    ],
    relatedAreas: ['permanent-residency-green-cards', 'family-based-immigration'],
  },
  {
    id: 'corporate-business-support',
    title: 'Corporate & Business Support',
    slug: 'corporate-business-support',
    icon: 'corporate',
    shortDescription: 'Ongoing counsel for international companies: entity formation, contracts, and compliance.',
    fullDescription: 'We provide immigration counsel and compliance support for international companies with U.S. operations or expansion plans. Services include corporate immigration strategy, entity formation in connection with immigration objectives, employment authorization for employees, and ongoing compliance. Immigration counsel only—no investment or financial advice.',
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
    faqs: [
      {
        question: 'Can you act as outside general counsel?',
        answer:
          'Yes. We provide ongoing legal support tailored to immigration and corporate compliance needs.',
      },
      {
        question: 'Do you help with entity formation?',
        answer:
          'We assist with selecting the right structure and coordinating the formation process in the U.S.',
      },
      {
        question: 'How do you support workforce compliance?',
        answer:
          'We advise on I-9, LCA, and policy practices to reduce risk and keep operations compliant.',
      },
    ],
    relatedAreas: ['temporary-business-work-visas', 'permanent-residency-green-cards'],
  },
  {
    id: 'real-estate-estate-planning',
    title: 'Real Estate & Estate Planning',
    slug: 'real-estate-estate-planning',
    icon: 'home',
    shortDescription: 'Property, estate structures, and civil law notary services for U.S. assets. We do not provide tax or financial advice.',
    fullDescription: 'Ms. Henning has been advising foreign clients on U.S. (Florida) real estate matters since 1996 and became a Florida Civil Law Notary in 2002. This designation is reserved for licensed attorneys and is distinct from "notary public." Property ownership rules for foreign owners can be complex and are governed by each state. We advise on legal structure, contracts and closings, title insurance, and ownership and transfer of real property. We do not provide tax or financial advice; we coordinate with your tax and estate planning professionals where appropriate. Rules regarding ownership and transfer upon death or disability differ by state. We are happy to consult with you, your family, and your advisors.',
    services: [
      'Real Estate Acquisition Guidance for Non-Residents',
      'Planning for Tax Consequences of US Residency (coordination with your advisors)',
      'Estate Planning for International Clients',
      'Civil Law Notary Services',
      'Legal structure for real estate ownership',
      'Trust Formation and Administration',
      'Will and Estate Planning',
      'Succession Planning',
      'Real Estate Transaction Review',
    ],
    benefits: [
      'Guidance on U.S. real estate laws for non-residents',
      'Estate planning; coordination with your advisors',
      'Legal support for property ownership and transfer',
    ],
    faqs: [
      {
        question: 'Can non-residents buy property in the U.S.?',
        answer:
          'Yes. We advise on legal structure for purchases and ownership. We coordinate with your tax and succession advisors as needed; we do not provide tax advice.',
      },
      {
        question: 'What is a Florida civil law notary?',
        answer:
          'It is a specialized legal designation for attorneys, distinct from a notary public.',
      },
      {
        question: 'Do you coordinate with my tax advisors?',
        answer:
          'Yes. We collaborate with your U.S. and foreign advisors to align legal planning with your overall objectives. We do not provide tax or financial advice.',
      },
    ],
    relatedAreas: ['corporate-business-support', 'permanent-residency-green-cards'],
  },
];

export const normalizeSlug = (slug: string): string => {
  try {
    return decodeURIComponent(slug)
      .trim()
      .toLowerCase()
      .replace(/^\/+|\/+$/g, '');
  } catch {
    return slug.trim().toLowerCase().replace(/^\/+|\/+$/g, '');
  }
};

export const getPracticeAreaBySlug = (slug: string): PracticeArea | undefined => {
  const normalized = normalizeSlug(slug);
  return practiceAreas.find(area => normalizeSlug(area.slug) === normalized);
};

export const getPracticeAreasByIds = (ids: string[]): PracticeArea[] => {
  return practiceAreas.filter(area => ids.includes(area.id));
};