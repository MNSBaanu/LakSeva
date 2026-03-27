import type { Metadata } from 'next';
import { Inter, Manrope } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-inter',
});

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['600', '700', '800'],
  variable: '--font-manrope',
});

export const metadata: Metadata = {
  title: "LakSeva - Sri Lanka's Local Service Marketplace",
  description: 'Find and book trusted local service providers across Sri Lanka.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable}`}>
      <body style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
