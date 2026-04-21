import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  // Safelist dynamic color classes used in accent maps (items 11, 17, 20, 22, 27, 28)
  safelist: [
    // Fix 3: TrustBar category dot colors
    'bg-sky-400', 'bg-violet-400', 'bg-amber-400', 'bg-emerald-400',
    // Violet — staffing
    'bg-violet-50','text-violet-600','border-violet-200','border-l-violet-500',
    'dark:bg-violet-500/10','dark:text-violet-400','dark:border-violet-500/25','dark:text-violet-500','dark:border-violet-500/20',
    'ring-violet-200','dark:ring-violet-500/30',
    // Sky — data
    'bg-sky-50','text-sky-600','border-sky-200','border-l-sky-500',
    'dark:bg-sky-500/10','dark:text-sky-400','dark:border-sky-500/25','dark:text-sky-500','dark:border-sky-500/20',
    'ring-sky-200','dark:ring-sky-500/30',
    // Emerald — qa
    'bg-emerald-50','text-emerald-600','border-emerald-200','border-l-emerald-500',
    'dark:bg-emerald-500/10','dark:text-emerald-400','dark:border-emerald-500/25','dark:text-emerald-500','dark:border-emerald-500/20',
    'ring-emerald-200','dark:ring-emerald-500/30',
    // Amber — dataeng
    'bg-amber-50','text-amber-600','border-amber-200','border-l-amber-500',
    'dark:bg-amber-500/10','dark:text-amber-400','dark:border-amber-500/25','dark:text-amber-500','dark:border-amber-500/20',
    'ring-amber-200','dark:ring-amber-500/30',
    // Additional icon bg/text/border for contact page
    'text-sky-500','border-sky-100','dark:border-sky-500/20',
    'text-violet-500','border-violet-100','dark:border-violet-500/20',
    'text-emerald-500','border-emerald-100','dark:border-emerald-500/20',
    'text-amber-500','border-amber-100','dark:border-amber-500/20',
    'bg-emerald-500/10','text-emerald-500','border-emerald-200','border-emerald-500/25',
  ],
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
        'marquee':    'marquee 38s linear infinite',
        'float':      'float 6s ease-in-out infinite',
        'beam':       'beam 3s linear infinite',
        'fade-up':    'fade-up 0.55s cubic-bezier(0.22,1,0.36,1) forwards',
        'scale-in':   'scale-in 0.3s cubic-bezier(0.22,1,0.36,1) forwards',
      },
      keyframes: {
        'pulse-dot': {
          '0%,100%': { transform:'scale(1)',    boxShadow:'0 0 0 0 rgba(232,68,10,0.45)' },
          '60%':     { transform:'scale(0.88)', boxShadow:'0 0 0 6px rgba(232,68,10,0)'  },
        },
        'marquee':  { '0%':{ transform:'translateX(0)' }, '100%':{ transform:'translateX(-33.333%)' } },
        'float':    { '0%,100%':{ transform:'translateY(0px)' }, '50%':{ transform:'translateY(-8px)' } },
        'beam':     { '0%':{ transform:'translateX(-100%)' }, '100%':{ transform:'translateX(300%)' } },
        'fade-up':  { from:{ opacity:'0',transform:'translateY(16px)' }, to:{ opacity:'1',transform:'translateY(0)' } },
        'scale-in': { from:{ opacity:'0',transform:'scale(0.95)' }, to:{ opacity:'1',transform:'scale(1)' } },
      },
      boxShadow: {
        'brand':     '0 6px 20px rgba(232,68,10,0.28), 0 2px 6px rgba(232,68,10,0.16)',
        'brand-lg':  '0 12px 36px rgba(232,68,10,0.32), 0 4px 12px rgba(232,68,10,0.18)',
        'card':      '0 1px 4px rgba(0,0,0,0.04), 0 6px 20px rgba(0,0,0,0.05)',
        'card-hover':'0 4px 16px rgba(0,0,0,0.06), 0 20px 48px rgba(0,0,0,0.08)',
        'glass':     'inset 0 1px 0 rgba(255,255,255,0.9), 0 1px 3px rgba(0,0,0,0.08)',
        'lifted':    '0 2px 8px rgba(0,0,0,0.06), 0 8px 24px rgba(0,0,0,0.08), 0 0 0 1px rgba(0,0,0,0.04)',
      },
      transitionTimingFunction: {
        spring:          'cubic-bezier(0.22, 1, 0.36, 1)',
        'in-out-spring': 'cubic-bezier(0.68, -0.55, 0.27, 1.55)',
      },
    },
  },
  plugins: [],
}
export default config
