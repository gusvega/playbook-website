import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@gusvega/ui/dist/style.css';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'DevOps Playbook — CI/CD by Version and Tag',
  description: 'How I build delivery systems that are testable, traceable, and safe to promote using GitHub Actions.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased bg-white text-neutral-900 overflow-x-hidden">{children}</body>
    </html>
  );
}
