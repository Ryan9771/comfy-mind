/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "blue-1": "#474973",
        "blue-2": "#1D264F",
        "peach": "#F1DAC4",
        "green-1": '#3B8583',
      },
      fontFamily: {
        sans: ["Custom", "sans-serif"]
      }
    },
  },
  plugins: [],
}

