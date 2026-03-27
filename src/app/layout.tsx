import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'LakSeva',
  description: "Sri Lanka's local service marketplace",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
