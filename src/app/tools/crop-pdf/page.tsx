'use client';

import { useState } from 'react';
import { PDFDocument } from 'pdf-lib';
import { Loader2, Crop, FileText, Cloud } from 'lucide-react';
import ToolPageLayout from '../../components/ToolPageLayout';

const CropPdfPage = () => {
    const [file, setFile] = useState<File | null>(null);
    const [margins, setMargins] = useState({ top: 0, bottom: 0, left: 0, right: 0 });
    const [loading, setLoading] = useState(false);
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

    const handleCrop = async () => {
        if (!file) return;

        setLoading(true);
        try {
            const arrayBuffer = await file.arrayBuffer();
            const pdfDoc = await PDFDocument.load(arrayBuffer);
            const pages = pdfDoc.getPages();

            pages.forEach((page) => {
                const { x, y, width, height } = page.getMediaBox();

                const newX = x + margins.left;
                const newY = y + margins.bottom;
                const newWidth = width - margins.left - margins.right;
                const newHeight = height - margins.top - margins.bottom;

                if (newWidth > 0 && newHeight > 0) {
                    page.setCropBox(newX, newY, newWidth, newHeight);
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

    const steps = [
        {
            title: "Step 1: Upload PDF",
            description: "Select or drag and drop your PDF file that you want to crop."
        },
        {
            title: "Step 2: Set Margins",
            description: "Enter the margin values in points (1 inch = 72 points) to trim from each side."
        },
        {
            title: "Step 3: Download",
            description: "Get your cropped PDF with the margins trimmed from all pages."
        }
    ];

    return (
        <ToolPageLayout
            title="Crop PDF Pages"
            subtitle="Trim margins from your PDF pages. Enter values in points (1 inch = 72 points)."
            steps={steps}
            ctaText="Crop PDF"
            onAction={handleCrop}
            loading={loading}
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

                    {/* Margins Grid */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                        {[
                            { key: 'top', label: 'Top Margin' },
                            { key: 'bottom', label: 'Bottom Margin' },
                            { key: 'left', label: 'Left Margin' },
                            { key: 'right', label: 'Right Margin' }
                        ].map((margin) => (
                            <div key={margin.key}>
                                <label className="block text-sm font-medium text-gray-700 mb-2">{margin.label}</label>
                                <input
                                    type="number"
                                    min="0"
                                    value={margins[margin.key as keyof typeof margins]}
                                    onChange={(e) => setMargins({ ...margins, [margin.key]: Number(e.target.value) })}
                                    className="w-full bg-gray-50 border border-gray-200 rounded-xl py-2.5 px-4 focus:ring-2 focus:ring-purple-500 focus:border-transparent focus:outline-none text-gray-900 text-sm"
                                    placeholder="0"
                                />
                            </div>
                        ))}
                    </div>

                    <button
                        onClick={handleCrop}
                        disabled={loading}
                        className={`w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-violet-500 to-purple-600 text-white font-bold py-3 sm:py-4 px-6 rounded-xl transition-all shadow-lg hover:shadow-xl ${loading ? 'opacity-50 cursor-not-allowed' : 'hover:scale-[1.02]'
                            }`}
                    >
                        {loading ? <Loader2 className="animate-spin" size={20} /> : <Crop size={20} />}
                        <span className="text-sm sm:text-base">{loading ? 'Cropping...' : 'Crop PDF'}</span>
                    </button>
                </div>
            )}
        </ToolPageLayout>
    );
};

export default CropPdfPage;
