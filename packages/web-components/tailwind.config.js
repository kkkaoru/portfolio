const animatePaused = require('./tailwindcss/plugins/animate-paused');
const addBase = require('./tailwindcss/plugins/add-base');
const extendKeyFrames = require('./tailwindcss/extend/keyframes');
const extendAnimation = require('./tailwindcss/extend/animation');

/** @type import('@types/tailwindcss/tailwind-config').TailwindConfig */
module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      keyframes: extendKeyFrames,
      animation: extendAnimation,
    },
  },
  plugins: [animatePaused, addBase],
};
