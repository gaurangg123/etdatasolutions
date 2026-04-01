# ET Data Solutions — Next.js Website

**Stack:** Next.js 14 · TypeScript · CSS Modules · Inter font  
**Theme:** Orange-red palette · Dark / light toggle  
**Deployment:** GitHub → Vercel (preview) → etdatasolutions.com (live)

---

## Project Structure

```
etds/
├── public/
│   ├── logo-white-bg.jpg      # Logo on light backgrounds (Navbar light mode)
│   ├── logo-dark-bg.jpg       # Logo on dark backgrounds (Navbar dark mode)
│   ├── logo-square.jpg        # Square logo variant
│   ├── logo-video-1.mp4       # Animated logo — hero section
│   └── logo-video-2.mp4       # Animated logo — alternate
│
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout — wraps Navbar, Footer, ThemeProvider
│   │   ├── globals.css         # Design tokens, dark/light CSS variables, utility classes
│   │   ├── page.tsx            # Home page
│   │   ├── page.module.css
│   │   ├── not-found.tsx       # 404 page
│   │   ├── about/
│   │   │   ├── page.tsx
│   │   │   └── about.module.css
│   │   ├── services/
│   │   │   ├── page.tsx
│   │   │   └── services.module.css
│   │   └── contact/
│   │       ├── page.tsx
│   │       └── contact.module.css
│   │
│   ├── components/
│   │   ├── Navbar.tsx          # Sticky nav, mobile menu, dark/light toggle, real logo
│   │   ├── Navbar.module.css
│   │   ├── Footer.tsx
│   │   ├── Footer.module.css
│   │   └── ThemeProvider.tsx   # Dark/light context, persists to localStorage
│   │
│   └── lib/
│       ├── services.ts         # All 4 service verticals — single source of truth
│       └── useReveal.ts        # Scroll-reveal IntersectionObserver hook
│
├── Dockerfile                  # Production Docker build
├── docker-compose.yml          # Run on VPS
├── nginx.conf                  # Reverse proxy config for IONOS VPS
├── next.config.js
├── tsconfig.json
└── package.json
```

---

## Services (in order)

| # | Service | Key Tags |
|---|---------|----------|
| 01 | Staffing, VA & Recruitment | RPO, Virtual Assistant, Recruitment |
| 02 | Data & Excel | Data Entry, Excel Automation, OCR/ICR |
| 03 | QA Testing — App & Web | Manual User Testing, Web, Mobile |
| 04 | Data Engineering & Visualizations | Snowflake, Databricks, Microsoft Fabric, Power BI |

To edit any service: update **`src/lib/services.ts`** — changes reflect everywhere automatically.

---

## Local Development

### Prerequisites
- Node.js 20+

```bash
# Install dependencies
npm install

# Run dev server
npm run dev
# → http://localhost:3000
```

---

## Recommended Workflow: GitHub + Vercel

### Step 1 — Push to GitHub

```bash
cd etds
git init
git add .
git commit -m "initial commit"

# Create a repo at github.com, then:
git remote add origin https://github.com/YOURUSERNAME/etdatasolutions.git
git push -u origin main
```

### Step 2 — Deploy on Vercel (free preview)

1. Go to [vercel.com](https://vercel.com) → sign up with GitHub
2. Click **Add New Project** → import `etdatasolutions`
3. Click **Deploy** — done in ~30 seconds
4. Your site is live at `etdatasolutions.vercel.app`

### Step 3 — Every update is automatic

```bash
# Make changes, then:
git add .
git commit -m "your change description"
git push
# → Vercel redeploys in ~30 seconds automatically
```

### Step 4 — Connect etdatasolutions.com (when ready to go live)

**In Vercel:**
1. Project → Settings → Domains → Add `etdatasolutions.com`
2. Vercel shows you two DNS values

**In IONOS DNS panel:**

| Type  | Host | Value                  |
|-------|------|------------------------|
| A     | @    | `76.76.21.21`          |
| CNAME | www  | `cname.vercel-dns.com` |

SSL is automatic and free via Vercel.

---

## Alternative: Deploy on IONOS VPS (Docker)

If you prefer self-hosting on your IONOS VPS:

### On the VPS

```bash
# Install Docker + Nginx
sudo apt update && sudo apt upgrade -y
sudo apt install -y docker.io docker-compose nginx certbot python3-certbot-nginx
sudo systemctl enable docker

# Upload project (from your machine)
zip -r etds.zip etds/ -x "*/node_modules/*" "*/.next/*"
scp etds.zip user@YOUR_VPS_IP:/home/user/

# On VPS
unzip etds.zip && cd etds
docker-compose up -d --build

# Nginx
sudo cp nginx.conf /etc/nginx/sites-available/etdatasolutions.com
sudo ln -s /etc/nginx/sites-available/etdatasolutions.com /etc/nginx/sites-enabled/
sudo nginx -t && sudo systemctl reload nginx

# Free SSL
sudo certbot --nginx -d etdatasolutions.com -d www.etdatasolutions.com
```

### IONOS DNS for VPS

| Type  | Host | Value        |
|-------|------|--------------|
| A     | @    | YOUR_VPS_IP  |
| A     | www  | YOUR_VPS_IP  |

---

## Wiring the Contact Form

The form currently simulates submission. To make it send real emails, create an API route:

**`src/app/api/contact/route.ts`** — add this file and install nodemailer:

```bash
npm install nodemailer @types/nodemailer
```

Then in your contact `page.tsx`, change the `handleSubmit` fetch to:

```typescript
const res = await fetch('/api/contact', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(form),
})
```

---

## Customising the Theme

All design tokens live in **`src/app/globals.css`** under `:root` (light) and `[data-theme="dark"]`.

Key variables:
- `--accent` — primary orange-red (`#e8440a`)
- `--text`, `--text2`, `--text3` — text hierarchy
- `--surface`, `--surface2` — card backgrounds
- `--bg`, `--bg2`, `--bg3` — page backgrounds

---

## Contact

bobby@etdatasolutions.com · +1-215-554-3713 · etdatasolutions.com
