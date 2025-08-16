import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        coffee: {
          50: '#fdf8f3',
          100: '#f8e8d8',
          200: '#eecaa6',
          300: '#e3a970',
          400: '#d88c47',
          500: '#c76f2e',
          600: '#a85424',
          700: '#873d1f',
          800: '#6f321f',
          900: '#5c2b1d',
          950: '#33140c',
        },
        cream: '#FFF8E7',
        'dark-brown': '#3E2723',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'serif': ['Playfair Display', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;