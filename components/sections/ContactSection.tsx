import Link from 'next/link';
import Reveal from '@/components/ui/Reveal';
import styles from './ContactSection.module.css';

export default function ContactSection() {
  return (
    <section className="section section-alt" id="contact">
      <div className="container">
        <div className={styles.inner}>
          <Reveal>
            <div className={styles.textSide}>
              <div className="eyebrow">Get Started</div>
              <h2>Ready to <em>hand it off?</em></h2>
              <p>30-minute call. No deck, no pitch. Bobby replies within 3 hours.</p>
              <div className={styles.ctaGroup}>
                <Link href="/contact" className="btn-primary">
                  Book a Free Consultation
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </Link>
                <Link href="/services" className="btn-secondary">View Services</Link>
              </div>
              <div className={styles.directLinks}>
                <a href={`mailto:${'bobby'}@${'etdatasolutions.com'}`} className={styles.directLink}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                  bobby@etdatasolutions.com
                </a>
                <a href="tel:+13023579776" className={styles.directLink}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.56 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  +1-302-357-9776 (US)
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className={styles.cardSide}>
              <div className={styles.guarantee}>
                <div className={styles.guaranteeIcon}>🛡️</div>
                <div>
                  <h4>30-day money-back guarantee</h4>
                  <p>First month doesn't meet the agreed standard? Full refund. No questions.</p>
                </div>
              </div>
              <div className={styles.steps}>
                {['We read your message today','Bobby replies within 3 hours','30-min discovery call','First deliverable in 7 days'].map((s,i)=>(
                  <div key={i} className={styles.step}>
                    <span className={styles.stepNum}>{i+1}</span>
                    <span className={styles.stepText}>{s}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
