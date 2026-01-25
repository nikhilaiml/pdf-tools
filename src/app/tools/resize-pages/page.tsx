'use client';

import { useState } from 'react';
import { PDFDocument, PageSizes } from 'pdf-lib';
import { Loader2, Maximize, FileText } from 'lucide-react';
import FileUploader from '../../components/FileUploader';

const SIZES = {
    'A4': PageSizes.A4,
    'Letter': PageSizes.Letter,
    'A3': PageSizes.A3,
    'Legal': [612, 1008] as [number, number],
};

export default function ResizePagesPage() {
    const [file, setFile] = useState<File | null>(null);
    const [targetSize, setTargetSize] = useState<keyof typeof SIZES>('A4');
    const [isProcessing, setIsProcessing] = useState(false);

    const handleFileSelect = (selectedFile: File) => {
        setFile(selectedFile);
    };

    const handleResize = async () => {
        if (!file) return;

        setIsProcessing(true);
        try {
            const arrayBuffer = await file.arrayBuffer();
            const pdfDoc = await PDFDocument.load(arrayBuffer);
            const pages = pdfDoc.getPages();
            const [newWidth, newHeight] = SIZES[targetSize];

            for (const page of pages) {
                const { width, height } = page.getSize();

                // Scale content to fit new size while maintaining aspect ratio
                // This is a simple implementation: we scale the page content
                // Actually, pdf-lib `setSize` works but content might be continuously off-center or clipped
                // if we don't scale the content itself. 
                // Scaling content in pdf-lib usually requires embedding pages into a NEW document 
                // to cleanly resize everything.
            }

            // Better Approach: Link pages to new doc
            const newPdf = await PDFDocument.create();

            // We need to copy pages. But simple copying retains original size.
            // effectively we want to embed the pages of the old pdf into the new pdf
            const embeddedPages = await newPdf.embedPdf(pdfDoc);

            for (const embeddedPage of embeddedPages) {
                const page = newPdf.addPage([newWidth, newHeight]);

                // Calculate scale to fit
                const xScale = newWidth / embeddedPage.width;
                const yScale = newHeight / embeddedPage.height;
                const scale = Math.min(xScale, yScale);

                // Center logic
                const scaledWidth = embeddedPage.width * scale;
                const scaledHeight = embeddedPage.height * scale;
                const x = (newWidth - scaledWidth) / 2;
                const y = (newHeight - scaledHeight) / 2;

                page.drawPage(embeddedPage, {
                    x,
                    y,
                    width: scaledWidth,
                    height: scaledHeight,
                });
            }

            const pdfBytes = await newPdf.save();
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const blob = new Blob([pdfBytes as any], { type: 'application/pdf' });

            const link = document.createElement('a');
            link.href = URL.createObjectURL(blob);
            link.download = `resized-${file.name}`;
            link.click();
        } catch (error) {
            console.error('Error resizing PDF:', error);
            alert('Failed to resize PDF.');
        } finally {
            setIsProcessing(false);
        }
    };

    return (
        <div className="max-w-4xl mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-4 text-center text-gray-900 dark:text-white">
                Resize PDF Pages
            </h1>
            <p className="text-center text-gray-500 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
                Change the page size of your PDF document to standard formats like A4 or Letter.
            </p>

            {!file ? (
                <FileUploader onFileSelect={handleFileSelect} label="Select PDF to Resize" />
            ) : (
                <div className="animate-in fade-in zoom-in duration-300 max-w-2xl mx-auto">
                    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-8">
                        <div className="flex items-center space-x-3 mb-6 p-4 bg-gray-50 dark:bg-gray-900/50 rounded-lg">
                            <FileText className="text-blue-500" size={24} />
                            <div>
                                <p className="font-medium text-gray-900 dark:text-white truncate max-w-[200px]">{file.name}</p>
                                <button
                                    onClick={() => setFile(null)}
                                    className="text-xs text-red-500 hover:text-red-700 hover:underline"
                                >
                                    Change File
                                </button>
                            </div>
                        </div>

                        <div className="mb-8">
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                Target Page Size
                            </label>
                            <div className="grid grid-cols-2 gap-4">
                                {(Object.keys(SIZES) as Array<keyof typeof SIZES>).map((size) => (
                                    <button
                                        key={size}
                                        onClick={() => setTargetSize(size)}
                                        className={`p-4 rounded-lg border-2 transition-all ${targetSize === size
                                                ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300'
                                                : 'border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800'
                                            }`}
                                    >
                                        <div className="font-semibold">{size}</div>
                                        <div className="text-xs text-gray-500 mt-1">
                                            {size === 'A4' && '210 x 297 mm'}
                                            {size === 'Letter' && '216 x 279 mm'}
                                            {size === 'A3' && '297 x 420 mm'}
                                            {size === 'Legal' && '216 x 356 mm'}
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </div>

                        <button
                            onClick={handleResize}
                            disabled={isProcessing}
                            className={`w-full flex items-center justify-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-xl transition-all shadow-lg hover:shadow-xl ${isProcessing ? 'opacity-50 cursor-not-allowed' : ''
                                }`}
                        >
                            {isProcessing ? <Loader2 className="animate-spin" /> : <Maximize size={20} />}
                            <span>{isProcessing ? 'Resizing...' : 'Resize Pages'}</span>
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
