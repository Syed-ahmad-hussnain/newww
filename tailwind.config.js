const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx,html}',
  ],
  theme: {
    extend: {
      colors: {
        'custom-blue': '#684FFF',
        'Black-200' : '#f2f2f7',
        'text-checkbox' : '#9A9CBC',
        'blacks' : '#242536',
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to right, #684FFF, #B871FE)',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [
    plugin(function({ addComponents, theme }) {
      addComponents({
        '.button-with-gradient-border': {
          position: 'relative',
          display: 'inline-block',
          padding: '1rem 2rem',
          backgroundColor: 'white', // Button's background color
          color: 'black', // Button's text color
          borderRadius: '8px', // Adjust as needed
          '&::before': {
            content: '""',
            position: 'absolute',
            inset: '-4px', // Increased from -2px to -4px
            borderRadius: 'inherit',
            padding: '4px', // Increased from 2px to 4px
            background: theme('backgroundImage.custom-gradient'),
            '-webkit-mask': 
              'linear-gradient(#fff 0 0) content-box, ' +
              'linear-gradient(#fff 0 0)',
            '-webkit-mask-composite': 'xor',
            'mask-composite': 'exclude',
          }
        },
      });
    }),
  ],
};
