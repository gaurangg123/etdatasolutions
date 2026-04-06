import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      colors: {
        brand: {
          50:  '#fff4f0',
          100: '#ffe4d9',
          200: '#ffc4a8',
          300: '#ff9970',
          400: '#ff6b38',
          500: '#e8440a',
          600: '#c93a08',
          700: '#a82f05',
          800: '#7f2304',
          900: '#561802',
        },
      },
      animation: {
        'pulse-dot': 'pulse-dot 2.2s ease-in-out infinite',
        'fade-up':   'fade-up 0.6s ease forwards',
        'spin-slow': 'spin 3s linear infinite',
      },
      keyframes: {
        'pulse-dot': {
          '0%, 100%': { opacity: '1', transform: 'scale(1)',    boxShadow: '0 0 0 0 rgba(232,68,10,0.5)' },
          '50%':       { opacity: '0.8', transform: 'scale(0.9)', boxShadow: '0 0 0 6px rgba(232,68,10,0)' },
        },
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
      },
      backgroundImage: {
        'grid-light': "linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px)",
        'grid-dark':  "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
}
export default config
