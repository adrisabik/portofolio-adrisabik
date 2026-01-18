import { defineConfig, defineCollection, s } from 'velite';
import rehypePrettyCode from 'rehype-pretty-code';
import remarkGfm from 'remark-gfm';

const projects = defineCollection({
    name: 'Project',
    pattern: 'projects/**/*.mdx',
    schema: s.object({
        slug: s.string(), // Use frontmatter slug
        title: s.string().max(100),
        description: s.string().max(300),
        industry: s.string(),
        category: s.enum(['mobile-app', 'web-app', 'enterprise', 'supply-chain', 'community', 'accessibility', 'lab', 'productivity']), // Added mobile-app, web-app
        techStack: s.array(s.string()),
        highlights: s.array(s.string()),
        thumbnail: s.string().optional(),

        // New/Renamed Fields
        videoDemo: s.string().url().nullable().optional(),
        gallery: s.array(s.string()).nullable().optional(),
        repository: s.string().url().nullable().optional(),
        playStoreUrl: s.string().url().nullable().optional(),
        appStoreUrl: s.string().url().nullable().optional(), // New
        demoUrl: s.string().url().nullable().optional(), // New

        featured: s.boolean().default(false),
        year: s.string(),
        role: s.string().optional().nullable(), // New
        client: s.string().optional().nullable(), // Renamed from company

        // Derived/Legacy compatibility (optional)
        company: s.string().optional().nullable(), // Keep for now or map to client? Let's treat client as primary.

        context: s.string().optional(),
        challenge: s.string().optional(),
        solution: s.string().optional(),
        results: s.array(s.string()).optional(),
        content: s.mdx(),
    }),
    transform: (data: any) => ({
        ...data,
        // Map company to client if client is missing, for backward compatibility during migration
        client: data.client || data.company,
    })
});

const blogs = defineCollection({
    name: 'Blog',
    pattern: 'blog/**/*.mdx',
    schema: s.object({
        slug: s.slug('blog'),
        title: s.string().max(100),
        description: s.string().max(300),
        date: s.isodate(),
        readingTime: s.string().optional(),
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
