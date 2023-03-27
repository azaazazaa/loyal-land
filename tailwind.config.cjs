/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'customChat': ' 0px 6px 20px 5px rgba(0, 0, 0, 0.25);'
      },
      colors: {
        purple: '#6750A4',
        pink: '#FF7475',
        purple_dark: '#381E72',
        header_links: '#050038',
        gold: '#FEB100',
        pink_light: '#EA6669'
      },
      fontSize: {
        'big': ['30px', '38px']
      },
    },
  },
  plugins: [],
}
