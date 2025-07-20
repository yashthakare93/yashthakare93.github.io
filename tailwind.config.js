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
      heading: ['Playfair Display', 'serif'],
    },
  },
},
  plugins: [],
 
}