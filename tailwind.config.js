const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
    },
    extend: {
      colors: {
        border: 'rgba(#1c1c16, 0.6)',
        input: '#ffffff',
        background: '#ffffff',
        primary: {
          DEFAULT: '#656100',
          text: '#ffffff',
          container: '#eee76c',
        },
        secondary: {
          DEFAULT: '#625f42',
          text: '#ffffff',
          container: '#e8e4be',
        },
        tertiary: {
          DEFAULT: '#3f6655',
          text: '#ffffff',
          container: '#c1ecd6',
        },
        error: {
          DEFAULT: '#ba1a1a',
          text: '#ffffff',
          container: '#ffdad6',
        },
      },
      borderRadius: {
        lg: `0.5rem`,
        md: `calc(0.5rem - 2px)`,
        sm: 'calc(0.5rem - 4px)',
      },
      fontFamily: {
        sans: ['Roboto', ...fontFamily.sans],
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 100 },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-in-out',
      },
    },
  },
  plugins: [],
}
