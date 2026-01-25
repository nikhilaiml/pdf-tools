'use client';

import { useState } from 'react';
import { PDFDocument } from 'pdf-lib';
import { Loader2, Crop, FileText } from 'lucide-react';
import FileUploader from '../../components/FileUploader';

const CropPdfPage = () => {
    const [file, setFile] = useState<File | null>(null);
    const [margins, setMargins] = useState({ top: 0, bottom: 0, left: 0, right: 0 });
    const [loading, setLoading] = useState(false);

    const handleFileSelect = (selectedFile: File) => {
        setFile(selectedFile);
    };

    const handleCrop = async () => {
        if (!file) return;

        setLoading(true);
        try {
            const arrayBuffer = await file.arrayBuffer();
            const pdfDoc = await PDFDocument.load(arrayBuffer);
            const pages = pdfDoc.getPages();

            pages.forEach((page) => {
                const { x, y, width, height } = page.getMediaBox();

                // Calculate new box
                // pdf-lib text coords: (0,0) is bottom left usually? 
                // Wait, MediaBox is [x, y, width, height] usually
                // CropBox is what we modify for display

                // Let's assume user wants to remove X points from edges.
                // New X = Old X + Left Margin
                // New Y = Old Y + Bottom Margin
                // New W = Old W - Left Margin - Right Margin
                // New H = Old H - Top Margin - Bottom Margin

                const newX = x + margins.left;
                const newY = y + margins.bottom;
                const newWidth = width - margins.left - margins.right;
                const newHeight = height - margins.top - margins.bottom;

                if (newWidth > 0 && newHeight > 0) {
                    page.setCropBox(newX, newY, newWidth, newHeight);
                    // Also update MediaBox if we want to "hard crop" effectively?
                    // Typically setCropBox is enough for viewers.
                    // page.setMediaBox(newX, newY, newWidth, newHeight); 
                }
            });

            const pdfBytes = await pdfDoc.save();
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const blob = new Blob([pdfBytes as any], { type: 'application/pdf' });

            const link = document.createElement('a');
            link.href = URL.createObjectURL(blob);
            link.download = `cropped-${file.name}`;
            link.click();
        } catch (error) {
            console.error('Error cropping PDF:', error);
            alert('Failed to crop PDF.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-4xl mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-4 text-center text-gray-900 dark:text-white">
                Crop PDF Pages
            </h1>
            <p className="text-center text-gray-500 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
                Trim margins from your PDF pages. Enter values in points (1 inch = 72 points).
            </p>

            {!file ? (
                <FileUploader onFileSelect={handleFileSelect} label="Select PDF to Crop" />
            ) : (
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-8 max-w-2xl mx-auto animate-in fade-in zoom-in duration-300">
                    <div className="flex items-center space-x-3 mb-8 p-4 bg-gray-50 dark:bg-gray-900/50 rounded-lg">
                        <FileText className="text-blue-500" size={24} />
                        <div>
                            <p className="font-medium text-gray-900 dark:text-white truncate max-w-[200px]">{file.name}</p>
                            <button
                                onClick={() => setFile(null)}
                                className="text-xs text-red-500 hover:text-red-700 hover:underline"
                            >
                                Change be file
                            </button>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-6 mb-8">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Top Margin</label>
                            <input
                                type="number"
                                min="0"
                                value={margins.top}
                                onChange={(e) => setMargins({ ...margins, top: Number(e.target.value) })}
                                className="w-full bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg py-2 px-3 focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Bottom Margin</label>
                            <input
                                type="number"
                                min="0"
                                value={margins.bottom}
                                onChange={(e) => setMargins({ ...margins, bottom: Number(e.target.value) })}
                                className="w-full bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg py-2 px-3 focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Left Margin</label>
                            <input
                                type="number"
                                min="0"
                                value={margins.left}
                                onChange={(e) => setMargins({ ...margins, left: Number(e.target.value) })}
                                className="w-full bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg py-2 px-3 focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Right Margin</label>
                            <input
                                type="number"
                                min="0"
                                value={margins.right}
                                onChange={(e) => setMargins({ ...margins, right: Number(e.target.value) })}
                                className="w-full bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg py-2 px-3 focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
                            />
                        </div>
                    </div>

                    <button
                        onClick={handleCrop}
                        disabled={loading}
                        className={`w-full flex items-center justify-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-xl transition-all shadow-lg hover:shadow-xl ${loading ? 'opacity-50 cursor-not-allowed' : ''
                            }`}
                    >
                        {loading ? <Loader2 className="animate-spin" /> : <Crop size={20} />}
                        <span>{loading ? 'Cropping PDF...' : 'Crop PDF'}</span>
                    </button>
                </div>
            )}
        </div>
    );
};

export default CropPdfPage;
