/** @type {import('tailwindcss').Config} */

const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        aboreto: ['var(--font-aboreto)', ...fontFamily.sans],
        suezone: ['var(--font-suez_one)', ...fontFamily.sans],
        outfit: ['var(--font-outfit)', ...fontFamily.sans],
      },
    },
  },
  plugins: [],
}

