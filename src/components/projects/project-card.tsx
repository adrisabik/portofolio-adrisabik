'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import type { Project } from '@/types/project';

interface ProjectCardProps {
    project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
    return (
        <motion.div
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
        >
            <Link href={`/projects/${project.slug}`}>
                <article
                    className={cn(
                        'glassmorphism p-6 h-full',
                        'hover:border-accent-blue/50 transition-colors duration-200',
                        'group cursor-pointer'
                    )}
                >
                    {/* Thumbnail */}
                    <div className="aspect-[1024/500] bg-white/5 rounded-xl mb-4 overflow-hidden relative">
                        {project.thumbnail ? (
                            <Image
                                src={project.thumbnail}
                                alt={project.title}
                                fill
                                className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                            />
                        ) : (
                            <div className="w-full h-full bg-gradient-to-br from-white/5 to-white/10 flex items-center justify-center">
                                <span className="text-4xl">✨</span>
                            </div>
                        )}
                    </div>

                    <div className="flex items-center gap-2 mb-2">
                        <h3 className="font-semibold text-lg group-hover:text-accent-blue transition-colors">
                            {project.title}
                        </h3>
                        <span className="text-xs text-muted">{project.year}</span>
                    </div>

                    <p className="text-sm text-muted mb-4 line-clamp-2">
                        {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 max-h-[56px] overflow-hidden">
                        {project.techStack.map((tech) => (
                            <span
                                key={tech}
                                className="px-2 py-1 text-xs bg-white/5 rounded-md shrink-0"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </article>
            </Link>
        </motion.div>
    );
}
