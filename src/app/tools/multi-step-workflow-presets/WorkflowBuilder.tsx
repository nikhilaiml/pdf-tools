'use client';

import { useState } from 'react';
import { PDFDocument } from 'pdf-lib';
import {
    Loader2,
    FileText,
    Upload,
    X,
    Play,
    Download,
    Plus,
    ArrowRight,
    ArrowDown,
    Trash2,
    CheckCircle
} from 'lucide-react';
import { degrees } from 'pdf-lib';

type ToolStep = 'compress' | 'flatten' | 'watermark';

const TOOL_LABELS: Record<ToolStep, string> = {
    compress: 'Compress PDF',
    flatten: 'Flatten Forms',
    watermark: 'Add Watermark',
};

interface WorkflowStep {
    id: string;
    type: ToolStep;
    params?: any;
}

export default function WorkflowBuilder() {
    const [file, setFile] = useState<File | null>(null);
    const [steps, setSteps] = useState<WorkflowStep[]>([]);
    const [isProcessing, setIsProcessing] = useState(false);
    const [resultBlob, setResultBlob] = useState<Blob | null>(null);
    const [resultName, setResultName] = useState<string>('');
    const [error, setError] = useState<string | null>(null);

    const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            setFile(e.target.files[0]);
            setResultBlob(null);
            setError(null);
        }
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
            const droppedFile = e.dataTransfer.files[0];
            if (droppedFile.type === 'application/pdf') {
                setFile(droppedFile);
                setResultBlob(null);
                setError(null);
            }
        }
    };

    const addStep = (type: ToolStep) => {
        setSteps(prev => [...prev, { id: crypto.randomUUID(), type }]);
    };

    const removeStep = (id: string) => {
        setSteps(prev => prev.filter(s => s.id !== id));
    };

    const runWorkflow = async () => {
        if (!file || steps.length === 0) return;

        setIsProcessing(true);
        setError(null);

        try {
            let currentPdfBytes = await file.arrayBuffer();

            for (const step of steps) {
                // Load the PDF at the start of each step to ensure fresh state
                const pdfDoc = await PDFDocument.load(currentPdfBytes);

                switch (step.type) {
                    case 'compress':

                        currentPdfBytes = await pdfDoc.save({
                            useObjectStreams: true,
                            addDefaultPage: false,
                            objectsPerTick: 50
                        }) as any;
                        break;

                    case 'flatten':
                        pdfDoc.getForm().flatten();
                        currentPdfBytes = await pdfDoc.save() as any;
                        break;

                    case 'watermark':
                        const pages = pdfDoc.getPages();
                        const { width, height } = pages[0].getSize();
                        pages.forEach(page => {
                            page.drawText('CONFIDENTIAL', {
                                x: width / 2 - 50,
                                y: height / 2,
                                size: 50,
                                opacity: 0.2,
                                rotate: degrees(45),
                            });
                        });
                        currentPdfBytes = await pdfDoc.save() as any;
                        break;
                }
            }

            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const blob = new Blob([currentPdfBytes as any], { type: 'application/pdf' });
            setResultBlob(blob);
            setResultName(`workflow-${file.name}`);

        } catch (err) {
            console.error(err);
            setError('Workflow failed: ' + (err as Error).message);
        } finally {
            setIsProcessing(false);
        }
    };

    return (
        <div className="space-y-8">
            {/* File Upload Section */}
            {!file ? (
                <div
                    onDragOver={(e) => e.preventDefault()}
                    onDrop={handleDrop}
                    className="border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-xl p-8 text-center bg-gray-50 dark:bg-gray-800/50 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors cursor-pointer"
                    onClick={() => document.getElementById('workflow-upload')?.click()}
                >
                    <div className="bg-gray-200 dark:bg-gray-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Upload className="w-8 h-8 text-gray-500 dark:text-gray-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        Select Base PDF
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400">
                        Drag & Drop or click to upload
                    </p>
                    <input
                        type="file"
                        id="workflow-upload"
                        className="hidden"
                        onChange={handleFileSelect}
                        accept=".pdf"
                    />
                </div>
            ) : (
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 flex justify-between items-center">
                    <div className="flex items-center gap-3">
                        <FileText className="text-blue-500" />
                        <span className="font-medium text-gray-900 dark:text-white">{file.name}</span>
                    </div>
                    <button
                        onClick={() => { setFile(null); setResultBlob(null); }}
                        className="text-gray-400 hover:text-red-500"
                    >
                        <X size={20} />
                    </button>
                </div>
            )}

            {/* Workflow Pipeline */}
            {file && (
                <div className="space-y-6">
                    <div className="flex items-center gap-4 overflow-x-auto pb-4">
                        {/* Start Node */}
                        <div className="flex-shrink-0 flex flex-col items-center gap-2">
                            <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold shadow-lg">
                                PDF
                            </div>
                            <span className="text-xs font-medium text-gray-500">Input</span>
                        </div>

                        {/* Steps */}
                        {steps.map((step) => (
                            <div key={step.id} className="flex items-center gap-2">
                                <ArrowRight className="text-gray-300 dark:text-gray-600" />
                                <div className="relative group">
                                    <div className="w-40 bg-white dark:bg-gray-800 border-2 border-blue-500 rounded-lg p-3 shadow-md">
                                        <p className="font-semibold text-sm text-gray-900 dark:text-white text-center">
                                            {TOOL_LABELS[step.type]}
                                        </p>
                                    </div>
                                    <button
                                        onClick={() => removeStep(step.id)}
                                        className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity shadow-sm scale-75 hover:scale-100"
                                    >
                                        <X size={12} />
                                    </button>
                                </div>
                            </div>
                        ))}

                        {/* Add Step Button */}
                        <div className="flex items-center gap-2">
                            <ArrowRight className="text-gray-300 dark:text-gray-600" />
                            <div className="relative group">
                                <button className="w-12 h-12 rounded-full border-2 border-dashed border-gray-400 hover:border-blue-500 hover:text-blue-500 flex items-center justify-center transition-colors">
                                    <Plus size={24} />
                                </button>

                                {/* Dropdown Menu for Add Step */}
                                <div className="absolute top-full left-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden hidden group-hover:block z-10 p-1">
                                    {(Object.keys(TOOL_LABELS) as ToolStep[]).map((type) => (
                                        <button
                                            key={type}
                                            onClick={() => addStep(type)}
                                            className="w-full text-left px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md"
                                        >
                                            {TOOL_LABELS[type]}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Action Panel */}
                    <div className="flex justify-center">
                        <button
                            onClick={runWorkflow}
                            disabled={isProcessing || steps.length === 0}
                            className={`
                                flex items-center gap-2 px-8 py-3 rounded-full font-bold text-white shadow-lg transition-all
                                ${isProcessing || steps.length === 0
                                    ? 'bg-gray-400 cursor-not-allowed'
                                    : 'bg-purple-600 hover:bg-purple-700 hover:scale-105'}
                            `}
                        >
                            {isProcessing ? <Loader2 className="animate-spin" /> : <Play size={20} fill="currentColor" />}
                            <span>{isProcessing ? 'Processing Workflow...' : 'Run Workflow'}</span>
                        </button>
                    </div>

                    {/* Result Area */}
                    {error && (
                        <div className="p-4 bg-red-100 dark:bg-red-900/30 text-red-600 rounded-lg text-center">
                            {error}
                        </div>
                    )}

                    {resultBlob && (
                        <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-800 flex flex-col items-center animate-in fade-in slide-in-from-bottom-4">
                            <CheckCircle className="w-12 h-12 text-green-500 mb-4" />
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Workflow Complete!</h3>
                            <p className="text-gray-600 dark:text-gray-300 mb-6 text-center">
                                Your PDF has been processed through {steps.length} steps successfully.
                            </p>
                            <button
                                onClick={() => {
                                    const link = document.createElement('a');
                                    link.href = URL.createObjectURL(resultBlob);
                                    link.download = resultName;
                                    link.click();
                                }}
                                className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold shadow-lg transition-all hover:-translate-y-1"
                            >
                                <Download size={20} />
                                Download Result
                            </button>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}
