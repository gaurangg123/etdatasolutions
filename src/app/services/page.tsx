'use client'

import Link from 'next/link'
import { useReveal } from '@/lib/useReveal'
import { services } from '@/lib/services'
import styles from './services.module.css'

const icons: Record<string, React.ReactNode> = {
  staffing: (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
      <circle cx="9" cy="7" r="4"/>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
    </svg>
  ),
  data: (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <ellipse cx="12" cy="6" rx="8" ry="3"/>
      <path d="M4 6v6c0 1.66 3.58 3 8 3s8-1.34 8-3V6"/>
      <path d="M4 12v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6"/>
    </svg>
  ),
  qa: (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <polyline points="9 11 12 14 22 4"/>
      <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
    </svg>
  ),
  dataeng: (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
    </svg>
  ),
}

export default function ServicesPage() {
  useReveal()

  return (
    <>
      {/* ─── PAGE HEADER ───────────────────────── */}
      <section className={styles.pageHeader}>
        <div className={styles.headerBg} aria-hidden />
        <div className="container">
          <span className="eyebrow reveal">Services</span>
          <h1 className={`${styles.headerH1} reveal reveal-delay-1`}>
            Four verticals.<br />
            <span className={styles.hlAccent}>One partner.</span>
          </h1>
          <p className={`${styles.headerSub} reveal reveal-delay-2`}>
            From talent acquisition to data lakehouses, from manual user testing
            to Excel automation — everything your operations need, delivered with precision.
          </p>
        </div>
      </section>

      <div className="divider" />

      {/* ─── EACH SERVICE ─────────────────────── */}
      {services.map((svc, idx) => (
        <div key={svc.id}>
          <section
            id={svc.id}
            className={`section ${idx % 2 === 1 ? styles.altBg : ''}`}
          >
            <div className="container">
              <div className={`${styles.svcLayout} ${idx % 2 === 1 ? styles.svcLayoutReverse : ''}`}>

                {/* Text side */}
                <div className={styles.svcText}>
                  <span className={`${styles.svcNumBadge} reveal`}>{svc.num}</span>
                  <span className="eyebrow reveal">{svc.subtitle}</span>
                  <h2 className={`section-title reveal reveal-delay-1`}>{svc.title}</h2>
                  <p className={`section-sub reveal reveal-delay-2`}>{svc.description}</p>

                  {/* QA highlight callout */}
                  {svc.highlight && (
                    <div className={`${styles.highlightBox} reveal reveal-delay-3`}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" strokeWidth="2.5">
                        <polyline points="9 11 12 14 22 4"/>
                        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
                      </svg>
                      <p>{svc.highlight}</p>
                    </div>
                  )}

                  <div className={`${styles.svcTags} reveal reveal-delay-3`}>
                    {svc.tags.map(t => (
                      <span key={t} className="tag">{t}</span>
                    ))}
                  </div>
                  <div className={`${styles.svcCta} reveal reveal-delay-4`}>
                    <Link href="/contact#form" className="btn-primary">
                      Get a quote
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" strokeWidth="2.5">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </Link>
                  </div>
                </div>

                {/* Card side */}
                <div className={`${styles.svcCard} reveal reveal-delay-2`}>
                  <div className={styles.svcCardHead}>
                    <div className={styles.svcCardIcon}>{icons[svc.id]}</div>
                    <div>
                      <p className={styles.svcCardTitle}>{svc.title}</p>
                      <p className={styles.svcCardSub}>What we deliver</p>
                    </div>
                  </div>
                  <ul className={styles.svcItems}>
                    {svc.items.map(item => (
                      <li key={item} className={styles.svcItem}>
                        <span className={styles.svcItemDot} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            </div>
          </section>
          {idx < services.length - 1 && <div className="divider" />}
        </div>
      ))}

      <div className="divider" />

      {/* ─── BOTTOM CTA ───────────────────────── */}
      <section className="section">
        <div className="container">
          <div className={styles.bottomCta}>
            <div className={styles.bottomCtaBg} aria-hidden />
            <div className={styles.bottomCtaContent}>
              <span className="eyebrow" style={{ color: 'rgba(255,255,255,0.7)' }}>
                Let's work together
              </span>
              <h2 className={styles.bottomCtaH2}>
                Not sure which service<br />fits your needs?
              </h2>
              <p className={styles.bottomCtaSub}>
                We'll assess your requirements and recommend the right solution —
                no commitment required.
              </p>
              <Link href="/contact#form"
                className="btn-primary"
                style={{ background: '#fff', color: 'var(--accent2)' }}>
                Talk to us
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
