import { MetadataRoute } from 'next'

const BASE = 'https://etdatasolutions.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  return [
    { url: BASE,                    lastModified: now, changeFrequency: 'monthly',  priority: 1.0  },
    { url: `${BASE}/about`,         lastModified: now, changeFrequency: 'monthly',  priority: 0.8  },
    { url: `${BASE}/services`,      lastModified: now, changeFrequency: 'monthly',  priority: 0.9  },
    { url: `${BASE}/services#staffing`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/services#data`,     lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/services#qa`,       lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/services#dataeng`,  lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/contact`,       lastModified: now, changeFrequency: 'yearly',   priority: 0.8  },
  ]
}
