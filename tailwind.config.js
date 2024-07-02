/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-main-dark": "#080321",
        "custom-secondary-dark": "#14102C",
      },
    },
  },
  plugins: [],
};

