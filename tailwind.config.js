import { nextui } from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */
export const content = [
  "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  "./src/**/*.{js,ts,jsx,tsx}",
  "./node_modules/tw-elements/dist/js/**/*.js",
];
export const theme = {
  extend: {
    backgroundImage: {
      "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      "gradient-conic":
        "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
    },
    gridTemplateRows: {
      "[auto,auto,1fr]": "auto auto 1fr",
    },
  },
};
export const darkMode = "class";
export const plugins = [nextui(), require("tw-elements/dist/plugin.cjs")];
