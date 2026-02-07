import type { Metadata } from 'next';
import RedactPdfClient from './RedactPdfClient';

export const metadata: Metadata = {
    title: 'Redact PDF – Blackout Text & Hide Sensitive Info | UsePDF',
    description: 'Redact PDF online. Permanently hide sensitive text and information. Secure PDF redaction tool. Free and persistent.',
    alternates: {
        canonical: 'https://www.usepdf.in/tools/redact-pdf',
    },
    openGraph: {
        title: 'Redact PDF – Blackout Text & Hide Sensitive Info | UsePDF',
        description: 'Redact PDF online. Permanently hide sensitive text and information. Secure PDF redaction tool. Free and persistent.',
        url: 'https://www.usepdf.in/tools/redact-pdf',
    }
};

export default function RedactPdfPage() {
    return <RedactPdfClient />;
}
