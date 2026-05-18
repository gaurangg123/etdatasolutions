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
  review: string;
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
  {
    name: 'Paresh',
    service: 'Recruitment / Virtual Assistant',
    duration: '3+ years',
    review: 'Reliable, sharp, and always one step ahead on the work I throw at the team.',
  },
  {
    name: 'Stacy',
    service: 'Recruitment / Virtual Assistant',
    duration: '4+ years',
    review: 'Seamlessly integrated into our processes — feels like part of the in-house team.',
  },
  {
    name: 'Chandan',
    service: 'Recruitment / Virtual Assistant',
    duration: '4+ years',
    review: 'Quick to respond, clear communication, and consistently strong output.',
  },
  {
    name: 'Akshay',
    service: 'Dashboard & N8N Sales Engine',
    duration: '1+ year',
    review: 'Built our automation stack end-to-end. Fast, thoughtful, and highly capable.',
  },
  {
    name: 'Percy',
    service: 'UI/UX Testing',
    duration: '2+ years',
    review: 'Catches issues our engineers miss. Methodical and reliable on every release.',
  },
  {
    name: 'Eusden',
    service: 'Data Entry on Oracle Suite (E-Commerce)',
    duration: '5+ years',
    review: 'Five years of clean, accurate work on a system that does not forgive mistakes.',
  },
];

/** Case-highlight metric cards — one per core service */
export const caseHighlights = [
  {
    metric: '7+ yrs',
    sub: 'longest active partnership',
    title: 'Recruitment',
    desc: 'Long-running contractor placements across the US, Europe, and Australia — reliable, collaborative, on fixed-price engagements.',
  },
  {
    metric: '5+ yrs',
    sub: 'avg VA tenure',
    title: 'Virtual Assistant',
    desc: 'Dedicated VAs embedded in client workflows — quick responders, eager learners, clear communicators across roles and domains.',
  },
  {
    metric: '99%',
    sub: 'accuracy guaranteed',
    title: 'Data Entry',
    desc: 'High-volume, two-pass-QC data work — including Oracle Suite e-commerce engagements running 5+ years.',
  },
  {
    metric: '2+ yrs',
    sub: 'continuous QA coverage',
    title: 'UI / UX Testing',
    desc: 'Structured manual QA — test plans, cross-browser regression, release sign-off — embedded in client release cycles.',
  },
];
