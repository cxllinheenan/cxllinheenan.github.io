# Personal Next.js site

A modern, performant personal website built with Next.js 14 and TypeScript, designed to showcase writings and research work.

## Stack

- **Framework**: Next.js 14
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS
- **Deployment**: GitHub Pages
- **Content**: MDX for blog posts and research papers

## Getting Started

First, clone the repository:

```bash
git clone https://github.com/yourusername/your-site.git
cd your-site
```

Install dependencies:

```bash
pnpm install
```

Run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Features

- **Server Components**: Utilizing Next.js 14's React Server Components for optimal performance
- **MDX Support**: Write content in MDX with custom components
- **Type Safety**: Full TypeScript support across the codebase
- **Fast Page Loads**: Automatic image optimization and code splitting
- **Dark Mode**: System-preferred and user-chosen color schemes
- **RSS Feed**: Automated RSS feed generation for blog posts
- **SEO Optimized**: Built-in SEO components and metadata

## Content Management

### Adding New Content

1. Create a new `.mdx` file in `blog/posts`
2. Add frontmatter with required metadata
3. Write your content using MDX
4. Content will be automatically built and deployed

Example frontmatter:

```yaml
---
title: 'My Research Paper'
date: '2024-01-05'
description: 'A detailed analysis of...'
tags: ['research', 'analysis']
---
```

## Development

### Commands

- `pnpm dev` - Start development server
- `pnpm build` - Build production bundle
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint
- `pnpm type-check` - Run TypeScript compiler check

### Environment Variables

Create a `.env.local` file in the root directory:

```
NEXT_PUBLIC_SITE_URL=https://yoursite.com
```

## Deployment

The site is set up for deployment on GitHub Pages. Push to main branch to trigger automatic deployment.

## License

MIT License - feel free to use this code for your own personal site.

