/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primaryColor: 'rgb(20, 184, 166)', // Define your custom color here
        backgroundColor: 'rgb(239, 239, 239)'
      }
    }
  },
  plugins: []
}
