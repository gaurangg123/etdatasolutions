'use client';
import Reveal from '@/components/ui/Reveal';
import DataNetwork from '@/components/ui/DataNetwork';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.left}>
            <Reveal>
              <div className={styles.meta}>
                <span className={styles.metaDot} />
                Accepting new clients · 7-day first delivery
              </div>
            </Reveal>

            <Reveal delay={80}>
              <h1 className={styles.display}>
                The work that <em>slows you down</em><br />
                doesn&rsquo;t have to.
              </h1>
            </Reveal>

            <Reveal delay={160}>
              <p className={styles.lede}>
                Staffing, data entry, QA testing, and data engineering &mdash;
                handled quietly and accurately so your team stays focused on what matters.
              </p>
            </Reveal>

            <Reveal delay={240}>
              <div className={styles.actions}>
                <a href="#contact" className="btn btn-primary">
                  Book a free consultation
                  <span className="arrow">&rarr;</span>
                </a>
                <a href="#services" className="btn-link">
                  See what we do
                  <span className="arrow">&rarr;</span>
                </a>
              </div>
            </Reveal>

            <Reveal delay={320}>
              <div className={styles.footnote}>
                <div className={styles.fnItem}>
                  <span className={styles.fnNum}>10+</span>
                  <span className={styles.fnLbl}>Years</span>
                </div>
                <div className={styles.fnItem}>
                  <span className={styles.fnNum}>100+</span>
                  <span className={styles.fnLbl}>Clients</span>
                </div>
                <div className={styles.fnItem}>
                  <span className={styles.fnNum}>99%</span>
                  <span className={styles.fnLbl}>Accuracy</span>
                </div>
              </div>
            </Reveal>
          </div>

          <div className={styles.right}>
            <Reveal delay={200}>
              <DataNetwork />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
