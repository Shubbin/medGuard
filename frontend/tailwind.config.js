/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#4Az8BBE", // soft blue
        "primary-dark": "#2563eb", // deep blue
        "secondary-dark": "#2C549C",
        secondary: "#B7D3E3", // light blue
        background: "#ffffff", // classic white
        "background-light": "#eaf6fb", // very light blue
        text: "#1f2937", // slate gray
        danger: "#ef4444", // medical red
        muted: "#e5e7eb", // cool gray
      },
      fontFamily: {
        nunito: "Nunito Sans",
        rubik: "Rubik",
      },
    },
    darkMode: "class",
  },

  plugins: [],
};
