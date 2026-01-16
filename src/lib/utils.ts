import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Merge Tailwind CSS classes with clsx and tailwind-merge
 * Usage: cn('px-4', condition && 'bg-red-500', 'py-2')
 */
export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}
