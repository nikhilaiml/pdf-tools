import type { Metadata } from 'next';
import MultiStepWorkflowClient from './MultiStepWorkflowClient';

export const metadata: Metadata = {
    title: 'Multi-Step PDF Workflow – Automate PDF Tasks | UsePDF',
    description: 'Chain multiple PDF tools together. Create automated PDF workflows (e.g., Merge -> Compress -> Watermark). Free PDF automation tool.',
    alternates: {
        canonical: 'https://www.usepdf.in/tools/multi-step-workflow-presets',
    },
    openGraph: {
        title: 'Multi-Step PDF Workflow – Automate PDF Tasks | UsePDF',
        description: 'Chain multiple PDF tools together. Create automated PDF workflows (e.g., Merge -> Compress -> Watermark). Free PDF automation tool.',
        url: 'https://www.usepdf.in/tools/multi-step-workflow-presets',
    }
};

export default function MultiStepWorkflowPresetsPage() {
    return <MultiStepWorkflowClient />;
}
