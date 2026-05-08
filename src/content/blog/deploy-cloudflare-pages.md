---
title: "Deploy Astro to Cloudflare Pages"
description: "Step-by-step guide to connect GitHub with Cloudflare Pages for automatic deployments."
pubDate: 2024-10-15
tags: ["cloudflare", "deployment", "astro"]
readingTime: 5
---

Cloudflare Pages gives you free, fast static hosting with automatic deployments triggered by every `git push`.

## Prerequisites

- Astro project on GitHub
- Free Cloudflare account

## Steps

1. Push your Astro project to GitHub
2. Go to **Cloudflare Dashboard → Workers & Pages → Create**
3. Choose **Pages → Connect to Git**
4. Select your GitHub repository
5. Configure the build settings:
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
6. Click **Save and Deploy**

Every `git push` to `main` now triggers an automatic deployment!

## Preview Deployments

Every pull request gets its own preview URL automatically. Great for testing before merging.

## Custom Domain

In your Pages project settings, go to **Custom Domains** and add your domain. Cloudflare handles SSL certificates automatically — no extra configuration needed.

## Environment Variables

Add secrets and config values in **Settings → Environment Variables**. They are available during the build process.
