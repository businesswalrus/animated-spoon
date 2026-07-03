import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const news = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/news' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    excerpt: z.string(),
    image: z.string(),
    imageAlt: z.string(),
    memoNo: z.string(),
    stamp: z.string().optional(),
    to: z.string().default('ALL MOTORISTS'),
    from: z.string().default('OFFICE OF THE DIRECTOR'),
  }),
});

export const collections = { news };
