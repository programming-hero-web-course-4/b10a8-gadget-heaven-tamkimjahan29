/** @type {import('tailwindcss').Config} */

import daisyui from 'daisyui'
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        banner:"url('/img/hero-pattern.svg')",
      },
    },
  },
  plugins: [ daisyui],
}

