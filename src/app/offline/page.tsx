'use client';

import { WifiOff, Home } from 'lucide-react';
import Link from 'next/link';

export default function OfflinePage() {
    const handleRetry = () => {
        window.location.reload();
    };

    return (
        <main className="min-h-screen flex items-center justify-center p-6">
            <div className="max-w-md w-full text-center space-y-6">
                {/* Icon */}
                <div className="flex justify-center">
                    <div className="p-6 rounded-full bg-white/5 border border-white/10">
                        <WifiOff className="w-16 h-16 text-muted" />
                    </div>
                </div>

                {/* Content */}
                <div className="space-y-3">
                    <h1 className="text-3xl font-bold">You're Offline</h1>
                    <p className="text-muted text-lg">
                        It looks like you've lost your internet connection.
                        Please check your network and try again.
                    </p>
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4">
                    <button
                        onClick={handleRetry}
                        className="px-6 py-3 bg-white text-black font-semibold rounded-xl hover:bg-gray-200 transition-colors"
                    >
                        Retry Connection
                    </button>
                    <Link
                        href="/"
                        className="px-6 py-3 bg-white/5 border border-white/10 font-semibold rounded-xl hover:bg-white/10 transition-colors inline-flex items-center justify-center gap-2"
                    >
                        <Home className="w-5 h-5" />
                        Go Home
                    </Link>
                </div>
            </div>
        </main>
    );
}
