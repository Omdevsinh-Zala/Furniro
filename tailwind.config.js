/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'selector',
    content: ["./**/*.{html,js}"],
    theme: {
        fontFamily: {
            pop: 'Poppins, ui-serif', // Adds a new `font-display` class
        },
        container:{
            center: true,
            screens: {
                '2xl': '1440px'
            }
        },
      extend: {},
    },
    plugins: [],
  }