'use client'

import Link from 'next/link'
import { useReveal } from '@/lib/useReveal'
import { services } from '@/lib/services'
import styles from './page.module.css'

const ServiceIcon = ({ id }: { id: string }) => {
  if (id === 'staffing') return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
      <circle cx="9" cy="7" r="4"/>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
    </svg>
  )
  if (id === 'data') return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <ellipse cx="12" cy="6" rx="8" ry="3"/>
      <path d="M4 6v6c0 1.66 3.58 3 8 3s8-1.34 8-3V6"/>
      <path d="M4 12v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6"/>
    </svg>
  )
  if (id === 'qa') return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <polyline points="9 11 12 14 22 4"/>
      <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
    </svg>
  )
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
    </svg>
  )
}

export default function HomePage() {
  useReveal()

  return (
    <>
      {/* ─── HERO — fullscreen video background ─── */}
      <section className={styles.hero}>

        {/* Background video — fullscreen, subtle opacity */}
        <video
          className={styles.videoBg}
          src="/logo-video-2.mp4"
          autoPlay
          loop
          muted
          playsInline
          poster="/video-poster.jpg"
          preload="none"
        />

        {/* Gradient overlay */}
        <div className={styles.heroOverlay} aria-hidden />

        {/* Grid texture */}
        <div className={styles.heroBg} aria-hidden />

        {/* Content */}
        <div className={styles.heroInner}>
          <div className="container">
            <div className={styles.heroContent}>
              <div className={`${styles.chip} reveal`}>
                <span className={`${styles.chipDot} pulse`} />
                <span className={styles.chipText}>India-based · Global reach · Est. 2014</span>
              </div>

              <h1 className={`${styles.heroH1} reveal reveal-delay-1`}>
                Intelligent data<br />
                solutions for the<br />
                <span className={styles.hlAccent}>modern enterprise</span>
              </h1>

              <p className={`${styles.heroSub} reveal reveal-delay-2`}>
                Cost-effective outsourcing for staffing, data processing,
                QA testing, and data engineering. Built for businesses
                that demand precision, speed, and scale.
              </p>

              <div className={`${styles.heroActions} reveal reveal-delay-3`}>
                <Link href="/contact#form" className="btn-primary">
                  Get a Free Consultation
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </Link>
                <Link href="/services" className="btn-secondary">
                  Explore Services
                </Link>
              </div>

              <div className={`${styles.statsStrip} reveal reveal-delay-4`}>
                {[
                  { n: '99%',  l: 'Accuracy Rate'    },
                  { n: '10+',  l: 'Years Active'      },
                  { n: '4',    l: 'Service Verticals' },
                  { n: '24/7', l: 'Availability'      },
                ].map(s => (
                  <div key={s.l} className={styles.statCell}>
                    <span className={styles.statNum}>{s.n}</span>
                    <span className={styles.statLabel}>{s.l}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ─── SERVICES ─────────────────────────── */}
      <section className="section">
        <div className="container">
          <span className="eyebrow reveal">What we do</span>
          <h2 className="section-title reveal reveal-delay-1">
            Four verticals.<br />One partner.
          </h2>
          <p className="section-sub reveal reveal-delay-2">
            From talent acquisition to data lakehouses, from manual QA to Excel automation —
            we handle your operational complexity end-to-end.
          </p>

          <div className={`${styles.servicesGrid} reveal reveal-delay-3`}>
            {services.map(svc => (
              <Link key={svc.id} href={`/services#${svc.id}`} className={styles.svcCard}>
                <div className={styles.svcTop}>
                  <div className={styles.svcIconWrap}>
                    <ServiceIcon id={svc.id} />
                  </div>
                  <span className={styles.svcNum}>{svc.num}</span>
                </div>
                <h3 className={styles.svcTitle}>{svc.title}</h3>
                <p className={styles.svcDesc}>{svc.description.slice(0, 110)}…</p>
                <div className={styles.svcTags}>
                  {svc.tags.slice(0, 3).map(t => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                </div>
                <span className={styles.svcArrow}>
                  Learn more
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ─── WHY US ───────────────────────────── */}
      <section className={`section ${styles.whySection}`}>
        <div className="container">
          <div className={styles.whyLayout}>
            <div className={styles.whyLeft}>
              <span className="eyebrow reveal">Why ET Data Solutions</span>
              <h2 className="section-title reveal reveal-delay-1">
                Accuracy is our<br />bottom line
              </h2>
              <p className="section-sub reveal reveal-delay-2">
                All personnel are constantly monitored for quality. Operators, supervisors,
                trainers, verifiers and QC specialists are all trained to ensure
                the highest possible accuracy.
              </p>
              <div className={`${styles.whyActions} reveal reveal-delay-3`}>
                <Link href="/about" className="btn-primary">About the company</Link>
                <Link href="/contact#form" className="btn-secondary">Let's talk</Link>
              </div>
            </div>

            <div className={styles.whyRight}>
              {[
                { icon: 'check', title: '99% Accuracy Guaranteed',    desc: 'Multi-level quality review from operator to QC specialist — every single project.'        },
                { icon: 'clock', title: 'Any Scale, Any Timeline',     desc: 'Short or long-term. A single project or an ongoing relationship. We adapt.'              },
                { icon: 'lock',  title: 'Secure & Confidential',       desc: 'Utmost integrity and security for all time-critical and information-sensitive data.'      },
                { icon: 'globe', title: 'India-based Cost Advantage',  desc: 'World-class technical skills at competitive rates with 24/7 global availability.'        },
              ].map((item, i) => (
                <div key={item.title}
                  className={`${styles.whyItem} reveal`}
                  style={{ transitionDelay: `${i * 0.1}s` }}
                >
                  <div className={styles.whyIco}>
                    {item.icon === 'check' && <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>}
                    {item.icon === 'clock' && <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>}
                    {item.icon === 'lock'  && <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>}
                    {item.icon === 'globe' && <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>}
                  </div>
                  <div>
                    <h4 className={styles.whyItemTitle}>{item.title}</h4>
                    <p className={styles.whyItemDesc}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ─── CTA ──────────────────────────────── */}
      <section className="section">
        <div className="container">
          <div className={`${styles.ctaBox} reveal`}>
            <div className={styles.ctaBg} aria-hidden />
            <div className={styles.ctaContent}>
              <span className="eyebrow" style={{ color: 'rgba(255,255,255,0.7)' }}>Get started</span>
              <h2 className={styles.ctaTitle}>
                Ready to streamline<br />your operations?
              </h2>
              <p className={styles.ctaSub}>
                Whether you have an ongoing requirement or a single assignment —
                let's plan the right solution together.
              </p>
              <div className={styles.ctaActions}>
                <Link href="/contact#form" className="btn-primary"
                  style={{ background: '#fff', color: 'var(--accent2)' }}>
                  Book a Free Consultation
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </Link>
                <a href="mailto:bobby@etdatasolutions.com" className="btn-secondary"
                  style={{ borderColor: 'rgba(255,255,255,0.25)', color: 'rgba(255,255,255,0.85)' }}>
                  bobby@etdatasolutions.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
