'use client';

import WorkflowBuilder from './WorkflowBuilder';
import ToolPageLayout from '../../components/ToolPageLayout';

export default function MultiStepWorkflowClient() {
    const steps = [
        {
            title: "Step 1: Select Base File",
            description: "Choose the initial PDF file to start the workflow."
        },
        {
            title: "Step 2: Build Workflow",
            description: "Add steps like Compress, Flatten, or Watermark to the chain."
        },
        {
            title: "Step 3: Run & Download",
            description: "Execute the workflow chain and download the final result."
        }
    ];

    return (
        <ToolPageLayout
            title="Multi-step Workflow"
            subtitle="Chain multiple tools together into a single automated workflow."
            steps={steps}
            showCta={false}
        >
            <WorkflowBuilder />
        </ToolPageLayout>
    );
}
