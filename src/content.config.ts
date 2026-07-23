import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    shortTitle: z.string(),
    description: z.string(),
    category: z.string(),
    year: z.string(),
    featured: z.boolean().default(false),
    status: z.string(),
    technologies: z.array(z.string()),
    heroImage: z.string().optional(),
    github: z.string().optional(),
    website: z.string().optional(),
    role: z.string(),
    order: z.number().default(99),
  }),
});

export const collections = {
  projects,
};
