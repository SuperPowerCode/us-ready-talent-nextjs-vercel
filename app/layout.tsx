import './globals.css';
import type { Metadata } from 'next';
export const metadata: Metadata = { title: 'US-Ready Talent Accelerator', description: 'From global engineer to trusted US teammate.' };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
