/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        popins: ['Poppins', 'sans-serif'],
        anta: ['Anta', 'sans-serif'],
        raleway: ['Raleway', 'sans-serif'],
        ubuntu: ['Ubuntu', 'sans-serif'],
        passion: ['Passion One', 'sans-serif'],
        oswald:[ 'Oswald', 'sans-serif'],
        neue:['Bebas Neue', 'sans-serif']
      },
      screens:{
        'm':'375px',
        'mm':'530px',
        'ml':'910px'
      }
    },
  },
  plugins: [],
};
