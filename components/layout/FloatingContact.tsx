'use client'
import { useState } from 'react'
import Link from 'next/link'
import { MessageSquare, X, Phone, Mail, ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function FloatingContact() {
  const [open, setOpen] = useState(false)

  return (
    <div className="fixed bottom-6 right-6 z-[180] flex flex-col items-end gap-3">
      {open && (
        <div className="bg-white dark:bg-ink-900 border border-ink-200 dark:border-ink-800 rounded-2xl shadow-card-hover p-5 w-[260px] flex flex-col gap-3 animate-in slide-in-from-bottom-2 duration-200">
          <p className="text-sm font-[700] text-ink-900 dark:text-ink-100">Get in touch</p>
          <a href="tel:+13023579776" className="flex items-center gap-3 text-sm text-ink-600 dark:text-ink-300 hover:text-brand-500 transition-colors">
            <Phone size={14} className="text-brand-500 flex-shrink-0" />
            +1-302-357-9776 (US)
          </a>
          <a href="mailto:bobby@etdatasolutions.com" className="flex items-center gap-3 text-sm text-ink-600 dark:text-ink-300 hover:text-brand-500 transition-colors">
            <Mail size={14} className="text-brand-500 flex-shrink-0" />
            bobby@etdatasolutions.com
          </a>
          <Link href="/contact" onClick={() => setOpen(false)}
            className="w-full inline-flex items-center justify-center gap-2 text-sm font-[700] text-white bg-brand-500 hover:bg-brand-600 px-4 py-2.5 rounded-xl transition-all shine">
            Book a consultation <ArrowRight size={13} />
          </Link>
        </div>
      )}
      <button
        onClick={() => setOpen(o => !o)}
        aria-label={open ? 'Close contact' : 'Open contact'}
        className={cn(
          'w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-200 hover:-translate-y-0.5',
          open ? 'bg-ink-900 dark:bg-ink-800 text-white' : 'bg-brand-500 hover:bg-brand-600 text-white'
        )}
      >
        {open ? <X size={18} /> : <MessageSquare size={18} />}
      </button>
    </div>
  )
}
