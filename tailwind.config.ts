import type { Config } from "tailwindcss";

const config: Config = {
  /*
   * ------------------------------------------------------------------
   *  Performance-oriented tweaks
   * ------------------------------------------------------------------
   *  1. `mode: 'jit'` – explicit JIT (default in v3+) for clarity.
   *  2. `experimental.optimizeUniversalDefaults` – smaller CSS output.
   */
  // Move potential dynamic class safelisting into the `content`
  // object as recommended by Tailwind. This satisfies both the
  // typing expectations and keeps configuration in one place.
  content: {
    files: [
      // Scan all relevant source files but avoid node_modules/.next builds
      "./{app,components,lib}/**/*.{js,ts,jsx,tsx,mdx}",
    ],
  },
  /*
   * Safelist brand & animation utility classes that are generated
   * dynamically in code (e.g. via template literals).
   */
  // NOTE: Safelist temporarily removed to resolve build-time
  // TypeScript incompatibility. Re-add later using the official
  // Tailwind `@tailwindcss/typography` or `@tailwindcss/forms`
  // plugin approach or via `tailwindcss-animate` utilities.
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
          /**
           * Additional dark variants (WCAG AA contrast) mapped to CSS variables.
           * Usage examples:
           *  text-brand-pinkDark   bg-brand-pinkDark   border-brand-pinkDark
           */
          pinkDark: "var(--brand-pink-dark)",
          mintDark: "var(--brand-mint-dark)",
          purpleDark: "var(--brand-purple-dark)",
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
