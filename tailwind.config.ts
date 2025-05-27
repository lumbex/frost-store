/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      backgroundImage: {
        profile: "url('/assets/imgs/hero_banner.png')",
      },
      fontFamily: {
        monteserat: ["Montserrat-Regular", "sans-serif"],
        league: ["League-Spartan", "sans-serif"],
      },
      colors: {
        primary: "#006E77",
        secondary: "#83C4BE",
        tertiary: "#EC8B4A",
        quaternary: "#FAD8A5",
        quinary: "#F79AC9"
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      },
      animation: {
        marquee: 'marquee 30s linear infinite',
      }
    },
  },
  plugins: [],
};
