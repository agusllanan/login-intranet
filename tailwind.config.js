module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      margin: {
        98: "400px",
      },
      backgroundImage: {
        "hero-background":
          "url('https://pixabay.com/es/photos/cygnet-aves-animal-lago-cisne-6482420/')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
