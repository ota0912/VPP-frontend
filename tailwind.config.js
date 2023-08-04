/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors:{
        'light-gray': '#CCCCCC',
      },
      width: {
        '104': '26rem',
      },
      height: {
        '112': '28.75rem',
      }
    },
  },
  plugins: [],
}

