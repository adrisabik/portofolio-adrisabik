import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface BentoGridProps {
    children: ReactNode;
    className?: string;
}

export function BentoGrid({ children, className }: BentoGridProps) {
    return (
        <div
            className={cn(
                'grid gap-6',
                'grid-cols-1',           // Mobile: 1 column
                'md:grid-cols-6',        // Tablet: 6 columns
                'lg:grid-cols-12',       // Desktop: 12 columns
                className
            )}
        >
            {children}
        </div>
    );
}
