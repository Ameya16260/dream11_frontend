/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: ['MyCustomFont', 'sans-serif'], // Fallback to sans-serif
      },
      clipPath: {
        trapezium: "polygon(0% 0%, 100% 0%, 95% 100%, 5% 100%)",
      },
      screens: {
        'xs': '500px',
      },
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('tailwind-clip-path'),
  ],
}
