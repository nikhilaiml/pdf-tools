import type { Metadata } from 'next';
import FillAndSignClientWrapper from './FillAndSignClientWrapper';

export const metadata: Metadata = {
    title: 'Fill & Sign PDF Online Free – Fill Forms and Sign PDFs',
    description: 'Fill & sign PDF online free. Complete forms, add signatures, and download instantly. No signup, no watermark.',
    alternates: {
        canonical: 'https://www.usepdf.in/tools/fill-and-sign',
    },
    openGraph: {
        title: 'Fill & Sign PDF Online Free – Fill Forms and Sign PDFs',
        description: 'Fill and sign PDF forms online for free. Fast, secure, and works on any device.',
        url: 'https://www.usepdf.in/tools/fill-and-sign',
        type: 'website',
        siteName: 'UsePDF',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Fill & Sign PDF Online Free',
        description: 'Fill and sign PDF forms online for free. No signup, no watermark.',
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function FillAndSignPage() {
    return <FillAndSignClientWrapper />;
}
