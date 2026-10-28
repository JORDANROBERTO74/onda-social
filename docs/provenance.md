# Onda Social — Provenance & Compliance Ledger

This ledger records the origin, brand transformation and asset provenance for **Onda Social**.

## 1. Project Background & Transformation

- **Original Working Directory:** `E:\Projects\landing\next\smm-agency-growlio`
- **Archived copy:** `E:\Projects\landing\next\_archive\smm-agency-growlio` (removed after release)
- **Rebuilt Project Name:** `onda-social`
- **Final Repository:** `https://github.com/JORDANROBERTO74/onda-social`
- **Live Production URL:** `https://onda-social.vercel.app`
- **Mode:** Change pass over the existing section map, with the rendering layer rebuilt.

The template was used as a structural reference: its ten-section map, its palette and its content model were kept, while every component was re-implemented as responsive Tailwind with typed bilingual copy.

## 2. Brand & Identity

- **Brand:** Onda Social
- **Sector:** Social media marketing agency — strategy, paid social, content and UGC.
- **Visual system:** Paper (`#fbfbdc`), cream (`#fffef5`), forest green (`#024e46`), mint (`#109d75`), ink (`#101826`), slate (`#6a7381`), plus the service accents pink (`#f680a3`), violet (`#9f82ff`) and magenta (`#fc7aec`).
- **Typography:** Inter Tight for display and body, Goudy Bookletter 1911 for serif accents, both self-hosted via `next/font/google`.
- **Locale strategy:** Typed bilingual copy (`en`, `es`) on `/[locale]` routes, negotiated from `Accept-Language` and persisted in the `onda.locale` cookie.

The original brand ("Nexa Social", with a "CAPRIX" trace in the footer) was discarded: "Nexa" is an existing commercial brand and the footer credit belonged to the template vendor.

## 3. Asset & Visual Provenance

- **Photography:** Six images generated for this project with a text-to-image model and stored in `public/images`:
  - `about-01.jpg` — studio desk with a ring light, paper stocks and colour swatches.
  - `about-02.jpg` — overhead planning board with fabric and colour samples.
  - `work-velora.jpg` — silk and brushed metal still life.
  - `work-nourish.jpg` — pantry bowl and grain on stone.
  - `work-luma.jpg` — frosted cosmetic glass with water droplets.
  - `work-techora.jpg` — abstract navy light field.
- **People and marks:** No faces, no identifiable individuals, no logos and no readable text appear in any asset. One first draft of `about-01` contained a camera with invented branding on the body and was regenerated before use.
- **Brand mark:** Custom SVG (`src/app/icon.svg`) — a cream waveform on a forest tile.
- **Runtime dependencies:** Zero remote font networks, image hosts, video hosts or CDNs.

### Discarded reference assets

The template loaded its media from `https://cdn.jiro.build/SMM/` and shipped local stock portraits. All of it was removed before the first commit:

- `a1.png`, `a2.png`, `c1.png`, `1.svg`–`6.svg` and `demo-.mp4` — third-party CDN assets, unreachable without the vendor's infrastructure.
- `team_1.jpg`, `team_2.jpg`, `avatar_1..3.jpg` — photographs of identifiable people.
- Brand logos rendered through `react-icons`: Amazon, Microsoft, Klarna, Notion, Vercel and Groupon were presented as clients. Removed; the "client logo" row no longer exists.
- `placeholder-logo.*`, `placeholder-user.jpg`, `placeholder.jpg`, `placeholder.svg`, `icon-*`, `apple-icon.png` — v0 scaffolding.

None of these appear in this repository or its history.

## 4. Copy & Localisation

- All English copy was written for this project; the Spanish version is an original adaptation, not machine output pasted verbatim.
- Client names (Velora, NourishCo, LumaSkin, Techora) are fictional, and the page states that the figures are illustrative.
- Pricing is in USD and labelled as per month; no real payment provider is integrated.
- The contact address uses the reserved `.example` TLD so no real mailbox is implied.

## 5. Architectural Verification

- Next.js 16.4.3 App Router with Turbopack; React 19.2.4; strict TypeScript.
- `/en` and `/es` are statically generated; `/` returns `307` to the negotiated locale.
- The fixed 1600 px artboard of the original was replaced with fluid layouts: the page has no horizontal overflow at 390, 768 or 1440 px.
- Window access that previously ran during render was moved into effects, so hydration is clean.
- `pnpm typecheck`, `pnpm lint` and `pnpm build` complete without errors or warnings.
- `robots.txt`, multilingual `sitemap.xml`, `hreflang` alternates, a generated 1200x630 OpenGraph card and JSON-LD (`Organization`, `Service`, `FAQPage`) are in place.
