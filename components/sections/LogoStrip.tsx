import styles from './LogoStrip.module.css';

const logos = [
  { name: 'Apex Freight',   industry: 'Logistics' },
  { name: 'Flowdesk',       industry: 'SaaS' },
  { name: 'ScaleOps',       industry: 'Operations' },
  { name: 'MediGroup',      industry: 'Healthtech' },
  { name: 'TechCorp',       industry: 'Software' },
  { name: 'FinEdge',        industry: 'Fintech' },
  { name: 'DataSphere',     industry: 'Analytics' },
  { name: 'CloudNine',      industry: 'E-commerce' },
];

export default function LogoStrip() {
  const doubled = [...logos, ...logos]; // duplicate for infinite scroll
  return (
    <div className={styles.wrap}>
      <div className="container">
        <p className={styles.label}>Trusted by teams across industries</p>
      </div>
      <div className={styles.track}>
        <div className={styles.rail}>
          {doubled.map((l, i) => (
            <div key={i} className={styles.logo}>
              <span className={styles.logoName}>{l.name}</span>
              <span className={styles.logoIndustry}>{l.industry}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
