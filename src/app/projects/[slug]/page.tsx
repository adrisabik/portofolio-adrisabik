'use client';

import { useParams, notFound } from 'next/navigation';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, ExternalLink, Github, ArrowRight } from 'lucide-react';
import { Dock } from '@/components/shared/dock';
import { mockProjects } from '@/data/mock-projects';
import { ScrollReveal } from '@/components/animation/scroll-reveal';
import { cn } from '@/lib/utils';
import { use } from 'react';

export default function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const unwrappedParams = use(params);
    const project = mockProjects.find((p) => p.slug === unwrappedParams.slug);

    if (!project) {
        notFound();
    }

    // Find next project for navigation
    const currentIndex = mockProjects.findIndex((p) => p.slug === project.slug);
    const nextProject = mockProjects[(currentIndex + 1) % mockProjects.length];

    return (
        <main className="min-h-screen pb-24">
            {/* Hero Banner */}
            <div className="relative h-[60vh] w-full overflow-hidden">
                {project.thumbnail ? (
                    <div className="absolute inset-0">
                        <img
                            src={project.thumbnail}
                            alt={project.title}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/60" /> {/* Dark overlay for text readability */}
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
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
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
                        </motion.div>
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
                                <p className="font-medium">Mobile Engineer</p>
                            </div>

                            <div>
                                <h3 className="text-sm font-semibold text-muted uppercase tracking-wider mb-2">Company</h3>
                                <p className="font-medium">{project.company || 'Personal Project'}</p>
                            </div>

                            <div>
                                <h3 className="text-sm font-semibold text-muted uppercase tracking-wider mb-2">Tech Stack</h3>
                                <div className="flex flex-wrap gap-2">
                                    {project.techStack.map((tech) => (
                                        <span key={tech} className="px-2 py-1 bg-white/5 rounded text-sm font-mono">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="flex flex-col gap-3 pt-4">
                                {project.playStoreUrl && (
                                    <a
                                        href={project.playStoreUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-center gap-2 w-full px-4 py-3 bg-accent-blue text-background font-semibold rounded-xl hover:bg-accent-blue/90 transition-colors"
                                    >
                                        Play Store
                                        <ExternalLink className="w-4 h-4" />
                                    </a>
                                )}
                                <a
                                    href="#"
                                    className="inline-flex items-center justify-center gap-2 w-full px-4 py-3 border border-border rounded-xl hover:bg-white/5 transition-colors"
                                >
                                    <Github className="w-4 h-4" />
                                    View Code
                                </a>
                            </div>
                        </div>
                    </aside>

                    {/* Main Content (Editorial) */}
                    <article className="lg:w-3/4 space-y-16">

                        {/* Context Section */}
                        <ScrollReveal>
                            <section className="space-y-4">
                                {project.thumbnail && (
                                    <div className="w-full rounded-2xl overflow-hidden mb-8 border border-white/10">
                                        <img
                                            src={project.thumbnail}
                                            alt={`${project.title} Context`}
                                            className="w-full h-auto"
                                        />
                                    </div>
                                )}
                                <h2 className="text-2xl font-bold text-gradient">The Context</h2>
                                <p className="text-lg text-muted leading-relaxed">
                                    {project.context || 'Project context details coming soon.'}
                                </p>
                            </section>
                        </ScrollReveal>

                        <div className="w-full h-px bg-white/10" />

                        {/* Challenge Section */}
                        <ScrollReveal>
                            <section className="space-y-4">
                                <h2 className="text-2xl font-bold text-gradient">The Challenge</h2>
                                <div className="p-6 rounded-2xl bg-white/5 border border-white/5">
                                    <p className="text-lg text-muted leading-relaxed">
                                        {project.challenge || 'Technical challenges and hurdles faced during development.'}
                                    </p>
                                </div>
                            </section>
                        </ScrollReveal>

                        {/* Solution Section */}
                        <ScrollReveal>
                            <section className="space-y-6">
                                <h2 className="text-2xl font-bold text-gradient">The Engineering Solution</h2>
                                <p className="text-lg text-muted leading-relaxed">
                                    {project.solution}
                                </p>

                                {/* Code Snippet Placeholder */}
                                <div className="my-8 rounded-xl overflow-hidden border border-white/10 bg-[#0d1117]">
                                    <div className="flex items-center justify-between px-4 py-2 border-b border-white/10 bg-white/5">
                                        <div className="flex items-center gap-2">
                                            <div className="w-3 h-3 rounded-full bg-red-500/50" />
                                            <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                                            <div className="w-3 h-3 rounded-full bg-green-500/50" />
                                        </div>
                                        <span className="text-xs text-muted font-mono">architecture.dart</span>
                                    </div>
                                    <pre className="p-4 overflow-x-auto text-sm font-mono text-gray-300">
                                        <code>{`
// Clean Architecture Implementation
class ProjectRepositoryImpl implements ProjectRepository {
  final ProjectRemoteDataSource remoteDataSource;
  final ProjectLocalDataSource localDataSource;

  @override
  Future<Either<Failure, List<Project>>> getProjects() async {
    if (await networkInfo.isConnected) {
      try {
        final remoteProjects = await remoteDataSource.getProjects();
        localDataSource.cacheProjects(remoteProjects);
        return Right(remoteProjects);
      } on ServerException {
        return Left(ServerFailure());
      }
    } else {
      // Fallback to local cache
    }
  }
}
                    `}</code>
                                    </pre>
                                </div>
                            </section>
                        </ScrollReveal>

                        <div className="w-full h-px bg-white/10" />

                        {/* Results Section */}
                        <ScrollReveal>
                            <section className="space-y-6">
                                <h2 className="text-2xl font-bold text-gradient">The Result</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {project.results?.map((result, idx) => (
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
