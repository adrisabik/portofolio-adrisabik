'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import { mockProjects } from '@/data/mock-projects';

export function FeaturedProjectsModule() {
    const featuredProjects = mockProjects.filter((p) => p.featured);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % featuredProjects.length);
        }, 10000);
        return () => clearInterval(timer);
    }, [featuredProjects.length]);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % featuredProjects.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + featuredProjects.length) % featuredProjects.length);
    };

    const currentProject = featuredProjects[currentIndex];

    if (!currentProject) return null;

    return (
        <div className="flex h-full w-full overflow-hidden rounded-3xl relative group">
            {/* Background with blur effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/5 to-accent-purple/5 backdrop-blur-sm -z-10" />

            {/* Content Container */}
            <div className="flex flex-col md:flex-row w-full h-full relative z-10">

                {/* Left: Visual Mockup Area */}
                <div className="w-full md:w-1/2 h-48 md:h-full relative flex items-center justify-center p-6 bg-white/5 border-r border-white/5">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentProject.slug}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.4 }}
                            className="w-full h-full bg-gradient-to-tr from-surface to-background rounded-2xl border border-white/10 shadow-2xl flex items-center justify-center"
                        >
                            {/* Image or Placeholder */}
                            {currentProject.thumbnail ? (
                                <div className="relative w-full h-full">
                                    <img
                                        src={currentProject.thumbnail}
                                        alt={currentProject.title}
                                        className="object-cover w-full h-full"
                                    />
                                    {/* Overlay gradient for text readability if needed, though design has text on right */}
                                </div>
                            ) : (
                                <div className="text-center">
                                    <span className="text-4xl">📱</span>
                                    <p className="text-xs text-muted mt-2">App Screenshot</p>
                                </div>
                            )}
                        </motion.div>
                    </AnimatePresence>

                    {/* Absolute Controls for Left Area (Mobile visual cue) */}
                    <div className="absolute bottom-4 left-0 w-full flex justify-center gap-2 md:hidden">
                        {featuredProjects.map((_, idx) => (
                            <div
                                key={idx}
                                className={`nav-dot h-1.5 rounded-full transition-all duration-300 ${idx === currentIndex ? 'w-6 bg-accent-blue' : 'w-1.5 bg-white/20'}`}
                            />
                        ))}
                    </div>
                </div>

                {/* Right: Project Details */}
                <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-center relative">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentProject.slug}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.4 }}
                            className="flex flex-col h-full justify-between"
                        >
                            <div>
                                <div className="flex items-center gap-2 mb-3">
                                    <span className="px-3 py-1 text-xs font-medium rounded-full bg-accent-blue/10 text-accent-blue border border-accent-blue/20">
                                        Featured
                                    </span>
                                    <span className="text-xs text-muted font-mono">{currentProject.year}</span>
                                </div>

                                <h3 className="text-2xl md:text-3xl font-bold mb-2 leading-tight">
                                    {currentProject.title}
                                </h3>

                                <p className="text-muted text-sm md:text-base line-clamp-3 mb-6">
                                    {currentProject.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {currentProject.techStack.slice(0, 3).map((tech) => (
                                        <span key={tech} className="text-xs font-mono px-2 py-1 bg-white/5 rounded">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="flex items-center gap-4 mt-auto">
                                <Link
                                    href={`/projects/${currentProject.slug}`}
                                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-black font-semibold rounded-xl hover:bg-gray-200 transition-colors"
                                >
                                    View Case Study
                                    <ExternalLink className="w-4 h-4" />
                                </Link>
                                <Link
                                    href="/projects"
                                    className="text-sm font-medium text-muted hover:text-white transition-colors"
                                >
                                    All Projects
                                </Link>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>

            {/* Navigation Arrows (Hover visible on Desktop) */}
            <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/70 z-20 hidden md:flex"
                aria-label="Previous Project"
            >
                <ArrowLeft className="w-5 h-5" />
            </button>

            <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/70 z-20 hidden md:flex"
                aria-label="Next Project"
            >
                <ArrowRight className="w-5 h-5" />
            </button>

            {/* Pagination Dots (Desktop Bottom Right) */}
            <div className="absolute bottom-6 right-8 hidden md:flex gap-2 z-20">
                {featuredProjects.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => setCurrentIndex(idx)}
                        className={`h-1.5 transition-all duration-300 rounded-full ${idx === currentIndex ? 'w-6 bg-accent-blue' : 'w-1.5 bg-white/20 hover:bg-white/40'}`}
                        aria-label={`Go to slide ${idx + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}
