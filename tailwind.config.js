/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Brand Core
        'celestial-blue-1': '#0da1e1',
        'celestial-blue-2': '#0ca1e1',
        
        // Neutrals
        'pure-white': '#ffffff',
        'light-gray': '#f2f5f7',
        'ash-gray': '#cbd4c2',
        'jet': '#39393a',
        'charcoal': '#2a2a2b',
        
        // Accents
        'fresh-green': '#5cc970',
        'warm-sand': '#e5d4b9',
        'mauve': '#dab6fc',
        'coral-red': '#f45b69',
      },
    },
  },
  plugins: [],
};