/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#C4C4C4',
        'buttonTextDisabled': '#C4C4C4',
        'inputText': '#5E626B',
        'inputBorder': '#E3E8EE',
        'textDefault': "#7D7D7D",
        'textDisabled': '#C2C2C2'
      }
    },
  },
  plugins: [],
}

