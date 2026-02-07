import type { Metadata } from 'next';
import ViewMetadataClient from './ViewMetadataClient';

export const metadata: Metadata = {
    title: 'View PDF Metadata – Inspect PDF Properties Online | UsePDF',
    description: 'View hidden PDF metadata (Author, Title, Keywords, Creator). Inspect PDF properties online for free. No installation required.',
    alternates: {
        canonical: 'https://www.usepdf.in/tools/view-metadata',
    },
    openGraph: {
        title: 'View PDF Metadata – Inspect PDF Properties Online | UsePDF',
        description: 'View hidden PDF metadata (Author, Title, Keywords, Creator). Inspect PDF properties online for free. No installation required.',
        url: 'https://www.usepdf.in/tools/view-metadata',
    }
};

export default function ViewMetadataPage() {
    return <ViewMetadataClient />;
}
