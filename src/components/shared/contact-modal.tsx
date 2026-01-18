'use client';

import * as Dialog from '@radix-ui/react-dialog';
import { X, Mail, Linkedin, Github } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

interface ContactModalProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

const contactLinks = [
    {
        href: 'mailto:adrisabik@gmail.com',
        icon: Mail,
        label: 'Email',
        description: 'adrisabik@gmail.com'
    },
    {
        href: 'https://linkedin.com/in/adrisabik',
        icon: Linkedin,
        label: 'LinkedIn',
        description: 'Connect professionally'
    },
    {
        href: 'https://github.com/adrisabik',
        icon: Github,
        label: 'GitHub',
        description: 'View my code'
    },
];

export function ContactModal({ open, onOpenChange }: ContactModalProps) {
    return (
        <Dialog.Root open={open} onOpenChange={onOpenChange}>
            <AnimatePresence>
                {open && (
                    <Dialog.Portal forceMount>
                        <Dialog.Overlay asChild>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
                            />
                        </Dialog.Overlay>
                        <Dialog.Content asChild>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                                transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                                className={cn(
                                    'fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50',
                                    'glassmorphism p-8 w-full max-w-md',
                                    'focus:outline-none'
                                )}
                            >
                                <Dialog.Title className="text-2xl font-semibold mb-2">
                                    Let&apos;s Connect
                                </Dialog.Title>
                                <Dialog.Description className="text-muted mb-6">
                                    Choose your preferred way to reach out.
                                </Dialog.Description>

                                <div className="space-y-3">
                                    {contactLinks.map((link) => (
                                        <a
                                            key={link.label}
                                            href={link.href}
                                            target={link.href.startsWith('http') ? '_blank' : undefined}
                                            rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                            className={cn(
                                                'flex items-center gap-4 p-4 rounded-xl',
                                                'bg-white/5 border border-border',
                                                'hover:bg-white/10 hover:border-accent-blue/50',
                                                'transition-all duration-200'
                                            )}
                                        >
                                            <link.icon className="w-6 h-6 text-accent-blue" />
                                            <div>
                                                <div className="font-medium">{link.label}</div>
                                                <div className="text-sm text-muted">{link.description}</div>
                                            </div>
                                        </a>
                                    ))}
                                </div>

                                <Dialog.Close asChild>
                                    <button
                                        className={cn(
                                            'absolute top-4 right-4 p-2 rounded-lg',
                                            'hover:bg-white/10 transition-colors',
                                            'focus:outline-none focus:ring-2 focus:ring-accent-blue/50'
                                        )}
                                        aria-label="Close"
                                    >
                                        <X className="w-5 h-5" />
                                    </button>
                                </Dialog.Close>
                            </motion.div>
                        </Dialog.Content>
                    </Dialog.Portal>
                )}
            </AnimatePresence>
        </Dialog.Root>
    );
}
