import Link from 'next/link';
import { FileSpreadsheet, ArrowRight } from 'lucide-react';
import type { Metadata } from 'next';
import ToolPageLayout from '../../components/ToolPageLayout';

export const metadata: Metadata = {
    title: 'PDF Table Extractor – Extract Tables from PDF | UsePDF',
    description: 'Extract tables from PDF documents to Excel or CSV. Free online PDF data extraction tool.',
    alternates: {
        canonical: 'https://www.usepdf.in/tools/pdf-table-extractor',
    },
    openGraph: {
        title: 'PDF Table Extractor – Extract Tables from PDF | UsePDF',
        description: 'Extract tables from PDF documents to Excel or CSV. Free online PDF data extraction tool.',
        url: 'https://www.usepdf.in/tools/pdf-table-extractor',
    }
};

export default function PdfTableExtractorPage() {
    const steps = [
        {
            title: "Redirecting",
            description: "This tool has been merged with PDF to Excel for better extraction."
        },
        {
            title: "Smart Extraction",
            description: "PDF to Excel analyzes layout and extracts data into cells."
        },
        {
            title: "Easy Export",
            description: "Get your table data in Excel format (.xlsx)."
        }
    ];

    return (
        <ToolPageLayout
            title="PDF Table Extractor"
            subtitle="Extract tables from PDF documents."
            steps={steps}
            showCta={false}
        >
            <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl border border-gray-100 p-6 sm:p-8 max-w-xl mx-auto text-center">
                <div className="mb-6">
                    <div className="inline-flex p-4 bg-green-100 rounded-2xl mb-4">
                        <FileSpreadsheet className="w-12 h-12 sm:w-16 sm:h-16 text-green-500" />
                    </div>
                    <p className="text-gray-600">
                        Please use our <strong className="text-green-600">PDF to Excel</strong> tool for table extraction.
                    </p>
                </div>

                <Link href="/tools/pdf-to-excel">
                    <button className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-violet-500 to-purple-600 text-white font-bold py-3 sm:py-4 px-6 rounded-xl transition-all shadow-lg hover:shadow-xl hover:scale-[1.02]">
                        <span className="text-sm sm:text-base">Go to PDF to Excel</span>
                        <ArrowRight size={20} />
                    </button>
                </Link>
            </div>
        </ToolPageLayout>
    );
}
