'use client';

import { useNetworkStatus } from '@/hooks/use-network-status';
import { motion, AnimatePresence } from 'framer-motion';
import { WifiOff, Wifi } from 'lucide-react';

export function OfflineBanner() {
    const { isOnline, wasOffline } = useNetworkStatus();

    const showOffline = !isOnline;
    const showReconnected = isOnline && wasOffline;

    return (
        <AnimatePresence>
            {showOffline && (
                <motion.div
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -100, opacity: 0 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    className="fixed top-0 left-0 right-0 z-50 pointer-events-none"
                >
                    <div className="mx-auto max-w-2xl px-4 pt-4">
                        <div className="bg-red-500/90 backdrop-blur-md text-white px-6 py-3 rounded-xl shadow-2xl border border-red-400/20 flex items-center gap-3">
                            <WifiOff className="w-5 h-5 flex-shrink-0" />
                            <p className="font-medium text-sm">
                                You're offline. Some features may be unavailable.
                            </p>
                        </div>
                    </div>
                </motion.div>
            )}

            {showReconnected && (
                <motion.div
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -100, opacity: 0 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    className="fixed top-0 left-0 right-0 z-50 pointer-events-none"
                >
                    <div className="mx-auto max-w-2xl px-4 pt-4">
                        <div className="bg-green-500/90 backdrop-blur-md text-white px-6 py-3 rounded-xl shadow-2xl border border-green-400/20 flex items-center gap-3">
                            <Wifi className="w-5 h-5 flex-shrink-0" />
                            <p className="font-medium text-sm">
                                Connection restored!
                            </p>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
