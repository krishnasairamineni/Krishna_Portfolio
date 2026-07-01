
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#101828',
        field: '#0f2d3a',
        citrus: '#f5b84b',
        coral: '#e85d75',
        mint: '#62c3a5',
        cloud: '#f8fbfc',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Sora', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 24px 80px rgba(15, 45, 58, 0.18)',
        card: '0 18px 45px rgba(16, 24, 40, 0.12)',
      },
      animation: {
        float: 'float 7s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        pulseLine: 'pulseLine 2.6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        pulseLine: {
          '0%, 100%': { opacity: 0.45, transform: 'scaleX(0.7)' },
          '50%': { opacity: 1, transform: 'scaleX(1)' },
        },
      },
    },
  },
  plugins: [],
};
