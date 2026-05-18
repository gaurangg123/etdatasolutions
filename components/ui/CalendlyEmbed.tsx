'use client';

import { useEffect, useRef, useState } from 'react';
import { CalendarClock, ExternalLink } from 'lucide-react';

const FALLBACK_URL = 'https://calendly.com/etdatasolutions/30min';

declare global {
  interface Window {
    Calendly?: {
      initInlineWidget: (opts: { url: string; parentElement: HTMLElement }) => void;
    };
  }
}

export default function CalendlyEmbed() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);
  const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL || FALLBACK_URL;

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const scriptId = 'calendly-widget-script';
    let script = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement('script');
      script.id = scriptId;
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      document.body.appendChild(script);
    }
    if (!document.getElementById('calendly-widget-css')) {
      const link = document.createElement('link');
      link.id = 'calendly-widget-css';
      link.rel = 'stylesheet';
      link.href = 'https://assets.calendly.com/assets/external/widget.css';
      document.head.appendChild(link);
    }

    let attempts = 0;
    const init = () => {
      attempts += 1;
      if (window.Calendly && containerRef.current) {
        containerRef.current.innerHTML = '';
        window.Calendly.initInlineWidget({
          url: calendlyUrl,
          parentElement: containerRef.current,
        });
        setLoaded(true);
        return;
      }
      if (attempts < 50) setTimeout(init, 120);
    };
    init();
  }, [calendlyUrl]);

  return (
    <div className="h-full flex flex-col rounded-3xl border border-ink-100 bg-white shadow-card overflow-hidden">
      <div className="flex items-center justify-between gap-3 px-6 py-4 border-b border-ink-100 bg-gradient-to-r from-brand-50/60 to-white">
        <div className="flex items-center gap-3">
          <span className="grid place-items-center w-9 h-9 rounded-lg bg-brand-gradient text-white shadow-soft">
            <CalendarClock className="w-4 h-4" />
          </span>
          <div>
            <div className="font-semibold text-ink-900">Book a call</div>
            <div className="text-xs text-ink-500">Pick a slot that works for you · 30 minutes</div>
          </div>
        </div>
        <a
          href={calendlyUrl}
          target="_blank"
          rel="noreferrer"
          className="hidden sm:inline-flex items-center gap-1 text-xs font-medium text-coral-600 hover:text-coral-700"
        >
          Open in new tab <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>

      {/* The widget fills the remaining height of the card */}
      <div
        ref={containerRef}
        className="calendly-inline-widget flex-1"
        style={{ minWidth: '320px', minHeight: '600px' }}
        data-url={calendlyUrl}
      />

      {!loaded && (
        <div className="px-6 py-3 text-xs text-ink-400 border-t border-ink-100">
          Loading scheduler…
        </div>
      )}
    </div>
  );
}
