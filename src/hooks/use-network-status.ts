'use client';

import { useState, useEffect } from 'react';

export function useNetworkStatus() {
    const [isOnline, setIsOnline] = useState(true);
    const [wasOffline, setWasOffline] = useState(false);

    useEffect(() => {
        // Set initial state from navigator.onLine
        setIsOnline(navigator.onLine); // eslint-disable-line react-hooks/exhaustive-deps

        const handleOnline = () => {
            setIsOnline(true);
            setWasOffline(true);

            // Reset wasOffline after 3 seconds
            setTimeout(() => {
                setWasOffline(false);
            }, 3000);
        };

        const handleOffline = () => {
            setIsOnline(false);
        };

        window.addEventListener('online', handleOnline);
        window.addEventListener('offline', handleOffline);

        return () => {
            window.removeEventListener('online', handleOnline);
            window.removeEventListener('offline', handleOffline);
        };
    }, []);

    return { isOnline, wasOffline };
}
