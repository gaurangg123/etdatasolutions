// ══════════════════════════════════════════════════════════
// Content data: services + case studies
// ══════════════════════════════════════════════════════════

export interface Service {
  slug: string;
  num: string;
  title: string;
  tagline: string;
  blurb: string;
  capabilities: string[];
  process: { step: string; desc: string }[];
  deliverables: string[];
  pricing: string;
}

export const services: Service[] = [
  {
    slug: 'staffing',
    num: '01',
    title: 'Staffing & Virtual Assistants',
    tagline: 'Vetted specialists embedded in your workflows.',
    blurb:
      'A team that works your hours, in your tools, with your standards. We staff for the long tail of operational work that slows internal teams down — account management, executive support, customer ops, research.',
    capabilities: [
      'Account & customer management',
      'Executive & administrative support',
      'Operations & vendor coordination',
      'Research & lead enrichment',
      'Calendar, inbox, and travel handling',
    ],
    process: [
      { step: 'Scoping call',  desc: '30 minutes. We map the workflows, tools, and outcomes you need.' },
      { step: 'Shortlist',     desc: 'Within 48 hours we send 2–3 vetted candidates with relevant experience.' },
      { step: 'Pilot',         desc: 'Two-week paid trial with a clear scope and success metrics.' },
      { step: 'Embed',         desc: 'Monthly retainer begins. Single point of contact, weekly reporting.' },
    ],
    deliverables: [
      'Daily and weekly status reports',
      'Workflow documentation as we go',
      'Tool-by-tool handoff notes',
    ],
    pricing: 'From $1,800 per FTE/month. Part-time engagements from $900.',
  },
  {
    slug: 'data-entry',
    num: '02',
    title: 'Data Entry & Processing',
    tagline: 'Two-pass quality control. 99% accuracy guaranteed.',
    blurb:
      'High-volume, high-accuracy data work — handled with the same care your team would, at a fraction of the cost. Invoice processing, catalog management, records digitization, form-to-database pipelines.',
    capabilities: [
      'Invoice and AP processing',
      'Catalog & SKU management',
      'CRM data entry & cleanup',
      'Records digitization (paper-to-digital)',
      'Form processing & data extraction',
    ],
    process: [
      { step: 'Sample & scope', desc: 'You send a representative sample. We benchmark accuracy and turnaround.' },
      { step: 'SOP build',      desc: 'We document every edge case as a written SOP you can audit.' },
      { step: 'Pilot batch',    desc: 'First 100–500 records processed with full QC trail.' },
      { step: 'Scale',          desc: 'Volume scales with two-week notice. Quality metrics reported weekly.' },
    ],
    deliverables: [
      'Two-pass QC on every batch',
      'Weekly accuracy and volume reports',
      'Documented SOPs you keep',
    ],
    pricing: 'Volume-priced. Most engagements $0.10–$0.50 per record.',
  },
  {
    slug: 'qa-testing',
    num: '03',
    title: 'Manual QA Testing',
    tagline: 'Zero P1 bugs on launch. Every sprint.',
    blurb:
      'Structured manual testing for teams shipping fast. Test plan design, cross-browser regression, mobile coverage, release sign-off — so your engineers stop catching their own bugs in production.',
    capabilities: [
      'Test plan & test case design',
      'Cross-browser regression suites',
      'Mobile (iOS/Android) testing',
      'Smoke testing for daily releases',
      'Release sign-off & UAT coordination',
    ],
    process: [
      { step: 'App walkthrough', desc: 'We learn your product, user flows, and current QA gaps.' },
      { step: 'Test plan',       desc: 'Documented coverage plan: critical paths, edge cases, browser matrix.' },
      { step: 'First sprint',    desc: 'One full release cycle. Bug reports, severity grading, sign-off.' },
      { step: 'Ongoing',         desc: 'Continuous coverage. Reports per release with metrics and trends.' },
    ],
    deliverables: [
      'Documented test plan you own',
      'Bug reports with reproduction steps',
      'Release sign-off reports',
    ],
    pricing: 'From $2,400/month for a dedicated QA. Sprint-based pricing available.',
  },
  {
    slug: 'data-engineering',
    num: '04',
    title: 'Data Engineering',
    tagline: 'Surface revenue that\u2019s already yours.',
    blurb:
      'ETL pipelines, data warehouses, and BI dashboards built for teams that have data but no time to wire it together. We connect your systems, reconcile your numbers, and build dashboards your CFO will actually use.',
    capabilities: [
      'ETL & ELT pipeline development',
      'Data warehouse design (BigQuery, Snowflake, Redshift)',
      'BI dashboards (Metabase, Looker, Tableau)',
      'Reconciliation & audit pipelines',
      'API integrations & data sync',
    ],
    process: [
      { step: 'Data audit',  desc: 'We inventory your sources, owners, and current pain points.' },
      { step: 'Architecture', desc: 'We propose a pipeline + warehouse setup with cost estimates.' },
      { step: 'Build',       desc: 'Sprints of 2–4 weeks. Documented, tested, with monitoring.' },
      { step: 'Handover',    desc: 'Full documentation. We can maintain or hand off to your team.' },
    ],
    deliverables: [
      'Production-grade pipelines with monitoring',
      'Documented architecture and runbooks',
      'Dashboards your team will use',
    ],
    pricing: 'Project-based. Typical pipeline build: $8K–$25K. Retainers from $4K/month.',
  },
];

// ══════════════════════════════════════════════════════════
// Case studies
// ══════════════════════════════════════════════════════════

export interface CaseStudy {
  slug: string;
  num: string;
  client: string;
  region: string;
  service: string;
  serviceSlug: string;
  metric: { val: string; sub: string };
  problem: string;
  outcome: string;
  context: string;
  approach: string[];
  quote: string;
  attribution: string;
  timeline: string;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'logistics-invoice-processing',
    num: '01',
    client: 'Logistics Co.',
    region: 'United States',
    service: 'Data Entry',
    serviceSlug: 'data-entry',
    metric: { val: '$40K', sub: 'saved annually' },
    problem: 'Invoice processing took 14 days end-to-end, blocking cash flow.',
    outcome: 'Reduced to 3 days. Zero errors in a 6-month audit across 4,800 invoices.',
    context:
      'A mid-market freight forwarder was processing customer invoices through a manual 3-step workflow: paper intake, ERP entry, and approval routing. Average turnaround was 14 days. The CFO estimated $40K/year in late-payment penalties and DSO impact.',
    approach: [
      'Digitised paper intake with a structured upload portal',
      'Two-pass QC with line-level validation against the rate card',
      'Automated approval routing based on amount and customer tier',
      'Weekly accuracy report sent to the finance lead',
    ],
    quote:
      'They fixed a workflow we\u2019d been losing money on for years \u2014 quietly, without making it a big deal.',
    attribution: 'COO, Logistics Co.',
    timeline: '6 weeks to pilot, 12 weeks to full rollout',
  },
  {
    slug: 'saas-qa-coverage',
    num: '02',
    client: 'A SaaS Platform',
    region: 'United Kingdom',
    service: 'Manual QA',
    serviceSlug: 'qa-testing',
    metric: { val: '0', sub: 'P1 bugs on launch' },
    problem: 'Weekly shipping with no structured QA. P1 bugs reaching production.',
    outcome: 'Zero critical bugs across 4 consecutive releases. 23 medium bugs caught pre-release.',
    context:
      'A B2B SaaS team of 18 engineers was shipping weekly with no formal QA function. Engineers tested their own code. P1 incidents in production averaged 1.5 per month. The VP of Engineering wanted coverage without hiring full-time.',
    approach: [
      'Mapped 340+ user flows across 6 product surfaces',
      'Built a regression test plan with priority tiers',
      'Cross-browser matrix: Chrome, Safari, Firefox, Edge + mobile Safari',
      'Daily smoke tests on staging; full regression on every release candidate',
    ],
    quote:
      'Our release confidence went from anxious to boring \u2014 in the best possible way.',
    attribution: 'Head of Engineering',
    timeline: '2 weeks to first sprint, full coverage by week 4',
  },
  {
    slug: 'healthtech-billing-reconciliation',
    num: '03',
    client: 'Healthtech Co.',
    region: 'Australia',
    service: 'Data Engineering',
    serviceSlug: 'data-engineering',
    metric: { val: '$2.3M', sub: 'in unbilled services surfaced' },
    problem: 'Billing data spread across 3 disconnected systems with no reconciliation.',
    outcome: 'ETL pipeline surfaced $2.3M in unbilled services within the first 30 days.',
    context:
      'A telehealth platform had practitioner scheduling, payments, and clinical billing in 3 different systems. Reconciliation happened manually in spreadsheets, quarterly. The CFO suspected meaningful leakage but had no way to prove it.',
    approach: [
      'Connected the 3 source systems via API + scheduled exports',
      'Built a unified billing event model in a warehouse',
      'Nightly reconciliation job with email alerts for mismatches',
      'Dashboard showing unbilled services by practitioner and service type',
    ],
    quote:
      'They built in 5 weeks what our internal team had been scoping for 18 months.',
    attribution: 'CFO, Healthtech Co.',
    timeline: '5 weeks to production',
  },
];
