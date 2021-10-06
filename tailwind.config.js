module.exports = {
  mode: 'jit',
  purge: ['index.html', 'Lepidoptera.html', 'Papilionidae.html', 'gallery.html', 'our_top_pick.html', 'newArrival.html', 'signUp.html', 'logIn.html'],
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
