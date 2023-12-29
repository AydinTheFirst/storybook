/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "node_modules/flowbite-react/lib/esm/**/*.js",
    "node_modules/react-tailwindcss-datepicker/dist/index.esm.js",
  ],
  theme: {
    extend: {},
  },
};
