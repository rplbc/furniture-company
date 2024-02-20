/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,html}'],
  theme: {
    extend: {
      transitionDuration: {
        DEFAULT: '300ms',
      },
    },
  },
  plugins: [],
}
