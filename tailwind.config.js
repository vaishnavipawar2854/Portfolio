/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          900: '#0a0a0f',
          800: '#12121a',
          700: '#1a1a26',
          600: '#22222f',
          500: '#2a2a38',
        },
        accent: {
          primary: '#a78bfa',
          secondary: '#c4b5fd',
          glow: '#7c3aed',
          muted: '#5b21b6',
        },
        surface: {
          glass: 'rgba(26, 26, 38, 0.6)',
          glassBorder: 'rgba(167, 139, 250, 0.15)',
        },
      },
      fontFamily: {
        sans: ['Outfit', 'system-ui', 'sans-serif'],
        display: ['Clash Display', 'Outfit', 'system-ui', 'sans-serif'],
      },
      animation: {
        'glow-pulse': 'glow-pulse 2.5s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        'glow-pulse': {
          '0%, 100%': { opacity: '0.5', filter: 'brightness(1)' },
          '50%': { opacity: '0.8', filter: 'brightness(1.2)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      boxShadow: {
        'glow': '0 0 40px -10px rgba(167, 139, 250, 0.4)',
        'glow-sm': '0 0 20px -5px rgba(167, 139, 250, 0.3)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
