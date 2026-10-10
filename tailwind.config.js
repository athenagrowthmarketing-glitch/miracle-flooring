/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#0F223D',
          navyDark: '#091629',
          navyLight: '#1B365D',
          red: '#B32025',
          redHover: '#96191D',
          charcoal: '#1F242E',
          charcoalLight: '#4B5565',
          stone: '#F4F3EF',
          stoneDark: '#E5E3DC',
          warmWhite: '#FAF9F6',
          oak: '#C49A6C',
          oakLight: '#F3ECE2',
        }
      },
      fontFamily: {
        serif: ['"DM Serif Display"', 'Georgia', 'serif'],
        sans: ['Manrope', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        subtle: '0 2px 10px rgba(15, 34, 61, 0.05)',
        card: '0 8px 30px rgba(15, 34, 61, 0.08)',
        elevated: '0 14px 45px rgba(15, 34, 61, 0.12)',
      }
    },
  },
  plugins: [],
}
