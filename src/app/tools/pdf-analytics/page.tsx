'use client';

import { Info, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function PdfAnalyticsPage() {
    return (
        <div className="max-w-4xl mx-auto px-4 py-8 text-center">
            <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
                PDF Analytics
            </h1>
            <p className="text-gray-500 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
                Analyze document properties.
            </p>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-8 max-w-xl mx-auto">
                <div className="mb-6">
                    <Info className="w-16 h-16 text-purple-500 mx-auto mb-4" />
                    <p className="text-lg text-gray-700 dark:text-gray-300">
                        For detailed document information, please use our <strong>View Metadata</strong> tool.
                    </p>
                </div>

                <Link href="/tools/view-metadata">
                    <button className="w-full flex items-center justify-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-xl transition-all shadow-lg hover:shadow-xl">
                        <span>Go to View Metadata</span>
                        <ArrowRight size={20} />
                    </button>
                </Link>
            </div>
        </div>
    );
}
