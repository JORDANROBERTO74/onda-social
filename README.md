# Onda Social — Creative & Paid Social Landing

Turn social media into real business growth. A bilingual landing page for a social media marketing agency: strategy, paid campaigns, content and UGC, with transparent plans and a full case-study selector.

![Onda Social Preview](docs/screenshot.webp)

## Overview

Onda is a single-page agency site with ten sections: hero, about, services, case studies, differentiators, process, pricing, testimonials, FAQ and contact footer. It keeps the bold, high-contrast language of the reference — deep forest green over warm paper, serif display type against a tight grotesk — rebuilt as a responsive, typed and accessible implementation.

Both locales are statically generated, every image and font is self-hosted, and the structured data describes the organisation, its services and the FAQ.

## Key Features

- **Bilingual routing (`en` / `es`):** Typed dictionaries, `/[locale]` App Router segments, `Accept-Language` negotiation and an `onda.locale` cookie that keeps the visitor's choice.
- **Case-study selector:** Four fictional clients with animated metric counters, proper `tablist`/`tabpanel` semantics and arrow-key navigation.
- **Motion without a library:** A CSS-orbit hero, a CSS entrance sequence and `requestAnimationFrame` counters. Everything stops under `prefers-reduced-motion`.
- **Accessible accordion and menu:** `aria-expanded`/`aria-controls` on the FAQ, `Escape` and focus-visible styles on the mobile menu.
- **Self-hosted imagery:** Six studio photographs generated for this project and served through `next/image` — no stock libraries, no remote media.
- **Self-hosted typography:** Inter Tight and Goudy Bookletter 1911 bundled at build time via `next/font/google`; the browser never contacts a font CDN.
- **Structured data:** `Organization`, `Service` with an offer catalogue, and `FAQPage` generated from the same dictionaries as the page.
- **Localised 404:** A `[locale]/[...rest]` catch-all renders the styled not-found page instead of the framework default.

## Tech Stack

- **Framework:** Next.js 16.4.3 (App Router, Turbopack)
- **Library:** React 19.2.4
- **Language:** TypeScript 5.7.3 (strict)
- **Styling:** Tailwind CSS 4.3.3 with CSS-first `@theme` tokens
- **Icons:** Lucide React
- **Analytics:** `@vercel/analytics`
- **Package Manager:** pnpm 11.17

## Architecture

```
onda-social/
├── docs/
│   ├── provenance.md          # Compliance ledger and transformation history
│   └── screenshot.webp        # Visual preview artifact
├── public/
│   └── images/                # Two studio images and four case-study images
├── src/
│   ├── app/
│   │   ├── [locale]/
│   │   │   ├── [...rest]/page.tsx   # Catch-all that renders the 404
│   │   │   ├── layout.tsx     # Locale shell, font variables, analytics
│   │   │   ├── not-found.tsx  # Styled 404
│   │   │   ├── opengraph-image.tsx  # 1200x630 social card
│   │   │   └── page.tsx       # Composed landing route
│   │   ├── globals.css        # Design tokens, keyframes and base layers
│   │   ├── icon.svg           # Wave brand mark and favicon
│   │   ├── robots.ts
│   │   └── sitemap.ts
│   ├── components/            # header, hero, about, services, case-studies,
│   │                          # why-us, process, pricing, testimonials, faq, footer
│   ├── config/site.ts         # Domain and locale configuration
│   ├── i18n/
│   │   ├── config.ts          # Locale list and cookie name
│   │   ├── dictionaries/      # Typed English and Spanish copy
│   │   └── get-dictionary.ts
│   ├── lib/
│   │   ├── json-ld.ts         # Organization, Service and FAQPage graph
│   │   └── seo.ts             # Canonical and hreflang metadata builder
│   └── proxy.ts               # Locale detection and persistence
├── eslint.config.mjs
├── next.config.ts
├── package.json
└── tsconfig.json
```

## Getting Started

### Prerequisites

- Node.js >= 20.9.0
- pnpm >= 10.0.0

### Installation

```bash
git clone https://github.com/JORDANROBERTO74/onda-social.git
cd onda-social
pnpm install
```

### Development

```bash
pnpm dev
```

Visit [http://localhost:3000](http://localhost:3000). The root redirects to `/en` or `/es` based on the request.

### Quality Checks

```bash
pnpm typecheck   # TypeScript, no emit
pnpm lint        # ESLint flat config
pnpm build       # Production build
```

## Deployment

The site is deployed on Vercel with the default Next.js preset. Import the repository, or run:

```bash
vercel deploy --prod
```

Set `NEXT_PUBLIC_SITE_URL` when serving from a custom domain; otherwise the canonical URL falls back to `https://onda-social.vercel.app`.

## Performance & SEO

- `/en` and `/es` are statically generated; the locale redirect runs in edge middleware.
- Every photograph is served through `next/image` with responsive `srcset` and AVIF/WebP negotiation.
- `sitemap.xml` and `robots.txt` are derived from the locale configuration.
- OpenGraph and Twitter cards are generated at request time from the same dictionaries as the page.
- `hreflang` alternates (`en`, `es`, `x-default`) and a per-locale canonical URL are emitted on every route.
- Fonts are preloaded by `next/font` with automatic size-adjust metrics, so there is no layout shift.

## Accessibility

- Semantic landmarks (`header`, `nav`, `main`, `section`, `footer`) and a single `h1` per locale.
- Case-study tabs use `role="tablist"`, `aria-selected` and roving `tabIndex` with arrow-key support.
- FAQ items expose `aria-expanded` and `aria-controls`; the answer region is labelled by its trigger.
- Mobile menu: `aria-expanded`, `aria-controls`, `Escape` to close, focus-visible styles on every control.
- Forest on paper and cream on forest exceed WCAG AA; mint is only used for large text and accents.

## Compliance & Licensing

This project was rebuilt under clean-room principles:

- No proprietary trademarks, third-party logos, stock photography or celebrity likenesses.
- All copy and the Spanish translation are original to this project.
- The six photographs were generated for this build and ship with the repository.
- Case studies are fictional and the page states so; metrics are illustrative.
- The full audit trail lives in [`docs/provenance.md`](docs/provenance.md).

## License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.
