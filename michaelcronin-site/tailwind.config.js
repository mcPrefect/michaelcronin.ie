/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // <--- important!
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",      // Tailwind will scan these
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        handwritten: ['"Caveat"', 'cursive'],
      },
    },
  },
  plugins: [],
}
