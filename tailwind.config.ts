import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          primary: "#0a0a0a",
          secondary: "#111111",
        },
        accent: {
          1: "#6366f1",
          2: "#8b5cf6",
          3: "#ec4899",
        },
        text: {
          primary: "#ffffff",
          secondary: "#a3a3a3",
        },
      },
      fontFamily: {
        inter: ["var(--font-inter)", "sans-serif"],
        "space-grotesk": ["var(--font-space-grotesk)", "sans-serif"],
        sora: ["var(--font-sora)", "sans-serif"],
      },
      backgroundImage: {
        "gradient-hero": "linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #ec4899 100%)",
        "gradient-accent": "linear-gradient(90deg, #8b5cf6, #ec4899)",
        "gradient-subtle": "radial-gradient(ellipse at top, rgba(99, 102, 241, 0.15), transparent)",
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "shimmer": "shimmer 2s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-1000px 0" },
          "100%": { backgroundPosition: "1000px 0" },
        },
      },
    },
  },
  plugins: [],
};
export default config;

