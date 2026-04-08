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
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
      },
      fontSize: {
        // Scaled up ~25% from default Tailwind
        'xs':   ['0.8rem',  { lineHeight: '1.5' }],
        'sm':   ['0.925rem',{ lineHeight: '1.6' }],
        'base': ['1rem',    { lineHeight: '1.75' }],
        'lg':   ['1.15rem', { lineHeight: '1.7'  }],
        'xl':   ['1.3rem',  { lineHeight: '1.6'  }],
        '2xl':  ['1.6rem',  { lineHeight: '1.4'  }],
        '3xl':  ['2rem',    { lineHeight: '1.2'  }],
        '4xl':  ['2.5rem',  { lineHeight: '1.15' }],
        '5xl':  ['3.2rem',  { lineHeight: '1.08' }],
        '6xl':  ['4rem',    { lineHeight: '1.05' }],
        '7xl':  ['5rem',    { lineHeight: '1.02' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
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
      maxWidth: {
        'container': '1260px',
      },
      animation: {
        'pulse-dot':  'pulse-dot 2.2s ease-in-out infinite',
        'fade-up':    'fade-up 0.6s ease forwards',
        'marquee': 'marquee 30s linear infinite',
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
        'marquee':  { '0%': { transform: 'translateX(0)' }, '100%': { transform: 'translateX(-33.333%)' } },
      },
    },
  },
  plugins: [],
}
export default config
