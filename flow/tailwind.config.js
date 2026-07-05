/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        base: {
          950: '#08080D',
          900: '#0D0D14',
          800: '#15151F',
          700: '#1E1E2B',
        },
        flow: {
          indigo: '#6366F1',
          violet: '#8B5CF6',
          cyan: '#22D3EE',
          emerald: '#10B981',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
