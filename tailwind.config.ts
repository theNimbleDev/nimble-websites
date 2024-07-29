import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-linear": "linear-gradient(90deg, #FFA673 0%, #FF7354 50%, #FF7D06 100%)",
      },
      colors: {
        primary: {
          100: '#FF6600',
          200: '#A020F0',
        },
        secondary: {
          100: '#A020F0'
        },
        subtext: {
          100: '#989898'
        },
        nav: {
          100: '#282828'
        }
      },
      letterSpacing: {
        widest: '.35rem'
      },
      keyframes: {
        scroll: {
          '100%': { transform: 'translateX(calc(-50% - 2.5rem))' },
        }
      },
      animation: {
        scroll: 'scroll 20s linear infinite',
      },
    },
  },
  plugins: [nextui()],
};

export default config;
