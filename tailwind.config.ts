import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "selector",
  theme: {
    extend: {

      cursor: {
        'custom': 'url("/assets/cursor.svg"), pointer',
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        'graph-gradient-blue': 'linear-gradient(5deg, #094B76 16%, #25A8FF 57%)',
        'gray-gradient': 'linear-gradient(10deg, #000000 1%, #666666 40%)',
        'team': 'url("/assets/images/team/5.jpg")',
        'background-light': 'url("/assets/images/background.png")',
      },
      screens:{
        minMobile: "425px"
      },
      keyframes: {
        grow: {
          '0%': { height: '0%' },
          '100%': { height: 'var(--grow-height)' },
        },
        slide: {
          '0%': { left: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        }
      },
      animation: {
        'grow-[80]': 'grow 1s ease-in-out forwards',
        'grow-[50]': 'grow 1s ease-in-out forwards',
        'grow-[100]': 'grow 1s ease-in-out forwards',
        'slide': 'slide 20s linear infinite',
        'paused': 'animation-play-state: paused',
      },
      transitionTimingFunction: {
        "custom": "cubic-bezier(1, 0, 0, 1.01)"
      }
    },
  },
  plugins: [],
} satisfies Config;
