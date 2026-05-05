'use client'
import { createContext, useContext, useEffect, useState } from 'react'

type Theme = 'light' | 'dark'
const Ctx = createContext<{ theme: Theme; toggle: () => void }>({ theme: 'light', toggle: () => {} })

export function useTheme() { return useContext(Ctx) }

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('light')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Only use stored preference — never auto-apply system dark mode
    try {
      const stored = localStorage.getItem('theme') as Theme | null
      const preferred = stored ?? 'light'
      setTheme(preferred)
      document.documentElement.classList.toggle('dark', preferred === 'dark')
    } catch {
      // localStorage unavailable (SSR/private browsing) — use default
    }
  }, [])

  const toggle = () => {
    const next = theme === 'light' ? 'dark' : 'light'
    setTheme(next)
    document.documentElement.classList.toggle('dark', next === 'dark')
    try { localStorage.setItem('theme', next) } catch { /* ignore */ }
  }

  // Suppress hydration mismatch — render children immediately but theme state
  // is only applied after mount (matches SSR default of 'light')
  return (
    <Ctx.Provider value={{ theme: mounted ? theme : 'light', toggle }}>
      {children}
    </Ctx.Provider>
  )
}

export function ThemeScript() {
  return (
    <script
      dangerouslySetInnerHTML={{
        // Only read stored pref — default to light if nothing stored
        __html: `(function(){try{var t=localStorage.getItem('theme');document.documentElement.classList.toggle('dark',t==='dark')}catch(e){}})()`,
      }}
    />
  )
}
