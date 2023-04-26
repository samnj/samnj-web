/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        fira: ["Fira Code", "sans-serif"],
        titillium: ["Titillium Web", "sans-serif"],
      },
      colors: {
        background: "#232425",
        primary: "#A9A9B3",
        "primary-hover": "#B3B9C9",
        secondary: "#09D9BD",
        highlight: "#C043BB",
        footer: "#1B1C1D",
      },
    },
  },
  plugins: [],
}
