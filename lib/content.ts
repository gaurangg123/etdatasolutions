// ══════════════════════════════════════════════════════════
// Content data: company info, services, values, testimonials
// Edit this single file to update copy across the site.
// ══════════════════════════════════════════════════════════

export const company = {
  name: 'ET Data Solutions',
  tagline: 'Operational excellence, delivered.',
  email: 'bobby@etdatasolutions.com',
  phone: '+91 62653-48189',
  location: 'Indore, Madhya Pradesh, India',
  social: {
    linkedin: 'https://www.linkedin.com/company/etdatasolutions',
    twitter:  'https://twitter.com/etdatasolutions',
  },
};

export const stats = [
  { value: '120+', label: 'Clients served' },
  { value: '500+', label: 'Projects completed' },
  { value: '15+',  label: 'Industries covered' },
  { value: '99%',  label: 'Accuracy guaranteed' },
];

// ── Service offerings ─────────────────────────────────────
export interface Service {
  slug: string;
  num: string;
  title: string;
  short: string;
  tagline: string;
  blurb: string;
  capabilities: string[];
  icon: 'users' | 'headset' | 'database' | 'sparkles';
}

export const services: Service[] = [
  {
    slug: 'staffing',
    num: '01',
    title: 'Recruitment and Staffing Services',
    short: 'Vetted specialists embedded in your workflows.',
    tagline: 'Hire faster. Scale smarter.',
    blurb:
      'End-to-end recruiting and on-demand staffing for roles you need yesterday — from account management to executive support. We source, vet, and embed the right people into your workflows.',
    capabilities: [
      'Permanent and contract placements',
      'Account & customer management',
      'Executive & administrative support',
      'Operations & vendor coordination',
      'Research & lead enrichment',
    ],
    icon: 'users',
  },
  {
    slug: 'virtual-assistants',
    num: '02',
    title: 'Virtual Assistant Services',
    short: 'Your second brain — calendars, inboxes, follow-ups.',
    tagline: 'Buy back your hours.',
    blurb:
      'Dedicated virtual assistants who learn your tools, your tone, and your priorities. Calendar wrangling, inbox triage, travel, follow-ups — handled with the care of an in-house EA at a fraction of the cost.',
    capabilities: [
      'Calendar, inbox, and travel handling',
      'Meeting prep, notes, and follow-ups',
      'CRM hygiene and outreach support',
      'Research, scheduling, and reminders',
      'Personal admin and lifestyle support',
    ],
    icon: 'headset',
  },
  {
    slug: 'data-entry',
    num: '03',
    title: 'Data Entry & Macro Services',
    short: 'Two-pass quality control. 99% accuracy.',
    tagline: 'Clean data, on time, every time.',
    blurb:
      'High-volume, high-accuracy data work — invoices, catalogs, CRM hygiene, records digitization. Two-pass QC on every batch, weekly reporting, documented SOPs you keep forever.',
    capabilities: [
      'Invoice and AP processing',
      'Catalog & SKU management',
      'CRM data entry & cleanup',
      'Records digitization (paper-to-digital)',
      'Form processing & data extraction',
    ],
    icon: 'database',
  },
  {
    slug: 'data-engineering',
    num: '04',
    title: 'Data Engineering & Visualizations',
    short: 'Tailored ops, QA, and data engineering.',
    tagline: 'Whatever the workflow, we build it.',
    blurb:
      'Bespoke engagements for teams with non-standard needs — manual QA squads, ETL pipelines, BI dashboards, reconciliation jobs. We scope it, document it, and ship it.',
    capabilities: [
      'Manual QA & release sign-off',
      'ETL / ELT pipeline development',
      'Data warehouse & BI dashboards',
      'API integrations & data sync',
      'Process design & SOP authoring',
    ],
    icon: 'sparkles',
  },
];

// ── Why choose us ─────────────────────────────────────────
export const whyUs = [
  {
    title: 'Cost efficiency',
    desc: 'Save 40–60% versus local hiring without compromising on quality or oversight.',
    icon: 'wallet',
  },
  {
    title: 'Scalability',
    desc: 'Ramp from 1 to 50 people in weeks. Wind down with no severance overhead.',
    icon: 'chart',
  },
  {
    title: 'Accuracy',
    desc: 'Two-pass QC, documented SOPs, and weekly reporting on every engagement.',
    icon: 'shield',
  },
  {
    title: 'Fast turnaround',
    desc: 'First shortlist in 48 hours. First production output within two weeks.',
    icon: 'bolt',
  },
  {
    title: 'Single point of contact',
    desc: 'A dedicated account lead owns delivery, escalations, and reporting.',
    icon: 'compass',
  },
];

// ── Process steps ─────────────────────────────────────────
export const process = [
  { step: '01', title: 'Consultation', desc: 'A 30-minute call to map your workflows, goals, and constraints.' },
  { step: '02', title: 'Planning',     desc: 'We propose a scope, success metrics, pricing, and timeline.' },
  { step: '03', title: 'Execution',    desc: 'Pilot batch, two-pass QC, weekly status reporting throughout.' },
  { step: '04', title: 'Delivery',     desc: 'Steady-state operations. Continuous improvement and scaling.' },
];

// ── Mission / Vision / Values ─────────────────────────────
export const mission =
  'Help growing businesses move faster by handling the operational work that slows them down — with the care, accuracy, and reliability of an in-house team.';

export const vision =
  'To be the most trusted operational partner for founders, operators, and CFOs across the SaaS, logistics, and healthtech worlds.';

export const values = [
  { title: 'Quality first',      desc: 'Two-pass QC is the floor, not the ceiling.' },
  { title: 'Documentation',      desc: 'Everything we touch becomes an SOP you own.' },
  { title: 'Transparency',       desc: 'Weekly reporting. No surprises. No invoice padding.' },
  { title: 'Long-term thinking', desc: 'We optimise for the third year of the relationship, not the first invoice.' },
];

// ── Company timeline ──────────────────────────────────────
export const timeline = [
  { year: '2018', title: 'Founded in Indore', desc: 'Started with a team of four serving two logistics clients.' },
  { year: '2020', title: 'Scaled to 30+',      desc: 'Added QA, data engineering, and dedicated VA services.' },
  { year: '2022', title: 'Global expansion',   desc: 'Clients across the US, UK, Australia, and the EU.' },
  { year: '2025', title: '120+ active clients', desc: '500+ projects shipped across 15+ industries.' },
];
