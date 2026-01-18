'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';
import { Dock } from '@/components/shared/dock';
import { blogs, type Blog } from '@velite';

export default function BlogPage() {
    const [searchQuery, setSearchQuery] = useState('');

    // Sort blogs by date descending
    const sortedBlogs = [...blogs].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    const filteredPosts = sortedBlogs.filter(
        (post) =>
            post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            post.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    );

    return (
        <main className="min-h-screen p-6 lg:p-12 pb-24">
            <div className="max-w-4xl mx-auto">
                <header className="mb-12">
                    <h1 className="text-4xl font-bold mb-4">Blog</h1>
                    <p className="text-muted text-lg mb-8">
                        Thoughts on mobile engineering, architecture, and building great apps.
                    </p>

                    {/* Search */}
                    <div className="relative">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted" />
                        <input
                            type="text"
                            placeholder="Search articles..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-12 pr-4 py-3 bg-white/5 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-accent-blue/50"
                        />
                    </div>
                </header>

                <div className="space-y-6">
                    {filteredPosts.map((post, index) => (
                        <motion.article
                            key={post.slug}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Link href={`/blog/${post.slug}`} className="block glassmorphism p-6 hover:border-accent-blue/50 transition-colors">
                                <div className="flex items-center gap-4 text-sm text-muted mb-2">
                                    <time dateTime={post.date}>
                                        {new Date(post.date).toLocaleDateString('en-US', {
                                            year: 'numeric',
                                            month: 'long',
                                            day: 'numeric',
                                        })}
                                    </time>
                                    <span>•</span>
                                    <span>{post.readingTime}</span>
                                </div>
                                <h2 className="text-xl font-semibold mb-2 hover:text-accent-blue transition-colors">
                                    {post.title}
                                </h2>
                                <p className="text-muted line-clamp-2">{post.description}</p>
                                <div className="flex flex-wrap gap-2 mt-4">
                                    {post.tags.map((tag) => (
                                        <span key={tag} className="px-2 py-1 text-xs bg-white/5 rounded">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </Link>
                        </motion.article>
                    ))}

                    {filteredPosts.length === 0 && (
                        <p className="text-center text-muted py-12">No articles found matching your search.</p>
                    )}
                </div>
            </div>

            <div className="h-20" />
            <Dock />
        </main>
    );
}
