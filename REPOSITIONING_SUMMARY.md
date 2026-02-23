# Henning Law Website Repositioning — Summary of Changes

## Overview

The site has been repositioned from immigration-focused services to **strategic U.S. market entry and private client advisory**. All changes preserve existing URLs, maintain SEO structure, and avoid positioning the firm as providing investment or tax advice.

---

## PART 1 — HOMEPAGE HERO

**Headline:** Strategic U.S. Counsel for International Companies and Private Clients

**Subheadline:** Advising global businesses and internationally mobile families on U.S. market entry, cross-border structuring, and long-term legal oversight.

**Primary CTA:** Schedule a Consultation (unchanged)

**Secondary CTA:** Explore U.S. Market Entry → links to `/practice-areas/us-market-entry`

**Changes:**
- All four hero slides now use the same strategic positioning (no immigration-centric slides)
- Secondary CTA updated from "Explore Our Practice Areas" to "Explore U.S. Market Entry"
- Hero links point to U.S. Market Entry page

---

## PART 2 — CORE POSITIONING LANGUAGE

**Updated across:**
- Homepage (design section, what we do, features, support section)
- About/Attorney Bio page
- Footer summary (`footer.helpDesign`)

**New positioning themes:**
- Strategic advisory
- Cross-border governance
- Long-term legal oversight
- General counsel–style support
- Discreet private client services
- Transatlantic legal insight

**Recognition:**
- Former Honorary Consul of Germany in Florida
- Fosters transatlantic relations
- Positioned as cross-border authority, not nationality limitation

---

## PART 3 — SERVICE STRUCTURE

**3 practice pillars (existing pages, content verified):**

1. **U.S. Market Entry Advisory** (`/practice-areas/us-market-entry`)
   - Structuring U.S. presence
   - Entity formation strategy
   - Regulatory navigation
   - Cross-border compliance
   - Ongoing legal oversight
   - Coordination with financial and tax advisors (no tax advice)

2. **Private Client & Family Advisory** (`/practice-areas/private-client-advisory`)
   - Long-term mobility planning
   - Cross-border governance
   - Asset protection structuring
   - Discreet advisory services
   - Ongoing general counsel–style support

3. **U.S. Mobility & Immigration Strategy** (`/practice-areas/us-mobility-immigration-strategy`)
   - Immigration integrated within broader strategy
   - Reduced standalone "visa processing" tone

---

## PART 4 — REMOVED NARROW POSITIONING

**Changes:**
- Replaced "Investor Visa" with "EB-5 program for U.S. permanent residency" in FAQs
- Removed "Investor Visa" from layout keywords
- Removed "German investors" and nationality-limiting language from attorney approach, features, and guide sections
- Updated attorney.welcome, attorney.background, attorney.approach to broad international positioning
- Replaced "free consultation" with "high-pressure sales tactics" (no sales language)

---

## PART 5 — UHNW SIGNALING

**Changes:**
- Home CTA: "Schedule a Confidential Strategy Session" (replaces "Plan Your Path to U.S. Residence")
- Subtext: "Discuss your U.S. market entry, mobility, or private client objectives"
- Practice area CTA: "Schedule a confidential strategy session" (replaces "free consultation")
- Refined, minimal, advisory-level language throughout
- Emphasis on discretion and long-term partnership

---

## PART 6 — NAVIGATION

**New top navigation:**
- Home
- About
- U.S. Market Entry
- Private Client Advisory
- Mobility & Immigration Strategy
- Contact

**Removed from top nav:**
- Practice Areas dropdown
- Testimonials
- FAQs

**Footer updated:**
- Added direct links to U.S. Market Entry, Private Client Advisory, Mobility & Immigration Strategy
- Testimonials and FAQs moved to footer for accessibility

---

## PART 7 — SEO PROTECTION

**Preserved:**
- All existing URLs (no redirects needed)
- H1 hierarchy
- Meta descriptions

**Keywords added:**
- U.S. market entry legal counsel
- Cross-border legal advisory
- Private client legal services
- U.S. entry strategy for international companies

**Layout structured data:**
- Description updated to strategic U.S. counsel positioning
- Service types updated

---

## PART 8 — TONE CONTROL

**Tone applied:**
- Sophisticated
- Minimal
- Confident
- Advisory-level
- Not promotional or sales-driven

---

## FILES MODIFIED

| File | Changes |
|------|---------|
| `src/components/Hero.tsx` | Secondary CTA link to us-market-entry |
| `src/components/Navbar.tsx` | New nav structure (6 direct links), removed dropdown |
| `src/components/Footer.tsx` | Updated helpDesign, added service links, Testimonials/FAQs |
| `src/data/translations.ts` | Hero, home, attorney, footer, support, CTA, FAQ keys |
| `src/data/practiceAreas.ts` | Private Client title → "Private Client & Family Advisory" |
| `src/data/metadataByLang.ts` | (Previously updated) |
| `src/app/layout.tsx` | Keywords, structured data description |
| `src/app/faqs/page.tsx` | EB-5 FAQ question/answer (removed Investor Visa) |
| `src/app/practice-areas/[slug]/page.tsx` | "Confidential strategy session" CTA |

---

## URLS PRESERVED

- `/practice-areas` — listing page
- `/practice-areas/us-market-entry`
- `/practice-areas/private-client-advisory`
- `/practice-areas/us-mobility-immigration-strategy`
- `/practice-areas/temporary-business-work-visas`
- `/practice-areas/permanent-residency-green-cards`
- `/practice-areas/family-based-immigration`
- `/practice-areas/citizenship-naturalization`
- `/practice-areas/corporate-business-support`
- `/practice-areas/real-estate-estate-planning`
- All other existing routes unchanged

---

## TRANSLATIONS

All changes applied across **5 languages**: English, German, Spanish, Russian, French.
