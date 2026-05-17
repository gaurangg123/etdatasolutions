# ET Data Solutions — Website

Marketing site for ET Data Solutions. Built with Next.js 14 (App Router) + Tailwind CSS + Framer Motion + Lenis smooth scroll.

## Pages
- `/` — Home (loader → hero → mission blocks → services → why us → CTA)
- `/about` — story, mission/vision, values
- `/services` — 4 service modules with custom SaaS illustrations + process timeline
- `/testimonials` — featured testimonial, grid, case highlights
- `/contact` — contact form, Calendly embed, quick contact cards, map

## Local development

```bash
npm install
cp .env.local.example .env.local   # fill in the values, see below
npm run dev
```

## Environment variables

| Variable | Where set | Purpose |
| --- | --- | --- |
| `RESEND_API_KEY` | Vercel → Settings → Env Vars | Required to actually deliver contact-form emails via Resend |
| `CONTACT_FROM_EMAIL` | Vercel | Optional. Defaults to `ET Data Solutions <noreply@etdatasolutions.com>`. Must be a verified Resend sender. |
| `CONTACT_TO_EMAILS` | Vercel | Optional. Comma-separated list. Defaults to `bobby@etdatasolutions.com,gaurang@etdatasolutions.com` |
| `NEXT_PUBLIC_CALENDLY_URL` | Vercel | Public-facing Calendly event URL embedded on the Contact page, e.g. `https://calendly.com/bobby-etdatasolutions/30min` |

> `NEXT_PUBLIC_*` is shipped to the browser. The Calendly URL is public anyway, so this is safe.

## Calendly — booking notifications to bobby@ + gaurang@

Notification routing for Calendly bookings is **configured in Calendly itself**, not in this codebase. To make sure both addresses are notified when a meeting is booked:

1. Sign in to Calendly with the host account (whoever owns the calendar the event book against).
2. Open the event type you embedded (the one whose URL is in `NEXT_PUBLIC_CALENDLY_URL`).
3. Go to **Notifications and cancellation policy** (under the event-type editor) → **Email notifications**.
4. Add `bobby@etdatasolutions.com` and `gaurang@etdatasolutions.com` to **Additional people to notify** for:
   - Confirmation emails
   - Reschedule notifications
   - Cancellation notifications
5. (Optional, recommended) Go to **Workflows** → **Create new workflow** → Trigger: *Event is scheduled*. Action: *Send email to specific person* → add both addresses. Set the same on cancel/reschedule triggers.
6. Save. Test by booking a slot — both inboxes should receive the calendar invite.

> Tip: if either inbox is a Google Group, also add the group address; the underlying members will all receive copies.

## Contact form

Submissions hit `POST /api/contact`, which:
- Rate-limits 5 requests/min per IP
- Validates and sanitises every field
- Sends an email via Resend to all addresses in `CONTACT_TO_EMAILS` (defaults to bobby@ + gaurang@)
- Sets `reply_to` to the submitter's email so a one-click reply goes back to them

If `RESEND_API_KEY` isn't set the route still returns `200 ok` but only logs the submission server-side (useful for local dev).

## Logo loader

The first page-load shows a black-background intro:

1. SVG version of the network-molecule mark animates in (instant)
2. `/public/logo-intro.mp4` plays once
3. Smooth fade-out into the home page

Subsequent navigation within the same session skips the loader (sessionStorage flag `etds-intro-shown`).

## Deployment

Deploys cleanly on Vercel. Push to `main` → Vercel rebuilds → done. The `redirects()` in `next.config.mjs` 301s the old `/work` URLs to `/testimonials`.
