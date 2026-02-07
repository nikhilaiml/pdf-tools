import type { Metadata } from 'next';
import ExcelToPdfClient from './ExcelToPdfClient';

export const metadata: Metadata = {
    title: 'Excel to PDF Converter – Convert Excel to PDF Online Free | UsePDF',
    description: 'Convert Excel spreadsheets (XLS, XLSX) to PDF online for free. No signup required. Secure and fast conversion.',
    alternates: {
        canonical: 'https://www.usepdf.in/tools/excel-to-pdf',
    },
    openGraph: {
        title: 'Excel to PDF Converter – Convert Excel to PDF Online Free | UsePDF',
        description: 'Convert Excel spreadsheets (XLS, XLSX) to PDF online for free. No signup required. Secure and fast conversion.',
        url: 'https://www.usepdf.in/tools/excel-to-pdf',
    }
};

export default function ExcelToPdfPage() {
    return <ExcelToPdfClient />;
}
