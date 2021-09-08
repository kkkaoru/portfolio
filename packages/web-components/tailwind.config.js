const animatePaused = require('./tailwindcss/plugins/animate-paused');
const extendKeyFrames = require('./tailwindcss/extend/keyframes');

/** @type import('@types/tailwindcss/tailwind-config').TailwindConfig */
module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      keyframes: extendKeyFrames,
      animation: {
        'down-up-down': 'down-up-down 3s ease infinite',
        'up-down-up': 'up-down-up 3s ease infinite',
      },
    },
  },
  plugins: [animatePaused],
};
