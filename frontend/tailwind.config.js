/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customGreen: '#128c7e',
        customGray: '#f0f2f5',
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}