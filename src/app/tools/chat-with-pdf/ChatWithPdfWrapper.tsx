'use client';

import dynamic from 'next/dynamic';

const ChatWithPdfClient = dynamic(() => import('./ChatWithPdfClient'), { ssr: false });

export default function ChatWithPdfWrapper(props: any) {
    return <ChatWithPdfClient {...props} />;
}
