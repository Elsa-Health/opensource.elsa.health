const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'body': ['AvenirLTStd-Heavy', 'AvenirLTStd-Medium', 'AvenirLTStd-Book'],
    },
    extend: {
      colors: {
        cyan: colors.cyan,
        primary: "#4665AF"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
}
