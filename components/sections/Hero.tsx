'use client';
import Reveal from '@/components/ui/Reveal';
import styles from './Hero.module.css';

const features = [
  {
    icon: '👥',
    title: 'Staffing & Virtual Assistants',
    desc: 'Vetted specialists embedded in your workflows',
  },
  {
    icon: '📊',
    title: 'Data Entry & Processing',
    desc: '99% accuracy — 50 to 50,000 records/month',
  },
  {
    icon: '🧪',
    title: 'Manual QA Testing',
    desc: 'Zero P1 bugs. Every sprint, guaranteed.',
  },
  {
    icon: '⚙️',
    title: 'Data Engineering',
    desc: 'ETL pipelines, BI dashboards, warehouses',
  },
];

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.grid}>
          {/* ── Left copy ── */}
          <div className={styles.left}>
            <Reveal>
              <div className={styles.badge}>
                <span className={styles.badgeDot} />
                <span className={styles.badgePill}>Live</span>
                Accepting new clients · 7-day first delivery
              </div>
            </Reveal>

            <Reveal delay={80}>
              <h1 className={styles.display}>
                Operational work,{' '}
                <span className={styles.displayAccent}>handled&nbsp;right.</span>
              </h1>
            </Reveal>

            <Reveal delay={160}>
              <p className={styles.lede}>
                Staffing, data entry, QA testing, and data engineering — delivered
                quietly and accurately from Indore, India. So your team stays focused
                on what actually matters.
              </p>
            </Reveal>

            <Reveal delay={220}>
              <div className={styles.actions}>
                <a href="#contact" className="btn btn-primary btn-lg">
                  Book a free consultation
                  <span>&rarr;</span>
                </a>
                <a href="#services" className="btn btn-secondary btn-lg">
                  See our services
                </a>
              </div>
            </Reveal>

            <Reveal delay={300}>
              <div className={styles.stats}>
                <div className={styles.stat}>
                  <span className={styles.statNum}>10+</span>
                  <span className={styles.statLbl}>Years in<br />operation</span>
                </div>
                <div className={styles.stat}>
                  <span className={styles.statNum}>100+</span>
                  <span className={styles.statLbl}>Global<br />clients</span>
                </div>
                <div className={styles.stat}>
                  <span className={styles.statNum}>99%</span>
                  <span className={styles.statLbl}>Data<br />accuracy</span>
                </div>
                <div className={styles.stat}>
                  <span className={styles.statNum}>7d</span>
                  <span className={styles.statLbl}>First<br />delivery</span>
                </div>
              </div>
            </Reveal>
          </div>

          {/* ── Right visual ── */}
          <div className={styles.right}>
            <div className={styles.visualStack}>
              {features.map((f, i) => (
                <Reveal key={f.title} delay={200 + i * 70}>
                  <div className={styles.featureCard}>
                    <div className={styles.featureIcon}>{f.icon}</div>
                    <div className={styles.featureBody}>
                      <span className={styles.featureTitle}>{f.title}</span>
                      <span className={styles.featureDesc}>{f.desc}</span>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
