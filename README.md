# ET Data Solutions — Next.js Website

**Stack:** Next.js 14 · TypeScript · CSS Modules  
**Deployment:** IONOS VPS · Docker · Nginx · Let's Encrypt SSL

---

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout (Navbar + Footer wrapped)
│   ├── page.tsx            # Home page
│   ├── globals.css         # Design tokens, utility classes, dark/light theme
│   ├── about/
│   │   └── page.tsx
│   ├── services/
│   │   └── page.tsx
│   └── contact/
│       └── page.tsx
├── components/
│   ├── ThemeProvider.tsx   # Dark/light toggle context
│   ├── Navbar.tsx
│   └── Footer.tsx
└── lib/
    ├── services.ts         # All 4 service verticals data
    └── useReveal.ts        # Scroll-reveal IntersectionObserver hook
```

---

## Local Development

### Prerequisites
- Node.js 20+
- npm 9+

### Setup

```bash
# 1. Install dependencies
npm install

# 2. Run dev server
npm run dev
# → http://localhost:3000
```

---

## Build for Production

```bash
npm run build
npm start
```

---

## Deploy to IONOS VPS

### 1. Server Requirements
- Ubuntu 22.04 LTS (recommended)
- 1GB+ RAM
- Docker + Docker Compose installed
- Nginx installed
- Domain pointed to VPS IP (see DNS section below)

### 2. Install Docker on VPS

```bash
sudo apt update && sudo apt upgrade -y
sudo apt install -y docker.io docker-compose nginx certbot python3-certbot-nginx
sudo systemctl enable docker
sudo usermod -aG docker $USER
```

### 3. Upload Project to VPS

```bash
# From your local machine — zip and upload
zip -r etds.zip . -x "node_modules/*" ".next/*"
scp etds.zip user@YOUR_VPS_IP:/home/user/

# On the VPS
unzip etds.zip -d etdatasolutions
cd etdatasolutions
```

### 4. Build & Run with Docker

```bash
docker-compose up -d --build

# Verify it's running
docker ps
curl http://localhost:3000
```

### 5. Configure Nginx

```bash
# Copy the nginx config
sudo cp nginx.conf /etc/nginx/sites-available/etdatasolutions.com
sudo ln -s /etc/nginx/sites-available/etdatasolutions.com /etc/nginx/sites-enabled/

# Test config
sudo nginx -t

# Reload nginx
sudo systemctl reload nginx
```

### 6. SSL Certificate (Let's Encrypt — Free)

```bash
sudo certbot --nginx -d etdatasolutions.com -d www.etdatasolutions.com
```

Certbot will automatically update your nginx config with SSL.  
Certificates auto-renew every 90 days via cron.

---

## IONOS DNS Configuration

Log into your IONOS account → **Domains & SSL** → **etdatasolutions.com** → **DNS**

Add/update these records:

| Type  | Host | Value              | TTL  |
|-------|------|--------------------|------|
| A     | @    | YOUR_VPS_IP        | 3600 |
| A     | www  | YOUR_VPS_IP        | 3600 |
| CNAME | *    | etdatasolutions.com | 3600 |

> DNS propagation can take up to 24–48 hours. Use https://dnschecker.org to verify.

---

## Update / Redeploy

```bash
cd /home/user/etdatasolutions

# Pull latest code (if using Git)
git pull

# Rebuild and restart
docker-compose down
docker-compose up -d --build
```

---

## Environment Variables

Create a `.env.local` file for any future secrets:

```env
# Example — add as needed
CONTACT_EMAIL=bobby@etdatasolutions.com
```

---

## Adding / Editing Services

All service content lives in **`src/lib/services.ts`**.  
Edit the `services` array to update titles, descriptions, items, and tags.  
Changes automatically reflect on the Services page and the Home page grid.

---

## Customising the Theme

All design tokens (colors, fonts, spacing) are in **`src/app/globals.css`** under `:root` (light) and `[data-theme="dark"]`.

Key variables:
- `--accent` — primary blue
- `--electric` — cyan highlight
- `--text`, `--text2`, `--text3` — text hierarchy
- `--surface`, `--surface2` — card backgrounds

---

## Contact Form

The contact form in `src/app/contact/page.tsx` currently simulates submission.  
To wire it to a real backend:

1. **Option A — Email via API route:**  
   Create `src/app/api/contact/route.ts` and use `nodemailer` to send to `bobby@etdatasolutions.com`.

2. **Option B — Third-party service:**  
   Use [Formspree](https://formspree.io), [EmailJS](https://emailjs.com), or [Resend](https://resend.com).

---

## Support

Contact: bobby@etdatasolutions.com  
Phone: +1-215-554-3713
