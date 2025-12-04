/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        menakta: {
          primaryFirst: "#0041D5",       // Palatinate Blue
          primarySecond: "#00B0FF",       // Blue Bolt
          secondaryFirst: "#0B0B0A",       // Wood Smoke
          secondarySecond: "#F4F4F4",      // White Smoke
        },
      },

      fontFamily: {
        tusker: ["Tusker", "sans-serif"],
        clash: ["ClashDisplay", "sans-serif"],
      },

      backgroundColor: {
        page: "#0B0B0A", // site default dark background
      },
    },
  },
  plugins: [],
};
