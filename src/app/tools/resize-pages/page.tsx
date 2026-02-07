import type { Metadata } from 'next';
import ResizePagesClient from './ResizePagesClient';

export const metadata: Metadata = {
    title: 'Resize PDF Pages – Change PDF Page Size Online | UsePDF',
    description: 'Resize PDF pages online. Change page size to A4, Letter, A3, Legal, etc. Free and fast page resizing tool.',
    alternates: {
        canonical: 'https://www.usepdf.in/tools/resize-pages',
    },
    openGraph: {
        title: 'Resize PDF Pages – Change PDF Page Size Online | UsePDF',
        description: 'Resize PDF pages online. Change page size to A4, Letter, A3, Legal, etc. Free and fast page resizing tool.',
        url: 'https://www.usepdf.in/tools/resize-pages',
    }
};

export default function ResizePagesPage() {
    return <ResizePagesClient />;
}
