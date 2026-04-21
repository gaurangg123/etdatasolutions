# ET Data Solutions — Website

Modern B2B service website for [ET Data Solutions](https://etdatasolutions.com), built with Next.js 14, Tailwind CSS, and Framer Motion.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS v3
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Font**: Inter (via @fontsource — no external requests)
- **Language**: TypeScript

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── page.tsx            # Homepage (composes section components)
│   ├── about/
│   ├── services/
│   ├── contact/
│   └── api/contact/        # Contact form API route
├── components/
│   ├── ui/                 # Reusable primitives (Button, Card, Section…)
│   ├── sections/           # Homepage sections (Hero, Services, Pricing…)
│   └── layout/             # Global shell (Navbar, Footer, MobileStickyCTA…)
├── lib/
│   ├── services.ts         # Service content data
│   ├── constants.ts        # Site-wide constants (email, phone, url)
│   ├── utils.ts            # cn() helper
│   ├── validation.ts       # Zod contact form validation
│   ├── email.ts            # Email sending (nodemailer)
│   └── rateLimit.ts        # API rate limiting
└── public/                 # Static assets (images, favicon, robots.txt)
```

## Environment Variables

Create a `.env.local` file (see `.env.local.example`):

```env
# Email — required for contact form
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your@email.com
SMTP_PASS=your-app-password
CONTACT_TO=bobby@etdatasolutions.com

# Optional
RATE_LIMIT_MAX=5
```

## Pages

| Route | Description |
|-------|-------------|
| `/` | Homepage with all sections |
| `/about` | Company info, values, capabilities |
| `/services` | All 4 services in detail |
| `/contact` | Contact form + details |

## Deployment

Designed for Vercel deployment. Push to GitHub, connect to Vercel, add environment variables.

```bash
npm run build   # Production build
npm run start   # Start production server
```

## Contact Form

The `/api/contact` route handles form submissions. It requires SMTP environment variables to send emails. Without them, the API returns a 500 error. Set up environment variables in Vercel dashboard before going live.

---

Built with ❤️ — ET Data Solutions, Est. 2014
