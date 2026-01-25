'use client';

import { useState } from 'react';
import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';
import { Loader2, ListOrdered, FileText } from 'lucide-react';
import FileUploader from '../../components/FileUploader';

const AddPageNumbersPage = () => {
    const [file, setFile] = useState<File | null>(null);
    const [loading, setLoading] = useState(false);
    const [position, setPosition] = useState('bottom-right'); // bottom-right, bottom-center, bottom-left

    const handleFileChange = (file: File) => {
        setFile(file);
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

                let x = width - textWidth - 20; // Default bottom-right
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

    return (
        <div className="max-w-4xl mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-4 text-center text-gray-900 dark:text-white">
                Add Page Numbers
            </h1>
            <p className="text-center text-gray-500 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
                Insert logical page numbers into your document.
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

                    <div className="mb-8">
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Position
                        </label>
                        <div className="grid grid-cols-3 gap-3">
                            {['bottom-left', 'bottom-center', 'bottom-right'].map((pos) => (
                                <button
                                    key={pos}
                                    onClick={() => setPosition(pos)}
                                    className={`p-3 rounded-lg border transition-all text-sm capitalize ${position === pos
                                            ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300'
                                            : 'border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800'
                                        }`}
                                >
                                    {pos.replace('bottom-', '')}
                                </button>
                            ))}
                        </div>
                    </div>

                    <button
                        onClick={handleProcess}
                        disabled={loading}
                        className={`w-full flex items-center justify-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-xl transition-all shadow-lg hover:shadow-xl ${loading ? 'opacity-50 cursor-not-allowed' : ''
                            }`}
                    >
                        {loading ? <Loader2 className="animate-spin" /> : <ListOrdered size={20} />}
                        <span>{loading ? 'Adding Numbers...' : 'Add Page Numbers'}</span>
                    </button>
                </div>
            )}
        </div>
    );
};

export default AddPageNumbersPage;
