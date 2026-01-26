'use client';

import dynamic from 'next/dynamic';

const FillSignClient = dynamic(() => import('./FillSignClient'), { ssr: false });

export default function FillAndSignPage() {
    return <FillSignClient />;
}
