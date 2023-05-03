/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      sans: ["Roboto"],
    },
    extend: {
      spacing: {
        "0.25pt": "0.25%",
        "0.5pt": "0.5%",
        "0.75pt": "0.75%",
        "1pt": "1%",
        "2pt": "2%",
        "3pt": "3%",
        "4pt": "4%",
        "5pt": "5%",
        "6pt": "6%",
        "7pt": "7%",
      },
    },
  },
  plugins: [],
};
