/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    './node_modules/@astrojs/tailwind/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        // Diné Insurance Brand Colors - Based on Reference Image
        'orange-600': '#EA580C',      // Main orange from reference top bar
        'orange-500': '#F97316',      // Lighter orange
        'orange-700': '#C2410C',      // Darker orange
        'red-600': '#DC2626',         // Red accent from reference
        'red-700': '#B91C1C',         // Darker red for gradients
        
        'cream': '#FEF7ED',           // Light cream background from reference
        'sand': '#FED7AA',            // Warm sand/peach tones
        'sand-dark': '#FDBA74',       // Darker sand for cards
        
        // Supporting colors - NO GREEN
        'earth-brown': '#7C2D12',     // Deep brown for text (brown-800)
        'warm-brown': '#A16207',      // Warm brown for secondary text
        'charcoal': '#1C1917',        // Almost black for high contrast
        'soft-white': '#FFFBEB',      // Pure soft white
        
        // Functional colors with cultural meaning  
        'protection': '#EA580C',      // Orange for protection elements
        'harmony': '#FEF7ED',         // Cream for harmony backgrounds
        'strength': '#DC2626',        // Red for strength/action
        'tradition': '#A16207',       // Warm brown for traditional elements
        
        // Legacy support (mapped to new colors)
        'terra-cotta': '#EA580C',     // Map to orange-600
        'red-clay': '#DC2626',        // Map to red-600 
        'turquoise': '#EA580C',       // Map green references to orange
        'espresso': '#7C2D12',        // Map to earth-brown
        
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
