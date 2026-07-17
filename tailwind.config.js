/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        // Core brand palette — edit these to re-theme the entire site.
        paper: "#f8f2e7", // main light background
        paper2: "#f1e9d9", // secondary light background (cards, alt sections)
        forest: "#142420", // main dark background (hero, contact, footer)
        forest2: "#1c322c", // secondary dark background (cards on dark)
        cream: "#f4efe2", // main text color on dark backgrounds
        creamdim: "#c9c2ae", // muted/secondary text on dark backgrounds (used with opacity, e.g. text-creamdim/80)
        inkdark: "#2a2317", // main text color on light backgrounds
        inkdim: "#6b6152", // muted/secondary text on light backgrounds
        gold: "#c99a2e", // primary accent
        gold2: "#ac7f22", // darker accent (hover states, headings)
        hairline: "#e2d8be", // border color on light backgrounds
        hairlineDark: "#2c4038", // border color on dark backgrounds
        sage: "#7e9c8b", // accent color used in standards/case-study icons
        coral: "#d9683f", // accent color used in standards/case-study icons
      },
      fontFamily: {
        // "font-display" = headings, "font-body" = everything else
        display: ["Fraunces", "Georgia", "Times New Roman", "serif"],
        body: [
          "Plus Jakarta Sans",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "sans-serif",
        ],
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translate(0)" },
          "100%": { transform: "translate(-50%)" },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        marquee: "marquee 28s linear infinite",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [],
};
