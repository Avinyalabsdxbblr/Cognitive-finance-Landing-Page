import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        vsm: "450px",
        xmd: "900px",
        "2xl": "1400px",
      },
      fontFamily: {
        Inter: ["Inter", "sans-serif"],
        Poppins: ["Poppins", "sans-serif"],
        Sora: ["Sora", "sans-serif"],
        PlusJakartaSans: ["Plus Jakarta Sans", "serif"],
      },
      colors: {
        black: "#1A2B3B",
      },
    },
  },
  plugins: [],
};
export default config;
