/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-300": "#FBAF85",
        "primary-500": "#D87D4A",
        "gray-20": "#FAFAFA",
        "gray-100": "#F1F1F1",
        black: "#191919",
      },
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
      },
      backgroundImage: {
        heroImgSm: "url('/src/assets/home/mobile/image-header.jpg')",
        heroImgMd: "url('/src/assets/home/tablet/image-header.jpg')",
        heroImgLg: "url('/src/assets/home/desktop/image-hero.jpg')",
      },
    },
  },
  plugins: [],
};
