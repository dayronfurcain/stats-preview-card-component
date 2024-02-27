/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        'lexend-deca': ['"Lexend Deca"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
