# AARBAA — Bureau of Road Fairness

The official website of the **Americans Against Road Bikers Association of America**
(aarbaa.com), a satirical road-safety advocacy organization. The comedy engine is
deadpan institutional seriousness: the entire site is rendered as the paperwork of
its own quasi-federal agency, the *Bureau of Road Fairness* — numbered forms, filed
memoranda, field-office dossiers, rubber stamps, and a parody .gov banner. The
design never winks; the absurdity comes only from earnest bureaucratic precision
applied to cyclist grievances.

## Stack

- **Astro 5**, fully static output (no adapter, no UI frameworks)
- **Hand-rolled CSS** on a single token system in `src/styles/global.css`
  — no hex literal appears anywhere else; everything uses `var()` tokens
- **Self-hosted fonts** via Fontsource: Oswald (display), Public Sans (body/UI),
  Courier Prime (typewriter voice — dockets, labels, stamps, captions)
- **Inline SVG icons** — one 2px-stroke federal glyph set in `src/components/Icon.astro`
- Single light theme by design; paper does not do dark mode

## Commands

| Command | Action |
| --- | --- |
| `npm run dev` | Start the dev server |
| `npm run build` | Build the static site to `dist/` |
| `npm run preview` | Preview the production build locally |
| `node scripts/generate-og.mjs` | Regenerate the social card (`public/images/og-card.png`) |

## Structure

```
src/
  pages/            All routes: home, about, join, contact, thank-you, shop,
                    resources, 404, news/, chapters/[state], countries/[country],
                    7deadlysins-rate, 7deadlysinspr, raph-champion
  content/news/     Markdown content collection — the ten memoranda (articles),
                    rendered by src/pages/news/[slug].astro
  data/             states.ts (50 state chapters) and countries.ts (5 international
                    desks) — the data behind the dossier pages
  components/       The document kit: Stamp, Figure (evidence-photo pipeline),
                    PendingRecords (designed empty state for unreleased galleries),
                    DocHero, StatLedger, CommentLedger, ContactForm, Seal, Icon
  layouts/          MainLayout.astro — .gov banner, letterhead, sheet/rail grid,
                    document footer
  styles/           global.css — the token file and all shared pattern CSS
scripts/
  generate-og.mjs   Builds the 1200×630 og:image with sharp (run manually; the
                    PNG is committed)
```

## Forms

- **Contact form** (`src/components/ContactForm.astro`) and the **ratings form**
  (`/7deadlysins-rate`) POST JSON client-side to Google Apps Script webhooks; setup
  is documented in `deployment-notes.txt`. Payload shapes are load-bearing — do not
  change field names.
- The contact form stores `{name, email}` in `sessionStorage` for the `/thank-you`
  receipt personalization.
- **Join** (`/join`) embeds a JotForm application.
- The footer mailing-list strip (Form AAR-102) is intentionally queued, never sent.

## Deployment

Deployed on **Vercel** as a static Astro build (`vercel.json` sets the framework;
everything else is auto-detected).

`/7deadlysins-rate`, `/7deadlysinspr`, and `/raph-champion` are personal/inside-joke
pages and are deliberately excluded from the sitemap (see `astro.config.mjs`).
