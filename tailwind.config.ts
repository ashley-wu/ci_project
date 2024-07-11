import type { Config } from "tailwindcss";

const colors = require('tailwindcss/colors')

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['var(--font-noto-sans-tc)', 'ui-sans-serif', 'system-ui'],
      'mono': ['var(--font-noto-sans-mono)', 'ui-monospace', 'SFMono-Regular']
    },
    colors: {
      ...colors,
      primary: 'rgb(var(--color-primary))',
      offwhite: '#faf8f5',
      // transparent: 'transparent',
      // current: 'current',
      // blue: colors.blue,
      // gray: colors.gray,
      // white: '#ffffff',
    },
    extend: {
      screens: {
        'sm': '480px',
        'md': '600px'
      }
    },
  },
  plugins: [],
};
export default config;
