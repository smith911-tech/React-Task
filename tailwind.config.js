/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    screens: {
      'lg1187': '1187px',
      // => @media (min-width: 1187px) { ... }

      'mg527': '527px',
      // => @media (min-width: 527px) { ... }

      'mg558': '558px',
      // => @media (min-width: 558px) { ... }

      'mg700': '700px',
      // => @media (min-width: 700px) { ... }

      'mg832': '832px',
      // => @media (min-width: 832px) { ... }
    },
    extend: {
      fontFamily: {
        "Belanosima": ['Belanosima', "sans-serif"],
        "Inter": [ 'Inter', "sans-serif"]
      }
    },
  },
  plugins: [],
}