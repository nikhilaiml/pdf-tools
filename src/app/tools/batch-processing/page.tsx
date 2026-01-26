'use client';

import BatchProcessor from './BatchProcessor';

export default function BatchProcessingPage() {
    return (
        <div className="max-w-4xl mx-auto px-4 py-8 text-center">
            <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
                Batch Processing
            </h1>
            <p className="text-gray-500 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
                Process multiple files efficiently.
            </p>

            <BatchProcessor />
        </div>
    );
}
