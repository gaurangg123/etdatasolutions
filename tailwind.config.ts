import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50:  '#FFF4EA',
          100: '#FFE3C6',
          200: '#FFC788',
          300: '#FFAB4D',
          400: '#FF931F',
          500: '#FF7A00', // primary orange
          600: '#E66700',
          700: '#B34F00',
          800: '#803800',
          900: '#4D2200',
        },
        ink: {
          50:  '#F8F9FB',
          100: '#EEF1F5',
          200: '#D9DEE6',
          400: '#7C8493',
          600: '#454C5A',
          800: '#1F2430',
          900: '#0F131C',
        },
      },
      fontFamily: {
        sans: ['ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'Inter', 'Helvetica', 'Arial', 'sans-serif'],
        display: ['ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 10px 30px -10px rgba(255, 122, 0, 0.15), 0 4px 12px -4px rgba(15, 19, 28, 0.06)',
        card: '0 8px 24px -8px rgba(15, 19, 28, 0.08)',
        glow: '0 0 0 1px rgba(255, 122, 0, 0.15), 0 16px 40px -12px rgba(255, 122, 0, 0.35)',
      },
      borderRadius: {
        xl2: '1.25rem',
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, #FF7A00 0%, #FFA94D 100%)',
        'brand-soft': 'linear-gradient(180deg, #FFF7EE 0%, #FFFFFF 60%)',
      },
      keyframes: {
        float: {
          '0%,100%': { transform: 'translateY(0px)' },
          '50%':     { transform: 'translateY(-14px)' },
        },
        floatSlow: {
          '0%,100%': { transform: 'translate(0,0) scale(1)' },
          '50%':     { transform: 'translate(20px,-20px) scale(1.04)' },
        },
        sheen: {
          '0%':   { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '100% 50%' },
        },
      },
      animation: {
        float: 'float 7s ease-in-out infinite',
        floatSlow: 'floatSlow 14s ease-in-out infinite',
        sheen: 'sheen 8s linear infinite',
      },
    },
  },
  plugins: [],
};

export default config;
