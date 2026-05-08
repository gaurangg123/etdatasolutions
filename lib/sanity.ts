// Phase 2 — Sanity CMS
// npm install @sanity/client next-sanity
// Then set env vars: NEXT_PUBLIC_SANITY_PROJECT_ID, NEXT_PUBLIC_SANITY_DATASET, SANITY_API_TOKEN

export const sanityConfig = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? '',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? 'production',
  apiVersion: '2024-01-01',
  useCdn: true,
};

// Uncomment when @sanity/client is installed:
// import { createClient } from '@sanity/client';
// export const sanityClient = createClient({ ...sanityConfig, token: process.env.SANITY_API_TOKEN });
