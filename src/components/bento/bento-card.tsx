'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

interface BentoCardProps {
    children: ReactNode;
    className?: string;
    colSpan?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 12;
    rowSpan?: 1 | 2 | 3;
}

const colSpanClasses: Record<number, string> = {
    1: 'lg:col-span-1',
    2: 'lg:col-span-2',
    3: 'lg:col-span-3',
    4: 'lg:col-span-4',
    5: 'lg:col-span-5',
    6: 'lg:col-span-6 md:col-span-3',
    7: 'lg:col-span-7',
    8: 'lg:col-span-8 md:col-span-4',
    12: 'lg:col-span-12 md:col-span-6',
};

const rowSpanClasses: Record<number, string> = {
    1: 'row-span-1',
    2: 'row-span-2',
    3: 'row-span-3',
};

export function BentoCard({
    children,
    className,
    colSpan = 4,
    rowSpan = 1
}: BentoCardProps) {
    return (
        <motion.div
            whileHover={{ y: -5, transition: { type: 'spring', stiffness: 300, damping: 20 } }}
            className={cn(
                'glassmorphism p-6 overflow-hidden',
                'col-span-1', // Mobile: always 1 column
                colSpanClasses[colSpan],
                rowSpanClasses[rowSpan],
                className
            )}
        >
            {children}
        </motion.div>
    );
}
