'use client';

import { useState } from 'react';
import { PDFDocument } from 'pdf-lib';
import { Loader2, Wrench, FileText } from 'lucide-react';
import FileUploader from '../../components/FileUploader';

export default function RepairCorruptedPdfPage() {
    const [file, setFile] = useState<File | null>(null);
    const [isProcessing, setIsProcessing] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleFileSelect = (selectedFile: File) => {
        setFile(selectedFile);
        setSuccess(false);
    };

    const handleRepair = async () => {
        if (!file) return;

        setIsProcessing(true);
        try {
            const arrayBuffer = await file.arrayBuffer();

            // Attempt to load the document. pdf-lib often fixes XRef tables automatically on load/save.
            // We can add options here if needed, but default load is quite robust.
            const pdfDoc = await PDFDocument.load(arrayBuffer, {
                ignoreEncryption: true // Sometimes helpful if corruption mimics encryption headers
            });

            // Just saving it acts as a repair
            const pdfBytes = await pdfDoc.save();
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const blob = new Blob([pdfBytes as any], { type: 'application/pdf' });

            // Trigger download
            const link = document.createElement('a');
            link.href = URL.createObjectURL(blob);
            link.download = `repaired-${file.name}`;
            link.click();

            setSuccess(true);
        } catch (error) {
            console.error('Error repairing PDF:', error);
            alert('Could not repair this PDF. The damage might be too severe for this tool.');
        } finally {
            setIsProcessing(false);
        }
    };

    return (
        <div className="max-w-4xl mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-4 text-center text-gray-900 dark:text-white">
                Repair Corrupted PDF
            </h1>
            <p className="text-center text-gray-500 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
                Attempt to recover and repair damaged PDF files. This tool rebuilds the document structure to fix common errors.
            </p>

            {!file ? (
                <FileUploader onFileSelect={handleFileSelect} label="Select PDF to Repair" />
            ) : (
                <div className="animate-in fade-in zoom-in duration-300 max-w-2xl mx-auto">
                    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
                        <div className="p-6 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                                <FileText className="text-blue-500" size={24} />
                                <span className="font-medium text-lg text-gray-900 dark:text-white truncate max-w-[200px]">{file.name}</span>
                            </div>
                            <button
                                onClick={() => { setFile(null); setSuccess(false); }}
                                className="text-sm text-red-500 hover:text-red-700"
                            >
                                Change File
                            </button>
                        </div>

                        <div className="p-8 flex flex-col items-center">
                            <Wrench className={`w-16 h-16 mb-6 ${success ? 'text-green-500' : 'text-gray-400'}`} />

                            {success ? (
                                <div className="text-center mb-6">
                                    <h3 className="text-xl font-bold text-green-600 mb-2">Repair Successful!</h3>
                                    <p className="text-gray-600 dark:text-gray-300">
                                        Your file has been rebuilt and downloaded.
                                    </p>
                                </div>
                            ) : (
                                <p className="text-center text-gray-600 dark:text-gray-300 mb-8">
                                    Click the button below to attempt to repair the file structure.
                                </p>
                            )}

                            <button
                                onClick={handleRepair}
                                disabled={isProcessing}
                                className={`w-full max-w-sm flex items-center justify-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-xl transition-all shadow-lg hover:shadow-xl ${isProcessing ? 'opacity-50 cursor-not-allowed' : ''
                                    }`}
                            >
                                {isProcessing ? <Loader2 className="animate-spin" /> : <Wrench size={20} />}
                                <span>{isProcessing ? 'Repairing...' : 'Repair PDF'}</span>
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
