'use client';

import { Monitor, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function OptimizePdfSizePage() {
    return (
        <div className="max-w-4xl mx-auto px-4 py-8 text-center">
            <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
                Optimize PDF Size
            </h1>
            <p className="text-gray-500 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
                Reduce file size for web or email.
            </p>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-8 max-w-xl mx-auto">
                <div className="mb-6">
                    <Monitor className="w-16 h-16 text-blue-500 mx-auto mb-4" />
                    <p className="text-lg text-gray-700 dark:text-gray-300">
                        We have consolidated optimization into our <strong>Compress</strong> tool.
                    </p>
                </div>

                <Link href="/tools/compress-pdf">
                    <button className="w-full flex items-center justify-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-xl transition-all shadow-lg hover:shadow-xl">
                        <span>Go to Compress PDF</span>
                        <ArrowRight size={20} />
                    </button>
                </Link>
            </div>
        </div>
    );
}
