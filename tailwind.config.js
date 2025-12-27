/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        gray: {
          50: '#F7F7F8',  // The main background color
          100: '#ECECFO', // Borders
          200: '#E2E2E5',
          400: '#9CA3AF', // Muted text
          800: '#1F2937', // Primary text
        },
        rose: {
          500: '#E11D48', // Primary Brand Color
          50: '#FFF1F2',  // Light backgrounds
        }
      },
      borderRadius: {
        '3xl': '1.5rem',
      }
    },
  },
  plugins: [],
}