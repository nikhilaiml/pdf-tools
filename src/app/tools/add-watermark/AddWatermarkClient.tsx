'use client';

import { useState } from 'react';
import { PDFDocument, rgb, degrees } from 'pdf-lib';
import { Loader2, Stamp, FileText, Cloud, Type } from 'lucide-react';
import ToolPageLayout from '../../components/ToolPageLayout';

interface AddWatermarkClientProps {
    seoContent?: React.ReactNode;
    title?: string;
    subtitle?: string;
    steps?: { title: string; description: string }[];
}

const AddWatermarkClient = ({ seoContent, title, subtitle, steps }: AddWatermarkClientProps) => {
    const [file, setFile] = useState<File | null>(null);
    const [text, setText] = useState('CONFIDENTIAL');
    const [loading, setLoading] = useState(false);
    const [isRed, setIsRed] = useState(true);
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
        if (!file || !text) {
            alert('Please select a file and enter watermark text.');
            return;
        }

        setLoading(true);
        try {
            const pdfBytes = await file.arrayBuffer();
            const pdf = await PDFDocument.load(pdfBytes);
            const pages = pdf.getPages();

            const color = isRed ? rgb(0.95, 0.1, 0.1) : rgb(0.5, 0.5, 0.5);

            pages.forEach(page => {
                const { width, height } = page.getSize();
                const fontSize = 50;
                const textWidth = text.length * (fontSize * 0.5);

                page.drawText(text, {
                    x: (width - textWidth) / 2,
                    y: height / 2,
                    size: fontSize,
                    color: color,
                    opacity: 0.3,
                    rotate: degrees(45),
                });
            });

            const newPdfBytes = await pdf.save();
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const blob = new Blob([newPdfBytes as any], { type: 'application/pdf' });

            const link = document.createElement('a');
            link.href = URL.createObjectURL(blob);
            link.download = `watermarked-${file.name}`;
            link.click();
        } catch (error) {
            console.error('Error adding watermark:', error);
            alert(`An error occurred: ${(error as Error).message}`);
        } finally {
            setLoading(false);
        }
    };

    const defaultSteps = [
        {
            title: "Step 1: Upload PDF",
            description: "Select or drag and drop your PDF file that you want to add a watermark to."
        },
        {
            title: "Step 2: Customize",
            description: "Enter your watermark text and choose the color style - red for warnings or grey for subtle."
        },
        {
            title: "Step 3: Download",
            description: "Get your watermarked PDF instantly. The text will appear diagonally across all pages."
        }
    ];

    return (
        <ToolPageLayout
            title={title || "Add Watermark to PDF"}
            subtitle={subtitle || "Stamp text over your PDF pages for branding or copyright protection."}
            steps={steps || defaultSteps}
            ctaText="Add Watermark"
            onAction={handleProcess}
            loading={loading}
            disabled={!file || !text}
            showCta={!!file}
            seoContent={seoContent}
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

                    {/* Watermark Text Input */}
                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-700 mb-2">Watermark Text</label>
                        <div className="relative">
                            <Type className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                            <input
                                type="text"
                                value={text}
                                onChange={(e) => setText(e.target.value)}
                                className="pl-10 w-full bg-gray-50 border border-gray-200 rounded-xl py-3 px-4 focus:ring-2 focus:ring-purple-500 focus:border-transparent focus:outline-none text-gray-900"
                                placeholder="CONFIDENTIAL"
                            />
                        </div>
                    </div>

                    {/* Color Options */}
                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-700 mb-3">Color Style</label>
                        <div className="grid grid-cols-2 gap-3">
                            <button
                                onClick={() => setIsRed(true)}
                                className={`py-3 px-4 rounded-xl font-medium transition-all ${isRed
                                    ? 'bg-gradient-to-r from-red-500 to-rose-500 text-white shadow-lg'
                                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                    }`}
                            >
                                🔴 Red (Warning)
                            </button>
                            <button
                                onClick={() => setIsRed(false)}
                                className={`py-3 px-4 rounded-xl font-medium transition-all ${!isRed
                                    ? 'bg-gradient-to-r from-gray-500 to-slate-500 text-white shadow-lg'
                                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                    }`}
                            >
                                ⚪ Grey (Subtle)
                            </button>
                        </div>
                    </div>

                    <button
                        onClick={handleProcess}
                        disabled={loading || !text}
                        className={`w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-violet-500 to-purple-600 text-white font-bold py-3 sm:py-4 px-6 rounded-xl transition-all shadow-lg hover:shadow-xl ${loading || !text ? 'opacity-50 cursor-not-allowed' : 'hover:scale-[1.02]'
                            }`}
                    >
                        {loading ? <Loader2 className="animate-spin" size={20} /> : <Stamp size={20} />}
                        <span className="text-sm sm:text-base">{loading ? 'Adding Watermark...' : 'Add Watermark'}</span>
                    </button>
                </div>
            )}
        </ToolPageLayout>
    );
};

export default AddWatermarkClient;
