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
    keyframes: {
      animatedgradient: {
        '0%': { backgroundPosition: '0% 50%' },
        '50%': { backgroundPosition: '100% 50%' },
        '100%': { backgroundPosition: '0% 50%' },
      },
    },
    backgroundSize: {
      '300%': '300%',
    },
    animation: {
      gradient: 'animatedgradient 6s ease infinite alternate',
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

