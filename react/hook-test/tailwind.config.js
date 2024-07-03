/** @type {import('tailwindcss').Config} */
module.exports = {
  // prefix: 'yuan-',
  content: [
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      padding: {
        '1': '30px'
      },
      fontSize: {
        'base': ['30px', '20px']
      }
    },
  },
  plugins: [
    require('./plugin/tailwind.plugin')
  ],
}

