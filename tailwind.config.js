module.exports = {
  mode: 'jit',
  purge: ['*.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'img-footer': "url('./img/footer.png')",
        'marmer': "url('./img/marmer.png')"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
