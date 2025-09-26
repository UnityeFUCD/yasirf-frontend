/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "370px", // Custom breakpoint
      },
      fontFamily: {
        Rajdhani: ["Rajdhani", "serif"],
        Manpore: ["Manrope", "serif"],
        rajdhani: ["var(--font-rajdhani)", "Rajdhani", "sans-serif"],
        manrope: ["var(--font-manrope)", "Manrope", "system-ui", "sans-serif"],
      },
      colors: {
        primaryColor: "var(--accent-neon)",
        background: "var(--bg-deep)",
        backgroundLight: "#161A32",
        borderPrimary: "#C2C3CB",
        bgdeep: "var(--bg-deep)",
        textondark: "var(--text-on-dark)",
        accentneon: "var(--accent-neon)",
        strokedark: "var(--stroke-dark)",
        navneutral: "var(--nav-neutral)",
        navring: "var(--nav-ring)",
      },
      backgroundImage: {
        singhero: "url(./src/assets/images/signinmainbg.png)",
        pop: "url(./src/assets//images/popup.png)",
        navhero: "var(--nav-hero-gradient)",
      },
      borderRadius: {
        DEFAULT: "var(--radius-base, 0.5rem)",
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      letterSpacing: {
        wide2: ".08em",
      },
      keyframes: {
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
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("tailwind-scrollbar-hide"),
  ],
};
