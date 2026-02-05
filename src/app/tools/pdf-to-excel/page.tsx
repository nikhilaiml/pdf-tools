import type { Metadata } from 'next';
import Link from 'next/link';
import ToolPageLayout from '../../components/ToolPageLayout';
import PdfToExcelClient from './PdfToExcelClient';

export const metadata: Metadata = {
    title: 'PDF to Excel Converter – Convert PDF to Excel Online Free | UsePDF',
    description: 'Convert PDF to Excel online for free. Accurate tables, editable spreadsheets, secure processing, and no email required.',
};

export default function PdfToExcelPage() {
    const steps = [
        {
            title: "Upload PDF",
            description: "Upload the PDF document you want to convert."
        },
        {
            title: "Convert",
            description: "Our tool extracts tables and text into Excel format."
        },
        {
            title: "Download",
            description: "Download your editable Excel spreadsheet instantly."
        }
    ];

    const seoContent = (
        <div className="prose prose-lg max-w-none text-gray-600">
            <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">How to Convert PDF to Excel Online</h2>
                <ul className="list-disc pl-6 space-y-3">
                    <li>Upload your PDF file</li>
                    <li>Choose Excel format (XLS or XLSX)</li>
                    <li>Click on Convert PDF to Excel</li>
                    <li>Download the converted Excel file instantly</li>
                </ul>
            </section>

            <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Use Our PDF to Excel Converter</h2>
                <ul className="list-disc pl-6 space-y-3">
                    <li>Convert PDF to Excel with accurate tables</li>
                    <li>Fully editable Excel output</li>
                    <li>No watermark added</li>
                    <li>No registration or email required</li>
                    <li>Works on all devices</li>
                    <li>Fast and reliable conversion</li>
                    <li>Secure and privacy-friendly</li>
                </ul>
            </section>

            <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Common Use Cases</h2>
                <ul className="list-disc pl-6 space-y-3">
                    <li>Converting financial reports</li>
                    <li>Extracting tables from PDFs</li>
                    <li>Editing scanned or digital PDFs</li>
                    <li>Business and office data processing</li>
                    <li>Academic and research documents</li>
                </ul>
            </section>

            <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
                <div className="space-y-6">
                    <div className="bg-gray-50 p-6 rounded-xl">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">How can I convert PDF to Excel online?</h3>
                        <p>Simply upload your PDF file to our free converter, and we will extract the data and tables into an editable Excel spreadsheet for you.</p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-xl">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Is this PDF to Excel converter free?</h3>
                        <p>Yes, UsePDF provides this tool completely free of charge. You can convert your documents without any hidden fees.</p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-xl">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Will my tables remain editable in Excel?</h3>
                        <p>Yes, our tool is designed to recognize table structures and export them as editable rows and columns in the Excel file.</p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-xl">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Are my PDF files safe and private?</h3>
                        <p>Your privacy is important to us. All conversions happen securely, and your files are never stored on our servers.</p>
                    </div>
                </div>
            </section>

            <section className="bg-green-50 p-8 rounded-2xl">
                <p className="mb-4">
                    Need more document solutions? UsePDF has you covered.
                    Users can{' '}
                    <Link href="/tools/pdf-to-word" className="text-green-700 font-semibold hover:underline">
                        Convert PDF to Word
                    </Link>{' '}
                    for text editing, use{' '}
                    <Link href="/tools/excel-to-pdf" className="text-green-700 font-semibold hover:underline">
                        Excel to PDF
                    </Link>{' '}
                    to go back to PDF format, or try{' '}
                    <Link href="/tools/merge-pdf" className="text-green-700 font-semibold hover:underline">
                        Merge PDF
                    </Link>{' '}
                    to combine reports. You can convert PDFs to Word, compress large PDFs, or merge multiple files using other tools available on the website.
                </p>
            </section>
        </div>
    );

    return (
        <ToolPageLayout
            title="Convert PDF to Excel Online – Free PDF to Excel Converter"
            subtitle="Convert PDF files to editable Excel spreadsheets. Preserve tables, rows, and columns accurately. Free, secure, and easy to use."
            steps={steps}
            seoContent={seoContent}
        >
            <PdfToExcelClient />
        </ToolPageLayout>
    );
}
