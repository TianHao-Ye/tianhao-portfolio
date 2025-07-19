import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";
import daisyui from "daisyui";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [animate, daisyui],
  daisyui: {
    themes: ["light", "dark", "cupcake", "corporate", "cyberpunk"],
  },
};

export default config;
