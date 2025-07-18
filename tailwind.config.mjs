/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    './node_modules/@astrojs/tailwind/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        // Diné Insurance Brand Colors
        'red-clay': '#B85450',        // Red Clay / Terracotta - earth and resilience
        'red-clay-light': '#C86B67',  // Lighter red clay
        'red-clay-dark': '#A04A46',   // Darker red clay
        
        'turquoise': '#5FB3B3',       // Turquoise - life, protection, healing
        'turquoise-light': '#7BC4C4', // Light turquoise
        'turquoise-dark': '#4A9999',  // Dark turquoise
        
        'cream': '#F5F1E8',           // Cream/Sand - land and harmony
        'sand': '#E8DCC4',            // Warm sand
        'sand-dark': '#D4C4A8',       // Darker sand for cards
        
        // Supporting colors
        'sage': '#8B9D83',            // Sage green for balance
        'earth-brown': '#6B4E3D',     // Deep earth brown for text
        'charcoal': '#2C2826',        // Almost black for high contrast
        'soft-white': '#FEFDFB',      // Pure soft white
        
        // Functional colors with cultural meaning
        'protection': '#5FB3B3',      // Turquoise for protection elements
        'harmony': '#F5F1E8',         // Cream for harmony backgrounds
        'strength': '#B85450',        // Red clay for strength/action
        'tradition': '#8B9D83',       // Sage for traditional elements
        
        // Legacy support (mapped to new colors)
        'terra-cotta': '#B85450',     // Map to red-clay
        'espresso': '#6B4E3D',        // Map to earth-brown
        
        // Shadcn/ui CSS variables
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: "hsl(var(--card))",
        "card-foreground": "hsl(var(--card-foreground))",
        popover: "hsl(var(--popover))",
        "popover-foreground": "hsl(var(--popover-foreground))",
        muted: "hsl(var(--muted))",
        "muted-foreground": "hsl(var(--muted-foreground))",
        accent: "hsl(var(--accent))",
        "accent-foreground": "hsl(var(--accent-foreground))",
        destructive: "hsl(var(--destructive))",
        "destructive-foreground": "hsl(var(--destructive-foreground))",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite',
        'slide-up': 'slideUp 0.5s ease-out',
        'fade-in': 'fadeIn 0.8s ease-out',
        'subtle-pulse': 'subtlePulse 3s ease-in-out infinite',
        'scroll': 'scroll 30s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(184, 148, 111, 0.3)' },
          '50%': { boxShadow: '0 0 30px rgba(184, 148, 111, 0.5)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        subtlePulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      borderRadius: {
        '4xl': '2rem',
      },
      backdropBlur: {
        xs: '2px',
        xl: '20px',
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(0, 0, 0, 0.08)',
        'medium': '0 8px 30px rgba(0, 0, 0, 0.12)',
        'elegant': '0 10px 40px rgba(0, 0, 0, 0.15)',
        'text-glow': '0 0 10px rgba(0, 0, 0, 0.5)',
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.2), inset 0 0 0 1px rgba(255, 255, 255, 0.1)',
      },
    },
  },
  plugins: [],
}
