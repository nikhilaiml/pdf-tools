import type { Metadata } from 'next';
import dynamic from 'next/dynamic';

const ComparePdfsClient = dynamic(() => import('./ComparePdfsClient'), { ssr: false });

export const metadata: Metadata = {
    title: 'Compare PDFs Online – Find Differences in PDF Files | UsePDF',
    description: 'Compare two PDF documents side by side to find differences. Free online tool. Fast and secure.',
    alternates: {
        canonical: 'https://www.usepdf.in/tools/compare-pdfs',
    },
    openGraph: {
        title: 'Compare PDFs Online – Find Differences in PDF Files | UsePDF',
        description: 'Compare two PDF documents side by side to find differences. Free online tool. Fast and secure.',
        url: 'https://www.usepdf.in/tools/compare-pdfs',
    }
};

export default function ComparePdfsPage() {
    return <ComparePdfsClient />;
}
