/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './constant/**/*.{js,ts}',
    './globals.css',
    './styles/**/*.{css,scss,sass}',
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        primary: '#0055FF',
        secondary: '#00FF4F',
        accent: '#000000',
        // white exists
        lighter: '#F5F5F5',
        light: '#707070',
        black: '#000000',
        'accent-2': '#7DE1C3',
        'accent-3': '#68DEA44D',
        // dark
        'primary-dark': '#0055FF',
        'secondary-dark': '#00FF4F',
        'accent-dark': '#000000',
        'white-dark': '#ffffff',
        // for white bgs in dark
        dark: '#000000',
        'lighter-dark': '#F5F5F5',
        'light-dark': '#707070',
        'darker-dark': '#191D1D',
        'black-dark': '#000000',
        'accent-2-dark': '#7DE1C3',
        'accent-3-dark': '#68DEA44D',
      },
      borderRadius: {
        card: '1rem',
        stat: '2rem',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}
