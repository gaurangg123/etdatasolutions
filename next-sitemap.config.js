/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://etdatasolutions.com',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
      { userAgent: '*', disallow: '/api/' },
    ],
  },
  exclude: ['/api/*'],
};
