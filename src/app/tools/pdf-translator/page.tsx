import type { Metadata } from 'next';
import PdfTranslatorClient from './PdfTranslatorClient';

export const metadata: Metadata = {
    title: 'PDF Translator Online Free – Translate PDF Text Easily',
    description: 'Translate PDF text online for free. Extract text from your PDF and open it in Google Translate instantly. No signup required.',
    alternates: {
        canonical: 'https://www.usepdf.in/tools/pdf-translator',
    },
    openGraph: {
        title: 'PDF Translator Online Free – Translate PDF Text Easily',
        description: 'Translate PDF text online for free. Extract text and open it in Google Translate instantly.',
        url: 'https://www.usepdf.in/tools/pdf-translator',
        type: 'website',
        siteName: 'UsePDF',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'PDF Translator Online Free',
        description: 'Translate PDF text online for free. Extract and translate instantly.',
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function PdfTranslatorPage() {
    return <PdfTranslatorClient />;
}
