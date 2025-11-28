/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0f0f0f",
        secondary: "#1f1f1f",
        accent: "#e5e5e5"
      }
    }
  },
  plugins: []
};
