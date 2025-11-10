/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // example fintech colors you can adjust
      colors: {
        fluxelBlue: "#0a66c2",
        fluxelDark: "#0b0c10",
        fluxelGray: "#f4f5f7",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        sans: ['"Golos Text"', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif']
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide') // Assuming you kept this for the phone scrollbar
  ],

}
