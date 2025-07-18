import type { Config } from "tailwindcss";

const config: Config = {
  // Move potential dynamic class safelisting into the `content`
  // object as recommended by Tailwind. This satisfies both the
  // typing expectations and keeps configuration in one place.
  content: {
    files: [
      "./app/**/*.{js,ts,jsx,tsx,mdx}",
      "./components/**/*.{js,ts,jsx,tsx,mdx}",
      "./lib/**/*.{js,ts,jsx,tsx,mdx}",
    ],
  },
  theme: {
    extend: {
      colors: {
        // TeddyKids brand colors
        brand: {
          pink: "var(--brand-pink)",
          yellow: "var(--brand-yellow)",
          /**
           * Darker yellow (WCAG-friendly) – improves contrast for text & icons.
           * Usage: text-brand-yellowDark, bg-brand-yellowDark, border-brand-yellowDark, etc.
           */
          yellowDark: "#C9A96A",
          mint: "var(--brand-mint)",
          purple: "var(--brand-purple)",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
        display: ["var(--font-display)"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-pattern": "url('/images/hero-bg-pattern.svg')",
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.5s ease-out",
        "bounce-slow": "bounce 3s infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
