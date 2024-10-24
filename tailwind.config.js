/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: ["light", "synthwave"],
  },
  theme: {
    extend: {
      colors: {
        primaryColor: '#EF1DD2', // Add your custom colors here
        seconColor: '#4900FF',
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

