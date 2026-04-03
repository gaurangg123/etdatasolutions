'use client'

import { createContext, useCallback, useContext, useEffect, useState } from 'react'

type Theme = 'light' | 'dark'

interface ThemeContextValue {
  theme: Theme
  toggle: () => void
}

const ThemeContext = createContext<ThemeContextValue>({
  theme: 'light',
  toggle: () => {},
})

export function useTheme(): ThemeContextValue {
  return useContext(ThemeContext)
}

/** Inline script injected into <head> to set data-theme BEFORE first paint.
 *  Eliminates the flash of wrong theme on page load. */
export function ThemeScript() {
  const script = `
    (function(){
      try {
        var saved = localStorage.getItem('etds-theme');
        var preferred = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        var theme = saved || preferred;
        if (theme === 'dark') document.documentElement.setAttribute('data-theme', 'dark');
      } catch(e) {}
    })();
  `
  return <script dangerouslySetInnerHTML={{ __html: script }} />
}

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('light')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // Read what the inline script already applied
    const applied = document.documentElement.getAttribute('data-theme')
    const initial: Theme = applied === 'dark' ? 'dark' : 'light'
    setTheme(initial)
    setMounted(true)
  }, [])

  // useCallback prevents unnecessary re-renders of every consumer
  const toggle = useCallback(() => {
    setTheme(prev => {
      const next = prev === 'light' ? 'dark' : 'light'
      document.documentElement.setAttribute('data-theme', next === 'dark' ? 'dark' : '')
      try { localStorage.setItem('etds-theme', next) } catch {}
      return next
    })
  }, [])

  // Don't gate children — ThemeScript already set the correct data-theme attribute,
  // so there is no FOUC. We just haven't synced React state yet.
  return (
    <ThemeContext.Provider value={{ theme: mounted ? theme : 'light', toggle }}>
      {children}
    </ThemeContext.Provider>
  )
}
