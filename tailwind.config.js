/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'nunito-sans': [ 'Nunito-Sans','sans-serif'],
        'Kanit':['Kanit']
      }
    },
  },
  plugins: [],
}

