/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    screens: {
      'ss': '320px',
      'xs': '960px', // новая точка останова для экранов от 320 пикселей
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      // ... другие точки останова
    },
    extend: {
      gridTemplateRows: {
        'layout': 'auto 1fr auto',
      },
      colors: {
        'logo-main': '#9b0404',
      },
      fontFamily: {
        main: ['Montserrat'],
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

