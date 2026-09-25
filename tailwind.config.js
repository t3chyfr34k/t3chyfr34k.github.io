/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './qxjvmbn/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        slate: {
          950: '#090b10',
          925: '#0d1117',
          900: '#111827',
        },
        ember: '#8ec5ff',
        mint: '#9fe7d1',
      },
      boxShadow: {
        glow: '0 0 30px rgba(142, 197, 255, 0.18)',
      },
      letterSpacing: {
        display: '-0.04em',
      },
      fontFamily: {
        sans: ['Inter', 'Segoe UI', 'sans-serif'],
      },
      backgroundImage: {
        grid: 'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)',
      },
    },
  },
  plugins: [],
}
