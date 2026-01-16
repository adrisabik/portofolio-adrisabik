import Image from 'next/image';

const techStack = [
    { name: 'Flutter', icon: '/assets/images/tech-icons/flutter.svg' },
    { name: 'Dart', icon: '/assets/images/tech-icons/dart.svg' },
    { name: 'Firebase', icon: '/assets/images/tech-icons/firebase.svg' },
];

export function TechStackModule() {
    return (
        <div className="flex flex-col h-full">
            <h3 className="text-sm font-medium text-muted uppercase tracking-wider mb-4">
                Core Stack
            </h3>
            <div className="grid grid-cols-3 gap-4 flex-1 items-center">
                {techStack.map((tech) => (
                    <div
                        key={tech.name}
                        className="flex flex-col items-center gap-2 p-3 rounded-xl hover:bg-white/5 transition-colors"
                    >
                        {/* Placeholder until actual icons are added */}
                        <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-xs font-mono">
                            {tech.name.slice(0, 2)}
                        </div>
                        <span className="text-xs text-muted">{tech.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}
