import type { Metadata } from 'next';
import { Space_Grotesk, Inter } from 'next/font/google';
import { SmoothScroll } from '@/components/providers/smooth-scroll';
import './globals.css';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['300', '400', '500', '600', '700'],
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['300', '400', '500', '600'],
});

export const metadata: Metadata = {
  title: 'Vanguard Constructs | Precision Engineering',
  description: 'Leading the future of high-end residential and sustainable infrastructure.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body className="bg-background text-foreground antialiased selection:bg-accent selection:text-accent-foreground">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
