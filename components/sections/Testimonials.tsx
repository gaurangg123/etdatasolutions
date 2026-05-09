import Reveal from '@/components/ui/Reveal';
import styles from './Testimonials.module.css';

const featured = {
  quote: "They became part of how our company operates. We stopped thinking of them as a vendor about three months in — they just know the work better than we do at this point.",
  name: 'Sarah Marshall',
  role: 'VP Operations · Logistics SaaS, UK',
  photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=80&h=80&fit=crop&q=80',
};

const minis = [
  {
    quote: "99% accuracy isn't marketing — we audited a quarter's output and found three errors in 14,000 records.",
    name: 'Daniel Rao', role: 'CTO · Healthtech, US',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&q=80',
    stars: 5,
  },
  {
    quote: "Faster than hiring locally, half the cost, and the QA team flagged issues our devs had missed for months.",
    name: 'Emma Nordstrom', role: 'Head of Product · Fintech, AU',
    photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&q=80',
    stars: 5,
  },
  {
    quote: "The invoice processing work alone paid for the entire engagement within six weeks.",
    name: 'Michael Reeves', role: 'CFO · Apex Freight, US',
    photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&q=80',
    stars: 5,
  },
];

function Stars({ n }: { n: number }) {
  return (
    <div className={styles.stars}>
      {Array.from({ length: n }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 14 14" fill="var(--or)">
          <path d="M7 1l1.8 3.6L13 5.3l-3 2.9.7 4.1L7 10.2l-3.7 2.1.7-4.1-3-2.9 4.2-.7L7 1z"/>
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="section" id="testimonials">
      <div className="container">
        <div className={styles.header}>
          <Reveal><div className="eyebrow">Testimonials</div></Reveal>
          <Reveal delay={0.07}><h2>What clients <em>actually say.</em></h2></Reveal>
          <Reveal delay={0.14}><p>Unedited quotes from clients across 4 countries and 4 services.</p></Reveal>
        </div>

        <div className={styles.layout}>
          {/* Featured */}
          <Reveal className={styles.featWrap}>
            <div className={styles.featured}>
              <div className={styles.featBg} aria-hidden />
              <Stars n={5} />
              <blockquote className={styles.featQuote}>&ldquo;{featured.quote}&rdquo;</blockquote>
              <div className={styles.featAttr}>
                <img src={featured.photo} alt={featured.name} className={styles.featPhoto} />
                <div>
                  <div className={styles.attrName}>{featured.name}</div>
                  <div className={styles.attrRole}>{featured.role}</div>
                </div>
              </div>
              <div className={styles.featImage}>
                <img src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=500&h=200&fit=crop&q=80" alt="Team working" loading="lazy" />
              </div>
            </div>
          </Reveal>

          {/* Mini stack */}
          <div className={styles.miniStack}>
            {minis.map((m, i) => (
              <Reveal key={m.name} delay={i * 0.07}>
                <div className={styles.mini}>
                  <Stars n={m.stars} />
                  <p className={styles.miniQuote}>&ldquo;{m.quote}&rdquo;</p>
                  <div className={styles.miniAttr}>
                    <img src={m.photo} alt={m.name} className={styles.miniPhoto} />
                    <div>
                      <div className={styles.miniName}>{m.name}</div>
                      <div className={styles.miniRole}>{m.role}</div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
