/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'roboto': 'Roboto, sans-serif',
        'sansThai': 'IBM Plex Sans Thai, sans-serif',
        'museoModerno': 'MuseoModerno, sans-serif',
        'oswald': 'Oswald, sans-serif',
        'Silkscreen': 'Silkscreen, sans-serif'
      }
    },
    screens: {
      'mobile': { "min": '0px', 'max': '430px' }
    }
  },
  plugins: [],
}