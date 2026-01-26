'use client';

import dynamic from 'next/dynamic';

const PdfToAudioClient = dynamic(() => import('./PdfToAudioClient'), { ssr: false });

export default function PdfToAudioPage() {
    return <PdfToAudioClient />;
}
