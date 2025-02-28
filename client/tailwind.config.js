/** @type {import('tailwindcss').Config} */
import flowbitePlugin from 'flowbite/plugin';
import scrollbarPlugin from 'tailwind-scrollbar';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    flowbitePlugin,
    scrollbarPlugin,
  ],
};
