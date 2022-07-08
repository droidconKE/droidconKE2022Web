/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './constant/**/*.{js,ts}',
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        //
        primary: '#000CEB',
        secondary: '#FF6E4D',
        accent: '#00E2C3',
        // white exists
        lighter: '#F5F5F5',
        light: '#707070',
        black: '#20201E',
        'accent-2': '#7DE1C3',
        'secondary-2': '#FB7B3C',
        'accent-3': '#68DEA44D',
        // dark
        // TODO: to replace when ready
        'primary-dark': '#000CEB',
        'secondary-dark': '#FF6E4D',
        'accent-dark': '#00E2C3',
        'white-dark': '#ffffff',
        // for white bgs in dark
        dark: '#20201E',
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
