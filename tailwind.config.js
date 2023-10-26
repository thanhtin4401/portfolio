/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  fontFamily: {
    body: ["Ubuntu"],
  },
  colors: {
    "bubble-gum": "#ff77e9",
    "primary-color": "#6D6CE3",
    "text-color": "#0C273C",
    "second-color": "#2E3E5C",
    "gray-color": "#282C4B",
    "background-color": "#F7F8F9",
    "blue-color-300": "#0C0F93",
    "dark-blue": "#170F49",
    "black-color-300": "#0C0F9308",
    white: "#FFFFFF",
  },
  plugins: [],
};
