'use client';

import dynamic from 'next/dynamic';

const ComparePdfsClient = dynamic(() => import('./ComparePdfsClient'), { ssr: false });

export default function ComparePdfsPage() {
    return <ComparePdfsClient />;
}
