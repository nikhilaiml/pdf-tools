'use client';

import { useState } from 'react';
import { PDFDocument } from 'pdf-lib';
import JSZip from 'jszip';
import {
    Loader2,
    FileText,
    Upload,
    X,
    Play,
    Download,
    CheckCircle,
    AlertCircle,
    Settings
} from 'lucide-react';

interface ProcessedFile {
    file: File;
    status: 'idle' | 'processing' | 'success' | 'error';
    resultBlob?: Blob;
    resultName?: string;
    errorMessage?: string;
}

type ActionType = 'compress' | 'flatten' | 'jpg-to-pdf';

export default function BatchProcessor() {
    const [files, setFiles] = useState<ProcessedFile[]>([]);
    const [action, setAction] = useState<ActionType>('compress');
    const [isProcessing, setIsProcessing] = useState(false);

    const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            const newFiles = Array.from(e.target.files).map(file => ({
                file,
                status: 'idle' as const
            }));
            setFiles(prev => [...prev, ...newFiles]);
        }
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        if (e.dataTransfer.files) {
            const newFiles = Array.from(e.dataTransfer.files)
                .filter(file => file.type === 'application/pdf' || file.type.startsWith('image/'))
                .map(file => ({
                    file,
                    status: 'idle' as const
                }));
            setFiles(prev => [...prev, ...newFiles]);
        }
    };

    const removeFile = (index: number) => {
        setFiles(prev => prev.filter((_, i) => i !== index));
    };

    const processFile = async (item: ProcessedFile): Promise<ProcessedFile> => {
        try {
            let resultBlob: Blob;
            let resultName = item.file.name;

            switch (action) {
                case 'compress':
                    const pdfBytes = await item.file.arrayBuffer();
                    const pdf = await PDFDocument.load(pdfBytes);
                    const compressedBytes = await pdf.save({ useObjectStreams: true, addDefaultPage: false, objectsPerTick: 50 });
                    resultBlob = new Blob([compressedBytes as any], { type: 'application/pdf' });
                    resultName = `compressed-${item.file.name}`;
                    break;

                case 'flatten':
                    const flatBytes = await item.file.arrayBuffer();
                    const flatPdf = await PDFDocument.load(flatBytes);
                    flatPdf.getForm().flatten();
                    const flattenedBytes = await flatPdf.save();
                    resultBlob = new Blob([flattenedBytes as any], { type: 'application/pdf' });
                    resultName = `flattened-${item.file.name}`;
                    break;

                case 'jpg-to-pdf':
                    if (!item.file.type.startsWith('image/')) {
                        throw new Error('Not an image file');
                    }
                    const imgDoc = await PDFDocument.create();
                    const imgBuffer = await item.file.arrayBuffer();
                    let img;
                    if (item.file.type === 'image/jpeg' || item.file.type === 'image/jpg') {
                        img = await imgDoc.embedJpg(imgBuffer);
                    } else {
                        img = await imgDoc.embedPng(imgBuffer);
                    }
                    const page = imgDoc.addPage([img.width, img.height]);
                    page.drawImage(img, { x: 0, y: 0, width: img.width, height: img.height });
                    const imgPdfBytes = await imgDoc.save();
                    resultBlob = new Blob([imgPdfBytes as any], { type: 'application/pdf' });
                    resultName = `${item.file.name.split('.')[0]}.pdf`;
                    break;

                default:
                    throw new Error('Unknown action');
            }

            return { ...item, status: 'success', resultBlob, resultName };
        } catch (error) {
            console.error(error);
            return { ...item, status: 'error', errorMessage: (error as Error).message };
        }
    };

    const handleProcessBatch = async () => {
        setIsProcessing(true);
        const newFiles = [...files];

        for (let i = 0; i < newFiles.length; i++) {
            if (newFiles[i].status === 'success') continue; // Skip already processed

            // Update status to processing
            newFiles[i] = { ...newFiles[i], status: 'processing' };
            setFiles([...newFiles]);

            // Process
            newFiles[i] = await processFile(newFiles[i]);
            setFiles([...newFiles]);
        }

        setIsProcessing(false);
    };

    const handleDownloadAll = async () => {
        const zip = new JSZip();
        let count = 0;

        files.forEach(file => {
            if (file.status === 'success' && file.resultBlob && file.resultName) {
                zip.file(file.resultName, file.resultBlob);
                count++;
            }
        });

        if (count === 0) return;

        const content = await zip.generateAsync({ type: 'blob' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(content);
        link.download = 'processed-batch.zip';
        link.click();
    };

    return (
        <div className="space-y-8">
            {/* Actions Bar */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-4 w-full md:w-auto">
                        <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg">
                            <Settings className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                        </div>
                        <div className="flex-1">
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                Select Action
                            </label>
                            <select
                                value={action}
                                onChange={(e) => setAction(e.target.value as ActionType)}
                                className="w-full bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
                            >
                                <option value="compress">Compress PDFs</option>
                                <option value="flatten">Flatten PDFs</option>
                                <option value="jpg-to-pdf">Convert Images to PDF</option>
                            </select>
                        </div>
                    </div>

                    <button
                        onClick={handleProcessBatch}
                        disabled={isProcessing || files.length === 0}
                        className={`
                            flex items-center gap-2 px-8 py-3 rounded-lg font-bold text-white shadow-lg transition-all
                            ${isProcessing || files.length === 0
                                ? 'bg-gray-400 cursor-not-allowed'
                                : 'bg-blue-600 hover:bg-blue-700 hover:scale-105'}
                        `}
                    >
                        {isProcessing ? <Loader2 className="animate-spin" /> : <Play size={20} fill="currentColor" />}
                        <span>{isProcessing ? 'Processing Batch...' : 'Start Batch Process'}</span>
                    </button>
                </div>
            </div>

            {/* Upload Area */}
            <div
                onDragOver={(e) => e.preventDefault()}
                onDrop={handleDrop}
                className="border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-xl p-8 text-center bg-gray-50 dark:bg-gray-800/50 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors cursor-pointer"
                onClick={() => document.getElementById('batch-upload')?.click()}
            >
                <div className="bg-gray-200 dark:bg-gray-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Upload className="w-8 h-8 text-gray-500 dark:text-gray-400" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Drag & Drop files here
                </h3>
                <p className="text-gray-500 dark:text-gray-400 mb-6">
                    or click to browse from your computer
                </p>
                <input
                    type="file"
                    multiple
                    id="batch-upload"
                    className="hidden"
                    onChange={handleFileSelect}
                    accept={action === 'jpg-to-pdf' ? "image/*" : ".pdf"}
                />
            </div>

            {/* File List */}
            {files.length > 0 && (
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
                    <div className="p-4 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center bg-gray-50 dark:bg-gray-900/50">
                        <h3 className="font-semibold text-gray-900 dark:text-white">
                            File Queue ({files.length})
                        </h3>
                        {files.some(f => f.status === 'success') && (
                            <button
                                onClick={handleDownloadAll}
                                className="text-sm flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
                            >
                                <Download size={16} />
                                Download All (ZIP)
                            </button>
                        )}
                    </div>

                    <div className="divide-y divide-gray-200 dark:divide-gray-700 max-h-[500px] overflow-y-auto">
                        {files.map((item, index) => (
                            <div key={index} className="p-4 flex items-center gap-4 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                                <div className={`p-3 rounded-lg ${item.status === 'success' ? 'bg-green-100 dark:bg-green-900/30 text-green-600' :
                                    item.status === 'error' ? 'bg-red-100 dark:bg-red-900/30 text-red-600' :
                                        'bg-blue-100 dark:bg-blue-900/30 text-blue-600'
                                    }`}>
                                    <FileText size={24} />
                                </div>

                                <div className="flex-1 min-w-0">
                                    <p className="font-medium text-gray-900 dark:text-white truncate">
                                        {item.file.name}
                                    </p>
                                    <div className="flex items-center gap-2 text-xs mt-1">
                                        <span className="text-gray-500">{(item.file.size / 1024 / 1024).toFixed(2)} MB</span>
                                        {item.status === 'processing' && (
                                            <span className="text-blue-500 flex items-center gap-1">
                                                <Loader2 size={12} className="animate-spin" /> Processing...
                                            </span>
                                        )}
                                        {item.status === 'success' && (
                                            <span className="text-green-500 flex items-center gap-1">
                                                <CheckCircle size={12} /> Complete
                                            </span>
                                        )}
                                        {item.status === 'error' && (
                                            <span className="text-red-500 flex items-center gap-1">
                                                <AlertCircle size={12} /> {item.errorMessage}
                                            </span>
                                        )}
                                    </div>
                                </div>

                                <div className="flex items-center gap-2">
                                    {item.status === 'success' && item.resultBlob && (
                                        <button
                                            onClick={() => {
                                                const link = document.createElement('a');
                                                link.href = URL.createObjectURL(item.resultBlob!);
                                                link.download = item.resultName!;
                                                link.click();
                                            }}
                                            className="p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full text-gray-500 hover:text-blue-600 transition-colors"
                                            title="Download"
                                        >
                                            <Download size={20} />
                                        </button>
                                    )}
                                    <button
                                        onClick={() => removeFile(index)}
                                        className="p-2 hover:bg-red-100 dark:hover:bg-red-900/30 rounded-full text-gray-400 hover:text-red-600 transition-colors"
                                        title="Remove"
                                    >
                                        <X size={20} />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
