import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        terminal: {
          green: "#00ff00",
          red: "#ea384c",
          bg: "#0a0a0a",
        },
      },
      keyframes: {
        glitch: {
          "0%": {
            textShadow: "2px 0 0 #00ffff, -2px 0 0 #ff00ff",
            color: "rgb(0, 255, 0)",
          },
          "33%": {
            textShadow: "-2px 0 0 #00ffff, 2px 0 0 #ff00ff",
            color: "rgb(234, 56, 76)",
          },
          "66%": {
            textShadow: "2px 0 0 #00ffff, -2px 0 0 #ff00ff",
            color: "rgb(0, 255, 0)",
          },
          "100%": {
            textShadow: "-2px 0 0 #00ffff, 2px 0 0 #ff00ff",
            color: "rgb(234, 56, 76)",
          },
        },
        flicker: {
          "0%": { opacity: "0.9" },
          "50%": { opacity: "1" },
          "100%": { opacity: "0.9" },
        },
      },
      animation: {
        glitch: "glitch 2s infinite",
        flicker: "flicker 0.5s infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;