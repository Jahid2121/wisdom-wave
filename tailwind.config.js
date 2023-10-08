/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
      Roboto  : "'Roboto', sans-serif", 
      Lato  : "'Lato', sans-serif", 
      },
      backgroundColor: {
        'custom-yellow': '#FFBE30'
      },
      textColor: {
        'custom-yellow': '#FFBE30'
      }
    },
  },
  plugins: [require("daisyui")],
}

