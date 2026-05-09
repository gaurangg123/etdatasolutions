import type { Metadata } from 'next';
import Reveal from '@/components/ui/Reveal';
import styles from './page.module.css';

export const metadata: Metadata = { title: 'Services' };

const services = [
  {
    id: 'staffing',
    icon: '👥',
    title: 'Staffing & Virtual Assistants',
    tagline: 'Your team, extended.',
    description:
      'We place hand-picked, English-fluent staff and VAs who work in your timezone and integrate seamlessly with your existing tools and processes.',
    deliverables: [
      'Recruitment process outsourcing (RPO)',
      'VA placement for executive, admin & ops roles',
      'Executive and specialist sourcing',
      'Resume screening and candidate shortlisting',
      'Onboarding and first-week ramp support',
      'Bulk hiring for seasonal or project spikes',
    ],
    forWho: 'Startups and scale-ups that need high-quality operational support without the overhead of full-time hiring.',
    tech: 'LinkedIn Recruiter · ATS integrations · Slack · Notion · Google Workspace',
    engagement: 'Monthly retainer with two-week scaling notice. Custom packages for teams of 3+.',
    tags: ['Executive support', 'Research', 'Inbox triage', 'Calendar management'],
  },
  {
    id: 'data',
    icon: '📊',
    title: 'Data Entry & Processing',
    tagline: 'High-volume, zero-error.',
    description:
      'Structured data work with multi-level quality checks. Every batch goes through a two-pass review before delivery.',
    deliverables: [
      'High-volume manual data entry',
      'Excel & Google Sheets automation',
      'OCR / ICR document digitisation',
      'PDF text extraction and structuring',
      'Database deduplication and normalisation',
      'Format conversion and migration',
    ],
    forWho: 'Operations, finance, and logistics teams drowning in spreadsheets, PDFs, or messy CRM data.',
    tech: 'Excel · Google Sheets · Airtable · HubSpot · Salesforce · Zoho · Custom OCR pipelines',
    engagement: 'Monthly retainer or per-batch project scoping for one-off migrations.',
    tags: ['CRM cleanup', 'Form processing', 'Data migration', 'OCR/ICR'],
  },
  {
    id: 'qa',
    icon: '✅',
    title: 'Manual QA Testing',
    tagline: 'The bugs your CI misses.',
    description:
      'Comprehensive manual QA across web, mobile, and desktop — exploratory sessions, structured test plans, and regression sweeps before every release.',
    deliverables: [
      'Functional testing across all user flows',
      'Cross-browser and cross-device testing',
      'Mobile app testing (iOS & Android)',
      'UAT support and sign-off documentation',
      'WCAG 2.1 accessibility audits',
      'Test case writing and maintenance',
      'Detailed bug reports with reproduction steps',
    ],
    forWho: "Product teams shipping fast who need systematic coverage that automation alone can't provide.",
    tech: 'Jira · Linear · TestRail · BrowserStack · Sauce Labs · Playwright (for reference runs)',
    engagement: 'Sprint-based engagements, pre-release sweeps, or ongoing monthly retainer.',
    tags: ['Web & mobile', 'Regression', 'Bug triage', 'WCAG', 'UAT'],
  },
  {
    id: 'engineering',
    icon: '🗄️',
    title: 'Data Engineering',
    tagline: 'Pipelines that actually run.',
    description:
      'We design, build, and maintain data infrastructure — from raw ingestion to clean, queryable warehouses and executive dashboards.',
    deliverables: [
      'Lakehouse architecture design',
      'Snowflake, Databricks, Microsoft Fabric setup',
      'ETL and ELT pipeline development',
      'dbt model authoring and testing',
      'Airflow / Prefect orchestration',
      'Power BI and Tableau dashboard builds',
      'Data quality monitoring and alerting',
    ],
    forWho: 'Data teams that need reliable infrastructure built fast, without hiring full-time senior engineers.',
    tech: 'Snowflake · BigQuery · Databricks · dbt · Airflow · Prefect · Power BI · Tableau · Fivetran · Airbyte',
    engagement: 'Project-based scoping for builds; monthly retainer for ongoing maintenance.',
    tags: ['ETL pipelines', 'Warehouse', 'Dashboards', 'dbt', 'Snowflake'],
  },
];

export default function ServicesPage() {
  return (
    <main style={{ padding: '140px 0 120px' }}>
      <div className="container">
        <div className={styles.header}>
          <Reveal><div className="eyebrow">Services</div></Reveal>
          <Reveal delay={0.07}><h1>Four practices, <em>one standard.</em></h1></Reveal>
          <Reveal delay={0.14}>
            <p>Each service is built on documented SOPs, multi-pass quality checks, and weekly metrics you can audit. Start with one, or let us run all four end-to-end.</p>
          </Reveal>
        </div>

        <div className={styles.list}>
          {services.map((s) => (
            <Reveal key={s.id} delay={0.07}>
              <section id={s.id} className={styles.serviceBlock}>
                <div className={styles.serviceLeft}>
                  <div className={styles.svcIcon}>{s.icon}</div>
                  <h2>{s.title}</h2>
                  <p className={styles.tagline}>{s.tagline}</p>
                  <p>{s.description}</p>
                  <div className={styles.tags}>
                    {s.tags.map((t) => <span key={t} className={styles.tag}>{t}</span>)}
                  </div>
                </div>

                <div className={styles.serviceRight}>
                  <div className={styles.infoCard}>
                    <div className={styles.infoSection}>
                      <h4>Deliverables</h4>
                      <ul className={styles.deliverables}>
                        {s.deliverables.map((d) => (
                          <li key={d}><span className={styles.bullet}>→</span>{d}</li>
                        ))}
                      </ul>
                    </div>
                    <div className={styles.infoSection}>
                      <h4>Who it&apos;s for</h4>
                      <p className={styles.infoText}>{s.forWho}</p>
                    </div>
                    <div className={styles.infoSection}>
                      <h4>Tech stack</h4>
                      <p className={styles.infoText}>{s.tech}</p>
                    </div>
                    <div className={styles.infoSection}>
                      <h4>Engagement model</h4>
                      <p className={`${styles.infoText} ${styles.engagement}`}>{s.engagement}</p>
                    </div>
                  </div>
                </div>
              </section>
            </Reveal>
          ))}
        </div>
      </div>
    </main>
  );
}
