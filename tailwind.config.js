/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/ui/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#7D4AEA',
          dark: '#692ee7',
          light: '#8a5cec',
        },
        gray: {
          DEFAULT: '#717791',
          dark: '#777777',
          light: '#BBBBBB',
          'extra-light': '#D2DAE3',
        },
        blue: {
          DEFAULT: '#06B5D2',
          facebook: '#1977F2',
          'facebook-dark': '#0d6ae3',
          twitter: '#1E9BF0',
          'twitter-dark': '#0f8ee4',
        },
        red: {
          DEFAULT: '#E60022',
          dark: '#cf001f',
        },
      },
      fontFamily: {
        Inter: ['Inter', 'sans-serif'],
        Poppins: ['Poppins', 'sans-serif'],
        RobotoMono: ['Roboto Mono', 'monospace'],
      },
      width: {
        90: '90px',
        168: '168px',
        300: '300px',
        350: '350px',
        480: '480px',
        550: '550px',
        600: '600px',
      },
      height: {
        90: '90px',
        168: '168px',
        300: '300px',
        350: '350px',
        480: '480px',
        550: '550px',
        600: '600px',
      },
      padding: {
        50: '50px',
      },
      dropShadow: {
        '3xl': '0 3px 7px 1px rgba(125, 74, 234, 0.2)',
        '4xl': '0 5px 10px 2px rgba(125, 74, 234, 0.27)',
        '5xl': '0 5px 30px rgba(0,0,0, 0.15)',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
