import Link from 'next/link';
import { FileText, ArrowRight } from 'lucide-react';
import type { Metadata } from 'next';
import ToolPageLayout from '../../components/ToolPageLayout';

export const metadata: Metadata = {
    title: 'PDF Version Converter – Update & Standardize PDF Version | UsePDF',
    description: 'Update PDF version compatibility online. Convert old PDFs to standard versions (1.7, 2.0). Free and automatic.',
    alternates: {
        canonical: 'https://www.usepdf.in/tools/pdf-version-converter',
    },
    openGraph: {
        title: 'PDF Version Converter – Update & Standardize PDF Version | UsePDF',
        description: 'Update PDF version compatibility online. Convert old PDFs to standard versions (1.7, 2.0). Free and automatic.',
        url: 'https://www.usepdf.in/tools/pdf-version-converter',
    }
};

export default function PdfVersionConverterPage() {
    const steps = [
        {
            title: "Automatic Update",
            description: "Processing PDFs through our tools updates them to standard versions."
        },
        {
            title: "Compress/Repair",
            description: "Use Compress or Repair to standardize your PDF structure."
        },
        {
            title: "Wide Compatibility",
            description: "Output PDFs work with all modern PDF readers."
        }
    ];

    return (
        <ToolPageLayout
            title="PDF Version Converter"
            subtitle="Update PDF version compatibility."
            steps={steps}
            showCta={false}
        >
            <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl border border-gray-100 p-6 sm:p-8 max-w-xl mx-auto text-center">
                <div className="mb-6">
                    <div className="inline-flex p-4 bg-green-100 rounded-2xl mb-4">
                        <FileText className="w-12 h-12 sm:w-16 sm:h-16 text-green-500" />
                    </div>
                    <p className="text-gray-600 text-sm sm:text-base">
                        To standardize your PDF version, processing it with our <strong className="text-purple-600">Compress</strong> or <strong className="text-purple-600">Repair</strong> tools will update the structure to standard compatible versions (e.g. 1.7).
                    </p>
                </div>

                <Link href="/tools/compress-pdf">
                    <button className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-violet-500 to-purple-600 text-white font-bold py-3 sm:py-4 px-6 rounded-xl transition-all shadow-lg hover:shadow-xl hover:scale-[1.02]">
                        <span className="text-sm sm:text-base">Go to Compress/Standardize</span>
                        <ArrowRight size={20} />
                    </button>
                </Link>
            </div>
        </ToolPageLayout>
    );
}
