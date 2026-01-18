import { Dock } from '@/components/shared/dock';
import { Download, Briefcase, GraduationCap, Award, Code2 } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'CV / Resume',
    description: 'Professional experience and qualifications of Adri Sabik Muhana, Mobile Engineer.',
};

export default function CVPage() {
    return (
        <main className="min-h-screen p-6 lg:p-12 pb-24">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <header className="flex flex-col md:flex-row md:items-center md:justify-between mb-12 gap-4">
                    <div>
                        <h1 className="text-4xl font-bold mb-2">Adri Sabik Muhana</h1>
                        <p className="text-xl text-accent-blue">Mobile Engineer</p>
                    </div>
                    <a
                        href="/assets/CV_AdriSabikMuhana_MobileEngineer.pdf"
                        download
                        className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent-blue text-background font-medium rounded-xl hover:bg-accent-blue/90 transition-colors"
                    >
                        <Download className="w-4 h-4" />
                        Download PDF
                    </a>
                </header>

                {/* Summary */}
                <section className="glassmorphism p-6 mb-8">
                    <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
                        <Award className="w-5 h-5 text-accent-purple" />
                        Summary
                    </h2>
                    <div className="text-muted leading-relaxed space-y-4">
                        <p>
                            I&apos;ve always been driven by curiosity and the desire to keep improving. For me, learning is not just about acquiring
                            new knowledge but also about applying it to solve real problems. I enjoy taking initiative whether it&apos;s asking
                            thoughtful questions, offering fresh ideas, or providing constructive feedback. Collaboration is something I truly
                            value, as working with a team and communicating effectively often leads to better outcomes and stronger connections.
                        </p>
                        <p>
                            Over the past two years, I&apos;ve worked as a Mobile Engineer on more than 10 projects, constantly exploring new
                            technologies to stay ahead of industry trends. I take pride in being fully involved in every stage of the software
                            development life cycle from planning and defining requirements alongside product managers, designers, and stakeholders,
                            to translating business needs into technical solutions. Along the way, I&apos;ve developed and maintained clean, scalable,
                            and efficient mobile applications by applying high coding standards and best practices to ensure long-term quality and performance.
                        </p>
                    </div>
                </section>

                {/* Experience */}
                <section className="glassmorphism p-6 mb-8">
                    <h2 className="text-lg font-semibold mb-6 flex items-center gap-2">
                        <Briefcase className="w-5 h-5 text-accent-purple" />
                        Experience
                    </h2>
                    <div className="space-y-8">
                        <div className="border-l-2 border-accent-blue pl-4">
                            <h3 className="font-medium text-lg">Mobile Developer</h3>
                            <div className="flex flex-wrap gap-2 text-sm mb-2">
                                <span className="text-accent-blue font-medium">PT. Dana Purna Investama</span>
                                <span className="text-muted">•</span>
                                <span className="text-muted">Full-time</span>
                                <span className="text-muted">•</span>
                                <span className="text-muted">Nov 2025 - Present</span>
                            </div>
                        </div>

                        <div className="border-l-2 border-accent-blue pl-4">
                            <h3 className="font-medium text-lg">Mobile Engineer</h3>
                            <div className="flex flex-wrap gap-2 text-sm mb-2">
                                <span className="text-accent-blue font-medium">Amanata</span>
                                <span className="text-muted">•</span>
                                <span className="text-muted">Contract</span>
                                <span className="text-muted">•</span>
                                <span className="text-muted">Aug 2024 - Nov 2025</span>
                            </div>
                            <p className="text-sm text-muted mb-2">Key projects included:</p>
                            <ul className="text-sm text-muted list-disc list-inside space-y-1">
                                <li><strong>Amanata POS:</strong> Maintenance and feature implementation for transaction management and inventory tracking.</li>
                                <li><strong>Solusi3M:</strong> Supply chain app for aquaculture industry (cultivation to auction).</li>
                                <li><strong>Inkripsi:</strong> Monitoring app for student activities and school management.</li>
                                <li><strong>Getah Pinus:</strong> Supply chain app for pine resin production tracking.</li>
                                <li><strong>Punjul Agung:</strong> Village management app (profiling, e-commerce, news).</li>
                            </ul>
                        </div>

                        <div className="border-l-2 border-accent-blue pl-4">
                            <h3 className="font-medium text-lg">Mobile Engineer</h3>
                            <div className="flex flex-wrap gap-2 text-sm mb-2">
                                <span className="text-accent-blue font-medium">Signals99 Studio</span>
                                <span className="text-muted">•</span>
                                <span className="text-muted">Full-time</span>
                                <span className="text-muted">•</span>
                                <span className="text-muted">Apr 2023 - Aug 2024</span>
                            </div>
                            <ul className="text-sm text-muted list-disc list-inside space-y-1">
                                <li>Developed clean, scalable mobile apps with high coding standards.</li>
                                <li>Led code reviews and provided feedback for quality consistency.</li>
                                <li>Architected solutions focusing on performance and maintainability.</li>
                                <li>Collaborated with PMs and designers to translate business needs.</li>
                                <li>Integrated APIs with backend engineers for seamless functionality.</li>
                            </ul>
                        </div>

                        <div className="border-l-2 border-accent-blue pl-4">
                            <h3 className="font-medium text-lg">Frontend Developer</h3>
                            <div className="flex flex-wrap gap-2 text-sm mb-2">
                                <span className="text-accent-blue font-medium">PT. Time Excelindo</span>
                                <span className="text-muted">•</span>
                                <span className="text-muted">Full-time</span>
                                <span className="text-muted">•</span>
                                <span className="text-muted">Aug 2022 - Jun 2023</span>
                            </div>
                            <ul className="text-sm text-muted list-disc list-inside space-y-1">
                                <li>Involved in full SDLC from planning to build.</li>
                                <li>Engaged with clients for requirement gathering.</li>
                                <li>Developed mobile apps using Ionic, Angular, Vue, and Capacitor.</li>
                            </ul>
                        </div>

                        <div className="border-l-2 border-accent-blue pl-4">
                            <h3 className="font-medium text-lg">Software Engineer - Front-end</h3>
                            <div className="flex flex-wrap gap-2 text-sm mb-2">
                                <span className="text-accent-blue font-medium">TeDi (Teman Disabilitas)</span>
                                <span className="text-muted">•</span>
                                <span className="text-muted">Part-time</span>
                                <span className="text-muted">•</span>
                                <span className="text-muted">Aug 2022 - Dec 2022</span>
                            </div>
                            <ul className="text-sm text-muted list-disc list-inside space-y-1">
                                <li>Volunteered for Indonesia&apos;s first all-in-one accessibility app.</li>
                                <li>Built landing page to raise awareness and highlight features.</li>
                                <li>Implemented SEO strategies for better visibility.</li>
                            </ul>
                        </div>

                        <div className="border-l-2 border-accent-blue pl-4">
                            <h3 className="font-medium text-lg">Full Stack Web Developer</h3>
                            <div className="flex flex-wrap gap-2 text-sm mb-2">
                                <span className="text-accent-blue font-medium">PT. Git Solution</span>
                                <span className="text-muted">•</span>
                                <span className="text-muted">Internship</span>
                                <span className="text-muted">•</span>
                                <span className="text-muted">Feb 2022 - Jul 2022</span>
                            </div>
                            <ul className="text-sm text-muted list-disc list-inside space-y-1">
                                <li>Built responsive web apps with RESTful APIs.</li>
                                <li>Developed high-conversion landing pages.</li>
                                <li>Built a Learning Management System (LMS).</li>
                                <li>Developed an internship matching platform.</li>
                            </ul>
                        </div>

                        <div className="border-l-2 border-accent-blue pl-4">
                            <h3 className="font-medium text-lg">SIB Machine Learning & Front-End Web</h3>
                            <div className="flex flex-wrap gap-2 text-sm mb-2">
                                <span className="text-accent-blue font-medium">Dicoding Indonesia</span>
                                <span className="text-muted">•</span>
                                <span className="text-muted">Internship</span>
                                <span className="text-muted">•</span>
                                <span className="text-muted">Aug 2021 - Jan 2022</span>
                            </div>
                            <ul className="text-sm text-muted list-disc list-inside space-y-1">
                                <li>Participated in Kampus Merdeka SIB program.</li>
                                <li>Mastered practical competencies for the industrial world.</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Education */}
                <section className="glassmorphism p-6">
                    <h2 className="text-lg font-semibold mb-6 flex items-center gap-2">
                        <GraduationCap className="w-5 h-5 text-accent-purple" />
                        Education
                    </h2>
                    <div className="border-l-2 border-accent-green pl-4">
                        <h3 className="font-medium">Bachelor of Informatics</h3>
                        <p className="text-sm text-accent-green">UPN &quot;Veteran&quot; Yogyakarta</p>
                        <p className="text-sm text-muted">Sep 2019 - Sep 2025</p>
                        <p className="text-sm text-muted">GPA: 3.35/4.0</p>
                    </div>
                </section>

                {/* Skills */}
                <section className="glassmorphism p-6 mt-8">
                    <h2 className="text-lg font-semibold mb-6 flex items-center gap-2">
                        <Code2 className="w-5 h-5 text-accent-purple" />
                        Technical Skills
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <h3 className="text-sm font-medium text-muted uppercase tracking-wider mb-3">Mobile Development</h3>
                            <div className="flex flex-wrap gap-2">
                                {['Flutter', 'Dart', 'Bloc & Cubit', 'Clean Architecture', 'MVVM', 'Offline-First', 'Localization', 'Google ML Kit', 'Material Design'].map(skill => (
                                    <span key={skill} className="px-2 py-1 bg-accent-blue/10 text-accent-blue text-sm rounded border border-accent-blue/20">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div>
                            <h3 className="text-sm font-medium text-muted uppercase tracking-wider mb-3">Tools & Services</h3>
                            <div className="flex flex-wrap gap-2">
                                {['Firebase', 'RESTful APIs', 'Google Maps/Mapbox', 'Redis Pub/Sub', 'Google Play Store', 'Git/GitHub', 'CI/CD'].map(skill => (
                                    <span key={skill} className="px-2 py-1 bg-accent-purple/10 text-accent-purple text-sm rounded border border-accent-purple/20">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <div className="h-20" />
            <Dock />
        </main>
    );
}
