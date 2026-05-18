// ═══════════════════════════════════════════════════════════════
//  TESTIMONIALS  —  edit this file to update reviews
// ───────────────────────────────────────────────────────────────
//  TWO LISTS:
//    • featured[]  → big detailed slider (orange gradient card)
//    • mini[]      → compact grid below (just name + service + duration)
// ═══════════════════════════════════════════════════════════════

export interface FeaturedTestimonial {
  name: string;
  service: string;
  duration: string;
  review: string;
}

export interface MiniTestimonial {
  name: string;
  service: string;
  duration: string;
}

/** Detailed reviews shown in the main orange gradient slider */
export const featured: FeaturedTestimonial[] = [
  {
    name: 'Thomas',
    service: 'Recruitment',
    duration: '7+ years',
    review:
      "Based on how well ET Data Solutions performed on our trial assignment, we are pleased to continue working with them on a longer-term contract. We've sincerely appreciated having ET Data on our contractor team. They took direction well, performed their responsibilities at or above our expectations, and were easy to communicate with. Committed to quality, collaborative, and reliable on fixed-price engagements.",
  },
  {
    name: 'Greg',
    service: 'Virtual Assistant',
    duration: '5+ years',
    review:
      'Responds very quickly and is willing to learn roles and domains beyond their initial expertise. A clear communicator and highly collaborative.',
  },
  {
    name: 'Warren',
    service: 'Data Updation',
    duration: '5+ years',
    review:
      'Great job delivered with excellent accuracy and precision.',
  },
];

/** Compact cards shown in the grid below the slider */
export const mini: MiniTestimonial[] = [
  { name: 'Paresh',  service: 'Recruitment / Virtual Assistant',     duration: '3+ years' },
  { name: 'Stacy',   service: 'Recruitment / Virtual Assistant',     duration: '4+ years' },
  { name: 'Chandan', service: 'Recruitment / Virtual Assistant',     duration: '4+ years' },
  { name: 'Akshay',  service: 'Dashboard & N8N Sales Engine',        duration: '1+ year'  },
  { name: 'Percy',   service: 'UI/UX Testing',                       duration: '2+ years' },
  { name: 'Eusden',  service: 'Data Entry on Oracle Suite (E-Commerce)', duration: '5+ years' },
];

/** Case-highlight metric cards (still used on the testimonials page) */
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
