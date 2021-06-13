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
    extend: {
      fontFamily: {
        barlow: ["Barlow", "sans-serif"],
        fraunces: ["Fraunces", "serif"],
      },
      colors: {
        brand: {
          "soft-red": "hsl(7, 99%, 70%)",
          yellow: "hsl(51, 100%, 49%)",
          "dark-cyan": "hsl(167, 40%, 24%)",
          "dark-blue": "hsl(198, 62%, 26%)",
          cyan: "hsl(168, 34%, 41%)",
        },
      },
      backgroundImage: (theme) => ({
        header: "url('/images/mobile/image-header.jpg')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
