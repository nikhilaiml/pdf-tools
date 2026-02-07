import type { Metadata } from 'next';
import ScanToPdfClient from './ScanToPdfClient';

export const metadata: Metadata = {
    title: 'Scan to PDF – Convert Scanned Images to PDF | UsePDF',
    description: 'Convert scanned images (JPG, PNG) to professional PDF documents online. Free scan to PDF tool. Fast and secure.',
    alternates: {
        canonical: 'https://www.usepdf.in/tools/scan-to-pdf',
    },
    openGraph: {
        title: 'Scan to PDF – Convert Scanned Images to PDF | UsePDF',
        description: 'Convert scanned images (JPG, PNG) to professional PDF documents online. Free scan to PDF tool. Fast and secure.',
        url: 'https://www.usepdf.in/tools/scan-to-pdf',
    }
};

export default function ScanToPdfPage() {
    return <ScanToPdfClient />;
}
