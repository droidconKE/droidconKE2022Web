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
      animation: {
        marquee: 'marquee 30s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      colors: {
        primary: '#0055FF',
        secondary: '#00FF4F',
        accent: '#F0F5FF',
        // white exists
        lighter: '#F5F5F5',
        light: '#707070',
        black: '#000000',
        'accent-2': '#7DE1C3',
        'secondary-2': '#FB7B3C',
        'accent-3': '#68DEA44D',
        // dark
        'primary-dark': '#0055FF',
        'secondary-dark': '#00FF4F',
        'accent-dark': '#00E2C3',
        'white-dark': '#ffffff',
        // for white bgs in dark
        dark: '#000000',
        'lighter-dark': '#F5F5F5',
        'light-dark': '#707070',
        'darker-dark': '#191D1D',
        'black-dark': '#000000',
        'accent-2-dark': '#7DE1C3',
        'accent-3-dark': '#68DEA44D',
        'secondary-2-dark': '#FB7B3C',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}
