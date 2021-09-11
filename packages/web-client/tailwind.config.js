const componentsPurgeDir = require('path').dirname(require.resolve('@web/components/tailwind.config.js'));

/** @type import('@types/tailwindcss/tailwind-config').TailwindConfig */
module.exports = Object.assign({}, require('@web/components/tailwind.config.js'), {
  purge: [`${componentsPurgeDir}/**/*.{js,ts,jsx,tsx}`, 'pages/**/*.tsx'],
});
