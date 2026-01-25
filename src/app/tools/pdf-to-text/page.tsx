'use client';

import dynamic from 'next/dynamic';
import { Loader2 } from 'lucide-react';

const PdfToTextClient = dynamic(() => import('./PdfToTextClient'), {
    ssr: false,
    loading: () => (
        <div className="flex flex-col items-center justify-center min-h-[400px]">
            <Loader2 className="w-12 h-12 text-blue-500 animate-spin mb-4" />
            <p className="text-gray-500">Loading Tool...</p>
        </div>
    ),
});

export default function Page() {
    return <PdfToTextClient />;
}
