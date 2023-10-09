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
        'custom-Pink-light': '#ffd2c2',
        'custom-orange-shade': '#ff8a48'
      },
      textColor: {
        'custom-yellow': '#FFBE30',
        'custom-Pink': '#ff5f6a',
        'custom-Pink-light': '#ffd2c2',
        'custom-orange-shade': '#ff8a48',
        'custom-primary': '#414040',
        'custom-secondary': '#707070',
      }
    },
  },
  plugins: [require("daisyui")],
}

