# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build and Development Commands

```bash
# Development
npm run dev        # Start development server at localhost:4321
npm run start      # Alias for npm run dev

# Building and Production
npm run build      # Build for production
npm run preview    # Preview production build locally

# Code Quality
npm run check      # Run Astro type checking
npm run lint       # Run ESLint on all files

# Project Analysis
npm run analyze    # Analyze component usage and file sizes

# Setup and Maintenance
npm run setup      # Install dependencies and setup .env
npm run clean      # Clean build artifacts and reinstall dependencies
```

## Project Architecture

This is an **Astro 5.11.0** modular website template with a sophisticated **Component Registry System**. The key architectural principle is preventing duplicate components through centralized tracking.

### Core Technology Stack
- **Astro** - Static site generator with island architecture
- **React 18.2.0** - For interactive components (minimal usage)
- **Tailwind CSS 3.4.1** - Utility-first CSS with custom design system
- **TypeScript** - Full type safety across the project
- **Framer Motion** - Animations (when needed)

### Critical Architecture Rule: Component Registry First

**BEFORE creating ANY component, ALWAYS check `src/components/componentRegistry.ts`**

This file is the single source of truth for all components. It prevents:
- Duplicate components (Button, Button2, NewButton)
- Inconsistent styling
- Component sprawl and technical debt

### Directory Structure

```
src/
├── components/
│   ├── componentRegistry.ts  # 🔑 CENTRAL COMPONENT INDEX - CHECK FIRST!
│   ├── ui/                   # Reusable UI elements (Button, Card, Navbar)
│   ├── sections/            # Page sections (Hero, ContactForm, Footer)
│   ├── lib/                 # Utilities (utils.ts)
│   └── [component files]
├── layouts/                 # Page layouts (BaseLayout, BlogLayout)
├── pages/                   # Site pages and routes
├── content/                 # Content collections (blog posts)
└── styles/                  # Global styles
```

### Path Aliases (configured in astro.config.mjs)
- `@components` → `/src/components`
- `@layouts` → `/src/layouts`
- `@styles` → `/src/styles`
- `@lib` → `/src/lib`
- `@assets` → `/src/assets`

## Component Development Workflow

### 1. Registry Check (MANDATORY)
```bash
# Always start here
code src/components/componentRegistry.ts

# Search for similar components in all categories:
# - ui: buttons, cards, inputs, modals
# - sections: hero, contact, blog, footer
# - layouts: page wrappers
```

### 2. Component Creation Decision Tree
```
Need a component?
├─ Check registry for similar component
├─ Similar exists? 
│  ├─ YES → Use existing or extend with props/variants
│  └─ NO → Create new component following patterns
└─ Add to registry immediately after creation
```

### 3. File Size Limits
- **Maximum 1000 lines per file**
- If approaching limit:
  - Split into sub-components
  - Extract utilities to `src/components/lib/`
  - Move types to separate `.types.ts` files

### 4. Component Registry Entry Format
```typescript
ComponentName: {
  path: '@components/category/ComponentName',
  description: 'Clear description of functionality',
  props: ['required-prop', 'optional-prop?'],
  variants: ['default', 'primary', 'secondary'],
  status: 'ready',
  dependencies: ['@components/lib/utils'],
  usedIn: ['HomePage', 'ContactPage']
}
```

## Design System

### Color Palette (defined in tailwind.config.mjs)
```javascript
colors: {
  // Diné Insurance Brand Colors - Based on Reference Image
  'orange-600': '#EA580C',      // Main orange from reference
  'red-600': '#DC2626',         // Red accent from reference
  'cream': '#FEF7ED',           // Light cream background
  'sand': '#FED7AA',            // Warm sand/peach tones
  'earth-brown': '#7C2D12',     // Deep brown for text
  'charcoal': '#1C1917',        // High contrast text
  
  // Functional colors with cultural meaning
  'protection': '#EA580C',      // Orange for protection elements
  'harmony': '#FEF7ED',         // Cream for harmony backgrounds
  'strength': '#DC2626',        // Red for strength/action
  'tradition': '#A16207',       // Warm brown for traditional elements
  'soft-white': '#FFFBEB'       // Pure soft white
}
```

### Typography
- **Font:** Inter (system-ui fallback)
- **Headings:** Bold, earth-brown color
- **Body:** Regular, earth-brown/80 color

### Standard Spacing
- **Sections:** `py-16 md:py-24`
- **Container:** `container mx-auto px-4 sm:px-6 lg:px-8`

## Content Management

### Blog System
- **Location:** `src/content/blog/`
- **Format:** Markdown with frontmatter
- **Schema:** Defined in `src/content/config.ts`

### Blog Post Template
```markdown
---
title: "Post Title"
description: "SEO description"
pubDate: 2025-01-15
author: "Author Name"
tags: ["tag1", "tag2"]
readTime: "5 min read"
featured: true
category: "Category"
image:
  src: "/images/blog/image.jpg"
  alt: "Image description"
---

# Content here...
```

## Common Development Tasks

### Creating a New Component
1. Check `src/components/componentRegistry.ts` for existing similar components
2. If unique, create component in appropriate category:
   - `ui/` for reusable interface elements
   - `sections/` for page sections
   - `layouts/` for page structures
3. Add TypeScript interface for props
4. Add to component registry immediately
5. Test in isolation before using in pages

### Adding a Blog Post
1. Create `.md` file in `src/content/blog/`
2. Add proper frontmatter with all required fields
3. Add images to `public/images/blog/`
4. Post automatically appears in blog listings

### Customizing Design
1. Update colors in `tailwind.config.mjs`
2. Modify typography in `src/styles/global.css`
3. Update component variants through props

### Performance Optimization
- Use `client:load` only when necessary for React components
- Prefer `client:visible` or `client:idle` for below-fold interactivity
- Optimize images with proper loading strategies

## File Analysis Tool

Use `npm run analyze` to:
- Check component usage across project
- Identify files approaching 1000-line limit
- Find unused components
- Track component dependencies

## Development Best Practices

### Component Design
- Single responsibility principle
- Props-driven configuration
- Clear TypeScript interfaces
- Composition over complex inheritance

### Code Quality
- Always run `npm run check` before committing
- Use `npm run lint` to maintain code style
- Keep components under 1000 lines
- Update registry when creating components

### Naming Conventions
- **Components:** PascalCase (`Button`, `ContactForm`)
- **Files:** PascalCase (`Button.astro`, `ContactForm.astro`)
- **Props:** camelCase (`variant`, `isDisabled`)
- **CSS Classes:** kebab-case (`btn-primary`, `card-content`)

## Testing Approach

No formal testing framework is configured. Testing is done through:
1. **Visual testing** - Create test pages for components
2. **Build verification** - `npm run build` catches type errors
3. **Component isolation** - Test components individually
4. **Responsive testing** - Verify across breakpoints

## Troubleshooting

### Common Issues
- **Component not found:** Check registry for correct path and verify import
- **Type errors:** Run `npm run check` and fix TypeScript issues
- **Build failures:** Run `npm run clean` to reset environment
- **Style issues:** Verify Tailwind classes in design system

### Registry Maintenance
- Regularly review for unused components
- Update documentation for component changes
- Mark deprecated components with migration paths
- Keep version information current

## Key Files to Understand

1. **`src/components/componentRegistry.ts`** - Component index and documentation
2. **`astro.config.mjs`** - Project configuration and path aliases
3. **`tailwind.config.mjs`** - Design system configuration
4. **`src/content/config.ts`** - Content collections schema
5. **`package.json`** - Available scripts and dependencies

## Critical Success Factors

1. **Always check component registry first** - This prevents duplicate work
2. **Keep files under 1000 lines** - Maintains code quality and readability
3. **Update registry immediately** - Keeps documentation current
4. **Follow established patterns** - Ensures consistency across the project
5. **Use the analysis tool** - Regularly check project health with `npm run analyze`

The component registry system is the cornerstone of this project's maintainability. Use it religiously to prevent technical debt and maintain a clean, organized codebase.