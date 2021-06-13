// --------------------------------------------------------------------
// buid tailwind:
// npx tailwindcss-cli@latest build ./src/tailwind.css -o ./styles.css
// --------------------------------------------------------------------
// when buiding tailwind for production:
// module.exports = {
//   purge: {
//     enabled: true, <----- set true to remove unused styles ---------
// --------------------------------------------------------------------

module.exports = {
  purge: {
    enabled: false,
    content: ["./*.html"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
