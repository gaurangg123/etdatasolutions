/** @type {import('next').NextConfig} */
const nextConfig = {
  // Security — never advertise the server
  poweredByHeader: false,

  // Increase static page generation timeout (default is 60s, too short for Vercel cold builds)
  staticPageGenerationTimeout: 120,

  // Performance
  compress: true,
  reactStrictMode: true,
  experimental: {
    optimizePackageImports: ['framer-motion', 'lucide-react', 'nodemailer'],
  },

  // Images
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    minimumCacheTTL: 60,
  },

  async headers() {
    /** Build a CSP that allows:
     *  - self for all resources
     *  - Google Fonts (if ever re-added)
     *  - No inline scripts (except the theme snippet injected via dangerouslySetInnerHTML
     *    which Next.js renders as a script tag — covered by 'unsafe-inline' for now;
     *    replace with nonces once next/headers nonce support stabilises in 14.x)
     */
    const csp = [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline'",      // tighten with nonce in Next 15
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "font-src 'self' https://fonts.gstatic.com data:",
      "img-src 'self' data: blob:",
      "media-src 'self'",
      "connect-src 'self'",
      "frame-ancestors 'none'",
      "base-uri 'self'",
      "form-action 'self'",
      "upgrade-insecure-requests",
    ].join('; ')

    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'Content-Security-Policy',   value: csp              },
          { key: 'X-DNS-Prefetch-Control',    value: 'on'             },
          { key: 'X-Frame-Options',           value: 'DENY'           },
          { key: 'X-Content-Type-Options',    value: 'nosniff'        },
          { key: 'Referrer-Policy',           value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy',        value: 'camera=(), microphone=(), geolocation=()' },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload', // 2 years
          },
        ],
      },
      {
        // API routes must never be cached anywhere
        source: '/api/(.*)',
        headers: [
          { key: 'Cache-Control', value: 'no-store, max-age=0' },
        ],
      },
      {
        // Static assets — aggressive cache
        source: '/_next/static/(.*)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      {
        // Public assets (logos, videos, icons)
        source: '/(favicon.ico|.*\\.(?:jpg|jpeg|png|svg|mp4|webp|avif|ico|woff2?))',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=86400, stale-while-revalidate=604800' },
        ],
      },
    ]
  },
}

module.exports = nextConfig
