/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        myDark: "#1A1A1A",
        myDarkBlue: "#19647E",
        myGreen: "#28CDBA",
        myRed: "#FF554D",
        myPurple: "#96AAFE",
        myPurpleLight: "#CFD7FB",
      },
      backgroundImage: {
        shape3: "url('/src/assets/shape3.svg')",
        signUp: "url('/src/assets/signUp_shape.svg')",
        login: "url('/src/assets/login_shape.svg')",
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
};
