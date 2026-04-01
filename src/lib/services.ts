export type Service = {
  id: string
  num: string
  title: string
  subtitle: string
  description: string
  items: string[]
  highlight?: string
  tags: string[]
  icon: string
}

export const services: Service[] = [
  {
    id: 'staffing',
    num: '01',
    title: 'Staffing, VA & Recruitment',
    subtitle: 'Talent Sourcing & Process Outsourcing',
    description:
      'Expert staffing solutions combining deep talent databases with strategic RPO. Our virtual assistants and recruitment specialists integrate seamlessly into your operations — fast, cost-efficient, and quality-driven.',
    items: [
      'Recruitment process outsourcing (RPO)',
      'Virtual assistant services',
      'Talent sourcing & headhunting',
      'Contract & permanent placement',
      'Candidate screening & vetting',
      'HR process support',
      'Onboarding assistance',
    ],
    tags: ['RPO', 'Virtual Assistant', 'Recruitment', 'Staffing', 'HR'],
    icon: 'staffing',
  },
  {
    id: 'data',
    num: '02',
    title: 'Data & Excel',
    subtitle: 'Data Processing & Automation',
    description:
      'End-to-end data management: entry, processing, conversion, and Excel automation. We handle high-volume, time-critical assignments with 99% accuracy and rapid turnaround — alleviating your need for onsite data entry personnel.',
    items: [
      'Business & medical data entry',
      'Excel automation & macro development',
      'Data cleaning, mining & extraction',
      'OCR / ICR processing',
      'Document & PDF conversion',
      'Online & offline data entry',
      'Web data capture & research',
      'Mailing list & address verification',
    ],
    tags: ['Data Entry', 'Excel', 'OCR / ICR', 'Automation', 'Conversion'],
    icon: 'data',
  },
  {
    id: 'qa',
    num: '03',
    title: 'QA Testing — App & Web',
    subtitle: 'Quality Assurance & Manual User Testing',
    description:
      'Comprehensive QA services for web and mobile applications. We specialise in hands-on, manual user-based testing — real humans validating real user journeys — ensuring your product ships intuitive, accessible, and bug-free.',
    highlight: 'We specialise in manual, user-based testing — real testers, real user journeys, real feedback.',
    items: [
      'Manual user-based functional testing',
      'Real-device web application testing',
      'Mobile app testing (iOS & Android)',
      'User journey & UX validation',
      'API & integration testing',
      'Cross-browser compatibility testing',
      'Accessibility testing',
      'Test case documentation & reporting',
    ],
    tags: ['Manual QA', 'User Testing', 'Web Testing', 'Mobile Testing', 'Accessibility'],
    icon: 'qa',
  },
  {
    id: 'dataeng',
    num: '04',
    title: 'Data Engineering & Visualizations',
    subtitle: 'Pipelines, Lakehouses, Dashboards & Analytics',
    description:
      'Transform raw data into strategic intelligence. We architect modern Data Lakehouse solutions on Snowflake, Databricks, and Microsoft Fabric — plus compelling visual dashboards that help leadership make faster, smarter decisions.',
    items: [
      'Data Lakehouse implementation (Snowflake)',
      'Data Lakehouse implementation (Databricks)',
      'Microsoft Fabric solutions',
      'ETL / ELT pipeline design & development',
      'Data warehouse architecture',
      'Power BI & Tableau dashboards',
      'Real-time data streaming',
      'Custom analytics & reporting',
    ],
    tags: ['Snowflake', 'Databricks', 'Microsoft Fabric', 'Power BI', 'ETL'],
    icon: 'dataeng',
  },
]
