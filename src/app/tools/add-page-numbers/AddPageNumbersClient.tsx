'use client';

import { useState } from 'react';
import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';
import { Loader2, ListOrdered, FileText, Cloud } from 'lucide-react';
import ToolPageLayout from '../../components/ToolPageLayout';

const AddPageNumbersClient = () => {
    const [file, setFile] = useState<File | null>(null);
    const [loading, setLoading] = useState(false);
    const [position, setPosition] = useState('bottom-right');
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

    const handleProcess = async () => {
        if (!file) {
            alert('Please select a file.');
            return;
        }

        setLoading(true);
        try {
            const pdfBytes = await file.arrayBuffer();
            const pdf = await PDFDocument.load(pdfBytes);
            const font = await pdf.embedFont(StandardFonts.Helvetica);
            const pages = pdf.getPages();
            const totalPages = pages.length;

            pages.forEach((page, idx) => {
                const { width } = page.getSize();
                const text = `${idx + 1} / ${totalPages}`;
                const textSize = 12;
                const textWidth = font.widthOfTextAtSize(text, textSize);

                let x = width - textWidth - 20;
                const y = 20;

                if (position === 'bottom-center') {
                    x = (width - textWidth) / 2;
                } else if (position === 'bottom-left') {
                    x = 20;
                }

                page.drawText(text, {
                    x,
                    y,
                    size: textSize,
                    font: font,
                    color: rgb(0, 0, 0),
                });
            });

            const newPdfBytes = await pdf.save();
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const blob = new Blob([newPdfBytes as any], { type: 'application/pdf' });

            const link = document.createElement('a');
            link.href = URL.createObjectURL(blob);
            link.download = `numbered-${file.name}`;
            link.click();
        } catch (error) {
            console.error('Error adding page numbers:', error);
            alert(`An error occurred: ${(error as Error).message}`);
        } finally {
            setLoading(false);
        }
    };

    const steps = [
        {
            title: "Step 1: Upload PDF",
            description: "Select or drag and drop your PDF file that you want to add page numbers to."
        },
        {
            title: "Step 2: Choose Position",
            description: "Select where you want the page numbers to appear - left, center, or right."
        },
        {
            title: "Step 3: Download",
            description: "Get your numbered PDF instantly with page numbers on every page."
        }
    ];

    return (
        <ToolPageLayout
            title="Add Page Numbers"
            subtitle="Insert logical page numbers into your document."
            steps={steps}
            ctaText="Add Page Numbers"
            onAction={handleProcess}
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

                    {/* Position Options */}
                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-700 mb-3">Page Number Position</label>
                        <div className="grid grid-cols-3 gap-3">
                            {[
                                { value: 'bottom-left', label: '📍 Left' },
                                { value: 'bottom-center', label: '📍 Center' },
                                { value: 'bottom-right', label: '📍 Right' }
                            ].map((pos) => (
                                <button
                                    key={pos.value}
                                    onClick={() => setPosition(pos.value)}
                                    className={`py-3 px-4 rounded-xl font-medium transition-all text-sm ${position === pos.value
                                        ? 'bg-gradient-to-r from-violet-500 to-purple-600 text-white shadow-lg'
                                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                        }`}
                                >
                                    {pos.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    <button
                        onClick={handleProcess}
                        disabled={loading}
                        className={`w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-violet-500 to-purple-600 text-white font-bold py-3 sm:py-4 px-6 rounded-xl transition-all shadow-lg hover:shadow-xl ${loading ? 'opacity-50 cursor-not-allowed' : 'hover:scale-[1.02]'
                            }`}
                    >
                        {loading ? <Loader2 className="animate-spin" size={20} /> : <ListOrdered size={20} />}
                        <span className="text-sm sm:text-base">{loading ? 'Adding Numbers...' : 'Add Page Numbers'}</span>
                    </button>
                </div>
            )}
        </ToolPageLayout>
    );
};

export default AddPageNumbersClient;
