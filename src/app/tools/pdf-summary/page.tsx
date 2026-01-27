'use client';

import { FileText, Sparkles } from 'lucide-react';
import ToolPageLayout from '../../components/ToolPageLayout';

export default function PdfSummaryPage() {
    const steps = [
        {
            title: "Coming Soon",
            description: "We're building an AI-powered summarization engine."
        },
        {
            title: "Quick Digests",
            description: "Get key points from long documents in seconds."
        },
        {
            title: "Smart Analysis",
            description: "Understand document content without reading everything."
        }
    ];

    return (
        <ToolPageLayout
            title="PDF Summary"
            subtitle="Get a quick summary of your PDF content."
            steps={steps}
            showCta={false}
        >
            <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl border border-gray-100 p-8 sm:p-12 max-w-xl mx-auto text-center">
                <div className="inline-flex p-4 bg-green-100 rounded-2xl mb-6">
                    <FileText className="w-12 h-12 sm:w-16 sm:h-16 text-green-500" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Coming Soon</h3>
                <p className="text-gray-600 mb-6">
                    AI-powered summarization to help you digest long documents in seconds.
                </p>
                <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-violet-100 to-purple-100 text-purple-700 py-2 px-4 rounded-full text-sm font-semibold">
                    <Sparkles size={16} />
                    <span>In Development</span>
                </div>
            </div>
        </ToolPageLayout>
    );
}
