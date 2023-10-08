/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
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

