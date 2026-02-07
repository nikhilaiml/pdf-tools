import type { Metadata } from 'next';
import SharePdfClient from './SharePdfClient';

export const metadata: Metadata = {
    title: 'Share PDF Online – Upload & Share PDF with Link | UsePDF',
    description: 'Securely share PDF files online with a temporary link. Auto-expiry and secure download. Free file sharing tool.',
    alternates: {
        canonical: 'https://www.usepdf.in/tools/share-pdf',
    },
    openGraph: {
        title: 'Share PDF Online – Upload & Share PDF with Link | UsePDF',
        description: 'Securely share PDF files online with a temporary link. Auto-expiry and secure download. Free file sharing tool.',
        url: 'https://www.usepdf.in/tools/share-pdf',
    }
};

export default function SharePdfPage() {
    return <SharePdfClient />;
}
