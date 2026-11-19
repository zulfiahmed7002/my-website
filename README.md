# Maison Realty demo

Premium real-estate fintech website concept built with React, TypeScript, Vite, Tailwind CSS, React Router, Framer Motion and GSAP ScrollTrigger.

## Run locally

```sh
npm install
npm run dev
```

Create a production build with `npm run build`.

## Project layout

- `src/site.tsx` — page routes, listings, calculators and shared sections
- `src/components/` — property detail gallery, local demo auth/dashboard and site utilities
- `src/data/demoStore.ts` — local demo profile, enquiries and newsletter storage
- `src/style.css` — visual system, responsive rules and reduced-motion styles

## Demo data and services

No Supabase project or credentials are configured. Demo profiles keep only a name and email in local storage; passwords are discarded. Saved properties, newsletter signups and enquiries are local browser demo data. No payment, investment, booking or visa transaction occurs. Property photos and web fonts use external image/font hosts.
