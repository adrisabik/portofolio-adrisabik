import { cn } from '@/lib/utils';

interface SkeletonProps {
    className?: string;
}

export function Skeleton({ className }: SkeletonProps) {
    return (
        <div
            className={cn(
                'animate-pulse rounded-bento bg-white/5',
                className
            )}
        />
    );
}

export function SkeletonText({ className, width = 'full' }: { className?: string; width?: 'full' | '75' | '50' | '25' }) {
    const widthClass = {
        full: 'w-full',
        '75': 'w-3/4',
        '50': 'w-1/2',
        '25': 'w-1/4',
    }[width];

    return (
        <div className={cn('h-4 rounded bg-white/5 animate-pulse', widthClass, className)} />
    );
}

export function SkeletonAvatar({ className }: { className?: string }) {
    return (
        <div className={cn('rounded-full bg-white/5 animate-pulse', className)} />
    );
}

export function SkeletonImage({ aspectRatio = '16/9', className }: { aspectRatio?: string; className?: string }) {
    return (
        <div
            className={cn('w-full bg-white/5 animate-pulse rounded-lg', className)}
            style={{ aspectRatio }}
        />
    );
}

export function SkeletonCard({ className }: { className?: string }) {
    return (
        <div className={cn('rounded-bento bg-white/5 p-6 space-y-4 animate-pulse', className)}>
            <SkeletonText width="75" className="h-6" />
            <SkeletonText width="full" />
            <SkeletonText width="50" />
        </div>
    );
}
