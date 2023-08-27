/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
      },
      colors: {
        'dark-blue': '#10141e',
        'semi-dark-blue': '#161d2f',
        'mred': '#fc4747',
        'greyish-blue': '#5a698f',
        'pure-white': '#ffffff',

      }
    },
  },
  plugins: [],
}

