/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'my-white':	'#ffffff',
      'my-light-pink':	'#f9f0ff',
      'my-grayish-purple':	'#8c6991',
      'my-dark-purple':	'#2f1533',
    },
    extend: {},
  },
  plugins: [],
}

