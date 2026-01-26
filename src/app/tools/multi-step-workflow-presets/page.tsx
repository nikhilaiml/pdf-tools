'use client';

import WorkflowBuilder from './WorkflowBuilder';

export default function MultiStepWorkflowPresetsPage() {
    return (
        <div className="max-w-4xl mx-auto px-4 py-8 text-center">
            <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
                Multi-step Workflow
            </h1>
            <p className="text-gray-500 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
                Chain multiple tools together into a single action.
            </p>

            <WorkflowBuilder />
        </div>
    );
}
