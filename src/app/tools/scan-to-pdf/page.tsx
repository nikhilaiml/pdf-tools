'use client';

// Reuse the logic from BatchImageToPdf but update title/description

export default function ScanToPdfPage() {
    return (
        <div className="relative">
            {/* We can reuse the component or composition, but for simplicity we'll render it directly 
                 and override the title via props if we refactored it to be a component. 
                 Since I didn't export it as a reusable component with props yet, 
                 I will copy the logic for now to allow specific customization later 
                 OR better yet, I will refactor BatchImageToPdf to accept props 
                 to avoid code duplication. For now, let's copy to ensure independence.
             */}

            {/* Actually, let's use the exact same component but wrapped to keep it simple 
                 if the user just wants the functionality.
                 But user might be confused if title "Batch Image to PDF" appears.
                 I should probably refactor BatchImageToPdf to be a reusable component.
                 
                 Let's do a Copy-Paste with modified title for speed and clarity, 
                 as requested to "fully prepare" them. 
             */}
            <ScanToPDFImplementation />
        </div>
    );
}

import { useState } from 'react';
import { PDFDocument } from 'pdf-lib';
import { Loader2, FileText, Plus, Image as ImageIcon } from 'lucide-react';

function ScanToPDFImplementation() {
    const [files, setFiles] = useState<File[]>([]);
    const [isProcessing, setIsProcessing] = useState(false);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            setFiles(prev => [...prev, ...Array.from(e.target.files!)]);
        }
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
            const newFiles = Array.from(e.dataTransfer.files).filter(f => f.type.startsWith('image/'));
            setFiles(prev => [...prev, ...newFiles]);
        }
    };

    const removeFile = (index: number) => {
        setFiles(files.filter((_, i) => i !== index));
    };

    const handleConvert = async () => {
        if (files.length === 0) return;

        setIsProcessing(true);
        try {
            const pdfDoc = await PDFDocument.create();

            for (const file of files) {
                const arrayBuffer = await file.arrayBuffer();
                let image;

                if (file.type === 'image/jpeg') {
                    image = await pdfDoc.embedJpg(arrayBuffer);
                } else if (file.type === 'image/png') {
                    image = await pdfDoc.embedPng(arrayBuffer);
                } else {
                    continue;
                }

                const page = pdfDoc.addPage([image.width, image.height]);
                page.drawImage(image, {
                    x: 0,
                    y: 0,
                    width: image.width,
                    height: image.height,
                });
            }

            const pdfBytes = await pdfDoc.save();
            const blob = new Blob([pdfBytes as any], { type: 'application/pdf' }); // eslint-disable-line @typescript-eslint/no-explicit-any

            const link = document.createElement('a');
            link.href = URL.createObjectURL(blob);
            link.download = `scanned-document.pdf`;
            link.click();
        } catch (error) {
            console.error(error);
            alert('Failed to create PDF.');
        } finally {
            setIsProcessing(false);
        }
    };

    return (
        <div className="max-w-4xl mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-4 text-center text-gray-900 dark:text-white">
                Scan to PDF
            </h1>
            <p className="text-center text-gray-500 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
                Convert scanned images into a professional PDF document.
            </p>

            <div
                className="flex flex-col items-center justify-center p-12 border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-xl bg-gray-50 dark:bg-gray-800/50 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors cursor-pointer mb-8"
                onDragOver={(e) => e.preventDefault()}
                onDrop={handleDrop}
                onClick={() => document.getElementById('scan-upload')?.click()}
            >
                <div className="bg-blue-100 dark:bg-blue-900/30 p-4 rounded-full mb-4">
                    <ImageIcon className="w-10 h-10 text-blue-600 dark:text-blue-400" />
                </div>
                <p className="text-xl font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Click or Drop Scanned Images
                </p>
                <input
                    type="file"
                    multiple
                    accept="image/png, image/jpeg"
                    onChange={handleFileChange}
                    className="hidden"
                    id="scan-upload"
                />
            </div>

            {files.length > 0 && (
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6">
                    <h3 className="font-semibold mb-4 text-gray-900 dark:text-white">Selected Scans ({files.length})</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-6">
                        {files.map((file, index) => (
                            <div key={index} className="relative group aspect-[1/1.4] bg-gray-100 dark:bg-gray-900 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src={URL.createObjectURL(file)}
                                    alt={file.name}
                                    className="w-full h-full object-contain"
                                />
                                <button
                                    onClick={(e) => { e.stopPropagation(); removeFile(index); }}
                                    className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                                >
                                    <Plus className="transform rotate-45" size={16} />
                                </button>
                            </div>
                        ))}
                    </div>

                    <button
                        onClick={handleConvert}
                        disabled={isProcessing}
                        className={`w-full flex items-center justify-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-xl transition-all shadow-lg hover:shadow-xl ${isProcessing ? 'opacity-50 cursor-not-allowed' : ''
                            }`}
                    >
                        {isProcessing ? <Loader2 className="animate-spin" /> : <FileText size={20} />}
                        <span>{isProcessing ? 'Merging to PDF...' : 'Create PDF'}</span>
                    </button>
                </div>
            )}
        </div>
    );
}
