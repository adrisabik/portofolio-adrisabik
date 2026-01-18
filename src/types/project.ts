export interface Project {
    slug: string;
    title: string;
    description: string;
    industry: string;
    category: 'mobile-app' | 'web-app' | 'enterprise' | 'supply-chain' | 'community' | 'accessibility' | 'lab' | 'productivity';
    techStack: string[];
    highlights: string[];
    thumbnail?: string;
    videoDemo?: string | null; // New
    gallery?: string[] | null; // New
    repository?: string | null; // New
    playStoreUrl?: string | null;
    appStoreUrl?: string | null; // New
    demoUrl?: string | null; // New
    featured: boolean;
    year: string;
    role?: string | null; // New
    client?: string | null; // New (renamed from company)
    company?: string | null; // Legacy
    context?: string;
    challenge?: string;
    solution?: string;
    results?: string[];
    images?: string[]; // Legacy?
    content: string;
}

export type ProjectCategory = Project['category'] | 'all';
