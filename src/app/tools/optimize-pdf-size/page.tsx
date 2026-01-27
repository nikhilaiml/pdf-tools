'use client';

import { Monitor, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import ToolPageLayout from '../../components/ToolPageLayout';

export default function OptimizePdfSizePage() {
    const steps = [
        {
            title: "Redirecting",
            description: "This tool has been merged with our Compress PDF tool for better results."
        },
        {
            title: "Same Quality",
            description: "The Compress PDF tool offers the same optimization with more options."
        },
        {
            title: "One Click",
            description: "Click below to access the consolidated compression tool."
        }
    ];

    return (
        <ToolPageLayout
            title="Optimize PDF Size"
            subtitle="Reduce file size for web or email."
            steps={steps}
            showCta={false}
        >
            <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl border border-gray-100 p-8 sm:p-12 max-w-xl mx-auto text-center">
                <div className="mb-6">
                    <div className="inline-flex p-4 bg-purple-100 rounded-2xl mb-4">
                        <Monitor className="w-12 h-12 sm:w-16 sm:h-16 text-purple-500" />
                    </div>
                    <p className="text-lg text-gray-700">
                        We have consolidated optimization into our <strong className="text-purple-600">Compress PDF</strong> tool for better results.
                    </p>
                </div>

                <Link href="/tools/compress-pdf">
                    <button className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-violet-500 to-purple-600 text-white font-bold py-3 sm:py-4 px-6 rounded-xl transition-all shadow-lg hover:shadow-xl hover:scale-[1.02]">
                        <span className="text-sm sm:text-base">Go to Compress PDF</span>
                        <ArrowRight size={20} />
                    </button>
                </Link>
            </div>
        </ToolPageLayout>
    );
}
