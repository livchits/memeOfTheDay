module.exports = {
  theme: {
    extend: {},
    fontFamily: {
      bungee: ['Bungee Shade', 'sans-serif'],
      montserrat: ['Montserrat', 'sans-serif'],
      arialB: ['Arial black', 'sans-serif']
    },
    maxHeight: {
      '0': '0',
      '1/4': '25%',
      '1/2': '50%',
      '3/5': '60%',
      '3/4': '75%',
      '60vh': '60vh',
      full: '100%'
    },
    height: {
      '60': '60vh'
    }
  },
  variants: {
    opacity: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
    backgroundColor: ['responsive', 'hover', 'focus', 'active', 'group-hover']
  },
  plugins: []
};
