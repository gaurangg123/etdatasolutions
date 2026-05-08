import Reveal from '@/components/ui/Reveal';
import styles from './About.module.css';

const steps = [
  { num: '01', title: 'Brief',  body: 'You share what\'s slowing you down. A 30-minute call is enough.' },
  { num: '02', title: 'Match',  body: 'We assemble a small team — usually 2–4 people — vetted for your stack.' },
  { num: '03', title: 'Pilot',  body: 'First deliverable inside 7 days. You approve before we scale.' },
  { num: '04', title: 'Run',    body: 'Steady weekly cadence with a single point of contact in your timezone.' },
];

export default function About() {
  return (
    <section className={`section ${styles.about}`} id="about">
      <div className="container">
        <div className={styles.header}>
          <Reveal><div className="eyebrow">About</div></Reveal>
          <Reveal delay={0.07}>
            <h2>Quietly excellent work, <em>delivered on time.</em></h2>
          </Reveal>
          <Reveal delay={0.14}>
            <p>
              Since 2014, we've built a team in Indore, India that operates as a calm extension of
              yours — no scope drift, no surprise invoices, no chase-ups. Just work that arrives finished.
            </p>
          </Reveal>
        </div>

        <div className={styles.grid}>
          {steps.map((s, i) => (
            <Reveal key={s.num} delay={i * 0.07}>
              <div className={styles.card}>
                <div className={`${styles.stepNum} grad-text`}>{s.num}</div>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
