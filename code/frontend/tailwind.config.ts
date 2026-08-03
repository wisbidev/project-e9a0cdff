import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "var(--color-bg)",
        surface: "var(--color-surface)",
        border: "var(--color-border)",
        brown: "var(--color-text)",
        muted: "var(--color-text-muted)",
        amber: "var(--color-primary)",
        "amber-deep": "var(--color-primary-hover)",
        "amber-soft": "var(--color-primary-soft)",
      },
      spacing: {
        "11": "2.75rem",
        "14": "3.5rem",
        "27": "6.75rem",
      },
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
        serif: ['Georgia', '"Times New Roman"', "serif"],
      },
      borderRadius: {
        md: "16px",
        lg: "24px",
        full: "999px",
      },
      boxShadow: {
        card: "0 10px 30px -12px rgba(47, 33, 22, 0.18)",
        row: "0 8px 18px -12px rgba(47, 33, 22, 0.22)",
      },
      typography: {
        display: {
          css: {
            fontSize: "clamp(3rem, 9vw, 5.25rem)",
            lineHeight: "1.05",
            fontWeight: "700",
            letterSpacing: "-0.02em",
          },
        },
        h2: {
          css: {
            fontSize: "clamp(1.9rem, 5vw, 2.4rem)",
            letterSpacing: "-0.01em",
            fontWeight: "700",
          },
        },
        item: {
          css: {
            fontSize: "1.18rem",
            fontWeight: "700",
          },
        },
      },
    },
  },
  plugins: [],
};

export default config;
