/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#B8A165',
        'secondary': '#6B7B5F',
        'accent': '#E8B4B8',
        'background': '#f5f1e4',
        'text': '#4A4A4A',
      },
      fontFamily: {
        'serif': ['Playfair Display', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}
