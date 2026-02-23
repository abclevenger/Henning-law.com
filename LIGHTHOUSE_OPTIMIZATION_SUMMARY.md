# Lighthouse / Mobile Performance Optimization Summary

## Changes Implemented

### 1. Hero Image Optimization ✓
- **Next.js Image**: Already using `<Image />` with `fill`, `priority`, `object-cover`
- **Aspect ratio**: 16:9 wrapper (`hero-image-wrapper`) with `aspect-ratio: 16/9`, `min-height: 100%`
- **Responsive sizes**: Updated to `(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 1920px` for optimal image selection on mobile
- **SEO alt text**: "Strategic U.S. Counsel for International Companies and Private Clients - Attorney consultation"
- **Structure**: `hero-bg-image` → `hero-image-wrapper` (aspect-ratio) → `Image` (fill, object-cover)

### 2. Layout Space / CLS Prevention ✓
- Hero container has fixed `min-height: 600px` (500px mobile)
- All large images use `aspect-ratio` on parent containers
- `object-cover` prevents distortion and reserves space

### 3. Font Optimization ✓
- **next/font**: Playfair Display and Lato via `@/app/fonts`
- **font-display: swap**: Applied to both font families
- **Weights**: Playfair (400, 500, 600, 700), Lato (300, 400, 700)
- No render-blocking `@import` from Google Fonts

### 4. Third-Party Scripts ✓
- **Google Analytics**: `strategy="afterInteractive"`
- **Lead Connector Chat**: `strategy="lazyOnload"`
- Both use `next/script` for optimal loading

### 5. Image Configuration ✓
- **deviceSizes**: [640, 750, 828, 1080, 1200, 1920, 2048] for responsive breakpoints
- **imageSizes**: [16, 32, 48, 64, 96, 128, 256] for thumbnails
- **formats**: AVIF, WebP for modern browsers

### 6. Cache Headers ✓
- `/images/:path*`: `Cache-Control: public, max-age=31536000, immutable`
- `/favicon.png`: Same
- Vercel handles `_next/static` assets by default

### 7. Code Splitting
- ScrollReveal kept as static import (dynamic with `ssr: false` not allowed in Server Component layout)
- Footer and Navbar remain static for above-the-fold content

---

## Tailwind Note
This project uses **plain CSS** (styled-jsx, globals.css), not Tailwind. No Tailwind config to verify.

---

## Expected Lighthouse Improvements

| Metric | Target | How |
|--------|--------|-----|
| **LCP** | < 3s | Hero priority, responsive sizes, next/font, AVIF/WebP |
| **CLS** | < 0.1 | Aspect-ratio containers, explicit dimensions |
| **TBT** | Reduced | Deferred scripts, optimized fonts |

---

## Validation
- `npm run build` completed successfully
- No SEO or design changes
- Hero image displays without distortion
