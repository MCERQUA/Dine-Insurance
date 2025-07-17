/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://dine-insurance.netlify.app',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
  exclude: ['/api/*'],
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 5000,
  generateIndexSitemap: false,
  additionalPaths: async (config) => {
    const result = [];

    // Add blog posts to sitemap
    try {
      const { getAllPosts } = require('./lib/blog');
      const posts = getAllPosts();
      
      posts.forEach((post) => {
        result.push({
          loc: `/blog/${post.slug}`,
          lastmod: post.date,
          changefreq: 'monthly',
          priority: 0.6,
        });
      });
    } catch (error) {
      console.warn('Could not generate blog sitemap entries:', error.message);
    }

    return result;
  },
};