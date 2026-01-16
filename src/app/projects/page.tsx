'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FilterPills } from '@/components/projects/filter-pills';
import { ProjectCard } from '@/components/projects/project-card';
import { Dock } from '@/components/shared/dock';
import type { Project, ProjectCategory } from '@/types/project';

import { mockProjects } from '@/data/mock-projects';

export default function ProjectsPage() {
    const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all');

    const filteredProjects = mockProjects.filter(
        (project) => activeCategory === 'all' || project.category === activeCategory
    );

    return (
        <main className="min-h-screen p-6 lg:p-12 pb-24">
            <div className="max-w-7xl mx-auto">
                <header className="mb-12">
                    <h1 className="text-4xl font-bold mb-4">Selected Works</h1>
                    <p className="text-muted text-lg mb-8">
                        A collection of projects showcasing mobile engineering excellence.
                    </p>
                    <FilterPills
                        activeCategory={activeCategory}
                        onCategoryChange={setActiveCategory}
                    />
                </header>

                <AnimatePresence mode="popLayout">
                    {filteredProjects.length > 0 ? (
                        <motion.div
                            layout
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                        >
                            {filteredProjects.map((project) => (
                                <ProjectCard key={project.slug} project={project} />
                            ))}
                        </motion.div>
                    ) : (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-center py-12"
                        >
                            <p className="text-muted">
                                No projects match this filter. Try selecting &apos;All&apos;.
                            </p>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            <div className="h-20" />
            <Dock />
        </main>
    );
}
