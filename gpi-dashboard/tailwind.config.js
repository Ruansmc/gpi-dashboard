module.exports = {
  content: ["./*.html", "./**/*.html"], // Escaneia todos os seus arquivos HTML
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["dark", "light"], // Ou os temas que você usa
  },
};
