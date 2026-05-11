import Image from 'next/image';
import Link from 'next/link';
import Reveal from '@/components/ui/Reveal';
import styles from './About.module.css';

const steps = [
  { num:'01', title:'Brief',  body:"You share what's slowing you down. A 30-minute call is enough." },
  { num:'02', title:'Match',  body:'We assemble a small team — usually 2–4 people — vetted for your stack.' },
  { num:'03', title:'Pilot',  body:'First deliverable inside 7 days. You approve before we scale.' },
  { num:'04', title:'Run',    body:'Steady weekly cadence with a single point of contact in your timezone.' },
];

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <div className={styles.splitGrid}>
          <div className={styles.splitText}>
            <Reveal><div className="eyebrow">About</div></Reveal>
            <Reveal delay={0.07}><h2>Quietly excellent work, <em>delivered on time.</em></h2></Reveal>
            <Reveal delay={0.14}><p>Since 2014, we&apos;ve built a team in Indore, India that operates as a calm extension of yours — no scope drift, no surprise invoices, no chase-ups.</p></Reveal>
            <Reveal delay={0.21}><p>We serve clients in the US, UK, Canada, and Australia — working in your timezone, in your tools, at your pace.</p></Reveal>
            <Reveal delay={0.28}>
              <div className={styles.badges}>
                {['🇺🇸 United States','🇬🇧 United Kingdom','🇨🇦 Canada','🇦🇺 Australia'].map(b=>(
                  <span key={b} className={styles.badge}>{b}</span>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.35}><Link href="/about" className={styles.learnMore}>Learn our story →</Link></Reveal>
          </div>

          <Reveal delay={0.14} className={styles.splitImageWrap}>
            <div className={styles.imageStack}>
              <div className={styles.imgMain}>
                <Image src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=420&fit=crop&q=82"
                  alt="Team collaborating at computers" width={600} height={420}
                  style={{ width:'100%', height:'100%', objectFit:'cover' }} loading="lazy" />
              </div>
              <div className={styles.imgAccent}>
                <Image src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=280&h=180&fit=crop&q=80"
                  alt="Office team working" width={280} height={180}
                  style={{ width:'100%', height:'100%', objectFit:'cover' }} loading="lazy" />
              </div>
              <div className={styles.imgBadge}>
                <div className={styles.badgeNum}>2014</div>
                <div className={styles.badgeText}>Founded in<br/>Indore, India</div>
              </div>
            </div>
          </Reveal>
        </div>

        <div className={styles.processHeader}>
          <Reveal><div className="eyebrow">How it works</div></Reveal>
          <Reveal delay={0.07}><h2>From brief to <em>running in days.</em></h2></Reveal>
        </div>
        <div className={styles.grid}>
          {steps.map((s,i) => (
            <Reveal key={s.num} delay={i * 0.07} scale>
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
