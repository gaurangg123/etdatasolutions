export type Service = {
  id: string
  num: string
  title: string
  subtitle: string
  description: string
  items: string[]
  tags: string[]
  icon: string
}

export const services: Service[] = [
  {
    id: 'data',
    num: '01',
    title: 'Data & Excel',
    subtitle: 'Data Processing & Automation',
    description:
      'End-to-end data management: entry, processing, conversion, and Excel automation. We handle high-volume, time-critical assignments with 99% accuracy and rapid turnaround.',
    items: [
      'Business & medical data entry',
      'Excel automation & macro development',
      'Data cleaning, mining & extraction',
      'OCR / ICR processing',
      'Document & PDF conversion',
      'Forms & survey processing',
      'Catalogue & image data entry',
      'Web data capture & research',
    ],
    tags: ['Data Entry', 'Excel', 'OCR / ICR', 'Automation', 'Conversion'],
    icon: 'data',
  },
  {
    id: 'staffing',
    num: '02',
    title: 'Staffing, VA & Recruitment',
    subtitle: 'Talent Sourcing & Process Outsourcing',
    description:
      'Expert staffing solutions combining deep talent databases with strategic RPO. Our virtual assistants and recruitment specialists integrate seamlessly into your operations.',
    items: [
      'Recruitment process outsourcing (RPO)',
      'Virtual assistant services',
      'Talent sourcing & headhunting',
      'Back-office operations staffing',
      'Contract & permanent placement',
      'Candidate screening & vetting',
      'HR process support',
      'Onboarding assistance',
    ],
    tags: ['RPO', 'Virtual Assistant', 'Recruitment', 'Staffing', 'HR'],
    icon: 'staffing',
  },
  {
    id: 'qa',
    num: '03',
    title: 'QA, Testing — App & Web',
    subtitle: 'Quality Assurance & Test Engineering',
    description:
      'Comprehensive QA services for web and mobile applications. From manual testing to automated pipelines — we ensure your product ships bug-free, performant, and user-ready.',
    items: [
      'Manual functional testing',
      'Automated test suite development',
      'Web application testing',
      'Mobile app testing (iOS & Android)',
      'API & integration testing',
      'Performance & load testing',
      'Regression & smoke testing',
      'Bug tracking & reporting',
    ],
    tags: ['Manual QA', 'Automation', 'Web Testing', 'Mobile Testing', 'API Testing'],
    icon: 'qa',
  },
  {
    id: 'dataeng',
    num: '04',
    title: 'Data Engineering & Visualizations',
    subtitle: 'Pipelines, Dashboards & Analytics',
    description:
      'Transform raw data into strategic intelligence. We build robust data pipelines, warehouses, and compelling visual dashboards that help leadership make faster, smarter decisions.',
    items: [
      'ETL pipeline design & development',
      'Data warehouse architecture',
      'BI dashboard development',
      'Power BI & Tableau solutions',
      'Real-time data streaming',
      'Database optimization',
      'Data modeling & schema design',
      'Custom analytics reporting',
    ],
    tags: ['ETL', 'Power BI', 'Tableau', 'Pipelines', 'Analytics'],
    icon: 'dataeng',
  },
]
