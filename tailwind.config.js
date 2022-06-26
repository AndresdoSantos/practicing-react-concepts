const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  content: ['./src/**/*.tsx'],
  theme: {
    colors: {
      white: {
        100: colors.white,
      },
      gray: {
        ...colors.gray,
        300: '#808080',
        400: '#333333',
        500: '#262626',
        600: '#1A1A1A',
        700: '#0D0D0D',
      },
      blue: {
        ...colors.blue,
        400: '#4EA8DE',
        700: '#1E6F9F',
      },
      purple: {
        ...colors.purple,
        500: '#8284FA',
        700: '#5E60CE',
      },
    },
    extend: {
      content: {
        trash: 'url("/assets/trash.svg")',
        trashDanger: 'url("/assets/trash-danger.svg")',
      },
    },
  },
  plugins: [],
};
