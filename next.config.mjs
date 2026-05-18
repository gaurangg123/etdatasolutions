/** @type {import('next').NextConfig} */

// ── Security headers ────────────────────────────────────────
// Applied to every route. Tuned for our actual third-party use:
//   • Calendly widget (script + css from assets.calendly.com, iframe to calendly.com)
//   • Google Maps embed iframe (maps.google.com / www.google.com)
//   • Unsplash images
//   • Resend API (server-side only — does not need CSP)
const securityHeaders = [
  { key: 'X-DNS-Prefetch-Control', value: 'on' },
  { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'X-XSS-Protection', value: '1; mode=block' },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=(), interest-cohort=(), browsing-topics=()',
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload',
  },
  {
    key: 'Content-Security-Policy',
    value: [
      "default-src 'self'",
      // Next inline + Calendly widget script
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://assets.calendly.com",
      "style-src 'self' 'unsafe-inline' https://assets.calendly.com https://fonts.googleapis.com",
      "font-src 'self' data: https://fonts.gstatic.com",
      "img-src 'self' data: blob: https://images.unsplash.com https://*.calendly.com https://maps.gstatic.com https://maps.googleapis.com",
      // iframes: Calendly + Google Maps embed only
      "frame-src https://calendly.com https://*.calendly.com https://www.google.com https://maps.google.com",
      // fetch / XHR: same-origin + Calendly
      "connect-src 'self' https://calendly.com https://*.calendly.com",
      "frame-ancestors 'none'",
      "base-uri 'self'",
      "form-action 'self'",
      "object-src 'none'",
      "upgrade-insecure-requests",
    ].join('; '),
  },
];

const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false, // Hide "X-Powered-By: Next.js" leak
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
    ],
  },
  async headers() {
    return [
      { source: '/(.*)', headers: securityHeaders },
    ];
  },
  async redirects() {
    return [
      { source: '/work', destination: '/testimonials', permanent: true },
      { source: '/work/:slug', destination: '/testimonials', permanent: true },
    ];
  },
};

export default nextConfig;
