module.exports = {
  mode: 'jit',
  purge: ['index.html', 'Lepidoptera.html', 'Papilionidae.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'img-footer': "url('./img/footer.png')"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
