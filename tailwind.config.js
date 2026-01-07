/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'portfolio-green': '#DEFF06', 
        'title-gray': '#D9D9D9', 
        'tag-gray': '#979797', 
        'background-light': '#F0F5F5',
      },
      fontFamily: {
        'neue': ['NeueMontreal', 'sans-serif'],
        'neue-semibold': ['NeueMontrealSemiBold'],
        'neue-book-semi': ['NeueMontrealBookSemi'],
      },
    },
  },
  plugins: [],
}