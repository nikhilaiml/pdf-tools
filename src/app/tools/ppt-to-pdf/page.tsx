'use client';

import { ArrowRight, Image as ImageIcon, Monitor } from 'lucide-react';
import Link from 'next/link';

const PptToPdfPage = () => {
    return (
        <div className="max-w-4xl mx-auto px-4 py-8 text-center">
            <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
                PPT to PDF
            </h1>
            <p className="text-gray-500 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
                Convert PowerPoint presentations to PDF.
            </p>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-8 max-w-2xl mx-auto">
                <div className="mb-6">
                    <Monitor className="w-16 h-16 text-orange-500 mx-auto mb-4" />
                    <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Browser Conversion Limitation</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                        Direct PowerPoint conversion requires powerful server-side processing which is currently offline.
                    </p>
                </div>

                <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl text-left mb-8">
                    <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">Recommended Workaround:</h4>
                    <ol className="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300">
                        <li>Open your presentation in PowerPoint.</li>
                        <li><strong>Save As</strong> or <strong>Export</strong> your slides as <strong>Images (JPG/PNG)</strong>.</li>
                        <li>Use our <strong>Images to PDF</strong> tool to combine them.</li>
                    </ol>
                </div>

                <Link href="/tools/batch-image-to-pdf">
                    <button className="w-full flex items-center justify-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-xl transition-all shadow-lg hover:shadow-xl">
                        <ImageIcon size={20} />
                        <span>Go to Images to PDF</span>
                        <ArrowRight size={20} />
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default PptToPdfPage;
