const typography = require("@tailwindcss/typography");

module.exports = {
  content: ["./docs/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {},
  },
  plugins: [typography],
};
