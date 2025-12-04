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
    ,
    colors:{
      primary:"#737373",
      secondary:"#6A4DF4",
      thrid:"#151515"
    },  
    
    fontFamily: {
    inter: ["Inter","sans-serif"]
      
      
   
     
    },
  },
  plugins: [],
}

