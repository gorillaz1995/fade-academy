import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: "640px", // iPhone 8
        md: "932px", // iPhone 15 Pro Max
        lg: "1024px", // tablet
        xl: "1440px", // small-ish laptop
      },
      fontFamily: {
        "stint-ultra-expanded": ['"Stint Ultra Expanded"', "sans-serif"],
        "pontano-sans": ['"Pontano Sans"', "sans-serif"],
        "luxurious-script": ['"Luxurious Script"', "cursive"],
        "familjen-grotesk": ['"Familjen Grotesk"', "sans-serif"],
      },
      keyframes: {
        breathe: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        breathe: "breathe 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
