'use client';

import { Workflow } from 'lucide-react';

export default function MultiStepWorkflowPresetsPage() {
    return (
        <div className="max-w-4xl mx-auto px-4 py-8 text-center">
            <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
                Multi-step Workflow
            </h1>
            <p className="text-gray-500 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
                Chain multiple tools together into a single action.
            </p>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-12 max-w-xl mx-auto">
                <Workflow className="w-20 h-20 text-purple-400 mx-auto mb-6" />
                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Coming Soon</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-8">
                    Create custom presets like &quot;Merge -&gt; Compress -&gt; Encrypt&quot; to automate your document processing pipeline.
                </p>
                <div className="flex justify-center space-x-2">
                    <span className="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 py-1 px-3 rounded-full text-xs font-semibold uppercase tracking-wide">
                        In Development
                    </span>
                </div>
            </div>
        </div>
    );
}
