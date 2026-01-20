import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, ExternalLink, ArrowRight, Smartphone, Globe, Github } from 'lucide-react';
import { Dock } from '@/components/shared/dock';
import { projects, type Project } from '@velite';
import { ScrollReveal } from '@/components/animation/scroll-reveal';
import { MDXContent } from '@/components/shared/mdx-content';
import type { Metadata } from 'next';

// Enable static generation for all project pages
export function generateStaticParams() {
    return projects.map((project: Project) => ({
        slug: project.slug,
    }));
}

// Dynamic metadata for SEO
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const project = projects.find((p: Project) => p.slug === slug);

    if (!project) {
        return { title: 'Project Not Found' };
    }

    return {
        title: project.title,
        description: project.description,
        openGraph: {
            title: project.title,
            description: project.description,
            type: 'article',
            images: project.thumbnail ? [project.thumbnail] : [],
        },
    };
}

// MDX Content wrapper component for styling
function MDXWrapper({ content }: { content: string }) {
    return (
        <div
            className="prose prose-invert prose-lg max-w-none
                prose-headings:text-gradient prose-headings:font-bold
                prose-p:text-muted prose-p:leading-relaxed
                prose-a:text-accent-blue prose-a:no-underline hover:prose-a:underline
                prose-code:bg-white/10 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded
                prose-pre:bg-[#0d1117] prose-pre:border prose-pre:border-white/10"
        >
            <MDXContent code={content} />
        </div>
    );
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const project = projects.find((p: Project) => p.slug === slug);

    if (!project) {
        notFound();
    }

    // Find next project for navigation
    const currentIndex = projects.findIndex((p: Project) => p.slug === project.slug);
    const nextProject = projects[(currentIndex + 1) % projects.length];

    return (
        <main className="min-h-screen pb-24">
            {/* Hero Banner */}
            <div className="relative h-[60vh] w-full overflow-hidden">
                {project.thumbnail ? (
                    <div className="absolute inset-0">
                        <Image
                            src={project.thumbnail}
                            alt={project.title}
                            fill
                            className="object-cover"
                            priority
                        />
                        <div className="absolute inset-0 bg-black/60" />
                    </div>
                ) : (
                    <>
                        <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/10 to-accent-purple/10" />
                        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
                    </>
                )}

                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 w-full p-6 lg:p-12 bg-gradient-to-t from-background to-transparent pt-32">
                    <div className="max-w-7xl mx-auto">
                        <div>
                            <Link
                                href="/projects"
                                className="inline-flex items-center gap-2 text-muted hover:text-white mb-6 transition-colors"
                            >
                                <ArrowLeft className="w-4 h-4" />
                                Back to Projects
                            </Link>

                            <div className="flex items-center gap-3 mb-4">
                                <span className="px-3 py-1 text-sm font-medium rounded-full bg-accent-blue/10 text-accent-blue border border-accent-blue/20">
                                    {project.category}
                                </span>
                                <span className="text-muted font-mono">{project.year}</span>
                            </div>

                            <h1 className="text-4xl lg:text-6xl font-bold mb-4 lg:mb-6">
                                {project.title}
                            </h1>

                            <p className="text-xl lg:text-2xl text-muted max-w-2xl">
                                {project.description}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
                <div className="flex flex-col lg:flex-row gap-12">

                    {/* Sidebar / Metadata (Sticky on Desktop) */}
                    <aside className="lg:w-1/4">
                        <div className="lg:sticky lg:top-24 space-y-8">
                            <div>
                                <h3 className="text-sm font-semibold text-muted uppercase tracking-wider mb-2">Role</h3>
                                <p className="font-medium">{project.role || 'Mobile Engineer'}</p>
                            </div>

                            <div>
                                <h3 className="text-sm font-semibold text-muted uppercase tracking-wider mb-2">Client</h3>
                                <p className="font-medium">{project.client || project.company || 'Personal Project'}</p>
                            </div>

                            <div>
                                <h3 className="text-sm font-semibold text-muted uppercase tracking-wider mb-2">Tech Stack</h3>
                                <div className="flex flex-wrap gap-2">
                                    {project.techStack.map((tech: string) => (
                                        <span key={tech} className="px-2 py-1 bg-white/5 rounded text-sm font-mono">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {project.highlights && project.highlights.length > 0 && (
                                <div>
                                    <h3 className="text-sm font-semibold text-muted uppercase tracking-wider mb-2">Highlights</h3>
                                    <ul className="space-y-2">
                                        {project.highlights.map((highlight: string) => (
                                            <li key={highlight} className="flex items-start gap-2 text-sm text-muted">
                                                <span className="text-accent-blue mt-0.5">▹</span>
                                                {highlight}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}


                            <div className="flex flex-col gap-3 pt-4">
                                {project.playStoreUrl && (
                                    <a
                                        href={project.playStoreUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-center gap-2 w-full px-4 py-3 bg-accent-blue text-background font-semibold rounded-xl hover:bg-accent-blue/90 transition-colors"
                                    >
                                        <Smartphone className="w-4 h-4" />
                                        Play Store
                                        <ExternalLink className="w-4 h-4" />
                                    </a>
                                )}
                                {project.appStoreUrl && (
                                    <a
                                        href={project.appStoreUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-center gap-2 w-full px-4 py-3 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition-colors"
                                    >
                                        <Smartphone className="w-4 h-4" />
                                        App Store
                                        <ExternalLink className="w-4 h-4" />
                                    </a>
                                )}
                                {project.demoUrl && (
                                    <a
                                        href={project.demoUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-center gap-2 w-full px-4 py-3 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition-colors"
                                    >
                                        <Globe className="w-4 h-4" />
                                        Live Demo
                                        <ExternalLink className="w-4 h-4" />
                                    </a>
                                )}
                                {project.repository && (
                                    <a
                                        href={project.repository}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-center gap-2 w-full px-4 py-3 bg-white/5 text-muted font-semibold rounded-xl hover:bg-white/10 transition-colors"
                                    >
                                        <Github className="w-4 h-4" />
                                        Repository
                                        <ExternalLink className="w-4 h-4" />
                                    </a>
                                )}
                            </div>
                        </div>
                    </aside>

                    {/* Main Content (Editorial) */}
                    <article className="lg:w-3/4 space-y-16">

                        {/* Project Image */}
                        {/* Project Image & Video */}
                        <ScrollReveal>
                            <section className="space-y-8">
                                {project.thumbnail && (
                                    <div className="relative w-full aspect-[1054/500] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                                        <Image
                                            src={project.thumbnail}
                                            alt={`${project.title} Preview`}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                )}

                                {project.videoDemo && (
                                    <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                                        <iframe
                                            src={project.videoDemo}
                                            title={`${project.title} Demo`}
                                            className="absolute inset-0 w-full h-full"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                        />
                                    </div>
                                )}
                            </section>
                        </ScrollReveal>

                        {/* MDX Content */}
                        {/* MDX Content */}
                        <ScrollReveal>
                            <section className="space-y-6">
                                <MDXWrapper content={project.content} />
                            </section>
                        </ScrollReveal>

                        {/* Gallery */}
                        {project.gallery && project.gallery.length > 0 && (
                            <ScrollReveal>
                                <section className="space-y-6 my-12">
                                    <h3 className="text-2xl font-bold">Gallery</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {project.gallery.map((img, idx) => (
                                            <div key={idx} className="relative aspect-[4/3] rounded-xl overflow-hidden border border-white/10 bg-white/5">
                                                <Image
                                                    src={img}
                                                    alt={`${project.title} screenshot ${idx + 1}`}
                                                    fill
                                                    className="object-cover hover:scale-105 transition-transform duration-500"
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </section>
                            </ScrollReveal>
                        )}

                        <div className="w-full h-px bg-white/10" />

                        {/* Results Section */}
                        {project.results && project.results.length > 0 && (
                            <ScrollReveal>
                                <section className="space-y-6">
                                    <h2 className="text-2xl font-bold text-gradient">Key Results</h2>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {project.results.map((result: string, idx: number) => (
                                            <div key={idx} className="p-4 rounded-xl bg-accent-green/10 border border-accent-green/20">
                                                <div className="flex items-start gap-3">
                                                    <span className="text-accent-green text-xl">✓</span>
                                                    <p className="text-sm font-medium">{result}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </section>
                            </ScrollReveal>
                        )}

                    </article>
                </div>
            </div>

            {/* Next Project Navigation */}
            <section className="border-t border-white/10 bg-white/5 py-16">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <p className="text-sm text-muted uppercase tracking-wider mb-6">Next Case Study</p>
                    <Link href={`/projects/${nextProject.slug}`} className="group block">
                        <h3 className="text-3xl lg:text-5xl font-bold mb-4 group-hover:text-accent-blue transition-colors">
                            {nextProject.title}
                        </h3>
                        <div className="flex items-center gap-2 text-muted group-hover:text-white transition-colors">
                            <span>Read Case Study</span>
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </div>
                    </Link>
                </div>
            </section>

            <div className="h-20" />
            <Dock />
        </main>
    );
}
