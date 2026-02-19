import type { Metadata } from 'next';
import ViewMetadataClient from './ViewMetadataClient';

export const metadata: Metadata = {
    title: "Inspect PDF Online Free – View PDF Metadata & Document Properties | UsePDF",
    description: "Inspect PDF metadata online instantly. View title, author, creation date, keywords and page count. 100% secure browser-based PDF inspector. No upload required.",
    keywords: [
        "inspect pdf online",
        "view pdf metadata",
        "check pdf properties",
        "pdf metadata viewer",
        "pdf document information",
        "see pdf author and title",
        "pdf inspector free"
    ],
    alternates: {
        canonical: 'https://www.usepdf.in/tools/view-metadata',
    },
    openGraph: {
        title: "Inspect PDF Online Free – View PDF Metadata & Document Properties | UsePDF",
        description: "Inspect PDF metadata online instantly. View title, author, creation date, keywords and page count. 100% secure browser-based PDF inspector. No upload required.",
        url: 'https://www.usepdf.in/tools/view-metadata',
    },
    twitter: {
        card: "summary_large_image",
        title: "Inspect PDF Online Free – View PDF Metadata & Document Properties | UsePDF",
        description: "Inspect PDF metadata online instantly. View title, author, creation date, keywords and page count. 100% secure browser-based PDF inspector. No upload required.",
    }
};

export default function ViewMetadataPage() {
    return <ViewMetadataClient />;
}
