import type { Metadata } from 'next';
import dynamic from 'next/dynamic';

const PdfToAudioClient = dynamic(() => import('./PdfToAudioClient'));

export const metadata: Metadata = {
    title: 'PDF to Audio – Convert PDF to Speech & Audio | UsePDF',
    description: 'Convert PDF text to speech (MP3). Listen to your PDF documents online for free. Accessibility friendly.',
    alternates: {
        canonical: 'https://www.usepdf.in/tools/pdf-to-audio',
    },
    openGraph: {
        title: 'PDF to Audio – Convert PDF to Speech & Audio | UsePDF',
        description: 'Convert PDF text to speech (MP3). Listen to your PDF documents online for free. Accessibility friendly.',
        url: 'https://www.usepdf.in/tools/pdf-to-audio',
    }
};

export default function PdfToAudioPage() {
    return <PdfToAudioClient />;
}
