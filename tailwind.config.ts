import type { Config } from 'tailwindcss'
import tailwindcssAnimate from 'tailwindcss-animate'
import { fontFamily } from 'tailwindcss/defaultTheme'

const config = {
  darkMode: ['class'],
  content: [
    'app/**/*.{ts,tsx}',
    'components/**/*.{ts,tsx}',
    '../../packages/ui/src/components/**/*.{ts,tsx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)', ...fontFamily.sans],
        mono: ['var(--font-mono)', ...fontFamily.mono],
      },
      keyframes: {
        spriteAnimation: {
          '0%': { transform: 'translateY(0%)' },
          '100%': { transform: 'translateY(-93.33%)' },
        },
        'gradient-xy': {
          '0%, 100%': {
            'background-size': '400% 400%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
        'button-glow': {
          '0%': {
            opacity: '0.9',
            'box-shadow': '0 0 15px rgba(255,140,0,0)',
          },
          '50%': {
            opacity: '1',
            'box-shadow': '0 0 30px rgba(255,140,0,0.6)',
          },
          '100%': {
            opacity: '0.9',
            'box-shadow': '0 0 15px rgba(255,140,0,0)',
          },
        },
        'spin-slow': {
          from: {
            transform: 'rotate(0deg)',
          },
          to: {
            transform: 'rotate(360deg)',
          },
        },
      },
      animation: {
        sprite: 'spriteAnimation 1s steps(15) infinite',
        'gradient-xy': 'gradient-xy 10s ease infinite',
        'button-glow': 'button-glow 1.5s ease-in-out',
        'spin-slow': 'spin-slow 3s linear infinite',
      },
      colors: {
        primary: {
          '50': 'rgb(var(--tw-color-primary-50) / <alpha-value>)',
          100: 'rgb(var(--tw-color-primary-100) / <alpha-value>)',
          200: 'rgb(var(--tw-color-primary-200) / <alpha-value>)',
          300: 'rgb(var(--tw-color-primary-300) / <alpha-value>)',
          400: 'rgb(var(--tw-color-primary-400) / <alpha-value>)',
          500: 'rgb(var(--tw-color-primary-500) / <alpha-value>)',
          600: 'rgb(var(--tw-color-primary-600) / <alpha-value>)',
          700: 'rgb(var(--tw-color-primary-700) / <alpha-value>)',
          800: 'rgb(var(--tw-color-primary-800) / <alpha-value>)',
          900: 'rgb(var(--tw-color-primary-900) / <alpha-value>)',
          950: 'rgb(var(--tw-color-primary-950) / <alpha-value>)',
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        gray: {
          '50': 'rgb(var(--tw-color-gray-50) / <alpha-value>)',
          100: 'rgb(var(--tw-color-gray-100) / <alpha-value>)',
          200: 'rgb(var(--tw-color-gray-200) / <alpha-value>)',
          300: 'rgb(var(--tw-color-gray-300) / <alpha-value>)',
          400: 'rgb(var(--tw-color-gray-400) / <alpha-value>)',
          500: 'rgb(var(--tw-color-gray-500) / <alpha-value>)',
          600: 'rgb(var(--tw-color-gray-600) / <alpha-value>)',
          700: 'rgb(var(--tw-color-gray-700) / <alpha-value>)',
          800: 'rgb(var(--tw-color-gray-800) / <alpha-value>)',
          900: 'rgb(var(--tw-color-gray-900) / <alpha-value>)',
          950: 'rgb(var(--tw-color-gray-950) / <alpha-value>)',
          1000: 'rgb(var(--tw-color-gray-1000) / <alpha-value>)',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
    },
  },
  plugins: [tailwindcssAnimate],
} satisfies Config

export default config
