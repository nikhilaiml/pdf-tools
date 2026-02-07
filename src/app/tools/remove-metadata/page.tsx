import type { Metadata } from 'next';
import RemoveMetadataClient from './RemoveMetadataClient';

export const metadata: Metadata = {
    title: 'Remove Metadata from PDF – Clean PDF Properties | UsePDF',
    description: 'Remove hidden metadata from PDF files (Author, Title, Keywords). Clean properties for privacy. Free and secure tool.',
    alternates: {
        canonical: 'https://www.usepdf.in/tools/remove-metadata',
    },
    openGraph: {
        title: 'Remove Metadata from PDF – Clean PDF Properties | UsePDF',
        description: 'Remove hidden metadata from PDF files (Author, Title, Keywords). Clean properties for privacy. Free and secure tool.',
        url: 'https://www.usepdf.in/tools/remove-metadata',
    }
};

export default function RemoveMetadataPage() {
    return <RemoveMetadataClient />;
}
