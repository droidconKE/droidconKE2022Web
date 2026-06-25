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
        black: {
          DEFAULT: '#000000',
          50: '#FAFAFA',
          100: '#F5F5F5',
          200: '#E6E6E6',
          300: '#D6D6D6',
          400: '#A5A5A5',
          500: '#767676',
          600: '#575757',
          700: '#434343',
          800: '#292929',
          900: '#1A1A1A',
        },
        green: {
          50: '#EDFFF1',
          100: '#D5FFE1',
          200: '#AEFFC8',
          300: '#70FF9B',
          400: '#2BFD6B',
          500: '#00FF4F',
          600: '#00C03C',
          700: '#00962F',
          800: '#06752A',
          900: '#076025',
        },
        blue: {
          50: '#EDF8FF',
          100: '#D6EAFF',
          200: '#B5D8FF',
          300: '#83C8FF',
          400: '#48A7FF',
          500: '#1F83FF',
          600: '#0666FF',
          700: '#0055FF',
          800: '#0842C5',
          900: '#0D3C98',
        },
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
