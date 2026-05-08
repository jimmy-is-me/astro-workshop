---
title: "Getting Started with Astro"
description: "A quick guide to setting up your first Astro project and understanding its key concepts."
pubDate: 2024-09-01
tags: ["astro", "tutorial", "webdev"]
readingTime: 4
---

Astro is a modern static site builder that ships **zero JavaScript by default**. Let's walk through how to get started.

## Installation

```bash
npm create astro@latest
cd my-site
npm install
npm run dev
```

## Project Structure

- `src/pages/` — Every `.astro` file is a route
- `src/layouts/` — Reusable wrappers (header/footer)
- `src/content/` — Markdown or MDX content collections
- `public/` — Static assets (images, fonts, etc.)

## Why Astro?

- 🚀 Ships zero JS by default — incredible performance
- 📦 Use React, Vue, Svelte *together* in the same project
- 🔍 Great SEO out of the box with static HTML
- 🏝️ Islands Architecture — only hydrate what you need

## Content Collections

Astro's Content Collections API gives you type-safe access to your Markdown files:

```ts
import { getCollection } from 'astro:content';
const posts = await getCollection('blog');
```

This is just the beginning — explore the other pages to see more Astro features in action!
