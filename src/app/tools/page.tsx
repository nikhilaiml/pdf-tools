import type { Metadata } from 'next';
import ToolsPageClient from './ToolsPageClient';

export const metadata: Metadata = {
  title: 'All PDF Tools | UsePDF',
  description: 'Browse all free PDF tools to merge, split, compress, convert, and edit PDFs online. No signup required.',
  alternates: {
    canonical: 'https://www.usepdf.in/tools',
  },
  openGraph: {
    title: 'All PDF Tools | UsePDF',
    description: 'Browse all free PDF tools to merge, split, compress, convert, and edit PDFs online.',
    url: 'https://www.usepdf.in/tools',
    type: 'website',
    siteName: 'UsePDF',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'All PDF Tools | UsePDF',
    description: 'Browse all free PDF tools to merge, split, compress, convert, and edit PDFs online.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ToolsPage() {
  return <ToolsPageClient />;
}
