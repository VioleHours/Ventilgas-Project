/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        waves: "url('src/assets/nav/bg-hero-nav.webp')",
      },
      colors: {
        "custom-blue": "#002064",
      },
    },
  },
  plugins: [],
};
