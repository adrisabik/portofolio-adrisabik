'use client';

import { cn } from '@/lib/utils';
import type { ProjectCategory } from '@/types/project';

const categories: { value: ProjectCategory; label: string }[] = [
    { value: 'all', label: 'All' },
    { value: 'enterprise', label: 'Enterprise/HRIS' },
    { value: 'community', label: 'Community/Religion' },
    { value: 'supply-chain', label: 'Supply Chain' },
    { value: 'accessibility', label: 'Accessibility' },
    { value: 'lab', label: 'Lab/Showcase' },
];

interface FilterPillsProps {
    activeCategory: ProjectCategory;
    onCategoryChange: (category: ProjectCategory) => void;
}

export function FilterPills({ activeCategory, onCategoryChange }: FilterPillsProps) {
    return (
        <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
                <button
                    key={cat.value}
                    onClick={() => onCategoryChange(cat.value)}
                    className={cn(
                        'px-4 py-2 rounded-full text-sm font-medium transition-all duration-200',
                        activeCategory === cat.value
                            ? 'bg-accent-blue text-background'
                            : 'bg-surface border border-border hover:bg-white/10'
                    )}
                >
                    {cat.label}
                </button>
            ))}
        </div>
    );
}
