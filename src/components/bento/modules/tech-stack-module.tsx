
import Image from 'next/image';

const techStack = [
    { name: 'Flutter', icon: '/assets/images/tech-icons/ic_flutter.svg' },
    { name: 'Dart', icon: '/assets/images/tech-icons/ic_dart.svg' },
    { name: 'Firebase', icon: '/assets/images/tech-icons/ic_firebase.svg' },
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
                        className="flex flex-col items-center gap-2 p-3 rounded-xl hover:bg-white/5 transition-colors group"
                    >
                        <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center p-2 group-hover:bg-white/10 transition-colors">
                            <Image
                                src={tech.icon}
                                alt={tech.name}
                                width={32}
                                height={32}
                                className="w-full h-full object-contain"
                            />
                        </div>
                        <span className="text-xs text-muted font-medium">{tech.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}
