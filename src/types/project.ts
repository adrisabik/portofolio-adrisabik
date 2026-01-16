export interface Project {
    slug: string;
    title: string;
    description: string;
    industry: string;
    category: 'enterprise' | 'supply-chain' | 'community' | 'accessibility' | 'lab';
    techStack: string[];
    highlights: string[];
    thumbnail?: string;
    playStoreUrl?: string;
    featured: boolean;
    year: string;
    company?: string;
    context?: string;
    challenge?: string;
    solution?: string;
    results?: string[];
    images?: string[];
}

export type ProjectCategory = Project['category'] | 'all';
