'use client';

import { Info, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import ToolPageLayout from '../../components/ToolPageLayout';

export default function PdfAnalyticsPage() {
    const steps = [
        {
            title: "Redirecting",
            description: "This tool has been merged with View Metadata for better analysis."
        },
        {
            title: "Full Details",
            description: "View Metadata shows complete document properties and statistics."
        },
        {
            title: "One Click",
            description: "Click below to access the metadata viewer."
        }
    ];

    return (
        <ToolPageLayout
            title="PDF Analytics"
            subtitle="Analyze document properties and statistics."
            steps={steps}
            showCta={false}
        >
            <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl border border-gray-100 p-6 sm:p-8 max-w-xl mx-auto text-center">
                <div className="mb-6">
                    <div className="inline-flex p-4 bg-purple-100 rounded-2xl mb-4">
                        <Info className="w-12 h-12 sm:w-16 sm:h-16 text-purple-500" />
                    </div>
                    <p className="text-gray-600">
                        For detailed document information, please use our <strong className="text-purple-600">View Metadata</strong> tool.
                    </p>
                </div>

                <Link href="/tools/view-metadata">
                    <button className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-violet-500 to-purple-600 text-white font-bold py-3 sm:py-4 px-6 rounded-xl transition-all shadow-lg hover:shadow-xl hover:scale-[1.02]">
                        <span className="text-sm sm:text-base">Go to View Metadata</span>
                        <ArrowRight size={20} />
                    </button>
                </Link>
            </div>
        </ToolPageLayout>
    );
}
