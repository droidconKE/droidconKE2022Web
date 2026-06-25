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
        // 2026 rebrand — blue primary + green accent (retires cyan/orange).
        // Existing token names kept (remapped) so nothing breaks; component
        // cleanup is per-phase. New ramps below: bg-blue-500, text-green-500…
        primary: '#0055FF',
        secondary: '#00FF4F',
        accent: '#00FF4F',
        // white exists
        lighter: '#F5F5F5',
        light: '#707070',
        black: '#20201E',
        'accent-2': '#70FF9B',
        'secondary-2': '#2BFD6B',
        'accent-3': '#00FF4F4D',
        // dark
        'primary-dark': '#0055FF',
        'secondary-dark': '#00FF4F',
        'accent-dark': '#00FF4F',
        'white-dark': '#ffffff',
        // for white bgs in dark
        dark: '#20201E',
        'lighter-dark': '#F5F5F5',
        'light-dark': '#707070',
        'darker-dark': '#191D1D',
        'black-dark': '#000000',
        'accent-2-dark': '#70FF9B',
        'accent-3-dark': '#00FF4F4D',
        'secondary-2-dark': '#2BFD6B',
        // Full ramps from the Figma variable export (public/docs/colors)
        blue: {
          50: '#EDF6FF',
          100: '#D6EAFF',
          200: '#B5DBFF',
          300: '#83C6FF',
          400: '#48A7FF',
          500: '#1E83FF',
          600: '#0666FF',
          700: '#0055FF',
          800: '#0842C5',
          900: '#0D3C9B',
        },
        green: {
          50: '#EDFFF1',
          100: '#D5FFE1',
          200: '#AEFFC6',
          300: '#70FF9B',
          400: '#2BFD6B',
          500: '#00FF4F',
          600: '#00C03C',
          700: '#00962F',
          800: '#06752A',
          900: '#076025',
        },
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}
