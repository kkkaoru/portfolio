const plugin = require('tailwindcss/plugin');

module.exports = plugin(function ({ addUtilities }) {
  addUtilities({
    '.animation-paused': {
      'animation-play-state': 'paused',
    },
  });
});
