# Deployment Guide

This guide covers deploying your Astro Modular Template to GitHub and Netlify.

## 🚀 Quick Deployment Checklist

- [ ] Update site URL in astro.config.mjs
- [ ] Configure environment variables
- [ ] Push to GitHub repository
- [ ] Connect repository to Netlify
- [ ] Configure Netlify environment variables
- [ ] Deploy!

## 📋 Pre-Deployment Setup

### 1. Update Site Configuration

**Update `astro.config.mjs`:**
```javascript
export default defineConfig({
  site: 'https://your-domain.netlify.app', // Update this URL
  // ... rest of config
});
```

**Or use environment variable:**
```javascript
site: process.env.SITE_URL || 'https://your-domain.netlify.app',
```

### 2. Configure Environment Variables

**Copy and edit `.env.example`:**
```bash
cp .env.example .env
```

**Update values in `.env`:**
```bash
SITE_URL=https://your-domain.netlify.app
SITE_NAME="Your Company Name"
SITE_DESCRIPTION="Your site description"
# ... update other values
```

### 3. Test Production Build

**Run production build test:**
```bash
npm run build
npm run preview
```

Ensure no errors occur during build process.

## 🐙 GitHub Setup

### 1. Initialize Git Repository

```bash
git init
git add .
git commit -m "Initial commit: Astro modular template"
```

### 2. Create GitHub Repository

1. Go to [GitHub](https://github.com) and create a new repository
2. **Do not** initialize with README, .gitignore, or license (already included)

### 3. Connect Local Repository

```bash
git remote add origin https://github.com/yourusername/your-repo-name.git
git branch -M main
git push -u origin main
```

## 🌐 Netlify Deployment

### Method 1: Netlify Dashboard (Recommended)

1. **Login to Netlify:**
   - Go to [netlify.com](https://netlify.com)
   - Login with GitHub account

2. **Import Repository:**
   - Click "New site from Git"
   - Choose GitHub
   - Select your repository

3. **Build Settings:**
   - Build command: `npm run build` (auto-detected)
   - Publish directory: `dist` (auto-detected)
   - Node version: 18 (from netlify.toml)

4. **Deploy:**
   - Click "Deploy site"
   - Initial deployment will start

### Method 2: Netlify CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Deploy
netlify deploy

# Deploy to production
netlify deploy --prod
```

## ⚙️ Environment Variables Setup

### In Netlify Dashboard:

1. Go to **Site settings** → **Environment variables**
2. Add the following variables:

```bash
# Required
SITE_URL=https://your-site-name.netlify.app
SITE_NAME=Your Company Name
SITE_DESCRIPTION=Your site description

# Optional - Social Media
FACEBOOK_URL=https://facebook.com/yourpage
TWITTER_URL=https://twitter.com/yourhandle
LINKEDIN_URL=https://linkedin.com/company/yourcompany

# Optional - Analytics
GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX
```

### Environment Variable Priority:

1. Netlify environment variables (production)
2. `.env` file (local development)
3. Default values in `astro.config.mjs`

## 🔧 Build Configuration

### netlify.toml Features:

- ✅ **Node 18** environment
- ✅ **Automatic builds** on git push
- ✅ **Performance headers** for caching
- ✅ **Security headers** for protection
- ✅ **Pretty URLs** enabled

### Build Environment:

```toml
[build.environment]
  NODE_VERSION = "18"
  NPM_FLAGS = "--production=false"
```

This ensures dev dependencies are available during build (required for Astro).

## 🎯 Custom Domain Setup

### 1. In Netlify Dashboard:

1. Go to **Site settings** → **Domain management**
2. Click **Add custom domain**
3. Enter your domain name
4. Follow DNS configuration instructions

### 2. Update Site URL:

**In Netlify environment variables:**
```bash
SITE_URL=https://yourdomain.com
```

**Or in astro.config.mjs:**
```javascript
site: 'https://yourdomain.com',
```

## 🚨 Common Deployment Issues

### Build Failures

**Issue:** TypeScript errors during build
```bash
# Solution: Fix type errors locally first
npm run check
npm run build
```

**Issue:** Missing dependencies
```bash
# Solution: Ensure all dependencies are in package.json
npm install
npm run build
```

**Issue:** Environment variable not found
```bash
# Solution: Add to Netlify environment variables
# Or provide fallback in astro.config.mjs
site: process.env.SITE_URL || 'https://fallback-url.com',
```

### Runtime Issues

**Issue:** Images not loading
- ✅ Ensure images are in `public/` directory
- ✅ Use absolute paths: `/images/photo.jpg`
- ✅ Check image file names and extensions

**Issue:** CSS not applying
- ✅ Verify Tailwind config is correct
- ✅ Check for CSS purging issues
- ✅ Ensure global styles are imported

**Issue:** Links not working
- ✅ Use relative URLs for internal links
- ✅ Check routing setup in pages/
- ✅ Verify component imports

## 📊 Performance Optimization

### Automatic Optimizations:

- ✅ **Static generation** for fast loading
- ✅ **Asset optimization** via Vite
- ✅ **Image lazy loading** where appropriate
- ✅ **CSS purging** for smaller bundles
- ✅ **Caching headers** for static assets

### Manual Optimizations:

1. **Optimize images:**
   ```bash
   # Use tools like TinyPNG or ImageOptim
   # Add to public/images/ directory
   ```

2. **Monitor bundle size:**
   ```bash
   npm run build
   # Check dist/_astro/ for bundle sizes
   ```

3. **Lighthouse scores:**
   - Test on deployed site
   - Aim for 90+ in all categories

## 🔒 Security Headers

### Included in netlify.toml:

```toml
[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-XSS-Protection = "1; mode=block"
    X-Content-Type-Options = "nosniff"
    Referrer-Policy = "strict-origin-when-cross-origin"
```

### SSL/HTTPS:

- ✅ **Automatic HTTPS** on Netlify
- ✅ **Free SSL certificates** included
- ✅ **HTTP to HTTPS redirect** automatic

## 📈 Analytics Setup

### Google Analytics:

1. **Create GA4 property**
2. **Add tracking ID to environment variables:**
   ```bash
   GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX
   ```
3. **Implement in BaseLayout.astro** (if desired)

### Netlify Analytics:

1. **Enable in Netlify dashboard**
2. **Site settings** → **Analytics**
3. **$9/month for detailed analytics**

## 🔄 Continuous Deployment

### Automatic Deployments:

- ✅ **Push to main branch** → automatic deploy
- ✅ **Pull request previews** available
- ✅ **Deploy notifications** via email/Slack

### Branch Deployments:

```bash
# Deploy specific branch
git checkout feature-branch
git push origin feature-branch
# Creates preview deployment on Netlify
```

### Rollback:

1. **Netlify dashboard** → **Deploys**
2. **Click on previous deployment**
3. **Publish deploy**

## ✅ Deployment Checklist

### Before First Deploy:

- [ ] Update site URL in config
- [ ] Test production build locally
- [ ] Commit all changes to git
- [ ] Push to GitHub repository

### Netlify Setup:

- [ ] Connect GitHub repository
- [ ] Verify build settings
- [ ] Add environment variables
- [ ] Test initial deployment

### Post-Deployment:

- [ ] Verify all pages load correctly
- [ ] Test navigation and links
- [ ] Check responsive design
- [ ] Validate forms (if applicable)
- [ ] Test performance with Lighthouse

### Optional Enhancements:

- [ ] Setup custom domain
- [ ] Configure Google Analytics
- [ ] Setup contact forms
- [ ] Add search functionality
- [ ] Implement CMS integration

## 🆘 Support

### Common Resources:

- **Astro Docs:** [docs.astro.build](https://docs.astro.build)
- **Netlify Docs:** [docs.netlify.com](https://docs.netlify.com)
- **GitHub Docs:** [docs.github.com](https://docs.github.com)

### Debugging:

1. **Check Netlify build logs** for errors
2. **Use browser dev tools** for runtime issues
3. **Test locally** with `npm run build && npm run preview`
4. **Verify environment variables** are set correctly

---

**🎉 Congratulations!** Your Astro Modular Template is now deployed and ready for the world to see!

Remember to regularly update dependencies and monitor performance for the best user experience.