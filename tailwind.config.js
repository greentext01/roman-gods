/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      dropShadow: {
        "3xl": "0, 35px, rgba(0, 0, 0, 1)",
      },
    },
    fontFamily: {
      mono: "JetBrains Mono",
    },
  },
  plugins: [],
};
