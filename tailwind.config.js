/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'apex': {
          blue: '#1E3A8A',
          'blue-hover': '#1d4ed8',
          gold: '#F59E0B',
          bg: '#F8FAFC',
          surface: '#FFFFFF',
          dark: '#0F172A',
          gray: '#475569',
          'gray-light': '#94A3B8',
          'border': '#E2E8F0',
          'border-light': '#F1F5F9',
        },
      },
      fontFamily: {
        heading: ['Outfit', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 4px 6px -1px rgb(0 0 0 / 0.07), 0 2px 4px -2px rgb(0 0 0 / 0.05)',
        'card-hover': '0 10px 15px -3px rgb(0 0 0 / 0.08), 0 4px 6px -4px rgb(0 0 0 / 0.05)',
        'search': '0 4px 12px -2px rgb(30 58 138 / 0.12)',
      },
      borderRadius: {
        'btn': '8px',
        'card': '12px',
      },
      maxWidth: {
        'platform': '1200px',
      },
    },
  },
  plugins: [],
};
