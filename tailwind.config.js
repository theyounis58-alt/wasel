/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0fdf6',
          100: '#dcfce7',
          500: '#0C5F3D',
          600: '#0a5235',
          700: '#08442d',
          800: '#063625',
          900: '#05291d',
        },
        secondary: {
          50: '#f8f8f8',
          100: '#f0f0f0',
          500: '#1C1C1C',
          600: '#171717',
          700: '#141414',
          800: '#101010',
          900: '#0d0d0d',
        },
        accent: {
          50: '#f9f9f9',
          100: '#f3f3f3',
          500: '#8B8B8B',
          600: '#7A7A7A',
          700: '#6B6B6B',
          800: '#5C5C5C',
          900: '#4D4D4D',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        arabic: ['TheYearofTheCamel', 'Tahoma', 'Arial', 'system-ui', 'sans-serif'],
        'arabic-title': ['Palestine', 'TheYearofTheCamel', 'Tahoma', 'system-ui', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [
    require('tailwindcss-rtl'),
  ],
};