/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        purple: '#6750A4',
        pink: '#FF7475',
        purple_dark: '#381E72',
        header_links: '#050038',
        gold: '#FEB100'
      },
      fontSize: {
        'big': ['32px', '40px']
      },
    },
  },
  plugins: [],
}
