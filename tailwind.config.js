/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        archivo: "'Archivo Narrow', 'sans-serif'",
        julius: "'Julius Sans One', 'sans-serif'",
      },
      colors: {
        mYellow: "#febe10",
        mBlue: "#0e073c",
        mGray: "#242228",
      },
    },
  },
  plugins: [],
};
