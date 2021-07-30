module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#1E8E42"
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
