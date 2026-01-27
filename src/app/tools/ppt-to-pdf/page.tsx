'use client';

import { ArrowRight, Image as ImageIcon, Monitor } from 'lucide-react';
import Link from 'next/link';
import ToolPageLayout from '../../components/ToolPageLayout';

const PptToPdfPage = () => {
    const steps = [
        {
            title: "Export Slides",
            description: "Open your presentation in PowerPoint and export slides as images."
        },
        {
            title: "Upload Images",
            description: "Use our Batch Image to PDF tool to combine your exported slides."
        },
        {
            title: "Download PDF",
            description: "Get your presentation as a professional PDF document."
        }
    ];

    return (
        <ToolPageLayout
            title="PPT to PDF"
            subtitle="Convert PowerPoint presentations to PDF."
            steps={steps}
            showCta={false}
        >
            <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl border border-gray-100 p-6 sm:p-8 max-w-2xl mx-auto">
                <div className="text-center mb-6">
                    <div className="inline-flex p-4 bg-orange-100 rounded-2xl mb-4">
                        <Monitor className="w-12 h-12 sm:w-16 sm:h-16 text-orange-500" />
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900">Browser Conversion Limitation</h3>
                    <p className="text-gray-500">
                        Direct PowerPoint conversion requires server-side processing. Use our recommended workaround below.
                    </p>
                </div>

                <div className="bg-blue-50 p-5 sm:p-6 rounded-xl text-left mb-6">
                    <h4 className="font-semibold text-blue-700 mb-3">Recommended Workaround:</h4>
                    <ol className="list-decimal list-inside space-y-2 text-gray-700 text-sm sm:text-base">
                        <li>Open your presentation in PowerPoint.</li>
                        <li><strong>Save As</strong> or <strong>Export</strong> your slides as <strong>Images (JPG/PNG)</strong>.</li>
                        <li>Use our <strong>Images to PDF</strong> tool to combine them.</li>
                    </ol>
                </div>

                <Link href="/tools/batch-image-to-pdf">
                    <button className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-violet-500 to-purple-600 text-white font-bold py-3 sm:py-4 px-6 rounded-xl transition-all shadow-lg hover:shadow-xl hover:scale-[1.02]">
                        <ImageIcon size={20} />
                        <span className="text-sm sm:text-base">Go to Images to PDF</span>
                        <ArrowRight size={20} />
                    </button>
                </Link>
            </div>
        </ToolPageLayout>
    );
};

export default PptToPdfPage;
