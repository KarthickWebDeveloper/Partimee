/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"], // Ensure this is correct
  theme: {
    extend: {
      colors:{
        'blueColor':'#2a68ff',
        'greyIsh':'#f1f4f8',
        'cardSearch':'#f7f8f9',
        'textColor':'#252b36'
      }
    },
  },
  plugins: [],
};
