/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,tsx}"],
  theme: {
    fontFamily:{
      "sans": ["Poppins", 'sans-serif']
    },
    extend: {
      colors: {
        "title": "#fffcf9",
        "subtitle": "#b3b3b3",
        "bg-button": "#e9e6e3",
      }
    },
  },
  plugins: [],
}