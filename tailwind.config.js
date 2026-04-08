/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#2a9d8f',
          DEFAULT: '#00838f', // Teal
          dark: '#005b63',
        },
        secondary: {
          light: '#e0f2f1',
          DEFAULT: '#b2dfdb',
        },
        accent: '#e91e63',
      },
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
