'use client'
import { useEffect } from 'react'
export function KeyboardNav() {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement || e.target instanceof HTMLSelectElement) return
      if (e.key === 'ArrowDown' || e.key === ' ') { e.preventDefault(); window.scrollBy({ top: window.innerHeight, behavior: 'smooth' }) }
      if (e.key === 'ArrowUp') { e.preventDefault(); window.scrollBy({ top: -window.innerHeight, behavior: 'smooth' }) }
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [])
  return null
}
