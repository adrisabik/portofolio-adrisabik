'use client';

import { motion } from 'framer-motion';
import { Smartphone, Code2, Database, Layers, Cpu } from 'lucide-react';

const icons = [
    { Icon: Smartphone, color: 'text-accent-blue', delay: 0 },
    { Icon: Code2, color: 'text-accent-purple', delay: 1.2 },
    { Icon: Database, color: 'text-accent-green', delay: 2.4 },
    { Icon: Layers, color: 'text-accent-blue', delay: 3.6 },
    { Icon: Cpu, color: 'text-accent-purple', delay: 4.8 },
];

export function AvatarModule() {
    return (
        <div className="relative w-full h-full flex items-center justify-center overflow-hidden min-h-[240px]">
            {/* Orbiting Icons */}
            <div className="absolute inset-0 flex items-center justify-center">
                {icons.map((item, index) => (
                    <motion.div
                        key={index}
                        className="absolute"
                        initial={{ rotate: (index * 360) / icons.length }}
                        animate={{ rotate: (index * 360) / icons.length + 360 }}
                        transition={{
                            duration: 20,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                        style={{ width: '180px', height: '180px' }}
                    >
                        <motion.div
                            className={`absolute top-0 left-1/2 -translate-x-1/2 p-2 rounded-lg glassmorphism border-accent-blue/20`}
                            animate={{ rotate: -((index * 360) / icons.length + 360) }}
                            transition={{
                                duration: 20,
                                repeat: Infinity,
                                ease: "linear",
                            }}
                        >
                            <item.Icon className={`w-5 h-5 ${item.color}`} />
                        </motion.div>
                    </motion.div>
                ))}
            </div>

            {/* Central Avatar */}
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                className="relative z-10 w-32 h-32 rounded-full bg-gradient-to-br from-accent-blue/20 to-accent-purple/20 border-2 border-white/10 flex items-center justify-center text-4xl font-bold shadow-2xl backdrop-blur-xl"
            >
                <span className="text-gradient">AS</span>

                {/* Decorative inner rings */}
                <div className="absolute inset-2 rounded-full border border-white/5 border-dashed animate-[spin_10s_linear_infinite]" />
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent-blue to-accent-purple opacity-20 blur-2xl" />
            </motion.div>
        </div>
    );
}
