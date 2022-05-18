module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./sections/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        accent : {
          100: "hsl(346, 74%, 91%)",
          200: "hsl(345, 74%, 82%)",
          300: "hsl(345, 75%, 73%)",
          400: "hsl(345, 75%, 58%)",
          500: "hsl(345, 75%, 55%)",
          600: "hsl(345, 62%, 44%)",
          700: "hsl(345, 62%, 33%)",
          800: "hsl(345, 61%, 22%)",
          900: "hsl(346, 61%, 11%)"
        }, 
        gray : {
          100: "#e1e4ea",
          200: "#c3c9d5",
          300: "#a6adbf",
          400: "#8892aa",
          500: "#6a7795",
          600: "#555f77",
          700: "#404759",
          800: "#2a303c",
          900: "#15181e"
        },
      },
      fontFamily:{
        orbitron : ["Orbitron", "sans-serif"],
        code     : ["Source Code Pro", "sans-serif"]
      }
    },

  },
  plugins: [],
}