/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  
  safelist: [
    // width
    'w-xs', 'w-sm', 'w-lg', 'w-xl', 'md:w-lg', 'md:w-xl',

    // height
    'md:h-[600px]',

    // margin, padding
    'md:-mt-36', '-mt-36', 'mt-56', 'md:mt-56',


    'rounded-[80px]', 'rounded-4xl',

    // position
    'md:-top-35', // custom negative top

    // any class you want to keep!
  ],

  theme: {
    extend: {},
  },
  plugins: [],
};

