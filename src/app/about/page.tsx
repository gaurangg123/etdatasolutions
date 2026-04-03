'use client'

import Link from 'next/link'
import { useReveal } from '@/lib/useReveal'
import PageHeader from '@/components/ui/PageHeader'
import styles from './about.module.css'

export default function AboutPage() {
  useReveal()

  const values = [
    { num: '01', title: 'Accuracy First',    desc: 'Every project reviewed at multiple levels. We never ship without meeting our 99% accuracy benchmark.'  },
    { num: '02', title: 'Client-Centric',    desc: 'We plan solutions around your goals, timeline, and budget — not generic service packages.'              },
    { num: '03', title: 'Secure & Trusted',  desc: 'All data handled with the highest integrity. Confidentiality agreements available for all engagements.' },
    { num: '04', title: 'Always Available',  desc: '24/7 operations mean your assignments progress even when your team is offline.'                          },
  ]

  return (
    <>
      <PageHeader
        eyebrow="About Us"
        title={<>Built on accuracy.<br /><span className="accent">Driven by results.</span></>}
        subtitle="ET Data Solutions is a professional administrative back-office data processing services provider based in India, serving clients globally since 2014."
      />

      <div className="divider" />

      {/* ─── STORY ────────────────────────────────── */}
      <section className="section">
        <div className="container">
          <div className={styles.storyGrid}>
            <div className={styles.storyLeft}>
              <span className="eyebrow reveal">Our Story</span>
              <h2 className={`section-title reveal reveal-delay-1`}>Who we are</h2>
              <div className={`${styles.storyText} reveal reveal-delay-2`}>
                <p>
                  ET Data Solutions is the most cost-effective and efficient outsourcing
                  alternative for any business needing assistance managing their data
                  workflow. We have the capabilities and resources to handle any type or
                  size of project — short or long term.
                </p>
                <p>
                  Leveraging our location in India, we provide world-class technical and
                  business skills, global coverage, and affordable solutions. Our service
                  bureau for time-critical and information-sensitive data alleviates the
                  need for onsite data entry personnel, software, and hardware.
                </p>
                <p>
                  Clients reduce costs, eliminate backlogs, and significantly improve data
                  quality — freeing themselves to focus on core business growth without
                  hiring additional personnel or leasing additional office space.
                </p>
              </div>
              <div className={`${styles.storyActions} reveal reveal-delay-3`}>
                <Link href="/contact#form" className="btn-primary">
                  Work with us
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </Link>
                <Link href="/services" className="btn-secondary">View our services</Link>
              </div>
            </div>

            <div className={styles.storyRight}>
              <div className={`${styles.statsCard} reveal`}>
                <div className={styles.statsCardHead}>
                  <div className={styles.scDot} style={{ background: '#ff5f57' }} />
                  <div className={styles.scDot} style={{ background: '#febc2e' }} />
                  <div className={styles.scDot} style={{ background: '#28c840' }} />
                  <span className={styles.scHeadText}>Company Overview</span>
                </div>
                <div className={styles.statsGrid}>
                  {[
                    { n: '10+',  l: 'Years active'         },
                    { n: '99%',  l: 'Accuracy rate'        },
                    { n: '4',    l: 'Service verticals'    },
                    { n: '24/7', l: 'Availability'         },
                  ].map(s => (
                    <div key={s.l} className={styles.statBox}>
                      <span className={styles.statN}>{s.n}</span>
                      <span className={styles.statL}>{s.l}</span>
                    </div>
                  ))}
                </div>
                <div className={styles.statsRows}>
                  {[
                    { k: 'Headquarters', v: 'India'                    },
                    { k: 'Founded',      v: '2014'                      },
                    { k: 'Email',        v: 'bobby@etdatasolutions.com' },
                    { k: 'Phone',        v: '+1-215-554-3713'           },
                    { k: 'Domain',       v: 'etdatasolutions.com'       },
                  ].map(row => (
                    <div key={row.k} className={styles.statsRow}>
                      <span className={styles.statsRowKey}>{row.k}</span>
                      <span className={styles.statsRowVal}>{row.v}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ─── VALUES ───────────────────────────────── */}
      <section className={`section ${styles.valuesSection}`}>
        <div className="container">
          <span className="eyebrow reveal">Our Values</span>
          <h2 className={`section-title reveal reveal-delay-1`}>How we work</h2>
          <div className={`grid-4 ${styles.valuesGrid}`}>
            {values.map((v, i) => (
              <div
                key={v.num}
                className={`${styles.valueCard} reveal`}
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <span className={styles.valueNum}>{v.num}</span>
                <h3 className={styles.valueTitle}>{v.title}</h3>
                <p className={styles.valueDesc}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ─── SERVICES CHIPS ───────────────────────── */}
      <section className="section">
        <div className="container">
          <span className="eyebrow reveal">Services</span>
          <h2 className={`section-title reveal reveal-delay-1`}>What we handle</h2>
          <div className={`${styles.servicesList} reveal reveal-delay-2`}>
            {[
              'RPO & Recruitment', 'Virtual Assistant Services', 'Talent Sourcing',
              'Data Entry', 'Excel Automation', 'OCR / ICR', 'Data Conversion',
              'Manual User-Based QA', 'Web & App Testing', 'Accessibility Testing',
              'Snowflake Lakehouse', 'Databricks', 'Microsoft Fabric',
              'Power BI Dashboards', 'Tableau', 'ETL Pipelines',
            ].map(item => (
              <span key={item} className={styles.serviceChip}>{item}</span>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
// metadata exported separately for Next.js to pick up in server context
