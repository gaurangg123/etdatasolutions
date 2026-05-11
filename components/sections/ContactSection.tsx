import Reveal from '@/components/ui/Reveal';
import Image from 'next/image';
import ContactForm from '@/components/ui/ContactForm';
import styles from './ContactSection.module.css';

const nextSteps = [
  'We read your message the same day',
  'Bobby sends a personalised reply within 24 hrs',
  'We schedule a 30-min discovery call',
  'First deliverable in under 7 days',
];

const avatars = [
  'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=60&h=60&fit=crop&q=80',
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&q=80',
  'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop&q=80',
  'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&q=80',
];

function Stars() {
  return (
    <div className={styles.stars}>
      {[...Array(5)].map((_,i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 16 16" fill="#FBBF24">
          <path d="M8 1.5l1.8 3.7 4.1.6-3 2.9.7 4.1L8 10.7l-3.6 1.9.7-4.1-3-2.9 4.1-.6z"/>
        </svg>
      ))}
      <span className={styles.starsLabel}>4.9 out of 5</span>
    </div>
  );
}

export default function ContactSection() {
  return (
    <section className="section section-alt" id="contact">
      <div className="container">

        {/* Pre-form CTA moment (#8) */}
        <Reveal>
          <div className={styles.ctaMoment}>
            <div className={styles.ctaAvatars}>
              {avatars.map((src, i) => (
                <Image key={i} src={src} alt="Client" className={styles.ctaAvatar} width={44} height={44} style={{ zIndex: avatars.length - i, objectFit:"cover" }} />
              ))}
            </div>
            <div className={styles.ctaMeta}>
              <Stars />
              <p className={styles.ctaQuote}>
                <em>"Most clients get a reply within 3 hours."</em>
              </p>
              <span className={styles.ctaSub}>Trusted by 100+ companies across US, UK, Canada & AU</span>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.07}>
          <div className={styles.card}>
            <div className={styles.formSide}>
              <div className={styles.formHeader}>
                <div className="eyebrow">Contact</div>
                <h2>Let&apos;s see if we&apos;re <em>a fit.</em></h2>
                <p>30-minute call, no deck, no pitch — or fill in the form and we&apos;ll reply within 24 hours.</p>
              </div>
              <ContactForm />
            </div>

            <div className={styles.metaSide}>
              <div className={styles.metaImg}>
                <Image src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&h=240&fit=crop&q=80" alt="Team" width={600} height={240} style={{objectFit:"cover",width:"100%",height:"100%"}} priority />
                <div className={styles.metaImgOverlay} />
              </div>
              <div className={styles.metaContent}>
                <div className={styles.contactInfo}>
                  <h3>Get in touch directly</h3>
                  <div className={styles.infoList}>
                    {[
                      { icon: '✉', label: 'bobby@etdatasolutions.com', href: 'mailto:bobby@etdatasolutions.com' },
                      { icon: '📞', label: '+1-302-357-9776 (US)', href: 'tel:+13023579776' },
                      { icon: '📞', label: '+91 62653 48189 (India)', href: 'tel:+916265348189' },
                      { icon: '📍', label: 'Indore, India · Serving globally', href: undefined },
                    ].map((item) => (
                      item.href
                        ? <a key={item.label} href={item.href} className={styles.infoItem}><span className={styles.infoIcon}>{item.icon}</span>{item.label}</a>
                        : <div key={item.label} className={styles.infoItem}><span className={styles.infoIcon}>{item.icon}</span>{item.label}</div>
                    ))}
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
          </div>
        </Reveal>
      </div>
    </section>
  );
}
