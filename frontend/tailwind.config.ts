import type { Config } from "tailwindcss";

const config: Config = {
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
      fontFamily: {
        serif: ["Georgia", "serif"],
      },
      height: {
        "614px": "614px",
        "600px": "565px",
      },
      width: {
        "1180px": "1180px",
      },
    },
  },
  plugins: [],
};
export default config;
