import { MetadataRoute } from 'next'

const BASE = 'https://etdatasolutions.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  return [
    { url: BASE,                       lastModified: now, changeFrequency: 'monthly', priority: 1.0 },
    { url: `${BASE}/about`,            lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/services`,         lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/testimonials`,     lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/contact`,          lastModified: now, changeFrequency: 'yearly',  priority: 0.8 },
    { url: `${BASE}/about#results`,    lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/about#process`,    lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/services#staffing`,lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/services#data-entry`,lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/services#qa-testing`,lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/services#data-engineering`,lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
  ]
}
