/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        amazoneclone: {
          background: "#EAEDED",
          light_blue: "#232f3a",
          yellow: "#fe8069",
          DEFAULT: "#131921",
        },
      },
    },
  },
  plugins: [],
};
