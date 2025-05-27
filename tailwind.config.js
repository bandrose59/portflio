// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      animation: {
        scroll: "scrollX var(--animation-duration, 40s) linear infinite",
      },
      keyframes: {
        scrollX: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};
