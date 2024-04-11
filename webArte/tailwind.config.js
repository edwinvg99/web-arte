/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:'#0d1b2a',
        secondary:'#415a77',
        tertary:'#e0e1dd'
      },
    },
  },
  plugins: [],
}

