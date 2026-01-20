import { BentoGrid } from '@/components/bento/bento-grid';
import { BentoCard } from '@/components/bento/bento-card';
import { Skeleton, SkeletonText, SkeletonAvatar } from './skeleton';

export function PageSkeleton() {
    return (
        <main className="min-h-screen p-6 lg:p-12 pb-24">
            <div className="max-w-7xl mx-auto">
                <BentoGrid>
                    {/* Hero Module Skeleton - colSpan={7} rowSpan={2} */}
                    <BentoCard colSpan={7} rowSpan={2}>
                        <div className="space-y-4 h-full flex flex-col justify-center">
                            <SkeletonText width="25" className="h-8" />
                            <SkeletonText width="75" className="h-12" />
                            <SkeletonText width="50" className="h-6" />
                            <div className="flex gap-2 pt-4">
                                <Skeleton className="h-10 w-32" />
                                <Skeleton className="h-10 w-32" />
                            </div>
                        </div>
                    </BentoCard>

                    {/* Avatar Module Skeleton - colSpan={5} rowSpan={2} */}
                    <BentoCard colSpan={5} rowSpan={2} className="flex items-center justify-center">
                        <SkeletonAvatar className="w-32 h-32" />
                    </BentoCard>

                    {/* Stats Module Skeleton - colSpan={4} */}
                    <BentoCard colSpan={4}>
                        <div className="grid grid-cols-3 gap-4 h-full">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="space-y-2">
                                    <SkeletonText width="full" className="h-8" />
                                    <SkeletonText width="75" className="h-4" />
                                </div>
                            ))}
                        </div>
                    </BentoCard>

                    {/* Featured Projects Skeleton - colSpan={8} rowSpan={2} */}
                    <BentoCard colSpan={8} rowSpan={2} className="p-0">
                        <div className="flex h-full">
                            <Skeleton className="w-1/2 h-full rounded-l-3xl rounded-r-none" />
                            <div className="w-1/2 p-6 space-y-4">
                                <SkeletonText width="25" className="h-6" />
                                <SkeletonText width="75" className="h-8" />
                                <SkeletonText width="full" className="h-4" />
                                <SkeletonText width="full" className="h-4" />
                                <div className="flex gap-2 pt-4">
                                    <Skeleton className="h-4 w-16 rounded-full" />
                                    <Skeleton className="h-4 w-16 rounded-full" />
                                    <Skeleton className="h-4 w-16 rounded-full" />
                                </div>
                            </div>
                        </div>
                    </BentoCard>

                    {/* Tech Stack Module Skeleton - colSpan={4} */}
                    <BentoCard colSpan={4}>
                        <div className="space-y-3">
                            <SkeletonText width="50" className="h-6" />
                            <div className="grid grid-cols-4 gap-3">
                                {[1, 2, 3, 4].map((i) => (
                                    <Skeleton key={i} className="h-12 w-12 rounded-lg" />
                                ))}
                            </div>
                        </div>
                    </BentoCard>

                    {/* Timeline Module Skeleton - colSpan={12} */}
                    <BentoCard colSpan={12}>
                        <div className="space-y-4">
                            <SkeletonText width="25" className="h-6" />
                            <div className="flex gap-6">
                                {[1, 2, 3].map((i) => (
                                    <div key={i} className="flex-1 space-y-2">
                                        <SkeletonText width="full" className="h-5" />
                                        <SkeletonText width="75" className="h-4" />
                                        <SkeletonText width="50" className="h-4" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </BentoCard>
                </BentoGrid>
            </div>
        </main>
    );
}
