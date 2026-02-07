import type { Metadata } from 'next';
import RestrictPdfClient from './RestrictPdfClient';

export const metadata: Metadata = {
    title: 'Restrict PDF – Prevent Printing & Copying | UsePDF',
    description: 'Prevent unauthorized printing, copying, and editing of PDF documents. Secure PDF permissions online. Free and secure.',
    alternates: {
        canonical: 'https://www.usepdf.in/tools/restrict-printing-copying',
    },
    openGraph: {
        title: 'Restrict PDF – Prevent Printing & Copying | UsePDF',
        description: 'Prevent unauthorized printing, copying, and editing of PDF documents. Secure PDF permissions online. Free and secure.',
        url: 'https://www.usepdf.in/tools/restrict-printing-copying',
    }
};

export default function RestrictPdfPage() {
    return <RestrictPdfClient />;
}
