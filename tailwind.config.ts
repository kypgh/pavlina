import type { Config } from "tailwindcss";
import { colors, fonts } from "./src/utils/colors";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Use colors from colors.ts
        white: colors.white,
        "light-green": colors.lightGreen,
        yellow: colors.yellow,
        "dark-yellow": colors.darkYellow,
        text: colors.text,
        dark: colors.dark,
      },
      fontFamily: {
        title: [fonts.title],
        body: [fonts.body],
        garamond: [fonts.garamond],
      },
    },
  },
  plugins: [],
};

export default config;
