import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { Loader2 } from 'lucide-react';

const PdfToTextClient = dynamic(() => import('./PdfToTextClient'), {
    loading: () => (
        <div className="flex flex-col items-center justify-center min-h-[400px]">
            <Loader2 className="w-12 h-12 text-blue-500 animate-spin mb-4" />
            <p className="text-gray-500">Loading Tool...</p>
        </div>
    ),
});

export const metadata: Metadata = {
    title: 'PDF to Text Converter – Extract Text from PDF | UsePDF',
    description: 'Extract text from PDF documents. Convert PDF to editable text file (TXT) online free. No styling lost.',
    alternates: {
        canonical: 'https://www.usepdf.in/tools/pdf-to-text',
    },
    openGraph: {
        title: 'PDF to Text Converter – Extract Text from PDF | UsePDF',
        description: 'Extract text from PDF documents. Convert PDF to editable text file (TXT) online free. No styling lost.',
        url: 'https://www.usepdf.in/tools/pdf-to-text',
    }
};

export default function Page() {
    return <PdfToTextClient />;
}
