/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "index.html" , 
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main-color': '#E8DED1',
        'pricing-color': '#804C36',
        'template-color': '#454242',
        'black': '#000000',
        'white': '#FFFFFF',
        'gray': '#9F9F9F', 
        'yell': '#FFF9E5'
      },
      backgroundImage: {
        'hero-pattern': "url(./assets/page-head.png)"
      }
    },
  },
  plugins: [],
}
