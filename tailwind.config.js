/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-300": "#FBAF85",
        "primary-500": "#D87D4A",
        "gray-20": "#FAFAFA",
        "gray-100": "#F1F1F1"
      },
      fontFamily: {
        manrope: ["Manrope", "sans-serif"]
      }
    },
  },
  plugins: [],
};
