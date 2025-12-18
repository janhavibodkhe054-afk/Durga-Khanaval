module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" }
        },
        floatSlow: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-6px)" }
        },
        floatDelayed: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-13px)" }
        },
        fadeUp: {
          "0%": { opacity: 0, transform: "translateY(20px)" },
          "100%": { opacity: 1, transform: "translateY(0px)" }
        }
      },
      animation: {
        float: "float 4s ease-in-out infinite",
        floatSlow: "floatSlow 5s ease-in-out infinite",
        floatDelayed: "floatDelayed 3.5s ease-in-out infinite",
        fadeUp: "fadeUp 1s ease-out forwards"
      }
    }
  },
  plugins: [],
};
