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
        gold: "#C7A142",
        charcoal: "#111827",
        ink: "#1F2937",
        sand: "#F8F7F3",
        line: "#E5E7EB",
        success: "#16A34A",
        danger: "#DC2626",
      },
      fontFamily: {
        heebo: ["Heebo", "sans-serif"],
      },
      fontSize: {
        h1: ["2rem", { lineHeight: "2.5rem" }],
        "h1-md": ["3rem", { lineHeight: "3.5rem" }],
        h2: ["1.5rem", { lineHeight: "2rem" }],
        "h2-md": ["2rem", { lineHeight: "2.5rem" }],
        h3: ["1.125rem", { lineHeight: "1.75rem" }],
        "h3-md": ["1.25rem", { lineHeight: "1.875rem" }],
        body: ["1rem", { lineHeight: "1.625rem" }],
        small: ["0.875rem", { lineHeight: "1.375rem" }],
      },
      spacing: {
        "18": "4.5rem",
        "88": "22rem",
      },
      boxShadow: {
        food: "0 8px 24px rgba(17, 24, 39, 0.08)",
        "food-lg": "0 16px 48px rgba(17, 24, 39, 0.12)",
      },
    },
  },
  plugins: [],
};
export default config;
