# Multilingual Rewrite Summary

## Overview

All non-English language versions (German, Spanish, Russian, French) have been rewritten to read as **native, professionally authored content** rather than literal translations from English. Each language reflects how a senior attorney would naturally communicate in that market.

---

## Tone Adaptation by Language

| Language | Tone Applied |
|----------|--------------|
| **German (DE)** | Formal, precise, restrained. Avoided promotional phrasing. Emphasized structure and competence. |
| **Spanish (ES)** | Professional but relational. Avoided direct Anglo marketing tone. |
| **French (FR)** | Refined and institutional. Avoided overly commercial phrasing. |
| **Russian (RU)** | Direct, authoritative, structured. Avoided excessive marketing enthusiasm. |

---

## Key Changes by Section

### Hero & Home Page
- **Hero titles**: Shortened and naturalized (e.g., DE: "Rechtsberatung für den US-Markt—Unternehmen und Privatkunden" instead of literal "Strategische US-Rechtsberatung für internationale Unternehmen und Privatkunden")
- **Hero subtitles**: Concise, native phrasing (e.g., DE: "Markteintritt, Strukturierung, Mobilität—langfristige Begleitung statt Einzelaufträge")
- **Hero CTA**: Varied by language (DE: "Rechtsgebiete ansehen", ES: "Ver áreas de actuación")
- **What We Do**: Headings and items rewritten for natural flow
- **Features**: "Why Clients Choose" → native equivalents (DE: "Was Mandanten an uns schätzen", RU: "Почему обращаются к нам")
- **Support section**: Headings and paragraphs adapted for professional tone
- **CTA**: "Schedule a Confidential Strategy Session" → simpler, native CTAs (DE: "Erstgespräch vereinbaren")

### Navigation
- **Attorney Bio**: DE "Anwalt Bio" → "Anwaltsprofil"; ES "Biografía del Abogado" → "Perfil de la abogada"

### Contact Page
- **Subheading**: Natural invitations (DE: "Erste Kontaktaufnahme—wir melden uns zeitnah")
- **Description**: Concise, professional (DE: "Per Telefon oder E‑Mail erreichen Sie uns für eine erste Beratung")
- **Workflow heading**: "How It Works" → "Ablauf" (DE), "Proceso" (ES), "Déroulement" (FR)

### Attorney Bio Page
- **Page heading**: Aligned with hero—shorter, native phrasing
- **Sets Apart**: "What Sets Us Apart" → "Unser Ansatz" (DE), "Nuestra forma de trabajar" (ES)

### Practice Areas
- **Titles**: Shortened and naturalized (e.g., DE "US-Markteintrittsberatung" → "Markteintritt USA")
- **Short descriptions**: More concise, professional phrasing

### Footer
- **helpDesign**: Condensed tagline per language

### Metadata (SEO)
- **Root meta**: Titles and descriptions rewritten for native search intent
- **Contact/Attorney meta**: Updated for each language
- **Keywords**: Equivalent intent preserved; natural search terms used

---

## Preserved Elements

- **Legal disclaimers**: Compliance meaning preserved; phrasing improved for natural flow
- **Jurisdiction clarity**: Florida/Minnesota bar references unchanged
- **Placeholder structure**: All `{contactLink}`, `{practiceLink}`, `{attorneyLink}`, etc. kept intact
- **Service structure**: Same offerings and scope across languages

---

## Technical Verification

### hreflang
- **Status**: Implemented in `src/app/layout.tsx`
- **Alternates**: `de-DE`, `en-US`, `es-ES`, `ru-RU`, `fr-FR`, `x-default` all point to `https://henning-law.com`
- **Note**: Language is selected via cookie; all locales use the same URL. hreflang correctly reflects this architecture.

### Content Architecture
- **Source**: All content in `src/data/translations.ts`
- **No API translation**: Static content only; no dynamic translation services
- **Language switching**: Cookie-based via `useLanguage()` and `t()` helper

---

## Quality Control Checklist

- [x] Each language reads as originally written in that language
- [x] Tone matches UHNW advisory positioning
- [x] No awkward direct-translation phrases remain
- [x] Legal/compliance language preserved
- [x] SEO keyword intent maintained per language

---

## Files Modified

1. `src/data/translations.ts` – Core content rewrites
2. `src/data/metadataByLang.ts` – Meta titles and descriptions
3. `MULTILINGUAL_REWRITE_SUMMARY.md` – This summary
