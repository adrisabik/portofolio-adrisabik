import Link from 'next/link';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';

export function HeroModule() {
    return (
        <div className="flex flex-col h-full justify-between">
            <div>
                <h1 className="text-4xl lg:text-5xl font-bold mb-4">
                    Adri Sabik Muhana
                </h1>
                <p className="text-xl text-accent-blue font-medium mb-4">
                    Mobile Engineer
                </p>
                <p className="text-muted leading-relaxed">
                    Building high-performance mobile applications with Flutter and Clean Architecture.
                    Passionate about creating seamless user experiences and scalable solutions.
                </p>
            </div>

            <div className="flex flex-wrap gap-3 mt-6">
                <Link
                    href="/projects"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent-blue text-background font-medium rounded-xl hover:bg-accent-blue/90 transition-colors"
                >
                    View Work
                    <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                    href="https://github.com/adrisabik"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 border border-border rounded-xl hover:bg-white/5 transition-colors"
                >
                    <Github className="w-4 h-4" />
                    GitHub
                </a>
                <a
                    href="https://www.linkedin.com/in/adrisabik/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 border border-border rounded-xl hover:bg-white/5 transition-colors"
                >
                    <Linkedin className="w-4 h-4" />
                    LinkedIn
                </a>
                <a
                    href="mailto:adrisabik.dev@gmail.com"
                    className="inline-flex items-center gap-2 px-5 py-2.5 border border-border rounded-xl hover:bg-white/5 transition-colors"
                >
                    <Mail className="w-4 h-4" />
                    Email
                </a>
            </div>
        </div>
    );
}
