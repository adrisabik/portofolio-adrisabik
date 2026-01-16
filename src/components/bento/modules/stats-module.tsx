import { Briefcase, Smartphone } from 'lucide-react';

const stats = [
    { icon: Briefcase, value: '15+', label: 'Projects Delivered' },
    { icon: Smartphone, value: '5+', label: 'Apps on Store' },
];

export function StatsModule() {
    return (
        <div className="flex flex-col justify-center h-full gap-6">
            {stats.map((stat) => (
                <div key={stat.label} className="flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-accent-purple/20">
                        <stat.icon className="w-6 h-6 text-accent-purple" />
                    </div>
                    <div>
                        <div className="text-3xl font-bold">{stat.value}</div>
                        <div className="text-sm text-muted">{stat.label}</div>
                    </div>
                </div>
            ))}
        </div>
    );
}
