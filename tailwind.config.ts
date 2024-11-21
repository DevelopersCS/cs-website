import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        'graph-gradient-blue': 'linear-gradient(5deg, #094B76 16%, #25A8FF 57%)',
      },
      screens:{
        minMobile: "425px"
      },
      keyframes: {
        grow: {
          '0%': { height: '0%' },
          '100%': { height: 'var(--grow-height)' },
        },
      },
      animation: {
        'grow-[80]': 'grow 1s ease-in-out forwards',
        'grow-[50]': 'grow 1s ease-in-out forwards',
        'grow-[100]': 'grow 1s ease-in-out forwards',
      },
    },
  },
  plugins: [],
} satisfies Config;
