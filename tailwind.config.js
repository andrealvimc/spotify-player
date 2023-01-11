/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      primary: "#1DB954",
      secondary: {
        1: "#000",
        2: "#191414",
        3: "#fff"
      },
      neutral: {
        1: "#b2b2b2",
        2: "#777777",
        3: "#535353"
      }
    }
  },
  plugins: [],
}
