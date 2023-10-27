/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors:{
        'neutralSilver':"#F5F7FA",
        'neutralGrey':"#4D4D4D",
        'brandPrimary':"#4CAF4F",
        'neutralGrey':"#717171",
        primaryColor:"#2962ff",
        yellowColor:"#FEB60D",
        purpleColor:"#9771FF",
        irisBlueColor:"#01B5C5",
        headingColor:"#181A1E",
        textColor:"#4E545F",
        defult:"#E0E0E0",
        defult2:"#AEAEAE",
        borderColor:"#3D5AFE",
        bgColor1:"#FFFFFF",
        bgcolor2:"#eaefff",
        disablecolor:"#e0e0e0",
        distext:"#cbcbcb",
        secondary:"#455A64",
        danger:"#D32F2F",
        // last 4 code 
        primary2:"#0039CB",
        secondary2:"#1C313A",
        danger2:"#9A0007",     
        leftbackcolor:"#FAFBFD"

      }
    },
  },
  plugins: [],
};
