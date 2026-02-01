'use client';

import BatchProcessor from './BatchProcessor';
import ToolPageLayout from '../../components/ToolPageLayout';

export default function BatchProcessingPage() {
    const steps = [
        {
            title: "Step 1: Upload Files",
            description: "Select multiple PDF or image files to process at once."
        },
        {
            title: "Step 2: Choose Action",
            description: "Select an action like Compress, Flatten, or Convert to PDF."
        },
        {
            title: "Step 3: Process & Download",
            description: "Run the batch process and download the results as a ZIP."
        }
    ];

    return (
        <ToolPageLayout
            title="Batch Processing"
            subtitle="Process multiple files efficiently. Compress, flatten, or convert files in bulk."
            steps={steps}
            showCta={false}
        >
            <BatchProcessor />
        </ToolPageLayout>
    );
}
