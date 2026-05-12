import type { Metadata } from 'next';
import Reveal from '@/components/ui/Reveal';
import ContactForm from '@/components/ui/ContactForm';
import styles from './page.module.css';
export const metadata: Metadata = { title: 'Contact' };
const nextSteps = ['We read your message the same day','Bobby sends a personalised reply within 24 hrs','We schedule a 30-min discovery call','First deliverable in under 7 days'];
export default function ContactPage() {
  return (
    <main className="nav-clearance">
      <div className="container">
        <div className={styles.header}>
          <Reveal><div className="eyebrow">Contact</div></Reveal>
          <Reveal delay={0.07}><h1>Let&apos;s see if we&apos;re <em>a fit.</em></h1></Reveal>
          <Reveal delay={0.14}><p>30-minute call, no deck, no pitch — or fill in the form and we&apos;ll reply within 24 hours.</p></Reveal>
        </div>
        <Reveal>
          <div className={styles.card}>
            <div className={styles.formSide}><ContactForm /></div>
            <div className={styles.metaSide}>
              <div className={styles.contactInfo}>
                <h3>Get in touch directly</h3>
                <div className={styles.infoList}>
                  {[
                    { icon:'✉',href:`mailto:${"bobby"}@${"etdatasolutions.com"}`,label:'bobby@etdatasolutions.com'},
                    { icon:'📞',href:'tel:+13023579776',label:'+1-302-357-9776 (US)'},
                    { icon:'📞',href:'tel:+916265348189',label:'+91 62653 48189 (India)'},
                    { icon:'📍',href:undefined,label:'Indore, India · Serving globally'},
                  ].map(item => item.href
                    ? <a key={item.label} href={item.href} className={styles.infoItem}><span className={styles.icon}>{item.icon}</span>{item.label}</a>
                    : <div key={item.label} className={styles.infoItem}><span className={styles.icon}>{item.icon}</span>{item.label}</div>
                  )}
                </div>
              </div>
              <div className={styles.whatNext}>
                <h3>What happens next</h3>
                {nextSteps.map((s,i) => (
                  <div key={i} className={styles.step}>
                    <div className={styles.stepCircle}>{i+1}</div>
                    <p>{s}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </main>
  );
}
