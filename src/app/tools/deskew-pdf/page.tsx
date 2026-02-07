import type { Metadata } from 'next';
import DeskewPdfClient from './DeskewPdfClient';

export const metadata: Metadata = {
    title: 'Deskew PDF Online – Straighten Scanned PDF Pages | UsePDF',
    description: 'Straighten and fix skew in scanned PDF pages online. Automatically correct rotated or crooked scans. Free and secure.',
    alternates: {
        canonical: 'https://www.usepdf.in/tools/deskew-pdf',
    },
    openGraph: {
        title: 'Deskew PDF Online – Straighten Scanned PDF Pages | UsePDF',
        description: 'Straighten and fix skew in scanned PDF pages online. Automatically correct rotated or crooked scans. Free and secure.',
        url: 'https://www.usepdf.in/tools/deskew-pdf',
    }
};

export default function DeskewPdfPage() {
    return <DeskewPdfClient />;
}
