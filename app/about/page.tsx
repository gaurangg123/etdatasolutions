'use client'
import { useEffect } from 'react'

// Single-page site — redirect to homepage about section
export default function AboutRedirect() {
  useEffect(() => {
    window.location.replace('/#about')
  }, [])
  return null
}
