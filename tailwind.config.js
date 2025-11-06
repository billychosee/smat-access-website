/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'brand': {
          'primary': '#2090C4',
          'primary-dark': '#1a7bb7',
        }
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'sofia': ['Sofia Sans', 'sans-serif'],
        'mono': ['Geist Mono', 'monospace'],
      }
    },
  },
  plugins: [],
}