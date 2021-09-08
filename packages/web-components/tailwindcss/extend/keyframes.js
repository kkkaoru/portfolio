const upped = 'rotate(2deg) translateY(0.25rem)';
const downed = 'rotate(0deg) translateY(0)';

module.exports = {
  'down-up-down': {
    '0%': { transform: downed },
    '40%': { transform: upped },
    '100%': {
      transform: downed,
    },
  },
  'up-down-up': {
    '0%': { transform: upped },
    '40%': { transform: downed },
    '100%': {
      transform: upped,
    },
  },
};
