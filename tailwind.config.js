/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontSize: {
        "2xxl": "28px",
        "3xxl": "32px",
        "4xxl": "40px",
        "5xxl": "52px",
        "6xxl": "64px",
      },
      fontFamily: {
        Mukta: ' "Mukta", sans-serif',
      },
      colors: {
        "dark-blue": "#03045E",
        "dark-gray": "#4D4D4D",
        "light-gray": "#B2DEEE",
        "light-blue": "#E6F8FC",
        "dark-sky": "#00B5D8",
        "light-gray-custom": "#E6E6EF",
        "gray-low": "#e6e6e6",
        "gray-ededed": "#EDEDED",
        "gray-959595": "#959595",
      },
      backgroundSize: {
        full: "100% 100%",
      },
      boxShadow: {
        inputNumber: ["0px 0px 4px 0px #97979740"],
        AdvantagesCard: [" 0px 16px 25.3px 0px #00000014"],
        CreateAccountCard: [" 0px 0px 9.5px 0px #00000014"],
      },
      animation: {
        moveToX: "goX .3s linear",
        jumploaction: "jump .7s linear  infinite alternate",
      },
      keyframes: {
        goX: {
          "0%": { left: "-20%" },
          "100%": { left: "115%" },
        },
        gobefore: {
          "0%": { bottom: "0" },
          "100%": { bottom: "89px" },
        },
        goafter: {
          "0%": { top: "0" },
          "100%": { top: "89px" },
        },
        jump: {
          "0%": { transform: " translateY(0) " },
          "100%": { transform: "translateY(-10%)" },
        },
      },
      backgroundImage: {
        backgroundhead:
          "linear-gradient(7.95deg, rgba(0, 181, 216, 0.05) -3.4%, rgba(0, 0, 128, 0.05) 114.66%)",
        skydarkgradiant:
          "linear-gradient(7.95deg, #00B5D8 -3.4%, #000080 114.66%)",
      },
    },
  },
  plugins: [],
};
