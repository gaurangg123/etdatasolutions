import Link from 'next/link'
import Image from 'next/image'
import { Mail, Phone, Globe, MapPin } from 'lucide-react'

const serviceLinks = [
  { label: 'Staffing & VA',         href: '/services#staffing' },
  { label: 'Data & Excel',          href: '/services#data'     },
  { label: 'QA Testing',            href: '/services#qa'       },
  { label: 'Data Engineering',      href: '/services#dataeng'  },
  { label: 'View Pricing',          href: '/#pricing'          },
]
const companyLinks = [
  { label: 'About Us',   href: '/about'        },
  { label: 'Services',   href: '/services'     },
  { label: 'Contact',    href: '/contact'      },
  { label: 'Get a Quote',href: '/contact#form' },
]

export default function Footer() {
  return (
    <footer className="bg-neutral-50 dark:bg-[#0a0908] border-t border-neutral-200 dark:border-neutral-800">
      <div className="max-w-[1180px] mx-auto px-6 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-10 md:gap-16 pb-12 border-b border-neutral-200 dark:border-neutral-800">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="relative h-[40px] w-[40px] flex-shrink-0">
                <Image
                  src="/logo-transparent.png"
                  alt="ET Data Solutions"
                  fill
                  className="object-contain opacity-90"
                />
              </div>
              <span className="text-base font-[700] tracking-[-0.02em] text-neutral-700 dark:text-neutral-300">ET Data Solutions</span>
            </div>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed max-w-[280px] mb-6">
              Intelligent data, staffing &amp; QA solutions. India-based. Globally delivered since 2014.
            </p>
            <div className="flex flex-col gap-2.5">
              {[
                { icon: Mail,  label: 'bobby@etdatasolutions.com', href: 'mailto:bobby@etdatasolutions.com' },
                { icon: Phone, label: '+1-302-357-9776',           href: 'tel:+13023579776' },
                { icon: Phone, label: '+91 62653 48189',           href: 'tel:+916265348189' },
                { icon: Globe, label: 'etdatasolutions.com',       href: 'https://etdatasolutions.com' },
                { icon: MapPin,label: 'India — Serving Globally',  href: null },
              ].map(item => (
                <div key={item.label} className="flex items-center gap-2.5">
                  <item.icon size={13} className="text-brand-500 flex-shrink-0" />
                  {item.href ? (
                    <a href={item.href} className="text-sm text-neutral-500 dark:text-neutral-400 hover:text-brand-500 transition-colors duration-150">{item.label}</a>
                  ) : (
                    <span className="text-sm text-neutral-500 dark:text-neutral-400">{item.label}</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <p className="text-xs font-[700] tracking-widest uppercase text-neutral-400 dark:text-neutral-600 mb-4">Services</p>
            <div className="flex flex-col gap-2">
              {serviceLinks.map(l => (
                <Link key={l.href} href={l.href} className="text-sm text-neutral-500 dark:text-neutral-400 hover:text-brand-500 transition-colors duration-150">{l.label}</Link>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <p className="text-xs font-[700] tracking-widest uppercase text-neutral-400 dark:text-neutral-600 mb-4">Company</p>
            <div className="flex flex-col gap-2">
              {companyLinks.map(l => (
                <Link key={l.href} href={l.href} className="text-sm text-neutral-500 dark:text-neutral-400 hover:text-brand-500 transition-colors duration-150">{l.label}</Link>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 pt-6">
          <p className="text-xs text-neutral-400 dark:text-neutral-600">© {new Date().getFullYear()} ET Data Solutions. All rights reserved.</p>
          <p className="text-xs text-neutral-400 dark:text-neutral-600">etdatasolutions.com</p>
        </div>
      </div>
    </footer>
  )
}
