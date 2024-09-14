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
        "500px": "555px",
        "480px": "487px",
        "700px": "700px",
      },
      width: {
        "1180px": "1180px",
        "70": "68.4%",
        "380px": "380px",
      },
      padding: {
        "660": "610px",
      },
    },
  },
  plugins: [],
};
export default config;
