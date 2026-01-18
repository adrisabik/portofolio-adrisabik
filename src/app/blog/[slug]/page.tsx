import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Clock, Calendar } from 'lucide-react';
import { Dock } from '@/components/shared/dock';
import { blogs, type Blog } from '@velite';
import { MDXContent } from '@/components/shared/mdx-content';
import type { Metadata } from 'next';

// Enable static generation for all blog pages
export function generateStaticParams() {
    return blogs.map((post: Blog) => ({
        slug: post.slug,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const post = blogs.find((p: Blog) => p.slug === slug);

    if (!post) {
        return { title: 'Article Not Found' };
    }

    return {
        title: post.title,
        description: post.description,
        openGraph: {
            title: post.title,
            description: post.description,
            type: 'article',
            publishedTime: post.date,
        },
    };
}

export default async function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = blogs.find((p: Blog) => p.slug === slug);

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
                            <time dateTime={post.date}>
                                {new Date(post.date).toLocaleDateString('en-US', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric',
                                })}
                            </time>
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
                    <div className="prose prose-invert prose-lg max-w-none prose-headings:text-white prose-p:text-muted prose-li:text-muted prose-strong:text-white prose-code:text-accent-blue">
                        <MDXContent code={post.content} />
                    </div>
                </div>
            </article>

            <div className="h-20" />
            <Dock />
        </main>
    );
}
