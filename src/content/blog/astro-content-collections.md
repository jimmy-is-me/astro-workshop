---
title: "Using Content Collections in Astro"
description: "Type-safe content management with Astro's Content Collections API and Zod schema validation."
pubDate: 2024-11-20
tags: ["astro", "content", "typescript"]
readingTime: 6
---

Content Collections give you a type-safe, validated way to manage all your Markdown, MDX, or JSON content.

## Define a Collection Schema

Create `src/content/config.ts`:

```ts
import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    description: z.string(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  })
});

export const collections = { blog };
```

## Query a Collection

```astro
---
import { getCollection } from 'astro:content';
const posts = await getCollection('blog', ({ data }) => !data.draft);
posts.sort((a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime());
---
```

## Render MDX Content

```astro
---
const { Content } = await post.render();
---
<Content />
```

## Benefits

- ✅ Zod schema validation at build time
- ✅ Full TypeScript autocomplete
- ✅ Build fails on invalid frontmatter — catches errors early
- ✅ Works with `.md`, `.mdx`, and `.json`
