/* eslint-disable @typescript-eslint/no-require-imports */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: { orange: '#F76B1C', gold: '#FFA82E', brown: '#4B2C11', green: '#2E7D52' },
        'orange-tint': '#FEE9D8',
        'gold-tint': '#FFF4DE',
        'brown-tint': '#F0E8E0',
        'green-tint': '#E6F4ED',
      },
      fontFamily: { sans: ['Inter', 'var(--font-inter)', ...defaultTheme.fontFamily.sans] },
      backgroundImage: {
        'gradient-brand': 'linear-gradient(135deg, #F76B1C 0%, #FFA82E 100%)',
        'gradient-brand-h': 'linear-gradient(90deg, #F76B1C 0%, #FFA82E 100%)',
      },
      maxWidth: { content: '1200px' },
    },
  },
  plugins: [],
};
