/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Paleta principal focada em Rose/Red para tema de sangue
        rose: {
          50: '#fff1f2',
          100: '#ffe4e6',
          200: '#fecdd3',
          300: '#fda4af',
          400: '#fb7185',
          500: '#f43f5e',
          600: '#e11d48',
          700: '#be123c',
          800: '#9f1239',
          900: '#881337',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in': 'fadeIn 1s ease-out forwards',
        'slide-up': 'slideUp 0.8s ease-out forwards',
        'fall': 'fall linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(50px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fall: {
          '0%': { 
            transform: 'translateY(-100vh) rotate(0deg)',
            opacity: '1'
          },
          '100%': { 
            transform: 'translateY(100vh) rotate(360deg)',
            opacity: '0'
          },
        },
      },
      
      // ============================================
      // NOVA SEÇÃO: REDUÇÃO DE ESCALA (20%)
      // ============================================
      fontSize: {
        'xs': ['0.60rem', { lineHeight: '1rem' }],
        'sm': ['0.70rem', { lineHeight: '1.25rem' }],
        'base': ['0.55rem', { lineHeight: '1.25rem' }],
        'lg': ['0.9rem', { lineHeight: '1.5rem' }],
        'xl': ['1rem', { lineHeight: '1.6rem' }],
        '2xl': ['1.2rem', { lineHeight: '1.8rem' }],
        '3xl': ['1.5rem', { lineHeight: '2rem' }],
        '4xl': ['1.8rem', { lineHeight: '2.25rem' }],
        '5xl': ['2.4rem', { lineHeight: '2.5rem' }],
        '6xl': ['3rem', { lineHeight: '3rem' }],
        '7xl': ['3.6rem', { lineHeight: '3.75rem' }],
        '8xl': ['4.8rem', { lineHeight: '4.5rem' }],
        '9xl': ['6rem', { lineHeight: '5.5rem' }],
      },
      
      spacing: {
        'px': '1px',
        '0': '0',
        '0.5': '0.1rem',
        '1': '0.2rem',
        '1.5': '0.3rem',
        '2': '0.4rem',
        '2.5': '0.5rem',
        '3': '0.6rem',
        '3.5': '0.7rem',
        '4': '0.8rem',
        '5': '1rem',
        '6': '1.2rem',
        '7': '1.4rem',
        '8': '1.6rem',
        '9': '1.8rem',
        '10': '2rem',
        '11': '2.2rem',
        '12': '2.4rem',
        '14': '2.8rem',
        '16': '3.2rem',
        '20': '4rem',
        '24': '4.8rem',
        '28': '5.6rem',
        '32': '6.4rem',
        '36': '7.2rem',
        '40': '8rem',
        '44': '8.8rem',
        '48': '9.6rem',
        '52': '10.4rem',
        '56': '11.2rem',
        '60': '12rem',
        '64': '12.8rem',
        '72': '14.4rem',
        '80': '16rem',
        '96': '19.2rem',
      },
    },
  },
  plugins: [],
}
