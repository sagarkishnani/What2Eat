module.exports = {
  content: ["*.{html,js}"],
  theme: {
    colors: {
      "dark-red": "#A0172A",
      "light-beige": "#FDF2D4",
      "dark-green": "#63AA9C",
      brown: "#503529",
      orange: "#EF5B3D",
      "light-orange": "#FBCBAC",
      green: "#13ce66",
      "gray-dark": "#273444",
      gray: "#8492a6",
      "gray-light": "#d3dce6",
      "light-yellow": "#f2d77f",
    },
    fontFamily: {
      texto: ["Cantarell", "sans-serif"],
      menu: ["Poppins", "sans-serif"],
      titulo: ["Charm", "cursive"],
      subtitulo: ["Contrail One", "cursive"],
    },
    extend: {},
  },
  plugins: [require("tailwind-scrollbar"), require("@tailwindcss/forms")],
};
