/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        secondaryColor: "#262626",
        primaryColor: "#ec1f24",
      },
    },
  },
  plugins: [],
}