# Diné Insurance Website

**"Protecting What Matters. Honoring Who You Are."**

A modern, culturally respectful insurance website built specifically for the Diné (Navajo) community, featuring comprehensive insurance services rooted in traditional values.

## 🏔️ About Diné Insurance

Diné Insurance provides trusted, culturally respectful insurance solutions to the Diné people, preserving family, land, and livelihood through personalized service rooted in Navajo values of Hózhó (harmony & balance), K'é (kinship & respect), and protection.

### Our Mission
"From the Sacred Winds of History to the Four Sacred Directions of Your Future" - We walk beside you on the path of Hózhó, providing comprehensive protection that respects tradition while embracing the future.

## ✨ Features

### 🏠 Core Services
- **Homeowners Insurance**: Traditional and modern dwelling protection
- **Auto Insurance**: Reservation and border town driving coverage
- **Business Insurance**: Support for Diné entrepreneurs and artisans
- **Life Insurance**: Securing future generations

### 📝 Blog System
- Educational content about insurance and Diné traditions
- Community stories and testimonials
- Cultural preservation and modern protection advice
- MDX-powered blog with featured posts

### 🌎 Cultural Features
- Diné language integration (Hózhó, K'é, etc.)
- Traditional color scheme (Red Clay, Turquoise, Sand)
- Mountain iconography and Four Sacred Directions imagery
- Respectful representation of Navajo Code Talker heritage

## 🛠️ Technology Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom Diné-inspired design system
- **Components**: Radix UI primitives with custom theming
- **Content**: MDX for blog posts with gray-matter
- **Icons**: Lucide React
- **Fonts**: Inter (sans-serif) & Playfair Display (serif)
- **Deployment**: Netlify

## 📁 Project Structure

```
dine-insurance/
├── app/                    # Next.js App Router
│   ├── about/              # About page
│   ├── blog/               # Blog listing and individual posts
│   ├── contact/            # Contact form and office locations
│   ├── services/           # Insurance services overview
│   ├── globals.css         # Global styles and CSS variables
│   ├── layout.tsx          # Root layout with header/footer
│   └── page.tsx            # Homepage with hero and services
├── components/
│   ├── layout/             # Header and footer components
│   └── ui/                 # Reusable UI components
├── content/
│   └── blog/               # MDX blog posts
├── lib/                    # Utility functions and blog logic
└── public/                 # Static assets
```

## 🎨 Design System

### Brand Colors
```css
/* Red Clay - Primary Brand Color */
--red-clay-600: #cd4c38;
--red-clay-700: #b23a28;

/* Turquoise - Secondary/Accent */
--turquoise-600: #0d9488;
--turquoise-500: #14b8a6;

/* Sand - Neutral/Background */
--sand-100: #fdf9f3;
--sand-200: #f9f1e4;
```

### Typography
- **Headings**: Playfair Display (serif) for traditional elegance
- **Body**: Inter (sans-serif) for modern readability
- **Cultural Terms**: Italicized Diné language terms with proper pronunciation

### Iconography
- Mountain icons representing the Four Sacred Mountains
- Traditional patterns in subtle background elements
- Respectful use of cultural symbols

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/MCERQUA/Dine-Insurance.git
   cd Dine-Insurance
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 📝 Adding Blog Content

### Creating a New Blog Post

1. Create a new `.md` file in `content/blog/`
2. Add frontmatter with required fields:

```markdown
---
title: "Your Post Title"
description: "Brief description for SEO and previews"
date: "2024-07-17"
author: "Author Name"
category: "Insurance Category"
tags: ["tag1", "tag2", "tag3"]
featured: false
image: "/blog/post-image.jpg"
---

# Your Post Content

Write your blog content here using Markdown...
```

### Required Frontmatter Fields
- `title`: Post title
- `description`: SEO description
- `date`: Publication date (YYYY-MM-DD)
- `author`: Author name
- `category`: Insurance category
- `tags`: Array of relevant tags
- `featured`: Boolean for featured posts
- `image`: Optional header image path

## 🌐 Deployment

### Netlify Deployment

This project is configured for Netlify deployment:

1. **Connect to Netlify**
   - Link your GitHub repository to Netlify
   - Netlify will automatically detect Next.js settings

2. **Build Settings**
   - Build command: `npm run build`
   - Publish directory: `out`
   - Node version: 18

3. **Environment Variables**
   - `SITE_URL`: Your production domain

### Custom Domain
The site is configured to redirect www to non-www and includes proper SEO settings.

## 🧠 Cultural Considerations

### Respectful Representation
- All cultural references are researched and respectfully presented
- Diné language terms are properly italicized and contextual
- Traditional values are honored in modern insurance contexts
- Community input is valued for cultural accuracy

### Code Talker Heritage
The messaging honors the legacy of Navajo Code Talkers while drawing parallels to modern protection through insurance, emphasizing the continuation of protecting and serving the community.

## 📊 SEO & Performance

### SEO Features
- Comprehensive metadata for all pages
- Open Graph and Twitter Card support
- Sitemap generation with blog posts
- Structured data for better search visibility
- Semantic HTML with proper heading hierarchy

### Performance Optimizations
- Next.js App Router with automatic code splitting
- Optimized images with next/image
- Tailwind CSS with purging for minimal bundle size
- Font optimization with next/font

## 📄 License

This project represents cultural and community values. Please use respectfully and consider the cultural significance of the content when adapting for other purposes.

## 🤝 Contributing

Contributions that respect and enhance the cultural authenticity of this project are welcome. Please ensure any changes:

1. Maintain cultural sensitivity and accuracy
2. Follow the established design system
3. Include proper testing for new features
4. Update documentation as needed

## 📧 Contact

For questions about this project or Diné Insurance services:

- **Phone**: 1-800-DINE-365 (1-800-346-3365)
- **Email**: protect@dineinsurance.com
- **Website**: [dine-insurance.netlify.app](https://dine-insurance.netlify.app)

---

**Diné Insurance - Walking Beside You on the Path of Hózhó**

*"Protecting What Matters. Honoring Who You Are."*