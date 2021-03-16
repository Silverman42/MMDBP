const { colors } = require('tailwindcss/defaultTheme')
module.exports = {
  theme: {
    fontFamily:{
      'body': ['Circular Std Book']
    },
    extend: {
      colors:{
        primaryBg:{
          '100': colors.white,
          '200': colors.gray['100'],
          '300': colors.gray['200'],
          '400': colors.gray['300']
        },
        primary:{
          '100': 'var(--primary-100)',
          '200': 'var(--primary-200)',
          '300': 'var(--primary-300)',
          '400': 'var(--primary-400)',
          '500': 'var(--primary-500)',
          '600': 'var(--primary-600)',
          '700': 'var(--primary-700)',
          '800': 'var(--primary-800)',
          '900': 'var(--primary-900)',
        }
      }
    },
  },
  variants: {},
  plugins: [],
}
