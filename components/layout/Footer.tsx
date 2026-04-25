import Link from 'next/link'
import Image from 'next/image'
import { Mail, Phone, Globe, MapPin, Clock, ArrowRight } from 'lucide-react'

const contacts = [
  { icon:Mail,   label:'bobby@etdatasolutions.com', href:'mailto:bobby@etdatasolutions.com' },
  { icon:Phone,  label:'+1-302-357-9776 (US)',      href:'tel:+13023579776'                },
  { icon:Phone,  label:'+91 62653 48189 (IN)',      href:'tel:+916265348189'               },
  { icon:Globe,  label:'etdatasolutions.com',       href:'https://etdatasolutions.com'     },
  { icon:MapPin, label:'Indore, India — Serving Globally',  href:null                              },
  { icon:Clock,  label:'24/7 — Any timezone',       href:null                              },
]
const serviceLinks = [
  { label:'Staffing & VA Recruitment', href:'/services#staffing'     },
  { label:'Data Entry & Excel',        href:'/services#data-entry'   },
  { label:'Manual QA Testing',         href:'/services#qa-testing'   },
  { label:'Data Engineering & BI',     href:'/services#data-engineering' },
]
const companyLinks = [
  { label:'About Us',      href:'/about'          },
  { label:'Services',      href:'/services'       },
  { label:'Testimonials',  href:'/testimonials'   },
  { label:'Contact',       href:'/contact'        },
  { label:'Free Audit',    href:'/contact#audit'  },
]

export default function Footer() {
  return (
    <footer className="bg-ink-50 dark:bg-ink-950 border-t border-ink-200 dark:border-ink-900">
      <div className="max-w-container mx-auto px-5 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 py-4 border-b border-ink-200 dark:border-ink-800">
          <div>
            <p className="text-sm font-[700] text-ink-900 dark:text-ink-100">Ready to remove your biggest operational bottleneck?</p>
            <p className="text-xs text-ink-400 dark:text-ink-500 mt-0.5">Free consultation · No contract required · 30-day guarantee</p>
          </div>
          <Link href="/contact"
            className="group flex-shrink-0 inline-flex items-center gap-2 text-sm font-[700] text-white bg-brand-500 hover:bg-brand-600 px-5 py-2.5 rounded-xl transition-all hover:-translate-y-px hover:shadow-brand">
            Book a free call <ArrowRight size={13} className="transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-6 md:gap-10 py-8 border-b border-ink-200 dark:border-ink-800">
          <div>
            <Link href="/" className="flex items-center gap-2.5 mb-4 group">
              <div className="relative h-9 w-9 flex-shrink-0">
                <Image src="/logo-transparent.png" alt="ET Data Solutions" fill className="object-contain opacity-90" />
              </div>
              <div>
                <span className="block text-[1rem] font-[750] tracking-[-0.02em] text-ink-900 dark:text-ink-200 group-hover:text-brand-500 transition-colors">ET Data Solutions</span>
                <span className="block text-[0.65rem] text-ink-400 dark:text-ink-500 font-[500]">Outsourcing · Est. 2014</span>
              </div>
            </Link>
            <p className="text-sm text-ink-500 dark:text-ink-400 leading-relaxed max-w-[260px] mb-2">
              India-based outsourcing for staffing, data processing, QA testing, and data engineering. Globally delivered since 2014.
            </p>
            <p className="text-xs text-ink-400 dark:text-ink-500 mb-6">99% accuracy · 24/7 operations · 100+ clients</p>
            <div className="flex flex-col gap-2.5">
              {contacts.map(c => (
                <div key={c.label} className="flex items-center gap-2.5">
                  <c.icon size={12} className="text-brand-500 flex-shrink-0" />
                  {c.href
                    ? <a href={c.href} className="footer-link text-xs text-ink-500 dark:text-ink-400 hover:text-brand-500 transition-colors">{c.label}</a>
                    : <span className="text-xs text-ink-500 dark:text-ink-400">{c.label}</span>
                  }
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="text-[0.7rem] font-[750] tracking-[0.12em] uppercase text-ink-400 dark:text-ink-600 mb-4">Services</p>
            <div className="flex flex-col gap-2.5">
              {serviceLinks.map(l => (
                <Link key={l.href} href={l.href} className="footer-link text-sm text-ink-500 dark:text-ink-400 hover:text-brand-500 transition-colors">{l.label}</Link>
              ))}
            </div>
          </div>

          <div>
            <p className="text-[0.7rem] font-[750] tracking-[0.12em] uppercase text-ink-400 dark:text-ink-600 mb-4">Company</p>
            <div className="flex flex-col gap-2.5">
              {companyLinks.map(l => (
                <Link key={l.href} href={l.href} className="footer-link text-sm text-ink-500 dark:text-ink-400 hover:text-brand-500 transition-colors">{l.label}</Link>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 py-5">
          <p className="text-xs text-ink-400 dark:text-ink-600">© {new Date().getFullYear()} ET Data Solutions. All rights reserved.</p>
          <p className="text-xs text-ink-400 dark:text-ink-600">etdatasolutions.com</p>
        </div>
      </div>
    </footer>
  )
}
