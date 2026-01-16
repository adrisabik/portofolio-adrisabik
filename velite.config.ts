import { defineConfig, defineCollection, s } from 'velite';
import rehypePrettyCode from 'rehype-pretty-code';
import remarkGfm from 'remark-gfm';

const projects = defineCollection({
    name: 'Project',
    pattern: 'projects/**/*.mdx',
    schema: s.object({
        slug: s.slug('projects'),
        title: s.string().max(100),
        description: s.string().max(300),
        industry: s.string(),
        category: s.enum(['enterprise', 'supply-chain', 'community', 'accessibility', 'lab']),
        techStack: s.array(s.string()),
        highlights: s.array(s.string()),
        thumbnail: s.string().optional(),
        playStoreUrl: s.string().url().optional(),
        featured: s.boolean().default(false),
        year: s.string(),
        content: s.mdx(),
    }),
});

const blogs = defineCollection({
    name: 'Blog',
    pattern: 'blog/**/*.mdx',
    schema: s.object({
        slug: s.slug('blog'),
        title: s.string().max(100),
        description: s.string().max(300),
        date: s.isodate(),
        tags: s.array(s.string()),
        content: s.mdx(),
    }),
});

export default defineConfig({
    root: 'content',
    output: {
        data: '.velite',
        assets: 'public/static',
        base: '/static/',
        name: '[name]-[hash:6].[ext]',
        clean: true,
    },
    collections: { projects, blogs },
    mdx: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [[rehypePrettyCode, { theme: 'one-dark-pro' }]],
    },
});
