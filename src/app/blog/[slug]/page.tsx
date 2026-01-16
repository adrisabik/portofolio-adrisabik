'use client';

import { useParams, notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Clock, Calendar } from 'lucide-react';
import { Dock } from '@/components/shared/dock';
import { mockBlogPosts } from '@/data/mock-blog-posts';
import { use } from 'react';
import ReactMarkdown from 'react-markdown';

export default function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const unwrappedParams = use(params);
    const post = mockBlogPosts.find((p) => p.slug === unwrappedParams.slug);

    if (!post) {
        notFound();
    }

    return (
        <main className="min-h-screen p-6 lg:p-12 pb-24">
            <article className="max-w-3xl mx-auto">
                {/* Back Link */}
                <Link
                    href="/blog"
                    className="inline-flex items-center gap-2 text-muted hover:text-white mb-8 transition-colors"
                >
                    <ArrowLeft className="w-4 h-4" />
                    Back to Blog
                </Link>

                {/* Header */}
                <header className="mb-12">
                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted mb-4">
                        <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            <time>{post.date}</time>
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4" />
                            <span>{post.readingTime}</span>
                        </div>
                    </div>
                    <h1 className="text-3xl lg:text-4xl font-bold mb-4">{post.title}</h1>
                    <div className="flex flex-wrap gap-2">
                        {post.tags.map((tag) => (
                            <span key={tag} className="px-3 py-1 text-sm bg-accent-blue/10 text-accent-blue rounded-full border border-accent-blue/20">
                                {tag}
                            </span>
                        ))}
                    </div>
                </header>

                {/* Content */}
                <div className="glassmorphism p-6 my-8">
                    <article className="prose prose-invert prose-lg max-w-none prose-headings:text-white prose-p:text-muted prose-li:text-muted prose-strong:text-white prose-code:text-accent-blue">
                        <ReactMarkdown>{post.content || ''}</ReactMarkdown>
                    </article>
                </div>
            </article>

            <div className="h-20" />
            <Dock />
        </main>
    );
}
