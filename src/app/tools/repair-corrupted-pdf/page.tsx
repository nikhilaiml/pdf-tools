import type { Metadata } from 'next';
import RepairCorruptedPdfClient from './RepairCorruptedPdfClient';

export const metadata: Metadata = {
    title: 'Repair PDF – Fix Corrupted & Damaged PDF Files | UsePDF',
    description: 'Repair corrupted PDF files online. Recover damaged PDFs and fix structure errors. Free and clear tool.',
    alternates: {
        canonical: 'https://www.usepdf.in/tools/repair-corrupted-pdf',
    },
    openGraph: {
        title: 'Repair PDF – Fix Corrupted & Damaged PDF Files | UsePDF',
        description: 'Repair corrupted PDF files online. Recover damaged PDFs and fix structure errors. Free and clear tool.',
        url: 'https://www.usepdf.in/tools/repair-corrupted-pdf',
    }
};

export default function RepairCorruptedPdfPage() {
    return <RepairCorruptedPdfClient />;
}
