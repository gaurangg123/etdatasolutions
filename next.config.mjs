/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
    ],
  },
  async redirects() {
    return [
      { source: '/work', destination: '/testimonials', permanent: true },
      { source: '/work/:slug', destination: '/testimonials', permanent: true },
    ];
  },
};

export default nextConfig;
