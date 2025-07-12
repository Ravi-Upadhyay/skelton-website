/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,js,ts,jsx,tsx,md}",
    "./public/web-components/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#062a4c',
        secondary: '#969eb0',
        tertiary: '#a8afb8',
        accent: '#c0e322',
        highlight: '#d2ff28',
        offwhite: '#f0f7f9',
        deepcharcoal: '#0c1b1d',
      },
    },
  },
  plugins: [],
}

