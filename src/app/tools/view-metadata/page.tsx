import type { Metadata } from 'next';
import ViewMetadataClient from './ViewMetadataClient';

export const metadata: Metadata = {
    title: "Inspect PDF Online Free – View PDF Metadata & Properties | UsePDF",
    description:
        "Inspect PDF metadata online for free. View PDF properties like title, author, creation date, page count and more. Secure, instant and browser-based PDF inspector.",
    keywords: [
        "inspect pdf online",
        "view pdf metadata",
        "check pdf properties",
        "pdf document information",
        "pdf metadata viewer",
        "pdf inspector tool"
    ],
    alternates: {
        canonical: 'https://www.usepdf.in/tools/view-metadata',
    },
    openGraph: {
        title: "Inspect PDF Online Free – View PDF Metadata & Properties | UsePDF",
        description:
            "Inspect PDF metadata online for free. View PDF properties like title, author, creation date, page count and more. Secure, instant and browser-based PDF inspector.",
        url: 'https://www.usepdf.in/tools/view-metadata',
    }
};

export default function ViewMetadataPage() {
    return <ViewMetadataClient />;
}
