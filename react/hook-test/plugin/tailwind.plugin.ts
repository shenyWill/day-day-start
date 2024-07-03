const plugin = require('tailwindcss/plugin');

module.exports = plugin(function({ addUtilities }) {
  addUtilities({
    '.yuan': {
      background: 'blue',
      color: 'yellow',
    }
  })
}) 