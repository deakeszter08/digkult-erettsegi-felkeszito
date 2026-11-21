import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
	// Load Markdown and MDX files in the `src/content/blog/` directory.
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			// Transform string to Date object
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			heroImage: z.optional(image()),
			tags: z.array(z.string()).default([]),
		}),
});
const feladatok = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/feladatok' }),
	schema: z.object({
		title: z.string(),
		topic: z.string(),
		difficulty: z.enum(['alapozó', 'érettségi']).default('alapozó'),
		order: z.number().default(1),
	}),
});

export const collections = { blog, feladatok };
