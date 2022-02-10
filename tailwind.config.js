module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'tile': {
          sm: "#776e65",
          lg: "#f9f6f2"
        },
        'style': {
          0: "#cdc1b4",
          2: "#eee4da",
          4: "#ede0c8",
          8: "#f2b179",
          16: "#f59563",
          32: "#f67c5f",
          64: "#f65e3b",
          128: "#edcf72",
          256: "#edcc61",
          512: "#edc850",
          1024: "#edc53f",
          2048: "#edc22e",
        },
        'button': "#8f7a66",
      }
    },
  },
  plugins: [],
}
