'use client';

import { useState } from 'react';
import { PDFDocument, rgb, degrees } from 'pdf-lib';
import { Loader2, Stamp, FileText, Type } from 'lucide-react';
import FileUploader from '../../components/FileUploader';

const AddWatermarkPage = () => {
    const [file, setFile] = useState<File | null>(null);
    const [text, setText] = useState('CONFIDENTIAL');
    const [loading, setLoading] = useState(false);
    // Simple color customization for MVP
    const [isRed, setIsRed] = useState(true);

    const handleFileChange = (file: File) => {
        setFile(file);
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
                // Simple calculation for centering standard font size 50
                const fontSize = 50;
                // Roughly 0.6 * fontSize * charCount for width? 
                // Better to just eye-ball center based on char count for simple MVP
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

    return (
        <div className="max-w-4xl mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-4 text-center text-gray-900 dark:text-white">
                Add Watermark
            </h1>
            <p className="text-center text-gray-500 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
                Stamp text over your PDF pages.
            </p>

            {!file ? (
                <FileUploader onFileSelect={handleFileChange} label="Select PDF" />
            ) : (
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-8 max-w-2xl mx-auto animate-in fade-in zoom-in duration-300">
                    <div className="flex items-center space-x-3 mb-6 p-4 bg-gray-50 dark:bg-gray-900/50 rounded-lg">
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

                    <div className="mb-8 space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                Watermark Text
                            </label>
                            <div className="relative">
                                <Type className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                                <input
                                    type="text"
                                    value={text}
                                    onChange={(e) => setText(e.target.value)}
                                    className="pl-10 w-full bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg py-3 px-4 focus:ring-2 focus:ring-blue-500 focus:outline-none text-gray-900 dark:text-white"
                                    placeholder="CONFIDENTIAL"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                Color Style
                            </label>
                            <div className="flex space-x-4">
                                <button
                                    onClick={() => setIsRed(true)}
                                    className={`flex-1 py-3 rounded-lg border-2 transition-all ${isRed
                                            ? 'border-red-500 bg-red-50 dark:bg-red-900/20 text-red-600'
                                            : 'border-gray-200 dark:border-gray-700 opacity-60'
                                        }`}
                                >
                                    Red (Warning)
                                </button>
                                <button
                                    onClick={() => setIsRed(false)}
                                    className={`flex-1 py-3 rounded-lg border-2 transition-all ${!isRed
                                            ? 'border-gray-500 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300'
                                            : 'border-gray-200 dark:border-gray-700 opacity-60'
                                        }`}
                                >
                                    Grey (Subtle)
                                </button>
                            </div>
                        </div>
                    </div>

                    <button
                        onClick={handleProcess}
                        disabled={loading || !text}
                        className={`w-full flex items-center justify-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-xl transition-all shadow-lg hover:shadow-xl ${loading || !text ? 'opacity-50 cursor-not-allowed' : ''
                            }`}
                    >
                        {loading ? <Loader2 className="animate-spin" /> : <Stamp size={20} />}
                        <span>{loading ? 'Stamping PDF...' : 'Add Watermark'}</span>
                    </button>
                </div>
            )}
        </div>
    );
};

export default AddWatermarkPage;
