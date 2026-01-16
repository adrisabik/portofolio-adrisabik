import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center">
            <h1 className="text-6xl font-bold mb-4 text-gradient">404</h1>
            <h2 className="text-2xl font-semibold mb-2">Page Not Found</h2>
            <p className="text-muted mb-8 max-w-md">
                The page you&apos;re looking for doesn&apos;t exist or has been moved.
            </p>
            <Link
                href="/"
                className="px-6 py-3 bg-accent-blue text-background font-medium rounded-xl hover:bg-accent-blue/90 transition-colors"
            >
                Back to Home
            </Link>
        </div>
    );
}
