import Link from 'next/link'
import { Phone } from 'lucide-react'

export default function MobileStickyCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-[170] md:hidden bg-white/95 dark:bg-ink-950/95 border-t border-ink-200 dark:border-ink-800 backdrop-blur-md px-4 py-3 flex gap-3">
      <Link href="/contact"
        className="flex-1 inline-flex items-center justify-center gap-2 text-sm font-[700] text-white bg-brand-500 hover:bg-brand-600 py-3 rounded-xl transition-all shine">
        Free Consultation
      </Link>
      <a href="tel:+13023579776"
        className="w-12 h-12 flex items-center justify-center rounded-xl border border-ink-200 dark:border-ink-700 text-ink-500 dark:text-ink-400 hover:border-brand-400 hover:text-brand-500 transition-all flex-shrink-0">
        <Phone size={16} />
      </a>
    </div>
  )
}
