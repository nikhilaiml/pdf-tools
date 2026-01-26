'use client';

import dynamic from 'next/dynamic';

const AnnotatePdfClient = dynamic(() => import('./AnnotatePdfClient'), { ssr: false });

export default function AnnotatePdfPage() {
    return <AnnotatePdfClient />;
}
