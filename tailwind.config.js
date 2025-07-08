
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
    },
      colors: {
        pumpkin: '#D2632F',
        butter: '#F9E3A2',
        olive: '#4C6B38',
        gold: '#DA9D3B',
        lilac: '#A59AC2',
        bluegray: '#6A96A5',
      },
    },
  },
  plugins: [],
};
