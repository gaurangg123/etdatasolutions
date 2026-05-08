import Reveal from '@/components/ui/Reveal';
import ContactForm from '@/components/ui/ContactForm';
import styles from './ContactSection.module.css';

const nextSteps = [
  'We read your message the same day',
  'Bobby sends a personalised reply within 24 hrs',
  'We schedule a 30-min discovery call',
  'First deliverable in under 7 days',
];

export default function ContactSection() {
  return (
    <section className="section" id="contact">
      <div className="container">
        <Reveal>
          <div className={styles.card}>
            {/* Left — form */}
            <div className={styles.formSide}>
              <div className={styles.formHeader}>
                <div className="eyebrow">Contact</div>
                <h2>Let&apos;s see if we&apos;re <em>a fit.</em></h2>
                <p>30-minute call, no deck, no pitch — or fill in the form and we&apos;ll reply within 24 hours.</p>
              </div>
              <ContactForm />
            </div>

            {/* Right — meta */}
            <div className={styles.metaSide}>
              <div className={styles.contactInfo}>
                <h3>Get in touch directly</h3>
                <div className={styles.infoList}>
                  <a href="mailto:bobby@etdatasolutions.com" className={styles.infoItem}>
                    <span className={styles.infoIcon}>✉</span>
                    bobby@etdatasolutions.com
                  </a>
                  <a href="tel:+13023579776" className={styles.infoItem}>
                    <span className={styles.infoIcon}>📞</span>
                    +1-302-357-9776 (US)
                  </a>
                  <a href="tel:+916265348189" className={styles.infoItem}>
                    <span className={styles.infoIcon}>📞</span>
                    +91 62653 48189 (India)
                  </a>
                  <div className={styles.infoItem}>
                    <span className={styles.infoIcon}>📍</span>
                    Indore, India · Serving globally
                  </div>
                </div>
              </div>

              <div className={styles.whatNext}>
                <h3>What happens next</h3>
                <div className={styles.steps}>
                  {nextSteps.map((s, i) => (
                    <div key={i} className={styles.step}>
                      <div className={styles.stepCircle}>{i + 1}</div>
                      <p>{s}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
