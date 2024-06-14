const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "450px",
        ...defaultTheme.screens,
      },

      fontFamily: {
        helveticaProCn: "Helvetica Pro Condensed",
      },
      boxShadow: {
        btn: "6px 8px 0px 0px rgba(0, 0, 0, 0.15)",
      },
      backgroundImage: {
        peachGreenGr:
          "linear-gradient(0deg, #FFFACE 15%, #CEFAFF 60%, #FFD9CE 100%)",
      },
      colors: {
        blue: "#3042FB",
        green: "#A4FF00",
      },
    },
  },
  plugins: [],
};
