# Cognera Health — Website

Marketing website for [Cognera Health](https://www.cognerahealth.ai), the AI-powered continuous care platform for mental health, behavioral health, and wellness.

Built with React + Vite.

## Getting started

```bash
npm install
npm run dev      # start dev server at http://localhost:5173
npm run build    # production build into dist/
npm run preview  # preview the production build
```

## Structure

- `src/content.js` — all page copy (nav, audiences, capabilities, pillars, footer). Edit text here.
- `src/components/` — page sections (Header, Hero, Sections, EarlyAccess, Footer).
- `src/styles.css` — design tokens (colors, fonts) at the top, then section styles.

The early-access form is front-end only; connect `handleSubmit` in `src/components/EarlyAccess.jsx` to a form service or API.
