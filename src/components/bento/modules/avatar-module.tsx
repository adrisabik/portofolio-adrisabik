'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Smartphone, Code2, Database, Layers, Cpu } from 'lucide-react';

const icons = [
    { Icon: Smartphone, color: 'text-accent-blue', delay: 0 },
    { Icon: Code2, color: 'text-accent-purple', delay: 4 },
    { Icon: Database, color: 'text-accent-green', delay: 8 },
    { Icon: Layers, color: 'text-accent-blue', delay: 12 },
    { Icon: Cpu, color: 'text-accent-purple', delay: 16 },
];

export function AvatarModule() {
    return (
        <div className="relative w-full h-full flex items-center justify-center overflow-hidden min-h-[280px] bg-dark-bg/50 group">
            {/* dynamic Background Glows */}
            <div className="absolute inset-0">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 90, 0],
                        opacity: [0.1, 0.2, 0.1],
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-accent-blue/20 blur-[80px]"
                />
                <motion.div
                    animate={{
                        scale: [1.2, 1, 1.2],
                        rotate: [0, -90, 0],
                        opacity: [0.1, 0.2, 0.1],
                    }}
                    transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] rounded-full bg-accent-purple/20 blur-[60px]"
                />
            </div>

            {/* Orbiting Icons Container */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                {icons.map((item, index) => (
                    <motion.div
                        key={index}
                        className="absolute"
                        initial={{ rotate: (index * 360) / icons.length }}
                        animate={{ rotate: (index * 360) / icons.length + 360 }}
                        transition={{
                            duration: 25,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                        style={{ width: '220px', height: '220px' }}
                    >
                        <motion.div
                            className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-auto"
                            animate={{ rotate: -((index * 360) / icons.length + 360) }}
                            transition={{
                                duration: 25,
                                repeat: Infinity,
                                ease: "linear",
                            }}
                        >
                            <motion.div
                                whileHover={{ scale: 1.2, y: -5 }}
                                className="p-2.5 rounded-xl glassmorphism border-white/10 shadow-lg shadow-black/20 group/icon relative"
                            >
                                <div className={`absolute inset-0 rounded-xl bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover/icon:opacity-100 transition-opacity`} />
                                <item.Icon className={`w-6 h-6 ${item.color} relative z-10 filter drop-shadow-[0_0_8px_rgba(var(--accent-rgb),0.5)]`} />
                            </motion.div>
                        </motion.div>
                    </motion.div>
                ))}
            </div>

            {/* Central Avatar Section */}
            <div className="relative flex items-center justify-center">
                {/* Outer pulsing ring */}
                <motion.div
                    animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="absolute inset-[-12px] rounded-full border border-accent-blue/30 blur-sm"
                />

                {/* Main Avatar Container */}
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: 'spring', stiffness: 100, damping: 15 }}
                    className="relative z-10 w-36 h-36 rounded-full p-1 bg-gradient-to-br from-accent-blue/40 via-accent-purple/40 to-accent-blue/40 shadow-[0_0_40px_-10px_rgba(0,0,0,0.5)]"
                >
                    <div className="w-full h-full rounded-full overflow-hidden relative border-2 border-white/20">
                        <Image
                            src="/assets/profile-image.webp"
                            alt="Adri Sabik"
                            fill
                            className="object-cover transition-transform duration-700"
                            priority
                        />

                        {/* Overlay Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/40 to-transparent opacity-60" />
                    </div>

                    {/* Spinning Decorative Border */}
                    <div className="absolute -inset-1 rounded-full border border-white/10 border-dashed animate-[spin_20s_linear_infinite]" />
                    <div className="absolute -inset-2 rounded-full border border-accent-blue/5 border-dashed animate-[spin_30s_linear_reverse_infinite]" />
                </motion.div>

                {/* Bottom Label Floating */}
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="absolute -bottom-10 z-20 px-4 py-1.5 rounded-full glassmorphism border-white/10 text-xs font-semibold tracking-wider text-white/80 shadow-xl whitespace-nowrap"
                >
                    <span className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-accent-green animate-pulse" />
                        AVAILABLE FOR WORK
                    </span>
                </motion.div>
            </div>
        </div>
    );
}
