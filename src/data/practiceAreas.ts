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
  relatedAreas?: string[];
}

export const practiceAreas: PracticeArea[] = [
  {
    id: 'temporary-business-work-visas',
    title: 'Travel and Work Visas for Non-Immigrants and Start-ups',
    slug: 'temporary-business-work-visas',
    icon: 'briefcase',
    shortDescription: 'Visitor visas, work visas (Arbeitserlaubnis USA), and comprehensive solutions for international business people and start-ups navigating U.S. immigration.',
    fullDescription: 'Business and leisure travelers from many countries can travel to the U.S. briefly without a visa - but for all others or when frequency of trips increases and visits turn into "work" that may no longer be enough. We understand the complexities of moving yourself, your family or your company\'s essential personnel into the United States - step by step. We help international business people find solutions to their visa problems. Whether you need visitor visas, work visas (Arbeitserlaubnis USA), or are a start-up seeking to establish operations in the United States, we provide expert guidance through temporary work authorization to achieve your professional goals. There are visa categories for almost every letter in the alphabet for trainees, students, diplomats, religious workers and much more. Let us see if we can find one that is right for you.',
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
    icon: 'residency',
    shortDescription: 'Visas for persons with outstanding achievements, multinational executives/managers, employment-based residency (EB-1, EB-2, EB-3), and investment-based immigration (EB-5) to secure your long-term future in the U.S.',
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
    relatedAreas: ['temporary-business-work-visas', 'citizenship-naturalization'],
  },
  {
    id: 'family-based-immigration',
    title: 'Permanent Residency Through Family Based Immigration and Marriage',
    slug: 'family-based-immigration',
    icon: 'family',
    shortDescription: 'Helping U.S. citizens and permanent residents reunite with family members through family-based immigration and marriage-based green cards.',
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
    relatedAreas: ['permanent-residency-green-cards', 'citizenship-naturalization'],
  },
  {
    id: 'citizenship-naturalization',
    title: 'U.S. Citizenship - the Final Step in Your Immigration Journey',
    slug: 'citizenship-naturalization',
    icon: 'citizenship',
    shortDescription: 'The final step in your immigration journey. Guiding permanent residents through the naturalization process to become fully integrated U.S. citizens with all attendant rights.',
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
    relatedAreas: ['permanent-residency-green-cards', 'family-based-immigration'],
  },
  {
    id: 'corporate-business-support',
    title: 'Corporate & Business Support',
    slug: 'corporate-business-support',
    icon: 'corporate',
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
    icon: 'home',
    shortDescription: 'Planning for the tax consequences of US residency. Protecting your assets and investments in the U.S. through strategic property acquisition guidance, estate planning structures, and civil law notary services.',
    fullDescription: 'Ms. Henning has been advising foreign investors in U.S. (Florida) real estate since 1996 and became a Florida Civil Law Notary in 2002. This designation is reserved for licensed attorneys and very different from that of "notary public." Property ownership rules for foreign owners with or without tax ID numbers and/or Social Security Numbers can be complex and are governed by each individual state. We understand the differences in the legal systems when it comes to contracts and closings, title insurance, the roles of real estate agents and other concepts that are very different in the United States vs. most code-based Civil Law countries. Tax rules upon the sale of property are also different for foreign owners. Knowledge is the key to smooth transactions without aggravation and unnecessary adrenaline rushes. Whether you\'re buying or selling, getting a mortgage or transferring property to the next generation or just want clarity - let us or our network of local professionals help. Rules regarding ownership of real property and transfer upon death or disability differ from state to state. We are happy to consult with you, your family, and your tax and foreign estate planning professionals to arrive at a plan that protects your family.',
    services: [
      'Real Estate Acquisition Guidance for Non-Residents',
      'Planning for Tax Consequences of US Residency',
      'Estate Planning for International Clients',
      'Civil Law Notary Services',
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