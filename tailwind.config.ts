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
        },
        surface: {
          DEFAULT: '#ffffff',
          secondary: '#f9fafb',
          tertiary: '#f3f4f6',
        },
      },
      maxWidth: { container: '1200px' },
      animation: {
        'pulse-dot': 'pulse-dot 2s ease-in-out infinite',
        'marquee':   'marquee 32s linear infinite',
        'fade-up':   'fade-up 0.5s ease forwards',
      },
      keyframes: {
        'pulse-dot': {
          '0%,100%': { opacity:'1', transform:'scale(1)',    boxShadow:'0 0 0 0 rgba(232,68,10,0.5)'  },
          '50%':      { opacity:'.8', transform:'scale(0.9)', boxShadow:'0 0 0 5px rgba(232,68,10,0)' },
        },
        'marquee':  { '0%': { transform:'translateX(0)' }, '100%': { transform:'translateX(-33.333%)' } },
        'fade-up':  { from:{ opacity:'0', transform:'translateY(18px)' }, to:{ opacity:'1', transform:'translateY(0)' } },
      },
      transitionTimingFunction: {
        spring: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
}
export default config
