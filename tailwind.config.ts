import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class", // Enable dark mode based on 'class'
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Define a comprehensive color palette for a professional look
        primary: {
          DEFAULT: "#22D3EE", // Orbital Cyan
          light: "#67E8F9",
          dark: "#0E7490",
          darker: "#083344",
        },
        secondary: {
          DEFAULT: "#A855F7", // Purple for accents
          light: "#C084FC",
          dark: "#7E22CE",
        },
        background: {
          light: "#FFFFFF", // Light mode background
          dark: "#020617",  // Dark mode background (Orbital Dark)
        },
        foreground: {
          light: "#0F172A", // Light mode text
          dark: "#F8FAFC",  // Dark mode text
        },
        border: {
          light: "#E2E8F0", // Light mode border
          dark: "#1E293B",  // Dark mode border
        },
        card: {
          light: "#FFFFFF",
          dark: "#0F172A",
        },
        "card-foreground": {
          light: "#0F172A",
          dark: "#F8FAFC",
        },
        muted: {
          light: "#F1F5F9",
          dark: "#1E293B",
        },
        "muted-foreground": {
          light: "#64748B",
          dark: "#94A3B8",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "sans-serif"], // Ensure consistent sans-serif font
        mono: ["var(--font-geist-mono)", "monospace"], // Ensure consistent monospace font
        // Add a custom font for headings or specific elements if desired
        // heading: ["'Your Custom Font'", "sans-serif"],
      },
      borderRadius: {
        lg: "0.75rem",
        md: "0.5rem",
        sm: "0.375rem",
        xl: "1rem", // Custom larger border radius
        "2xl": "1.5rem", // Even larger for cards
        "3xl": "2rem", // For very rounded elements
      },
      boxShadow: {
        // Define custom shadows for depth and professionalism
        "soft-sm": "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
        "soft-md": "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        "soft-lg": "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
        "orbital-cyan": "0 0 15px rgba(34,211,238,0.3)", // Existing orbital shadow
        "orbital-blue": "0 0 20px rgba(59,130,246,0.4)", // New blue shadow
      },
      transitionDuration: {
        DEFAULT: "300ms",
        "400": "400ms",
        "500": "500ms",
        "700": "700ms",
        "1000": "1000ms",
      },
    },
  },
  plugins: [],
};
export default config;
