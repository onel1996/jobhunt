/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}',
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blueColor': '#2a68ff',
        'greyish': '#f1f4f8',
        'cardShadow': '#f7f8f9',
        'textColor': '#252b26',
      }
    },
  },
  plugins: [],
}

