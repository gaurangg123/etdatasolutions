import styles from './LogoStrip.module.css';

// Industries and sectors ET Data Solutions has worked in
const industries = [
  { name: 'Logistics & Freight',  tag: 'Operations'    },
  { name: 'SaaS & Software',      tag: 'Engineering'   },
  { name: 'Healthtech',           tag: 'Data'          },
  { name: 'Fintech',              tag: 'QA'            },
  { name: 'E-commerce',           tag: 'Staffing'      },
  { name: 'Professional Services',tag: 'Operations'    },
  { name: 'Analytics & BI',       tag: 'Engineering'   },
  { name: 'Real Estate',          tag: 'Data Entry'    },
];

export default function LogoStrip() {
  const doubled = [...industries, ...industries];
  return (
    <div className={styles.wrap}>
      <div className="container">
        <p className={styles.label}>Industries we work in</p>
      </div>
      <div className={styles.track}>
        <div className={styles.rail}>
          {doubled.map((item, i) => (
            <div key={i} className={styles.pill}>
              <span className={styles.pillName}>{item.name}</span>
              <span className={styles.pillTag}>{item.tag}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
