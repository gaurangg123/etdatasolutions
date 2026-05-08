import Reveal from '@/components/ui/Reveal';
import styles from './Testimonials.module.css';

export default function Testimonials() {
  return (
    <section className="section" id="testimonials">
      <div className="container">
        <div className={styles.header}>
          <Reveal><div className="eyebrow">Testimonials</div></Reveal>
          <Reveal delay={0.07}><h2>What clients <em>actually say.</em></h2></Reveal>
        </div>

        <div className={styles.grid}>
          {/* Featured */}
          <Reveal className={styles.featWrap}>
            <div className={styles.featured}>
              <span className={styles.bigQuote}>&ldquo;</span>
              <blockquote className={styles.featQuote}>
                "They became part of how our company operates. We stopped thinking of them as a
                vendor about three months in — they just know the work better than we do at this point."
              </blockquote>
              <div className={styles.attr}>
                <span className={styles.attrName}>Sarah Marshall</span>
                <span className={styles.attrRole}>VP Operations · Logistics SaaS, UK</span>
              </div>
            </div>
          </Reveal>

          {/* Mini cards */}
          <div className={styles.miniStack}>
            <Reveal delay={0.07}>
              <div className={styles.mini}>
                <p className={styles.miniQuote}>
                  "99% accuracy isn't marketing — we audited a quarter's output and found three
                  errors in 14,000 records."
                </p>
                <div className={styles.miniAttr}>
                  <div className={`${styles.avatar} ${styles.avatarTeal}`}>DR</div>
                  <div>
                    <div className={styles.miniName}>Daniel Rao</div>
                    <div className={styles.miniRole}>CTO · Healthtech, US</div>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.14}>
              <div className={styles.mini}>
                <p className={styles.miniQuote}>
                  "Faster than hiring locally, half the cost, and the QA team flagged issues our
                  devs had missed for months."
                </p>
                <div className={styles.miniAttr}>
                  <div className={`${styles.avatar} ${styles.avatarOrange}`}>EN</div>
                  <div>
                    <div className={styles.miniName}>Emma Nordstrom</div>
                    <div className={styles.miniRole}>Head of Product · Fintech, AU</div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
