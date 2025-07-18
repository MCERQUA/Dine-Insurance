import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
        brand: {
          DEFAULT: 'hsl(var(--brand))',
          foreground: 'hsl(var(--brand-foreground))',
        },
        // Professional Arizona Native-inspired color palette
        terracotta: {
          50: '#fdf6f3',
          100: '#fbe8e0',
          200: '#f8d4c4',
          300: '#f2b59a',
          400: '#e98d65',
          500: '#de6a3a',
          600: '#c94f23',
          700: '#a73f1b',
          800: '#8b3518',
          900: '#752f19',
          950: '#3f1608',
        },
        canyon: {
          50: '#faf7f5',
          100: '#f4ede7',
          200: '#e8d7cc',
          300: '#d8b8a5',
          400: '#c59176',
          500: '#b57555',
          600: '#a8624a',
          700: '#8b4f3f',
          800: '#724237',
          900: '#5d3730',
          950: '#311a18',
        },
        sage: {
          50: '#f6f7f6',
          100: '#e3e5e3',
          200: '#c6cac7',
          300: '#a2a8a3',
          400: '#7e867f',
          500: '#636b64',
          600: '#4e5550',
          700: '#404541',
          800: '#353936',
          900: '#2e3130',
          950: '#191b1a',
        },
        sand: {
          50: '#fdfcfb',
          100: '#f7f3ee',
          200: '#ede5d8',
          300: '#ded0ba',
          400: '#cab195',
          500: '#b99376',
          600: '#ac7e62',
          700: '#906752',
          800: '#765447',
          900: '#60463c',
          950: '#33241f',
        },
        adobe: {
          50: '#fef8f4',
          100: '#fdeee3',
          200: '#fadbc6',
          300: '#f6c09f',
          400: '#f09b70',
          500: '#e7754a',
          600: '#dc5a30',
          700: '#b84426',
          800: '#943823',
          900: '#79321f',
          950: '#41160d',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Crimson Text', 'Georgia', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'glow': 'glow 3s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(199, 79, 35, 0.3)' },
          '100%': { boxShadow: '0 0 20px rgba(199, 79, 35, 0.3), 0 0 30px rgba(199, 79, 35, 0.2)' },
        },
      },
      backgroundImage: {
        'mesa-pattern': "url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23c94f23' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')",
      },
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
};

export default config;