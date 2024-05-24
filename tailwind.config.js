/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        "inter" : ['inter']
      },
      colors:{
        "grey" :'#667085',
        "brokenwhite" :'#F9FAFB',
      }
    },
  },
  plugins: [],
}

