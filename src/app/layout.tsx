import { Inter, JetBrains_Mono } from 'next/font/google';
import '@/styles/globals.css';
import type { Metadata } from 'next';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Adri Sabik Muhana | Senior Mobile Engineer',
    template: '%s | Adri Sabik Muhana',
  },
  description: 'Portfolio showcasing 15+ delivered projects and 5+ published apps. Expertise in Flutter, Clean Architecture, and Mobile Engineering.',
  keywords: ['Mobile Engineer', 'Flutter Developer', 'Portfolio', 'Adri Sabik Muhana'],
  authors: [{ name: 'Adri Sabik Muhana' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://adrisabik.dev',
    siteName: 'Adri Sabik Muhana Portfolio',
    title: 'Adri Sabik Muhana | Senior Mobile Engineer',
    description: 'Portfolio showcasing 15+ delivered projects and 5+ published apps.',
    images: ['/assets/og/default.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrains.variable}`}>
      <body className="antialiased min-h-screen">
        {children}
      </body>
    </html>
  );
}
