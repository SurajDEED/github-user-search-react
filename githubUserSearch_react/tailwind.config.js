/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    screens: {
      'xs': '200px',
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        // Light Mode
        lightGray: '#F6F8FF',
        lightWhite: '#FEFEFE',
        customGrey: '#697C9A',
        midBlue: '#4B6A9B',
        blakishBlack: '#2B3442',
        // Dark mode
        customBlue: '#0079FF',
        white: '#FFFFFF',
        customBlack: '#141D2F',
        darkBlue: '#1E2A47',


      },
    },
  },
  plugins: [],
}