/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        lexend: ["Lexend Deca", " sans-serif"],
      },
      colors: {
        input: "#E5E5E5",
        background: "#224957",
        button: "#20DF7F",
        background: "#093545",
      },
      borderRadius: {
        morelg: "10px",
      },
      boxShadow: {
        button: "0px 4px 4px rgba(0, 0, 0, 0.3)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
