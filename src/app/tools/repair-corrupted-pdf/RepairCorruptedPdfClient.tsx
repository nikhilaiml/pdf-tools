'use client';

import { useState } from 'react';
import { PDFDocument } from 'pdf-lib';
import { Loader2, Wrench, FileText, Cloud, CheckCircle } from 'lucide-react';
import ToolPageLayout from '../../components/ToolPageLayout';

const RepairCorruptedPdfClient = () => {
    const [file, setFile] = useState<File | null>(null);
    const [isProcessing, setIsProcessing] = useState(false);
    const [success, setSuccess] = useState(false);
    const [isDragging, setIsDragging] = useState(false);

    const handleFileSelect = (selectedFile: File) => {
        if (selectedFile.type === 'application/pdf' || selectedFile.name.toLowerCase().endsWith('.pdf')) {
            setFile(selectedFile);
            setSuccess(false);
        } else {
            alert('Please select a valid PDF file.');
        }
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(false);
        if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
            handleFileSelect(e.dataTransfer.files[0]);
        }
    };

    const handleRepair = async () => {
        if (!file) return;

        setIsProcessing(true);
        try {
            const arrayBuffer = await file.arrayBuffer();

            // Attempt to load the document. pdf-lib often fixes XRef tables automatically on load/save.
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

    const steps = [
        {
            title: "Step 1: Upload PDF",
            description: "Select or drag and drop your corrupted PDF file that needs repair."
        },
        {
            title: "Step 2: Auto-Repair",
            description: "Our tool rebuilds the document structure and fixes common errors automatically."
        },
        {
            title: "Step 3: Download",
            description: "Get your repaired PDF file ready to use - fixed and working!"
        }
    ];

    return (
        <ToolPageLayout
            title="Repair Corrupted PDF"
            subtitle="Attempt to recover and repair damaged PDF files. Fixes common structure errors."
            steps={steps}
            ctaText="Repair PDF"
            onAction={handleRepair}
            loading={isProcessing}
            disabled={!file}
            showCta={!!file && !success}
        >
            {!file ? (
                <div
                    className={`
                        bg-white rounded-2xl sm:rounded-3xl shadow-xl border-2 border-dashed p-6 sm:p-12
                        transition-all duration-300 cursor-pointer
                        ${isDragging
                            ? 'border-purple-500 bg-purple-50 scale-[1.02]'
                            : 'border-orange-200 hover:border-purple-400 hover:shadow-2xl'
                        }
                    `}
                    onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
                    onDragLeave={(e) => { e.preventDefault(); setIsDragging(false); }}
                    onDrop={handleDrop}
                    onClick={() => document.getElementById('file-input')?.click()}
                >
                    <div className="flex justify-center mb-4 sm:mb-6">
                        <div className={`p-4 sm:p-6 rounded-2xl sm:rounded-3xl transition-colors ${isDragging ? 'bg-purple-100' : 'bg-orange-50'}`}>
                            <Cloud className={`w-12 h-12 sm:w-16 sm:h-16 ${isDragging ? 'text-purple-500' : 'text-orange-400'}`} strokeWidth={1.5} />
                        </div>
                    </div>

                    <p className={`text-xl sm:text-2xl font-bold text-center mb-2 ${isDragging ? 'text-purple-700' : 'text-gray-800'}`}>
                        Drag & Drop Corrupted PDF Here
                    </p>
                    <p className="text-sm sm:text-base text-gray-500 text-center">or click to browse</p>

                    <input
                        id="file-input"
                        type="file"
                        accept=".pdf"
                        onChange={(e) => e.target.files?.[0] && handleFileSelect(e.target.files[0])}
                        className="hidden"
                    />
                </div>
            ) : (
                <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl border border-gray-100 p-6 sm:p-8">
                    <div className="flex items-center space-x-3 sm:space-x-4 mb-6 p-3 sm:p-4 bg-gray-50 rounded-xl">
                        <div className="p-2 sm:p-3 bg-purple-100 rounded-lg">
                            <FileText className="text-purple-500 w-5 h-5 sm:w-6 sm:h-6" />
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="font-medium text-gray-900 truncate text-sm sm:text-base">{file.name}</p>
                            <p className="text-xs sm:text-sm text-gray-500">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
                        </div>
                        <button
                            onClick={() => { setFile(null); setSuccess(false); }}
                            className="text-xs sm:text-sm text-red-500 hover:text-red-700 font-medium"
                        >
                            Remove
                        </button>
                    </div>

                    {success ? (
                        <div className="text-center py-6">
                            <div className="inline-flex p-4 bg-green-100 rounded-2xl mb-4">
                                <CheckCircle className="w-12 h-12 text-green-500" />
                            </div>
                            <h3 className="text-xl font-bold text-green-600 mb-2">Repair Successful!</h3>
                            <p className="text-gray-600 mb-6">
                                Your file has been rebuilt and downloaded.
                            </p>
                            <button
                                onClick={() => { setFile(null); setSuccess(false); }}
                                className="text-purple-600 hover:text-purple-700 font-medium"
                            >
                                Repair Another File
                            </button>
                        </div>
                    ) : (
                        <>
                            <div className="text-center mb-6">
                                <div className="inline-flex p-4 bg-amber-100 rounded-2xl mb-4">
                                    <Wrench className="w-10 h-10 text-amber-600" />
                                </div>
                                <p className="text-gray-600">
                                    Click the button below to attempt to repair the file structure.
                                </p>
                            </div>

                            <button
                                onClick={handleRepair}
                                disabled={isProcessing}
                                className={`w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-violet-500 to-purple-600 text-white font-bold py-3 sm:py-4 px-6 rounded-xl transition-all shadow-lg hover:shadow-xl ${isProcessing ? 'opacity-50 cursor-not-allowed' : 'hover:scale-[1.02]'
                                    }`}
                            >
                                {isProcessing ? <Loader2 className="animate-spin" size={20} /> : <Wrench size={20} />}
                                <span className="text-sm sm:text-base">{isProcessing ? 'Repairing...' : 'Repair PDF'}</span>
                            </button>
                        </>
                    )}
                </div>
            )}
        </ToolPageLayout>
    );
};

export default RepairCorruptedPdfClient;
