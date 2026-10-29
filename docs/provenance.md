# Onda Social — Provenance & Compliance Ledger

Origin, brand transformation and asset provenance for **Onda Social**.

## 1. Project Background

- **Reference project:** `E:\Projects\landing\next\smm-agency-growlio`
- **Archive (kept):** `E:\Projects\landing\next\_archive\smm-agency-growlio-original`
- **Rebuilt project:** `onda-social`
- **Repository:** `https://github.com/JORDANROBERTO74/onda-social`
- **Production:** `https://ondasocial.vercel.app`
- **Mode:** faithful rebrand of the reference build (not a redesign).

An earlier `v1.0.0` of this repository was a from-scratch redesign that broke the reference composition. It was rejected and removed from `main`; it remains recoverable from the tag `v1.0.0`. The current build restores the original section map, markup, animations, interactions and media, then applies a scoped brand change.

## 2. Change Pass Scope

Preserved verbatim: layout, fixed 1600 px artboard, `framer-motion` scroll choreography, sticky services deck, icon orbit, marquees, tabbed case-study selector, accordion FAQ, both reels, palette and typefaces.

Changed:

| Area | Before | After |
| --- | --- | --- |
| Brand | `Nexa Social` (5 refs) | `Onda Social` |
| Footer credit | `@ CAPRIX 2026` (2 refs) | `Onda Social 2026` |
| Client logos (About strip) | Amazon, Microsoft, Klarna, Notion, Vercel, Groupon, Mercury | Six fictional wordmarks |
| Case studies | Real-brand names | Velora, NourishCo, LUMASKIN, techora_, RIDEON, NORDIKA |
| Footer services | Website / product design links | Social strategy, content, paid social, UGC |
| Photography | Stock people | Generated, people-free equivalents |
| Typography loading | Google Fonts `@import` | Self-hosted `woff2` + `@font-face` |
| Locales | English only | English + Spanish |
| Favicon | Template mark | Diamond brand mark |

`react-icons` was removed entirely; the client logo strip is now typographic.

### Necessary code deviation

The reference called `useState(window.innerWidth <= 768)` during render, which throws `window is not defined` during server rendering (HTTP 500). Every section now initialises `isMobile` to `false` and sets it in the existing mount effect. Behaviour after hydration is unchanged.

## 3. Brand & Identity

- **Brand:** Onda Social — social media marketing agency.
- **Visual system (unchanged from the reference):** paper `#FBFBDC`, forest `#024E46`, ink `#1A1A1A`, cream `#FFFFEA`, service accents pink `#F680A3`, violet `#9F82FF`, magenta `#FC7AEC`.
- **Typography:** Inter Tight (variable) and Goudy Bookletter 1911, both self-hosted in `public/fonts`.
- **Locales:** typed `en` / `es` dictionaries on `/[locale]`, negotiated from `Accept-Language` and persisted in the `onda.locale` cookie.

"Nexa" was discarded because it is an existing commercial mark; "CAPRIX" was the template vendor's signature.

## 4. Asset Provenance

All runtime assets are local — 0 remote URLs in the built site.

| Asset | Provenance |
| --- | --- |
| `about-01.jpg`, `about-02.jpg` | Reference images, regenerated without people (a camera with invented markings was removed from the first draft) |
| `office.jpg`, `team-01.jpg`, `team-02.jpg` | Reference images, generated people-free equivalents |
| `portrait-01..03.jpg` | Generated fabric-only crops — no faces, no skin, no identifiable person |
| `case-hero.jpg` | Generated still life (terracotta bottle and linen) |
| `social-1..9.svg` | The reference's generic social-network glyphs, kept as requested |
| `reel.mp4`, `reel-short.mp4` | The reference's demo reels, kept as requested |

### Known risk

`reel.mp4` shows a hand holding a **branded deodorant bottle**. The reels were explicitly retained, but the product branding is visible at small size. Replacing the clip is the only way to remove it.

## 5. Copy & Localisation

- English copy is the reference's own copy, with defects corrected (a duplicated testimonial subtitle in the FAQ, a truncated Enterprise plan description, mismatched case-study metrics).
- Spanish is an original adaptation written for this build, not machine output pasted verbatim.
- Spanish strings were shortened where the fixed artboard clipped them (about statement, case tabs, service badges, FAQ questions, section titles).
- Spanish suppresses the design's inherited `text-transform: capitalize` (`html[lang="es"]` rule in `globals.css`), which is wrong in Spanish.
- Prices are illustrative USD; no payment integration exists. Metrics and testimonials are fictional.

## 6. Verification

- `pnpm typecheck`, `pnpm lint` and `pnpm build` complete clean.
- `/en` and `/es` are statically generated; `/` negotiates the locale in middleware.
- Section offsets match the reference within a few pixels at 1440×900; `docs/cmp-original.png` and `docs/cmp-port.png` are the comparison captures.
- Rendered at 1440, 768 and 390 px.
- `robots.txt`, multilingual `sitemap.xml`, `hreflang` alternates, a generated OpenGraph card and JSON-LD (`Organization`, `Service`, `FAQPage`) are in place.
