import { withMaterialColors } from "tailwind-material-colors";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

const materialPaletteConfig = {
  primary: "#3BD4EE",
};

export default withMaterialColors(config, materialPaletteConfig);
