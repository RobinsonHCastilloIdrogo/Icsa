/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(to bottom, #1e293b 0%, #e2e8f0 80%)", // Ajusta los porcentajes como necesites
      },
    },
  },
  plugins: [],
};
