// ═══════════════════════════════════════════════════════════════
//  TESTIMONIALS — Edit this file to update all testimonials
// ═══════════════════════════════════════════════════════════════

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company?: string;
  photo: string;
  rating: number;
}

export const featured: Testimonial = {
  quote:
    'They became part of how our company operates. We stopped thinking of them as a vendor about three months in — they just know the work better than we do at this point.',
  name: 'Sarah Marshall',
  role: 'VP Operations',
  company: 'Logistics SaaS, UK',
  photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=160&h=160&fit=crop&q=80',
  rating: 5,
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "99% accuracy isn't marketing — we audited a quarter's output and found three errors in 14,000 records.",
    name: 'Daniel Rao',
    role: 'CTO',
    company: 'Healthtech, US',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=160&h=160&fit=crop&q=80',
    rating: 5,
  },
  {
    quote:
      'Faster than hiring locally, half the cost, and the QA team flagged issues our devs had missed for months.',
    name: 'Emma Nordstrom',
    role: 'Head of Product',
    company: 'Fintech, AU',
    photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=160&h=160&fit=crop&q=80',
    rating: 5,
  },
  {
    quote: 'The invoice processing alone paid for the entire engagement within six weeks.',
    name: 'Michael Reeves',
    role: 'CFO',
    company: 'Apex Freight, US',
    photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=160&h=160&fit=crop&q=80',
    rating: 5,
  },
  {
    quote:
      'Our release confidence went from anxious to boring — in the best possible way. Zero P1 bugs in four straight launches.',
    name: 'Priya Anand',
    role: 'Head of Engineering',
    company: 'B2B SaaS, UK',
    photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=160&h=160&fit=crop&q=80',
    rating: 5,
  },
  {
    quote:
      'They built in five weeks what our internal team had been scoping for eighteen months. Surfaced $2.3M in unbilled services in the first month.',
    name: 'James Whitaker',
    role: 'CFO',
    company: 'Healthtech, AU',
    photo: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=160&h=160&fit=crop&q=80',
    rating: 5,
  },
  {
    quote:
      'Onboarding was painless. By week two, our VA was answering customer emails better than I do.',
    name: 'Olivia Chen',
    role: 'Founder',
    company: 'D2C Beauty, US',
    photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=160&h=160&fit=crop&q=80',
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
