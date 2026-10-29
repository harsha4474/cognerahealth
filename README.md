# Cognera Health — Website

React rebuild of [cognerahealth.ai](https://www.cognerahealth.ai) with a new UI/UX. It keeps the same content and the same inner pages.

Built with React 19, React Router and Vite. There is no CSS framework: all styles live in `src/styles/global.css`, and the design tokens are at the top of that file.

## Getting started

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build → dist/
npm run preview  # serve the production build
```

## Pages

| Route | Page |
| --- | --- |
| `/` | Home |
| `/platform`, `/cogneraai`, `/healscript`, `/healconnect`, `/healscriptos`, `/solutions` | Product (`/healscriptos` is the HealScript™ Operations Center metric explorer) |
| `/who-we-serve`, `/investors` | Audiences |
| `/trust`, `/standards` | Trust Center (privacy policy, terms, compliance, governance…) and Standards explorer |
| `/about`, `/leadership`, `/partnerships`, `/press`, `/careers` | Company |
| `/contact`, `/early-access` | Contact and the early-access form |
| `/data-deletion`, `/do-not-sell-or-share` | Privacy request forms |

Trust sections are deep-linkable, e.g. `/trust#privacy-policy` or `/trust#terms-conditions`.

## Where the content lives

- Marketing copy sits inline in each page under `src/pages/`.
- Long legal copy (Trust Center and the privacy request pages) is in `src/content/legal/*.json`. It is sanitized HTML taken from the live site.
- The Standards organizations, categories and capabilities are in `src/content/standards-data.json`.
- Press releases are in `src/content/press.json`.
- The Operations Center metrics are in `src/content/operations.json`.
- Per-page titles, descriptions and canonical URLs (copied from the live site) are in `src/content/seo.json`.
- Navigation and the footer are configured in `src/nav.js`.
- Images are in `public/images/`. They are the live site's images, resized and converted to WebP.

## Forms

The early-access and privacy request forms don't need a backend. Like the live site, they validate the input and then open a prefilled email (`mailto:`) in the visitor's email client.

## Deployment

This is a single-page app, so every route must serve `index.html`. `vercel.json` (Vercel) and `public/_redirects` (Netlify) already handle this.

The governance PDFs linked from the Trust Center point to `https://www.cognerahealth.ai/documents/…`. They total about 117 MB, so they are not stored in this repo.
