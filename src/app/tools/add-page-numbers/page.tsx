import type { Metadata } from 'next';
import AddPageNumbersClient from './AddPageNumbersClient';

export const metadata: Metadata = {
    title: 'Add Page Numbers to PDF – Insert Page Numbers Online Free | UsePDF',
    description: 'Add page numbers to PDF documents online for free. Customize position and format. No signup required.',
    alternates: {
        canonical: 'https://www.usepdf.in/tools/add-page-numbers',
    },
    openGraph: {
        title: 'Add Page Numbers to PDF – Insert Page Numbers Online Free | UsePDF',
        description: 'Add page numbers to PDF documents online for free. Customize position and format. No signup required.',
        url: 'https://www.usepdf.in/tools/add-page-numbers',
    }
};

export default function AddPageNumbersPage() {
    return <AddPageNumbersClient />;
}
