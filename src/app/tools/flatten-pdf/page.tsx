import type { Metadata } from 'next';
import FlattenPdfClient from './FlattenPdfClient';

export const metadata: Metadata = {
    title: 'Flatten PDF – Make Fillable PDF Read-Only | UsePDF',
    description: 'Flatten PDF forms and annotations to make them read-only and uneditable. Free online tool. Secure and fast.',
    alternates: {
        canonical: 'https://www.usepdf.in/tools/flatten-pdf',
    },
    openGraph: {
        title: 'Flatten PDF – Make Fillable PDF Read-Only | UsePDF',
        description: 'Flatten PDF forms and annotations to make them read-only and uneditable. Free online tool. Secure and fast.',
        url: 'https://www.usepdf.in/tools/flatten-pdf',
    }
};

export default function FlattenPdfPage() {
    return <FlattenPdfClient />;
}
