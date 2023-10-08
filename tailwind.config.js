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
        'custom-yellow': '#FFBE30',
        'custom-Pink': '#ff5f6a',
        'custom-Pink-light': '#ffd2c2'
      },
      textColor: {
        'custom-yellow': '#FFBE30',
        'custom-Pink': '#ff5f6a',
        'custom-Pink-light': '#ffd2c2'
      }
    },
  },
  plugins: [require("daisyui")],
}

