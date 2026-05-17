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
          50:  '#FFF5EC',
          100: '#FFE2C5',
          200: '#FFC089',
          300: '#FFB069',
          400: '#F88638',
          500: '#F26A1E',  // refined primary
          600: '#DC5A12',
          700: '#B0440A',
          800: '#7E3007',
          900: '#4D1C03',
        },
        ink: {
          50:  '#F7F8FB',
          100: '#ECEFF4',
          200: '#D5DAE3',
          400: '#737B8C',
          600: '#3C4252',
          800: '#161B27',
          900: '#0B0F1A',
        },
      },
      fontFamily: {
        sans: ['ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'Inter', 'Helvetica', 'Arial', 'sans-serif'],
        display: ['ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 10px 30px -10px rgba(242, 106, 30, 0.18), 0 4px 12px -4px rgba(11, 15, 26, 0.06)',
        card: '0 8px 24px -8px rgba(11, 15, 26, 0.08)',
        glow: '0 0 0 1px rgba(242, 106, 30, 0.18), 0 16px 40px -12px rgba(242, 106, 30, 0.35)',
      },
      borderRadius: { xl2: '1.25rem' },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, #F26A1E 0%, #FFB069 100%)',
        'brand-soft': 'linear-gradient(180deg, #FFF7EE 0%, #FFFFFF 60%)',
      },
      keyframes: {
        float:     { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-14px)' } },
        floatSlow: { '0%,100%': { transform: 'translate(0,0) scale(1)' }, '50%': { transform: 'translate(20px,-20px) scale(1.04)' } },
      },
      animation: {
        float: 'float 7s ease-in-out infinite',
        floatSlow: 'floatSlow 14s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

export default config;
