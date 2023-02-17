/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FFD700",
        dark: "#18181B",
        button: "#FFD700",
        buttonHover: "#FADC3C",
      },
      screens: {
        "-2xl": { max: "1535px" },
        "-xl": { max: "1279px" },
        "-lg": { max: "1024px" },
        "-md": { max: "768px" },
        "-sm": { max: "640px" },
        "3xl": { min: "1820px" },
      },
    },
  },
  plugins: [],
};
