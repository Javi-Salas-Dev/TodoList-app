/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0A2647',
        secondary: '#144272',
        optinal: '#1C82AD',
        text_secundary: '#03C988',
    },
      fontFamily: {
        anton: "'Anton', serif",
        inter: "'Inter', serif", 
      },
      backgroundImage: {
        'optional-background': "url('/public/optional-background.svg')",
      },
  },
},
  plugins: [],
}
