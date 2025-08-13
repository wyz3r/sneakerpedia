/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.reset-heading': {
          fontSize: 'revert',
          fontWeight: 'revert',
          margin: 'revert',
        },
        '.all-revert': {
          all: 'revert',
        },
      });
    },
  ],
};
