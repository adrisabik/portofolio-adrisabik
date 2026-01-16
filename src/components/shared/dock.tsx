'use client';

import { motion } from 'framer-motion';
import { Home, Briefcase, BookOpen, User, Mail } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import * as Tooltip from '@radix-ui/react-tooltip';

const navItems = [
    { href: '/', icon: Home, label: 'Home' },
    { href: '/projects', icon: Briefcase, label: 'Work' },
    { href: '/blog', icon: BookOpen, label: 'Blog' },
    { href: '/cv', icon: User, label: 'Profile' },
    { href: '#contact', icon: Mail, label: 'Contact' },
];

export function Dock() {
    const pathname = usePathname();

    return (
        <Tooltip.Provider delayDuration={200}>
            <motion.nav
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, type: 'spring', stiffness: 200, damping: 20 }}
                className={cn(
                    'fixed bottom-6 left-1/2 -translate-x-1/2 z-50',
                    'glassmorphism px-6 py-3',
                    'flex items-center gap-1'
                )}
            >
                {navItems.map((item) => {
                    const isActive = item.href === '/' ? pathname === '/' : pathname.startsWith(item.href) && item.href !== '#contact';

                    return (
                        <Tooltip.Root key={item.href}>
                            <Tooltip.Trigger asChild>
                                <Link
                                    href={item.href}
                                    className={cn(
                                        'p-3 rounded-xl transition-colors duration-200',
                                        'hover:bg-white/10 hover:text-accent-blue',
                                        'focus:outline-none focus:ring-2 focus:ring-accent-blue/50',
                                        isActive ? 'bg-white/10 text-accent-blue shadow-[0_0_10px_rgba(59,130,246,0.5)]' : 'text-muted'
                                    )}
                                >
                                    <item.icon className="w-5 h-5" />
                                    <span className="sr-only">{item.label}</span>
                                </Link>
                            </Tooltip.Trigger>
                            <Tooltip.Portal>
                                <Tooltip.Content
                                    className="glassmorphism px-3 py-1.5 text-sm"
                                    sideOffset={8}
                                >
                                    {item.label}
                                    <Tooltip.Arrow className="fill-surface" />
                                </Tooltip.Content>
                            </Tooltip.Portal>
                        </Tooltip.Root>
                    );
                })}
            </motion.nav>
        </Tooltip.Provider>
    );
}
