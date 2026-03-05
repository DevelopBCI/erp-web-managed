/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        kanit: ['var(--font-kanit)', 'sans-serif'],
      },
      colors: {
        brand: '#0e9aef',
      },
    },
  },
  plugins: [],
}
