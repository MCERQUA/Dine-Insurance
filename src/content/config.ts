import { defineCollection, z } from 'astro:content';

// Blog collection schema
const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    author: z.string().optional().default('Admin'),
    tags: z.array(z.string()).optional().default([]),
    readTime: z.string().optional(),
    featured: z.boolean().optional().default(false),
    draft: z.boolean().optional().default(false),
    image: z.object({
      src: z.string(),
      alt: z.string()
    }).optional(),
    category: z.string().optional(),
  }),
});

// Export collections
export const collections = { 
  blog 
};

// Collection types for TypeScript  
const blogSchema = z.object({
  title: z.string(),
  description: z.string(),
  pubDate: z.coerce.date(),
  updatedDate: z.coerce.date().optional(),
  author: z.string().optional().default('Admin'),
  tags: z.array(z.string()).optional().default([]),
  readTime: z.string().optional(),
  featured: z.boolean().optional().default(false),
  draft: z.boolean().optional().default(false),
  image: z.object({
    src: z.string(),
    alt: z.string()
  }).optional(),
  category: z.string().optional(),
});

export type BlogPost = z.infer<typeof blogSchema>;
