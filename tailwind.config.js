/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,html}"],

  theme: {
    extend: {
      container: {
        center: true,
      },
      colors: {
        clifford: "#da373d",
      },
    },
  },
  // purge: {
  //   content: ["./src/**/*.{js,ts,jsx,tsx,html}"],

  //   options: {
  //     // Whitelist dynamic classes
  //     whitelist: [/^bg-/, /^text-/],
  //   },
  // },
  plugins: [],
};
