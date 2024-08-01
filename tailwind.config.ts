import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      text: {
        gray: "#AAAAAA",
        dark_gray: "#666666",
        black: "#444444",
      },
      background: {
        gray: "#BBBBBB",
        light_gray: "#F6F6F6",
      },
      border: {
        light_gray: "#AAAAAA",
        black: "#666666",
      },
      primary: {
        main: "#F3BBBB",
        light: "#F5D9D9",
      },
    },
  },
  plugins: [],
};
export default config;
