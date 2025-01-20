// tailwind.config.ts
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      perspective: {
        '1000': '1000px',
      },
      colors: {
        foreground: 'var(--color-foreground)',
        card: {
          DEFAULT: 'var(--color-card)',
          foreground: 'var(--color-card-foreground)',
        },
        popover: {
          DEFAULT: 'var(--color-popover)',
          foreground: 'var(--color-popover-foreground)',
        },
        /* Updated Color Mappings */
        primary: 'var(--color-primary)',
        'primary-transparent': 'var(--color-primary-transparent)',
        'primary-transparent-animals': 'var(--color-primary-transparent-animals)',
		'primary-transparent-hero': 'var(--color-primary-transparent-hero)',
        secondary: 'var(--color-secondary)',
        'secondary-transparent': 'var(--color-secondary-transparent)',
		'secondary-transparent-quiz': 'var(--color-secondary-transparent-quiz)',
		'secondary-transparent-cards': 'var(--color-secondary-transparent-cards)',
        tertiary: 'var(--color-tertiary)',
        'tertiary-transparent': 'var(--color-tertiary-transparent)',
        complementary: 'var(--color-complementary)',
        'complementary-transparent': 'var(--color-complementary-transparent)',
        white: 'var(--color-white)',
        'white-transparent': 'var(--color-white-transparent)',
        'white-transparent-card': 'var(--color-white-transparent-card)',
        background: 'var(--color-background)',
        'background-transparent': 'var(--color-background-transparent)',
        muted: {
          DEFAULT: 'var(--color-muted)',
          foreground: 'var(--color-muted-foreground)',
        },
        accent: {
          DEFAULT: 'var(--color-accent)',
          foreground: 'var(--color-accent-foreground)',
        },
        destructive: {
          DEFAULT: 'var(--color-destructive)',
          foreground: 'var(--color-destructive-foreground)',
        },
        border: 'var(--color-border)',
        input: 'var(--color-input)',
        ring: 'var(--color-ring)',
        chart: {
          '1': 'var(--color-chart-1)',
          '2': 'var(--color-chart-2)',
          '3': 'var(--color-chart-3)',
          '4': 'var(--color-chart-4)',
          '5': 'var(--color-chart-5)',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
