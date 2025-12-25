/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // <-- This scans all components so styles are not purged
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
