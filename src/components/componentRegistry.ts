// Component Registry
// This file serves as the central index for all components in the project
// It helps track available components and their locations
// ALWAYS CHECK THIS FILE BEFORE CREATING NEW COMPONENTS

export const componentRegistry = {
  // UI Components - Reusable interface elements
  ui: {
    Button: {
      path: '@components/ui/Button',
      description: 'Primary button component with variants',
      props: ['children', 'variant?', 'size?', 'href?', 'onClick?'],
      variants: ['primary', 'secondary', 'outline'],
      status: 'ready'
    },
    Card: {
      path: '@components/ui/Card',
      description: 'Card container with glass effect',
      props: ['children', 'className?', 'variant?'],
      variants: ['default', 'glass', 'solid'],
      status: 'ready'
    },
    Navbar: {
      path: '@components/ui/Navbar',
      description: 'Navigation bar with responsive design',
      props: ['logo?', 'links', 'transparent?'],
      status: 'ready'
    }
  },
  
  // Section Components - Page sections
  sections: {
    Hero: {
      path: '@components/sections/Hero',
      description: 'Hero section with title, subtitle and CTA',
      props: ['title', 'subtitle?', 'ctaText?', 'ctaLink?', 'backgroundImage?'],
      status: 'ready'
    },
    BlogPreview: {
      path: '@components/sections/BlogPreview',
      description: 'Blog posts preview section',
      props: ['posts', 'title?', 'showMore?'],
      status: 'ready'
    },
    ContactForm: {
      path: '@components/sections/ContactForm',
      description: 'Contact form with validation',
      props: ['title?', 'subtitle?', 'fields?'],
      status: 'ready'
    },
    Footer: {
      path: '@components/sections/Footer',
      description: 'Site footer with links and info',
      props: ['companyName', 'links?', 'social?'],
      status: 'ready'
    }
  },
  
  // Layout Components - Page layouts
  layouts: {
    BaseLayout: {
      path: '@layouts/BaseLayout',
      description: 'Base layout wrapper for all pages',
      props: ['title', 'description?', 'image?'],
      status: 'ready'
    },
    BlogLayout: {
      path: '@layouts/BlogLayout',
      description: 'Layout for blog posts',
      props: ['title', 'description?', 'pubDate', 'author?'],
      status: 'ready'
    }
  },
  
  // Utility Components - Helper functions and utilities
  lib: {
    utils: {
      path: '@components/lib/utils',
      description: 'Utility functions for common tasks',
      exports: ['cn', 'formatDate', 'slugify'],
      status: 'ready'
    }
  },
  
  // Diné Insurance Design System
  designSystem: {
    colors: {
      primary: {
        'red-clay': '#B85450',        // Earth and resilience
        'turquoise': '#5FB3B3',       // Life, protection, healing
        'cream': '#F5F1E8',           // Land and harmony
        'earth-brown': '#6B4E3D',     // Deep earth brown for text
        'charcoal': '#2C2826'         // High contrast text
      },
      cultural: {
        'protection': '#5FB3B3',      // Turquoise for protection elements
        'harmony': '#F5F1E8',         // Cream for harmony backgrounds
        'strength': '#B85450',        // Red clay for strength/action
        'tradition': '#8B9D83'        // Sage for traditional elements
      },
      functional: {
        'sand': '#E8DCC4',            // Warm backgrounds
        'sage': '#8B9D83',            // Supporting elements
        'soft-white': '#FEFDFB'       // Pure white
      }
    },
    typography: {
      fontFamily: 'Inter, system-ui, sans-serif',
      headings: 'font-bold text-earth-brown',
      body: 'text-earth-brown/80',
      accent: 'text-turquoise'
    },
    spacing: {
      section: 'py-16 md:py-24',
      container: 'container mx-auto px-4 sm:px-6 lg:px-8'
    },
    cultural: {
      hozho: 'Balance & Harmony in design and functionality',
      ke: 'Kinship & Respect in user experience',
      protection: 'Safeguarding user data and privacy'
    }
  }
};

// Helper function to get component info
export function getComponentInfo(category: string, componentName: string) {
  return (componentRegistry as any)[category]?.[componentName];
}

// Helper function to list all components in a category
export function listComponents(category?: string) {
  if (category) {
    return Object.keys((componentRegistry as any)[category] || {});
  }
  return Object.keys(componentRegistry).reduce((acc, cat) => {
    acc[cat] = Object.keys((componentRegistry as any)[cat]);
    return acc;
  }, {} as Record<string, string[]>);
}

// Helper function to check if component exists
export function componentExists(category: string, componentName: string): boolean {
  return !!((componentRegistry as any)[category]?.[componentName]);
}

// Helper function to add new component to registry
export function addComponent(
  category: string, 
  componentName: string, 
  componentInfo: any
) {
  if (!(componentRegistry as any)[category]) {
    (componentRegistry as any)[category] = {};
  }
  (componentRegistry as any)[category][componentName] = componentInfo;
}

// Component creation checklist
export const componentChecklist = {
  beforeCreating: [
    '1. Check this registry for existing similar components',
    '2. Search through all categories (ui, sections, layouts)',
    '3. Consider extending existing component instead of creating new',
    '4. Ensure component follows single responsibility principle'
  ],
  afterCreating: [
    '1. Add component details to this registry',
    '2. Include all props and their types',
    '3. Add description and usage notes',
    '4. Test component in isolation',
    '5. Verify file size is under 1000 lines'
  ],
  fileSize: [
    '1. Keep files under 1000 lines',
    '2. If approaching limit, consider splitting',
    '3. Extract utilities to lib/ folder',
    '4. Create sub-components if needed',
    '5. Move types to separate .types.ts files'
  ]
};

// Export for easy access
export default componentRegistry;
