'use client';

import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const events = [
    {
        company: 'Amanata',
        role: 'Mobile Engineer',
        period: '2024 - Present',
        color: 'border-accent-blue',
    },
    {
        company: 'Signals99 Studio',
        role: 'Mobile Engineer',
        period: '2023 - 2024',
        color: 'border-accent-purple',
    },
    {
        company: 'PT. Time Excelindo',
        role: 'Frontend Developer',
        period: '2022 - 2023',
        color: 'border-accent-green',
    },
    {
        company: 'TeDi',
        role: 'Frontend Developer',
        period: '2022',
        color: 'border-white/20',
    },
];

export function TimelineModule() {
    return (
        <div className="w-full h-full flex flex-col">
            <div className="flex items-center gap-2 mb-6">
                <Briefcase className="w-5 h-5 text-accent-purple" />
                <h3 className="text-sm font-medium text-muted uppercase tracking-wider">
                    Career Path
                </h3>
            </div>

            <div className="relative flex flex-1 items-center overflow-x-auto pb-4 scrollbar-hide">
                {/* Continuous Line */}
                <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-white/5 -translate-y-1/2 z-0" />

                <div className="flex gap-12 px-4 relative z-10 w-full justify-between lg:justify-start">
                    {events.map((event, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="flex flex-col items-center flex-shrink-0 text-center min-w-[140px]"
                        >
                            <div className={`w-4 h-4 rounded-full bg-background border-2 ${event.color} mb-4 relative z-20 shadow-[0_0_10px_rgba(0,0,0,0.5)]`} />
                            <div>
                                <div className="font-semibold text-sm mb-1">{event.company}</div>
                                <div className="text-xs text-accent-blue mb-1">{event.role}</div>
                                <div className="text-[10px] text-muted">{event.period}</div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
