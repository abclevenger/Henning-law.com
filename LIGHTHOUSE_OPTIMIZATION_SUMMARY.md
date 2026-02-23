# Lighthouse / PageSpeed Optimization Summary

## Changes Implemented

### 1. Cumulative Layout Shift (CLS) Fixes ✓

- **Hero image**: Aspect-ratio container reserves space before paint
  - Mobile: `aspect-ratio: 4/5`
  - Tablet (640px+): `aspect-ratio: 16/9`
  - Desktop (1024px+): `aspect-ratio: 3/2`
  - `contain: layout` for layout containment
- **Chat widget placeholder**: Fixed-position div (60×60px) reserves bottom-right slot so widget appears in-place without layout shift
- **Content images**: All use `aspect-ratio` on parent containers with `width: 100%`
- **CTA section**: `minHeight: 350px` reserves space for background image

### 2. Hero Image Delivery ✓

- **Next.js Image**: `fill`, `priority`, `sizes="100vw"`
- **Object fit**: `object-cover`, `object-position: center` (left on desktop)
- **Formats**: AVIF/WebP via `next.config.ts` (`formats: ['image/avif', 'image/webp']`)
- **Responsive aspect container**: Matches spec (4/5 → 16/9 → 3/2)

### 3. Total Blocking Time (TBT) Reduction ✓

- **Google Analytics**: `strategy="lazyOnload"` (was `afterInteractive`)
- **Chat widget**: Loads on first interaction (scroll, click, touchstart, keydown) or after 4s fallback
- **Scripts**: All third-party use `next/script` with deferred strategies

### 4. Fonts & CSS ✓

- **next/font**: Playfair Display and Lato with `display: 'swap'`
- **Preload**: next/font preloads critical fonts by default
- **Tailwind**: Project uses styled-jsx and globals.css—no Tailwind config

### 5. Image Delivery & Resolution ✓

- **Responsive sizes**: All images use appropriate `sizes` attributes
- **next/image**: All large visuals use Next.js Image component
- **Alt text**: Descriptive alts added (content image, CTA image)

### 6. Accessibility & Best Practices ✓

- **Buttons**: `aria-label` on hero dots, menu toggle, language options
- **Language toggle**: `aria-label="Select {lang}"` on each option
- **Heading order**: h1 (hero) → h2 (sections) → h3 (subsections)

---

## Target Metrics

| Metric | Target | Implementation |
|--------|--------|----------------|
| **CLS** | < 0.1 | Aspect containers, chat placeholder, min-heights |
| **LCP** | < 2.5s | Hero priority, AVIF/WebP, font preload |
| **TBT** | < 150ms | lazyOnload scripts, deferred chat widget |

---

## Validation

- `npm run build` succeeds
- No layout jumps on load
- Hero displays correctly at all breakpoints
- SEO and design integrity preserved
