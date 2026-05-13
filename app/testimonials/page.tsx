import type { Metadata } from 'next';
import Reveal from '@/components/ui/Reveal';
import styles from './page.module.css';
export const metadata: Metadata = { title: 'Testimonials' };

const featuredTestimonial = {
  quote: "They became part of how our company operates. We stopped thinking of them as a vendor about three months in — they just know the work better than we do at this point.",
  name: 'Sarah Marshall', role: 'VP Operations', company: 'Logistics SaaS, UK',
  initials: 'SM', color: 'orange',
};

const testimonials = [
  { quote: "99% accuracy isn't marketing — we audited a quarter's output and found three errors in 14,000 records.", name: 'Daniel Rao',      role: 'CTO · Healthtech, US',       initials: 'DR', color: 'blue'   },
  { quote: "Faster than hiring locally, half the cost, and the QA team flagged issues our devs had missed for months.", name: 'Emma Nordstrom', role: 'Head of Product · Fintech, AU',initials: 'EN', color: 'teal'   },
  { quote: "The invoice processing alone paid for the entire engagement within six weeks. I wish we'd done this two years ago.", name: 'Michael Reeves', role: 'CFO · Apex Freight, US',  initials: 'MR', color: 'orange' },
  { quote: "We handed them a vague brief and they came back with a clean, tested pipeline in ten days. The pipeline has run without incident since.", name: 'Lena Fischer',  role: 'CTO · Flowdesk, DE',          initials: 'LF', color: 'blue'   },
  { quote: "Our offshore QA team previously missed production issues weekly. Since bringing in ET Data Solutions, we've had four clean releases in a row.", name: 'James Okafor',  role: 'Founder · ScaleOps, UK',      initials: 'JO', color: 'teal'   },
  { quote: "Data quality was our biggest operational bottleneck. It's now our strongest asset. The team cleaned 3 years of records in under a month.", name: 'Priya Nair',    role: 'VP Operations · MediGroup, AU',initials: 'PN', color: 'orange' },
];

const Stars = () => (
  <div className={styles.stars}>
    {[...Array(5)].map((_,i)=>(
      <svg key={i} width="14" height="14" viewBox="0 0 16 16" fill="#FBBF24">
        <path d="M8 1.5l1.8 3.7 4.1.6-3 2.9.7 4.1L8 10.7l-3.6 1.9.7-4.1-3-2.9 4.1-.6z"/>
      </svg>
    ))}
  </div>
);

export default function TestimonialsPage() {
  return (
    <main className="nav-clearance">
      <div className="container">
        <div className={styles.header}>
          <div className="eyebrow">Testimonials</div>
          <h1>What clients <em>actually say.</em></h1>
          <p>7 clients across 4 services and 4 countries. Unedited quotes.</p>
        </div>

        {/* Featured testimonial — full width (#10) */}
        <Reveal>
          <div className={styles.featured}>
            <div>
              <Stars />
              <p className={styles.featQuote}>&ldquo;{featuredTestimonial.quote}&rdquo;</p>
              <div className={styles.featAttr}>
                <span className={`${styles.avatar} ${styles[`av-${featuredTestimonial.color}`]}`}>
                  {featuredTestimonial.initials}
                </span>
                <div>
                  <div className={styles.name}>{featuredTestimonial.name}</div>
                  <div className={styles.role}>{featuredTestimonial.role} · {featuredTestimonial.company}</div>
                </div>
              </div>
            </div>
            <div className={styles.featRight}>
              <div className={styles.ratingBig}>4.9</div>
              <Stars />
              <div className={styles.ratingLabel}>Average rating<br/>across all clients</div>
            </div>
          </div>
        </Reveal>

        {/* 6 remaining cards — exactly 2 rows of 3, no orphans */}
        <div className={styles.grid}>
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.07}>
              <div className={styles.card}>
                <Stars />
                <p className={styles.quote}>&ldquo;{t.quote}&rdquo;</p>
                <div className={styles.attr}>
                  <span className={`${styles.avatar} ${styles[`av-${t.color}`]}`}>{t.initials}</span>
                  <div>
                    <div className={styles.name}>{t.name}</div>
                    <div className={styles.role}>{t.role}</div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </main>
  );
}
