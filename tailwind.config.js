/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
      f59: '59px',
     
    },
    maxWidth:{
      'container':"1320px"
    }
   
     
    },
  },
  plugins: [],
}

