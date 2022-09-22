/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        default: ["LOGO"],
        poppins: ["Poppins"],
      },
      minWidth: {
        "1/2": "50%",
      },
    },
  },
  plugins: [],
};
