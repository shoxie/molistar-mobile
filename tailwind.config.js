module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      tablet: "640px",
      // => @media (min-width: 640px) { ... }

      laptop: "1024px",
      // => @media (min-width: 1024px) { ... }

      desktop: "1024px",
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      colors: {
        "molistar-red": "#ED1C24",
        "molistar-grey": "#F0F1F3",
        "molistar-darkgrey": "#2A2A2A",
        "molistar-rail": "#7d7d7d",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/line-clamp"), require("autoprefixer")],
};
