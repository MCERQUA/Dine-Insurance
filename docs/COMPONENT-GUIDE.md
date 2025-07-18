# Component Creation Guide

## Overview

This guide covers everything you need to know about creating, organizing, and maintaining components in the modular template system.

## Component Registry System

### The Central Registry

The component registry (`src/components/componentRegistry.ts`) is the heart of our modular system. It serves as:

- **Central index** of all available components
- **Documentation hub** for component usage
- **Duplication prevention** system
- **Team collaboration** tool

### Registry Structure

```typescript
export const componentRegistry = {
  // UI Components - Reusable interface elements
  ui: {
    ComponentName: {
      path: '@components/ui/ComponentName',
      description: 'What this component does',
      props: ['prop1', 'prop2?', 'prop3?'],
      variants: ['default', 'alternative'],
      status: 'ready' | 'in-progress' | 'deprecated',
      dependencies: ['@components/lib/utils'],
      usedIn: ['HomePage', 'AboutPage'],
      version: '1.0.0'
    }
  },
  
  // Section Components - Page sections
  sections: {
    // Large, complex components that make up page sections
  },
  
  // Layout Components - Page layouts
  layouts: {
    // Page wrapper components
  },
  
  // Utility Components - Helper functions
  lib: {
    // Utility functions and helpers
  }
};
```

## Component Creation Workflow

### Step 1: Planning Phase

Before writing any code, answer these questions:

1. **What does this component do?**
   - Single responsibility principle
   - Clear, specific purpose

2. **Does it already exist?**
   - Search the registry thoroughly
   - Check all categories (ui, sections, layouts)
   - Look for similar components

3. **Can I extend an existing component?**
   - Add a variant to existing component
   - Enhance props of existing component
   - Compose existing components

4. **Is it truly unique?**
   - Different enough to warrant new component
   - Won't create confusion with existing components
   - Follows established patterns

### Step 2: Registry Check

**Search Process:**
```bash
# Open the registry
code src/components/componentRegistry.ts

# Search for relevant terms
# Examples: "button", "card", "form", "nav", "hero"

# Check similar components in each category:
# - ui/ (buttons, cards, inputs)
# - sections/ (hero, contact, blog)
# - layouts/ (page wrappers)
```

**Evaluation Questions:**
- Is there a similar component?
- Can the existing component be extended?
- Would modifying the existing component break other uses?
- Is the new component different enough to justify creation?

### Step 3: Component Design

#### TypeScript Interface Design

```typescript
// Define clear, specific interfaces
interface ComponentProps {
  // Required props first
  title: string;
  
  // Optional props with defaults
  variant?: 'default' | 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  
  // Conditional props
  href?: string; // Only if it's a link
  onClick?: () => void; // Only if it's interactive
  
  // Children and content
  children?: React.ReactNode;
  
  // Styling
  className?: string;
}
```

#### Component Structure

```astro
---
// Component: Button.astro
// Description: Reusable button component with multiple variants

export interface Props {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  className?: string;
}

const { 
  variant = 'primary', 
  size = 'md', 
  href,
  type = 'button',
  disabled = false,
  className = '',
  ...rest 
} = Astro.props;

// Component logic here
const baseClasses = 'btn-base transition-all duration-300';
const variantClasses = {
  primary: 'bg-terra-cotta text-soft-white hover:bg-terra-cotta/90',
  secondary: 'bg-sand text-espresso hover:bg-sand-dark',
  outline: 'border-2 border-terra-cotta text-terra-cotta hover:bg-terra-cotta hover:text-soft-white'
};
const sizeClasses = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg'
};

const buttonClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
---

<!-- Conditional rendering based on props -->
{href && !disabled ? (
  <a href={href} class={buttonClasses} {...rest}>
    <slot />
  </a>
) : (
  <button 
    type={type} 
    disabled={disabled} 
    class={buttonClasses} 
    {...rest}
  >
    <slot />
  </button>
)}

<style>
  /* Component-specific styles */
  .btn-base {
    @apply inline-flex items-center justify-center font-medium rounded-lg;
  }
  
  .btn-base:hover:not(:disabled) {
    transform: translateY(-1px);
  }
  
  .btn-base:disabled {
    @apply opacity-50 cursor-not-allowed;
  }
</style>
```

### Step 4: Implementation Guidelines

#### File Organization

```
src/components/
├── ui/              # Reusable UI elements
│   ├── Button.astro         # < 500 lines
│   ├── Card.astro           # < 300 lines
│   ├── Input.astro          # < 400 lines
│   └── Modal.astro          # < 600 lines
├── sections/        # Page sections
│   ├── Hero.astro           # < 800 lines
│   ├── ContactForm.astro    # < 900 lines
│   └── BlogPreview.astro    # < 700 lines
├── layouts/         # Page layouts
│   ├── BaseLayout.astro     # < 600 lines
│   └── BlogLayout.astro     # < 800 lines
└── lib/            # Utilities
    ├── utils.ts             # < 500 lines
    └── types.ts             # < 300 lines
```

#### File Size Management

**Keep files under 1000 lines:**

1. **Split large components:**
   ```astro
   <!-- Instead of one huge component -->
   <!-- Split into sub-components -->
   
   ---
   import HeroContent from './HeroContent.astro';
   import HeroBackground from './HeroBackground.astro';
   import HeroCTA from './HeroCTA.astro';
   ---
   
   <section class="hero">
     <HeroBackground />
     <HeroContent />
     <HeroCTA />
   </section>
   ```

2. **Extract utilities:**
   ```typescript
   // Move reusable logic to lib/
   // src/components/lib/formUtils.ts
   export function validateEmail(email: string): boolean {
     return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
   }
   ```

3. **Separate types:**
   ```typescript
   // src/components/lib/types.ts
   export interface ButtonProps {
     variant: 'primary' | 'secondary';
     size: 'sm' | 'md' | 'lg';
   }
   ```

#### Naming Conventions

- **Components:** PascalCase (`Button`, `ContactForm`, `BlogPreview`)
- **Files:** PascalCase (`Button.astro`, `ContactForm.astro`)
- **Props:** camelCase (`variant`, `isDisabled`, `onClick`)
- **CSS Classes:** kebab-case (`btn-primary`, `card-content`)

### Step 5: Registry Documentation

After creating your component, add it to the registry:

```typescript
// In componentRegistry.ts
NewComponent: {
  path: '@components/ui/NewComponent',
  description: 'Specific description of what this component does and when to use it',
  props: [
    'title',           // Required prop
    'description?',    // Optional prop
    'variant?',        // Optional with variants
    'onClick?'         // Optional callback
  ],
  variants: ['default', 'primary', 'secondary'],
  status: 'ready',
  dependencies: ['@components/lib/utils'],
  usedIn: ['HomePage', 'ContactPage'],
  version: '1.0.0',
  examples: [
    '<NewComponent title="Hello" variant="primary" />',
    '<NewComponent title="World" description="Sample description" />'
  ]
}
```

## Component Categories

### UI Components (`src/components/ui/`)

**Purpose:** Small, reusable interface elements

**Examples:**
- Buttons
- Cards
- Inputs
- Modals
- Tooltips
- Icons

**Characteristics:**
- Single responsibility
- Highly reusable
- Minimal business logic
- Props-driven configuration

**Template:**
```astro
---
// UI Component Template
export interface Props {
  // Define clear prop interface
}

const { /* destructure props */ } = Astro.props;
---

<element class="base-styles variant-styles">
  <slot />
</element>

<style>
  /* Component-specific styles */
</style>
```

### Section Components (`src/components/sections/`)

**Purpose:** Complete page sections with multiple elements

**Examples:**
- Hero sections
- Contact forms
- Blog previews
- Feature showcases
- Testimonials

**Characteristics:**
- Combine multiple UI components
- Section-specific business logic
- Responsive design patterns
- Content-driven

**Template:**
```astro
---
// Section Component Template
import UIComponent from '@components/ui/UIComponent.astro';

export interface Props {
  // Section-specific props
}

const { /* props */ } = Astro.props;
---

<section class="section-spacing">
  <div class="container-padding">
    <UIComponent />
    <!-- Section content -->
  </div>
</section>
```

### Layout Components (`src/layouts/`)

**Purpose:** Page structure and common elements

**Examples:**
- Base layout
- Blog layout
- Landing page layout
- Documentation layout

**Characteristics:**
- Page-level structure
- SEO meta tags
- Global styles
- Navigation integration

**Template:**
```astro
---
// Layout Component Template
import BaseLayout from './BaseLayout.astro';

export interface Props {
  title: string;
  description?: string;
}

const { title, description } = Astro.props;
---

<BaseLayout title={title} description={description}>
  <main>
    <slot />
  </main>
</BaseLayout>
```

### Utility Components (`src/components/lib/`)

**Purpose:** Helper functions and utilities

**Examples:**
- Form validation
- Date formatting
- String manipulation
- API helpers

**Characteristics:**
- Pure functions
- No UI elements
- Reusable logic
- Well-tested

## Best Practices

### 1. Component Design Principles

**Single Responsibility:**
```typescript
// Good: Focused component
interface ButtonProps {
  variant: 'primary' | 'secondary';
  onClick: () => void;
}

// Bad: Too many responsibilities
interface SuperComponentProps {
  buttonVariant: string;
  formData: object;
  modalConfig: object;
  navigationItems: array;
}
```

**Composition over Inheritance:**
```astro
<!-- Good: Compose smaller components -->
<Card>
  <CardHeader>
    <Title>{title}</Title>
  </CardHeader>
  <CardContent>
    <Text>{content}</Text>
  </CardContent>
</Card>

<!-- Bad: Monolithic component -->
<SuperCard 
  title={title} 
  content={content} 
  headerStyle="large" 
  contentStyle="padded"
/>
```

### 2. Props Design

**Clear Prop Names:**
```typescript
// Good: Clear and specific
interface Props {
  isLoading: boolean;
  onSubmit: (data: FormData) => void;
  variant: 'primary' | 'secondary';
}

// Bad: Ambiguous
interface Props {
  loading: any;
  submit: Function;
  type: string;
}
```

**Default Values:**
```typescript
// Provide sensible defaults
const { 
  variant = 'primary',
  size = 'md',
  disabled = false 
} = Astro.props;
```

### 3. Styling Guidelines

**Use Design System:**
```css
/* Use theme colors */
.btn-primary {
  @apply bg-terra-cotta text-soft-white;
}

/* Use consistent spacing */
.section-spacing {
  @apply py-16 md:py-24;
}

/* Use utility classes */
.container-padding {
  @apply container mx-auto px-4 sm:px-6 lg:px-8;
}
```

**Scoped Styles:**
```astro
<style>
  /* Component-specific styles only */
  .component-specific {
    /* Styles that only apply to this component */
  }
</style>
```

### 4. Performance Considerations

**Lazy Loading:**
```astro
<!-- For images below the fold -->
<img src={imageSrc} alt={imageAlt} loading="lazy" />

<!-- For React components -->
<InteractiveComponent client:visible />
```

**Bundle Size:**
```astro
<!-- Only load JavaScript when needed -->
<StaticComponent />  <!-- No JS -->
<InteractiveComponent client:load />  <!-- Immediate JS -->
<InteractiveComponent client:idle />  <!-- Delayed JS -->
```

## Testing Components

### 1. Visual Testing

**Component Isolation:**
```astro
<!-- Create test pages for components -->
<!-- src/pages/test/button.astro -->
---
import Button from '@components/ui/Button.astro';
---

<div class="p-8 space-y-4">
  <Button variant="primary">Primary Button</Button>
  <Button variant="secondary">Secondary Button</Button>
  <Button variant="outline">Outline Button</Button>
</div>
```

### 2. Responsive Testing

**Multiple Breakpoints:**
```css
/* Test at different screen sizes */
.component {
  @apply block md:flex lg:grid;
}
```

### 3. Accessibility Testing

**Semantic HTML:**
```astro
<!-- Use proper semantic elements -->
<button type="button" aria-label="Close modal">
  <CloseIcon />
</button>

<nav aria-label="Main navigation">
  <!-- Navigation items -->
</nav>
```

## Common Patterns

### 1. Conditional Rendering

```astro
---
const { showIcon, href, disabled } = Astro.props;
---

{showIcon && <Icon name="check" />}

{href && !disabled ? (
  <a href={href}>
    <slot />
  </a>
) : (
  <button disabled={disabled}>
    <slot />
  </button>
)}
```

### 2. Dynamic Classes

```astro
---
const { variant, size, isActive } = Astro.props;

const classes = [
  'base-class',
  `variant-${variant}`,
  `size-${size}`,
  isActive && 'active'
].filter(Boolean).join(' ');
---

<div class={classes}>
  <slot />
</div>
```

### 3. Slot Patterns

```astro
<!-- Named slots for complex layouts -->
<article class="blog-post">
  <header>
    <slot name="header" />
  </header>
  
  <main>
    <slot />  <!-- Default slot -->
  </main>
  
  <footer>
    <slot name="footer" />
  </footer>
</article>
```

## Troubleshooting

### Common Issues

**Import Errors:**
```typescript
// Check path aliases in tsconfig.json
"paths": {
  "@components/*": ["src/components/*"]
}
```

**Type Errors:**
```typescript
// Ensure proper TypeScript interfaces
export interface Props {
  title: string;  // Not any or unknown
}
```

**Style Issues:**
```astro
<!-- Ensure Tailwind classes are available -->
<div class="bg-terra-cotta text-soft-white">
  <!-- Content -->
</div>
```

### Debugging Process

1. **Check Registry:** Verify component is documented
2. **Validate Props:** Ensure all required props are provided
3. **Test Isolation:** Create test page for component
4. **Check Console:** Look for JavaScript/TypeScript errors
5. **Validate Build:** Ensure component builds without errors

## Maintenance

### Version Control

```typescript
// Track component versions
ComponentName: {
  version: '2.1.0',
  changelog: [
    '2.1.0 - Added dark mode support',
    '2.0.0 - Breaking: Changed prop names',
    '1.2.0 - Added new variant'
  ]
}
```

### Deprecation Process

```typescript
// Mark components as deprecated
OldComponent: {
  status: 'deprecated',
  replacedBy: '@components/ui/NewComponent',
  migrationGuide: 'docs/migration/old-to-new.md'
}
```

### Regular Audits

**Monthly Reviews:**
- Check for unused components
- Identify duplicate functionality
- Update documentation
- Review performance metrics

---

**Remember:** The component registry is your source of truth. Always check it first, and always update it when you create new components!
