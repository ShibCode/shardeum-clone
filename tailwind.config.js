/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        helveticaProCn: "Helvetica Pro Condensed",
      },
      boxShadow: {
        btn: "6px 8px 0px 0px rgba(0, 0, 0, 0.15)",
      },
      colors: {
        blue: "#3042FB",
        green: "#A4FF00",
      },
    },
  },
  plugins: [],
};
