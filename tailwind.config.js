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
          50: '#faf5ff',   // Very light purple
          100: '#f3e8ff',  // Light purple
          200: '#e9d5ff',  // Lighter purple
          300: '#d946ef',  // Medium purple
          400: '#c855f7',  // Medium-dark purple
          500: '#c300ff',  // Your brand purple
          600: '#a21caf',  // Darker purple
          700: '#86198f',  // Much darker purple
          800: '#701a75',  // Very dark purple
          900: '#581c87',  // Darkest purple
        },
        secondary: {
          500: '#1c1c1c',  // Your brand dark gray
          600: '#171717',  // Darker gray
          700: '#0a0a0a',  // Very dark gray
          800: '#000000',  // Black
        },
        dark: {
          500: '#1c1c1c',  // Your brand dark color
          600: '#171717',
          700: '#0a0a0a',
          800: '#000000',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}