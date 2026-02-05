'use client';

import dynamic from 'next/dynamic';

const AnnotatePdfClient = dynamic(() => import('./AnnotatePdfClient'), { ssr: false });

export default function AnnotatePdfWrapper(props: any) {
    return <AnnotatePdfClient {...props} />;
}
