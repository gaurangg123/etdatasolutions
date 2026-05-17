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
    company: 'A