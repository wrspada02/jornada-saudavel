import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
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
        "opacity-entrance": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        "opacity-exit": {
          from: { opacity: "1" },
          to: { opacity: "0" },
        },
        "roll-down": {
          from: { transform: 'translateY(-50px)' },
          to: { transform: 'translateY(0)' },
        },
        "header-nav": {
          from: { width: "0" },
          to: { width: "100%" },
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "opacity-entrance": "opacity-entrance 0.5s ease-in-out",
        "opacity-exit": "opacity-exit 0.5s ease-in-out",
        "roll-down": "roll-down 0.5s ease-in-out",
        "header-nav": "header-nav 0.5s ease-in-out",
      },
      screens: {
        "mobile": {
          min: "0px",
          max: "768px",
        },
        "tablet": {
          min: "769px",
          max: "1270px",
        },
        "desktop": {
          min: "1271px",
          max: "1920px",
        },
        "fullscreen": {
          min: "1921px"
        },
      },
      backgroundImage: {
        mobileHeader: 'linear-gradient(180deg, rgba(253,253,253,1) 64%, rgba(195,233,210,1) 100%)',
        login: 'linear-gradient(315deg, #FDFDFD 0%, #C3E9D2 34%, #C3E9D2 78%, #FDFDFD 100%)',
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config