/** @type {import('tailwindcss').Config} */
export default {
   content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        aminute: ['Aminute', 'sans-serif'],
        ibrand: ['Ibrand', 'sans-serif'],
        kangge: ['Kangge', 'sans-serif'],
        glyke: ['Glyke', 'sans-serif'],
        haniva: ['Haniva', 'sans-serif'],
      },
      keyframes: {
        'pulse-dot': {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.6' },
          '50%': { transform: 'scale(1.6)', opacity: '1' },
        },
      },
      animation: {
        'pulse-dot': 'pulse-dot 1.2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

