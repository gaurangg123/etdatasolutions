# ET Data Solutions — etdatasolutions.com

Next.js 14 · TypeScript · Plain CSS · Framer Motion · Resend · Vercel

## Quick start

```bash
npm install
npm run dev
# → http://localhost:3000
```

## Environment variables

Copy `.env.local` (already in the project) and fill in your keys:

| Variable | Where to get it |
|---|---|
| `RESEND_API_KEY` | resend.com → API Keys |
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | sanity.io → your project (Phase 2) |
| `NEXT_PUBLIC_SANITY_DATASET` | `production` |
| `SANITY_API_TOKEN` | sanity.io → API → Tokens (Phase 2) |

## Wiring up email (Resend)

1. Sign up at [resend.com](https://resend.com) — free tier = 3,000 emails/month
2. Add & verify your domain (`etdatasolutions.com`)
3. Create an API key and add it to Vercel environment variables
4. In `app/api/contact/route.ts`, uncomment the Resend block
5. `npm install resend`
6. Redeploy

## Color theme

The site uses CSS custom properties in `app/globals.css`:

- **Light mode** — warm cream (#FFF6F0) backgrounds, deep orange (#D94000) accents
- **Dark mode** — very dark warm brown (#120500) backgrounds, bright orange (#FF6A35) accents

To tweak, edit the `:root` and `@media (prefers-color-scheme: dark)` blocks in `globals.css`.

## Pages

| Route | Description |
|---|---|
| `/` | Homepage with all sections |
| `/about` | Company story, results, values |
| `/services` | All four services in full detail |
| `/testimonials` | All 7 client quotes |
| `/contact` | Full-page contact form |
| `/api/contact` | POST → Resend email |

## Deploy to Vercel

```bash
vercel deploy --prod
```

Add env vars in Vercel Dashboard → Project → Settings → Environment Variables.
Set canonical domain: `etdatasolutions.com`

## Phase 2 — Sanity CMS

See `lib/sanity.ts` for setup instructions. Schemas to add:
- `Testimonial` — name, role, company, service, quote, avatarInitials, avatarColor
- `CaseStudy` — client, industry, metric, description, serviceType
- `Service` — slug, title, tagline, fullDescription, deliverables[], tags[]
