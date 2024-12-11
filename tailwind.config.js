/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        bowlby: ['Bowlby One', 'sans-serif'],
        inter: ['Inter', 'sans-serif']
      },
      colors: {
        customGrey: "#1E1E1E",
        customBeige: '#E9E3DC',
        customLilac: '#B3A0CD',
        customYellowGreen: '#D1EF53'
      },
      width:{
        '60px': '60px',
        '200': '200'
      },
      height:{
        '60px': '60px',
        '200px': '200',
        '753': '753px'
      },
      boxShadow:{
        'my': '10px 10px 0px -2px black'
      },
    },
  },
  plugins: [],
}

