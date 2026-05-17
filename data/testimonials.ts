// ═══════════════════════════════════════════════════════════════
//  TESTIMONIALS  —  edit this file to add/remove/update reviews
// ───────────────────────────────────────────────────────────────
//  Each testimonial is just three required fields:
//    • name    — client name
//    • service — which service they're talking about (free text or one of
//                "Recruitment & Staffing" | "Virtual Assistant" |
//                "Data Entry & Macros" | "Data Engineering & Visualizations")
//    • review  — the quote itself
//
//  Optional fields:
//    • company — short company / industry tag shown under the name
//    • rating  — 1–5 stars (defaults to 5)
//    • featured — set true on ONE entry to highlight it in the hero
// ═══════════════════════════════════════════════════════════════

export interface Testimonial {
  name: string;
  service: string;
  review: string;
  company?: string;
  rating?: number;
  featured?: boolean;
}

export const testimonials: Testimonial[] = [
  {
    featured: true,
    name: 'Sarah Marshall',
    service: 'Virtual Assistant',
    company: 'Logistics SaaS, UK',
    review:
      'They became part of how our company operates. We stopped thinking of them as a vendor about three months in — they just know the work better than we do at this point.',
    rating: 5,
  },
  {
    name: 'Daniel Rao',
    service: 'Data Entry & Macros',
    company: 'Healthtech, US',
    review:
      "99% accuracy isn't marketing — we audited a quarter's output and found three errors in 14,000 records.",
    rating: 5,
  },
  {
    name: 'Emma Nordstrom',
    service: 'Recruitment & Staffing',
    company: 'Fintech, AU',
    review:
      'Faster than hiring locally, half the cost, and the QA team flagged issues our devs had missed for months.',
    rating: 5,
  },
  {
    name: 'Michael Reeves',
    service: 'Data Entry & Macros',
    company: 'Apex Freight, US',
    review: 'The invoice processing alone paid for the entire engagement within six weeks.',
    rating: 5,
  },
  {
    name: 'Priya Anand',
    service: 'Data Engineering & Visualizations',
    company: 'B2B SaaS, UK',
    review:
      'Our release confidence went from anxious to boring — in the best possible way. Zero P1 bugs in four straight launches.',
    rating: 5,
  },
  {
    name: 'James Whitaker',
    service: 'Data Engineering & Visualizations',
    company: 'Healthtech, AU',
    review:
      'They built in five weeks what our internal team had been scoping for eighteen months. Surfaced $2.3M in unbilled services in the first month.',
    rating: 5,
  },
  {
    name: 'Olivia Chen',
    service: 'Virtual Assistant',
    company: 'D2C Beauty, US',
    review:
      'Onboarding was painless. By week two, our VA was answering customer emails better than I do.',
    rating: 5,
  },
];

export const caseHighlights = [
  {
    metric: '$40K',
    sub: 'saved annually',
    title: 'Logistics invoice processing',
    desc: 'Reduced invoice turnaround from 14 days to 3 with zero errors across 4,800 invoices.',
  },
  {
    metric: '0',
    sub: 'P1 bugs on launch',
    title: 'SaaS QA coverage',
    desc: 'Zero critical bugs across 4 consecutive releases. 23 medium issues caught pre-release.',
  },
  {
    metric: '$2.3M',
    sub: 'surfaced in 30 days',
    title: 'Healthtech billing reconciliation',
    desc: 'ETL pipeline unified three billing systems and surfaced unbilled services in week one.',
  },
];
