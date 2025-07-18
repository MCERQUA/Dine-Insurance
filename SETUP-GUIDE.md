# Astro Modular Template Setup Guide

## Prerequisites

Before getting started, ensure you have the following installed:

- **Node.js** (version 18.0.0 or higher)
- **npm** (comes with Node.js) or **yarn** or **pnpm**
- **Git** for version control
- A code editor (**VS Code** recommended)

## Quick Start

### 1. Copy the Template

```bash
# Copy the ASTRO-TEMPLATE folder to your project location
cp -r ASTRO-TEMPLATE your-project-name
cd your-project-name
```

### 2. Install Dependencies

```bash
# Using npm
npm install

# Using yarn
yarn install

# Using pnpm
pnpm install
```

### 3. Set Up Environment Variables

```bash
# Copy the example environment file
cp .env.example .env

# Edit .env with your specific values
# Update site name, URLs, and any API keys
```

### 4. Start Development Server

```bash
npm run dev
```

Visit `http://localhost:4321` to see your site!

## Detailed Setup

### Environment Configuration

Edit your `.env` file with your specific settings:

```bash
# Required
SITE_URL=https://yourdomain.com
SITE_NAME="Your Company Name"
SITE_DESCRIPTION="Your site description for SEO"

# Social Media Links
FACEBOOK_URL=https://facebook.com/yourpage
TWITTER_URL=https://twitter.com/yourhandle
LINKEDIN_URL=https://linkedin.com/company/yourcompany
```

### Customizing Site Content

#### 1. Update Site Information

**Navigation (`src/components/ui/Navbar.astro`):**
```astro
const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' }
];
```

**Footer (`src/components/sections/Footer.astro`):**
```astro
const footerLinks = {
  company: [
    { href: '/about', label: 'About Us' },
    { href: '/services', label: 'Services' },
    // Add your links
  ]
};
```

#### 2. Customize Design

**Colors (`tailwind.config.mjs`):**
```javascript
colors: {
  // Update these to match your brand
  'cream': '#FAF7F2',
  'sand': '#E8DCC4',
  'terra-cotta': '#B8946F',
  // Add your brand colors
}
```

**Typography:**
- Update font imports in `BaseLayout.astro`
- Modify font families in `tailwind.config.mjs`

#### 3. Add Your Content

**Homepage (`src/pages/index.astro`):**
```astro
<Hero 
  title="Your Amazing Business"
  subtitle="We help you achieve extraordinary results"
  ctaText="Get Started Today"
  ctaLink="/contact"
/>
```

**Contact Information (`src/components/sections/ContactForm.astro`):**
- Update phone numbers
- Update email addresses
- Update physical address
- Update business hours

### Adding Content

#### Blog Posts

Create new blog posts in `src/content/blog/`:

```markdown
---
title: "Your Post Title"
description: "Brief description for SEO"
pubDate: 2025-01-15
author: "Your Name"
tags: ["tag1", "tag2"]
readTime: "5 min read"
featured: true
category: "Your Category"
image:
  src: "/images/blog/your-image.jpg"
  alt: "Image description"
---

# Your Blog Content

Write your content here in Markdown...
```

#### Images

**Public Images (`public/images/`):**
- `blog/` - Blog post featured images
- `team/` - Team member photos
- `services/` - Service illustrations
- `general/` - General site images

**Image Naming Convention:**
- Use descriptive names: `blog-astro-components.jpg`
- Include alt text for accessibility
- Optimize images before adding (use tools like TinyPNG)

### Component System

#### Before Creating Components

**Always check the component registry first:**

```bash
# Open the registry
code src/components/componentRegistry.ts

# Search for existing components that might fit your needs
```

#### Creating New Components

1. **Plan Your Component:**
   ```typescript
   interface ComponentProps {
     title: string;
     description?: string;
     variant?: 'default' | 'featured';
   }
   ```

2. **Create the Component:**
   ```astro
   ---
   // src/components/ui/YourComponent.astro
   export interface Props {
     title: string;
     description?: string;
     variant?: 'default' | 'featured';
   }

   const { title, description, variant = 'default' } = Astro.props;
   ---

   <div class={`your-component ${variant}`}>
     <h3>{title}</h3>
     {description && <p>{description}</p>}
   </div>
   ```

3. **Add to Registry:**
   ```typescript
   // In componentRegistry.ts
   YourComponent: {
     path: '@components/ui/YourComponent',
     description: 'Component for displaying...',
     props: ['title', 'description?', 'variant?'],
     variants: ['default', 'featured'],
     status: 'ready'
   }
   ```

### Deployment

#### Netlify (Recommended)

1. **Connect Repository:**
   - Push your code to GitHub/GitLab
   - Connect repository in Netlify dashboard

2. **Build Settings:**
   ```toml
   # netlify.toml (already included)
   [build]
     command = "npm run build"
     publish = "dist"
   ```

3. **Environment Variables:**
   - Add your production environment variables in Netlify dashboard
   - Update `SITE_URL` to your production domain

#### Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Set environment variables
vercel env add
```

#### GitHub Pages

```bash
# Install GitHub Pages adapter
npm install @astrojs/github-pages

# Update astro.config.mjs
export default defineConfig({
  // Add GitHub Pages configuration
  site: 'https://yourusername.github.io',
  base: '/your-repo-name',
});
```

### Development Workflow

#### 1. Daily Development

```bash
# Start dev server
npm run dev

# Check component registry before creating new components
code src/components/componentRegistry.ts

# Create components following the established patterns
# Update registry after adding new components
```

#### 2. Before Committing

```bash
# Build to check for errors
npm run build

# Check TypeScript
npm run check

# Preview production build
npm run preview
```

#### 3. Component Creation Checklist

- [ ] Checked component registry for existing components
- [ ] Created component with proper TypeScript interfaces
- [ ] Added component to registry with full documentation
- [ ] Tested component in isolation
- [ ] Verified file size is under 1000 lines
- [ ] Updated any relevant documentation

### Performance Optimization

#### Images

```astro
<!-- Use appropriate loading strategies -->
<img 
  src="/images/hero.jpg" 
  alt="Hero image"
  loading="eager"  <!-- Above fold -->
/>

<img 
  src="/images/content.jpg" 
  alt="Content image"
  loading="lazy"   <!-- Below fold -->
/>
```

#### JavaScript

```astro
<!-- Only hydrate when necessary -->
<InteractiveComponent client:load />      <!-- Immediately -->
<InteractiveComponent client:idle />      <!-- When browser idle -->
<InteractiveComponent client:visible />   <!-- When in viewport -->
```

### Troubleshooting

#### Common Issues

**Build Errors:**
```bash
# Clear cache and rebuild
rm -rf .astro node_modules
npm install
npm run build
```

**Type Errors:**
```bash
# Check TypeScript
npm run check

# Update types if needed
npm update @types/node
```

**Missing Dependencies:**
```bash
# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

#### Getting Help

1. **Check Documentation:**
   - Review this setup guide
   - Check component registry
   - Read Astro documentation

2. **Debug Process:**
   - Check browser console for errors
   - Review build output for warnings
   - Verify environment variables

3. **Component Issues:**
   - Ensure component is in registry
   - Check import paths
   - Verify prop types match interface

## Next Steps

1. **Customize Design:** Update colors, fonts, and spacing
2. **Add Content:** Replace placeholder content with your own
3. **Create Components:** Build components specific to your needs
4. **Optimize Performance:** Add analytics and monitoring
5. **Deploy:** Choose hosting platform and deploy

Remember: Always check the component registry before creating new components!

---

**Need help?** Review the documentation in the `docs/` folder or check the component registry for examples.
