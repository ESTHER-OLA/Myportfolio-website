/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: "#160d34",
        white: "#ffff",
        red: "#6a040f",
        black: "#323540",
        yellow: "#ffb703",
        dark: "#1E2028",
        gold: "#DA9100",
        gray: "#F7F7F7",
      },
      fontFamily: {
        "eb-garamond": ["EB Garamond", "serif"],
      },
    },
  },
  plugins: [],
};
