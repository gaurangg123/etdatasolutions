import type { Metadata } from 'next';
import Reveal from '@/components/ui/Reveal';
import styles from './page.module.css';

export const metadata: Metadata = { title: 'About' };

const results = [
  { metric: '$40K saved', context: 'annually via invoice processing — reduced 14 days → 3 days' },
  { metric: 'Zero P1 bugs', context: 'on product launch after our QA engagement' },
  { metric: '$2.3M found', context: 'in unbilled services surfaced during data audit' },
];

const values = [
  { word: 'Precision',     desc: 'Multi-level QC on every deliverable. We check our own work.' },
  { word: 'Reliability',   desc: 'Same cadence, every week. No surprise absences, no scope creep.' },
  { word: 'Transparency',  desc: 'Weekly metrics you can audit yourself. No black-box reporting.' },
  { word: 'Speed',         desc: 'First deliverable in 7 days. We don\'t need months to get started.' },
];

const steps = [
  { num: '01', title: 'Brief',  body: 'You share what\'s slowing you down. A 30-minute call is enough to get started — no lengthy discovery phase, no consultancy fees upfront.' },
  { num: '02', title: 'Match',  body: 'We assemble a small team — usually 2–4 people — vetted specifically for your stack, domain, and working hours.' },
  { num: '03', title: 'Pilot',  body: 'First deliverable inside 7 days. You review it, give feedback, and decide whether to proceed before any long-term commitment.' },
  { num: '04', title: 'Run',    body: 'Steady weekly cadence with a single point of contact in your timezone. Weekly reports. Monthly reviews. No surprises.' },
];

export default function AboutPage() {
  return (
    <main className={styles.main}>
      <div className="container">

        {/* Header */}
        <div className={styles.header}>
          <Reveal><div className="eyebrow">About</div></Reveal>
          <Reveal delay={0.07}><h1>Built for clients who need <em>things done right.</em></h1></Reveal>
          <Reveal delay={0.14}>
            <p>
              ET Data Solutions was founded in 2014 by Bobby with a simple belief: the operational
              work that slows growing companies down can be done better, faster, and for less —
              without sacrificing accuracy or reliability. Over a decade later, that belief runs
              through everything we do.
            </p>
            <p style={{ marginTop: '16px' }}>
              We&apos;re based in Indore, India, with a team of specialists across staffing, data,
              QA, and engineering. We work as a calm, invisible extension of your team — not a
              vendor you have to manage, but a function that just runs.
            </p>
          </Reveal>
        </div>

        {/* Results */}
        <section className={styles.sectionBlock}>
          <Reveal><div className="eyebrow">Results</div></Reveal>
          <Reveal delay={0.07}><h2>The numbers clients <em>remember.</em></h2></Reveal>
          <div className={styles.resultsGrid}>
            {results.map((r, i) => (
              <Reveal key={r.metric} delay={i * 0.07}>
                <div className={styles.resultCard}>
                  <div className={`${styles.resultMetric} grad-text`}>{r.metric}</div>
                  <p>{r.context}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Process */}
        <section className={styles.sectionBlock}>
          <Reveal><div className="eyebrow">Process</div></Reveal>
          <Reveal delay={0.07}><h2>How we work, <em>step by step.</em></h2></Reveal>
          <div className={styles.processGrid}>
            {steps.map((s, i) => (
              <Reveal key={s.num} delay={i * 0.07}>
                <div className={styles.processCard}>
                  <div className={`${styles.stepNum} grad-text`}>{s.num}</div>
                  <h3>{s.title}</h3>
                  <p>{s.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Values */}
        <section className={styles.sectionBlock}>
          <Reveal><div className="eyebrow">Values</div></Reveal>
          <Reveal delay={0.07}><h2>What we stand for, <em>every day.</em></h2></Reveal>
          <div className={styles.valuesGrid}>
            {values.map((v, i) => (
              <Reveal key={v.word} delay={i * 0.07}>
                <div className={styles.valueCard}>
                  <h3 className="grad-text">{v.word}</h3>
                  <p>{v.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

      </div>
    </main>
  );
}
