import Image from 'next/image';
import Reveal from '@/components/ui/Reveal';
import styles from './Testimonials.module.css';

const featuredQ = "They became part of how our company operates. We stopped thinking of them as a vendor about three months in — they just know the work better than we do at this point.";
const minis = [
  { quote: "99% accuracy isn't marketing — we audited a quarter's output and found three errors in 14,000 records.", name: 'Daniel Rao', role: 'CTO · Healthtech, US', photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&q=80' },
  { quote: "Faster than hiring locally, half the cost, and the QA team flagged issues our devs had missed for months.", name: 'Emma Nordstrom', role: 'Head of Product · Fintech, AU', photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&q=80' },
  { quote: "The invoice processing alone paid for the entire engagement within six weeks.", name: 'Michael Reeves', role: 'CFO · Apex Freight, US', photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&q=80' },
];
const Stars = () => (
  <div className={styles.stars}>
    {[...Array(5)].map((_,i) => <svg key={i} width="15" height="15" viewBox="0 0 16 16" fill="#FBBF24"><path d="M8 1.5l1.8 3.7 4.1.6-3 2.9.7 4.1L8 10.7l-3.6 1.9.7-4.1-3-2.9 4.1-.6z"/></svg>)}
  </div>
);

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
          <Reveal className={styles.featWrap} scale>
            <div className={styles.featured}>
              <div className={styles.featTop} />
              <Stars />
              <blockquote className={styles.featQuote}>&ldquo;{featuredQ}&rdquo;</blockquote>
              <div className={styles.featAttr}>
                <Image src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=80&h=80&fit=crop&q=80" alt="Sarah Marshall" className={styles.featPhoto} width={54} height={54} />
                <div><div className={styles.attrName}>Sarah Marshall</div><div className={styles.attrRole}>VP Operations · Logistics SaaS, UK</div></div>
              </div>
              <div className={styles.featImage}>
                <Image src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=500&h=200&fit=crop&q=80" alt="Team" width={500} height={200} style={{objectFit:"cover",width:"100%",height:"100%"}} />
              </div>
            </div>
          </Reveal>
          <div className={styles.miniStack}>
            {minis.map((m, i) => (
              <Reveal key={m.name} delay={i * 0.09} scale>
                <div className={styles.mini}>
                  <Stars />
                  <p className={styles.miniQuote}>&ldquo;{m.quote}&rdquo;</p>
                  <div className={styles.miniAttr}>
                    <Image src={m.photo} alt={m.name} className={styles.miniPhoto} width={38} height={38} />
                    <div><div className={styles.miniName}>{m.name}</div><div className={styles.miniRole}>{m.role}</div></div>
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
