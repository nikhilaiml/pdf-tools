'use client';

import { useState } from 'react';
import { PDFDocument, PageSizes } from 'pdf-lib';
import { Loader2, Maximize, FileText, Cloud } from 'lucide-react';
import ToolPageLayout from '../../components/ToolPageLayout';

const SIZES = {
    'A4': PageSizes.A4,
    'Letter': PageSizes.Letter,
    'A3': PageSizes.A3,
    'Legal': [612, 1008] as [number, number],
    'A5': PageSizes.A5,
    'B4': PageSizes.B4,
    'B5': PageSizes.B5,
    'Executive': PageSizes.Executive,
    'Tabloid': PageSizes.Tabloid,
};

export default function ResizePagesClient() {
    const [file, setFile] = useState<File | null>(null);
    const [targetSize, setTargetSize] = useState<keyof typeof SIZES>('A4');
    const [isProcessing, setIsProcessing] = useState(false);
    const [isDragging, setIsDragging] = useState(false);

    const handleFileSelect = (selectedFile: File) => {
        if (selectedFile.type === 'application/pdf' || selectedFile.name.toLowerCase().endsWith('.pdf')) {
            setFile(selectedFile);
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

    const handleResize = async () => {
        if (!file) return;

        setIsProcessing(true);
        try {
            const arrayBuffer = await file.arrayBuffer();
            const pdfDoc = await PDFDocument.load(arrayBuffer);
            const [newWidth, newHeight] = SIZES[targetSize];

            const newPdf = await PDFDocument.create();
            const embeddedPages = await newPdf.embedPdf(pdfDoc);

            for (const embeddedPage of embeddedPages) {
                const page = newPdf.addPage([newWidth, newHeight]);

                const xScale = newWidth / embeddedPage.width;
                const yScale = newHeight / embeddedPage.height;
                const scale = Math.min(xScale, yScale);

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

    const steps = [
        {
            title: "Step 1: Upload PDF",
            description: "Select or drag and drop your PDF file that you want to resize."
        },
        {
            title: "Step 2: Choose Size",
            description: "Select your target page size - A4, Letter, A3, or Legal format."
        },
        {
            title: "Step 3: Download",
            description: "Get your resized PDF with all pages scaled to fit the new dimensions."
        }
    ];

    return (
        <ToolPageLayout
            title="Resize PDF Pages"
            subtitle="Change the page size of your PDF document to standard formats like A4 or Letter."
            steps={steps}
            ctaText="Resize Pages"
            onAction={handleResize}
            loading={isProcessing}
            disabled={!file}
            showCta={!!file}
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
                        Drag & Drop PDF Here
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
                            onClick={() => setFile(null)}
                            className="text-xs sm:text-sm text-red-500 hover:text-red-700 font-medium"
                        >
                            Remove
                        </button>
                    </div>

                    {/* Size Options */}
                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-700 mb-3">Target Page Size</label>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                            {(Object.keys(SIZES) as Array<keyof typeof SIZES>).map((size) => (
                                <button
                                    key={size}
                                    onClick={() => setTargetSize(size)}
                                    className={`p-3 rounded-xl transition-all ${targetSize === size
                                        ? 'bg-gradient-to-r from-violet-500 to-purple-600 text-white shadow-lg'
                                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                        }`}
                                >
                                    <div className="font-semibold text-sm">{size}</div>
                                    <div className={`text-xs mt-1 ${targetSize === size ? 'text-white/80' : 'text-gray-500'}`}>
                                        {size === 'A4' && '210 × 297 mm'}
                                        {size === 'Letter' && '216 × 279 mm'}
                                        {size === 'A3' && '297 × 420 mm'}
                                        {size === 'Legal' && '216 × 356 mm'}
                                        {size === 'A5' && '148 × 210 mm'}
                                        {size === 'B4' && '250 × 353 mm'}
                                        {size === 'B5' && '176 × 250 mm'}
                                        {size === 'Executive' && '184 × 267 mm'}
                                        {size === 'Tabloid' && '279 × 432 mm'}
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>

                    <button
                        onClick={handleResize}
                        disabled={isProcessing}
                        className={`w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-violet-500 to-purple-600 text-white font-bold py-3 sm:py-4 px-6 rounded-xl transition-all shadow-lg hover:shadow-xl ${isProcessing ? 'opacity-50 cursor-not-allowed' : 'hover:scale-[1.02]'
                            }`}
                    >
                        {isProcessing ? <Loader2 className="animate-spin" size={20} /> : <Maximize size={20} />}
                        <span className="text-sm sm:text-base">{isProcessing ? 'Resizing...' : 'Resize Pages'}</span>
                    </button>
                </div>
            )}
        </ToolPageLayout>
    );
}
