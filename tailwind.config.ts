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
          100: '#ffe3d6',
          200: '#ffbfa0',
          300: '#ff9060',
          400: '#ff6030',
          500: '#e8440a', // primary
          600: '#c93808',
          700: '#a82d06',
          800: '#7d2005',
          900: '#5c1803',
        },
        // Neutral with a very slight warm tint — not pure gray
        ink: {
          50:  '#fafaf9',
          100: '#f5f4f2',
          200: '#ebebea',
          300: '#d6d4d1',
          400: '#a8a5a0',
          500: '#79766f',
          600: '#57534e',
          700: '#3c3935',
          800: '#292622',
          900: '#1a1714',
          950: '#0f0d0b',
        },
        surface: {
          DEFAULT: '#ffffff',
          soft:    '#fafaf9',
          muted:   '#f5f4f2',
        },
      },
      maxWidth: { container: '1160px' },
      borderRadius: {
        '2xl': '16px',
        '3xl': '22px',
        '4xl': '28px',
      },
      fontSize: {
        '2xs': ['0.68rem', { lineHeight: '1.4' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
      animation: {
        'pulse-dot':  'pulse-dot 2.4s ease-in-out infinite',
        'marquee':    'marquee 36s linear infinite',
        'float':      'float 6s ease-in-out infinite',
        'beam':       'beam 3s linear infinite',
        'fade-up':    'fade-up 0.55s cubic-bezier(0.22,1,0.36,1) forwards',
        'scale-in':   'scale-in 0.3s cubic-bezier(0.22,1,0.36,1) forwards',
      },
      keyframes: {
        'pulse-dot': {
          '0%,100%': { transform:'scale(1)',   boxShadow:'0 0 0 0 rgba(232,68,10,0.45)' },
          '60%':     { transform:'scale(0.88)',boxShadow:'0 0 0 6px rgba(232,68,10,0)'  },
        },
        'marquee':  { '0%':{ transform:'translateX(0)' }, '100%':{ transform:'translateX(-33.333%)' } },
        'float':    { '0%,100%':{ transform:'translateY(0px)' }, '50%':{ transform:'translateY(-8px)' } },
        'beam':     { '0%':{ transform:'translateX(-100%)' }, '100%':{ transform:'translateX(300%)' } },
        'fade-up':  { from:{ opacity:'0',transform:'translateY(16px)' }, to:{ opacity:'1',transform:'translateY(0)' } },
        'scale-in': { from:{ opacity:'0',transform:'scale(0.95)' }, to:{ opacity:'1',transform:'scale(1)' } },
      },
      boxShadow: {
        'brand':    '0 6px 20px rgba(232,68,10,0.28), 0 2px 6px rgba(232,68,10,0.16)',
        'brand-lg': '0 12px 36px rgba(232,68,10,0.32), 0 4px 12px rgba(232,68,10,0.18)',
        'card':     '0 1px 4px rgba(0,0,0,0.04), 0 6px 20px rgba(0,0,0,0.05)',
        'card-hover':'0 4px 16px rgba(0,0,0,0.06), 0 20px 48px rgba(0,0,0,0.08)',
        'glass':    'inset 0 1px 0 rgba(255,255,255,0.9), 0 1px 3px rgba(0,0,0,0.08)',
        'lifted':   '0 2px 8px rgba(0,0,0,0.06), 0 8px 24px rgba(0,0,0,0.08), 0 0 0 1px rgba(0,0,0,0.04)',
      },
      transitionTimingFunction: {
        spring:  'cubic-bezier(0.22, 1, 0.36, 1)',
        'in-out-spring': 'cubic-bezier(0.68, -0.55, 0.27, 1.55)',
      },
    },
  },
  plugins: [],
}
export default config
