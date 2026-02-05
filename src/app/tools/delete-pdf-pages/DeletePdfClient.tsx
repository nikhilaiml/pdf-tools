'use client';

import { useState } from 'react';
import { PDFDocument } from 'pdf-lib';
import { Loader2, Trash2, FileText, Cloud } from 'lucide-react';
import ToolPageLayout from '../../components/ToolPageLayout';

interface DeletePdfClientProps {
    seoContent: React.ReactNode;
}

export default function DeletePdfClient({ seoContent }: DeletePdfClientProps) {
    const [file, setFile] = useState<File | null>(null);
    const [pagesToDelete, setPagesToDelete] = useState('');
    const [loading, setLoading] = useState(false);
    const [pageCount, setPageCount] = useState<number | null>(null);
    const [isDragging, setIsDragging] = useState(false);

    const handleFileSelect = async (selectedFile: File) => {
        if (selectedFile.type === 'application/pdf' || selectedFile.name.toLowerCase().endsWith('.pdf')) {
            setFile(selectedFile);
            const bytes = await selectedFile.arrayBuffer();
            const pdf = await PDFDocument.load(bytes);
            setPageCount(pdf.getPageCount());
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

    const parsePages = (input: string, maxPages: number) => {
        const pages = new Set<number>();
        input.split(',').forEach(part => {
            if (part.includes('-')) {
                const [start, end] = part.split('-').map(n => parseInt(n.trim(), 10));
                if (start >= 1 && end <= maxPages && start <= end) {
                    for (let i = start; i <= end; i++) pages.add(i - 1);
                }
            } else {
                const page = parseInt(part.trim(), 10);
                if (page >= 1 && page <= maxPages) pages.add(page - 1);
            }
        });
        return Array.from(pages).sort((a, b) => b - a);
    };

    const handleDelete = async () => {
        if (!file || !pagesToDelete || !pageCount) {
            alert('Please select a PDF and valid pages.');
            return;
        }

        try {
            setLoading(true);
            const pdfBytes = await file.arrayBuffer();
            const pdf = await PDFDocument.load(pdfBytes);
            const pages = parsePages(pagesToDelete, pdf.getPageCount());

            if (pages.length === 0) {
                alert('No valid pages to delete.');
                return;
            }

            pages.forEach(index => pdf.removePage(index));

            const newBytes = await pdf.save();
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const blob = new Blob([newBytes as any], { type: 'application/pdf' });
            const url = URL.createObjectURL(blob);

            const link = document.createElement('a');
            link.href = url;
            link.download = `deleted-pages-${file.name}`;
            link.click();
            URL.revokeObjectURL(url);
        } catch (err) {
            console.error(err);
            alert('Failed to process PDF.');
        } finally {
            setLoading(false);
        }
    };

    const steps = [
        {
            title: "Step 1: Upload PDF",
            description: "Select or drag and drop your PDF file that you want to remove pages from."
        },
        {
            title: "Step 2: Select Pages",
            description: "Enter the page numbers to delete. Use commas or ranges (e.g., 1, 3-5, 10)."
        },
        {
            title: "Step 3: Download",
            description: "Get your PDF with the unwanted pages removed instantly."
        }
    ];

    return (
        <ToolPageLayout
            title="Delete PDF Pages"
            subtitle="Remove unwanted pages from your document."
            steps={steps}
            ctaText="Delete Pages"
            onAction={handleDelete}
            loading={loading}
            disabled={!file || !pagesToDelete}
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
                    <div className="flex items-center justify-between mb-6 p-3 sm:p-4 bg-gray-50 rounded-xl">
                        <div className="flex items-center space-x-3">
                            <div className="p-2 sm:p-3 bg-purple-100 rounded-lg">
                                <FileText className="text-purple-500 w-5 h-5 sm:w-6 sm:h-6" />
                            </div>
                            <div>
                                <p className="font-medium text-gray-900 truncate max-w-[150px] sm:max-w-[200px] text-sm sm:text-base">{file.name}</p>
                                <p className="text-xs sm:text-sm text-gray-500">{pageCount} pages</p>
                            </div>
                        </div>
                        <button
                            onClick={() => { setFile(null); setPageCount(null); }}
                            className="text-xs sm:text-sm text-red-500 hover:text-red-700 font-medium"
                        >
                            Remove
                        </button>
                    </div>

                    {/* Pages Input */}
                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Pages to Delete
                            <span className="text-gray-400 font-normal ml-2">(e.g. 1, 3-5, 10)</span>
                        </label>
                        <input
                            type="text"
                            placeholder="e.g. 2, 4-6"
                            value={pagesToDelete}
                            onChange={e => setPagesToDelete(e.target.value)}
                            className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 px-4 focus:ring-2 focus:ring-purple-500 focus:border-transparent focus:outline-none text-gray-900"
                        />
                    </div>

                    <button
                        onClick={handleDelete}
                        disabled={loading || !pagesToDelete}
                        className={`w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-red-500 to-rose-600 text-white font-bold py-3 sm:py-4 px-6 rounded-xl transition-all shadow-lg hover:shadow-xl ${loading || !pagesToDelete ? 'opacity-50 cursor-not-allowed' : 'hover:scale-[1.02]'
                            }`}
                    >
                        {loading ? <Loader2 className="animate-spin" size={20} /> : <Trash2 size={20} />}
                        <span className="text-sm sm:text-base">{loading ? 'Deleting...' : 'Delete Pages'}</span>
                    </button>
                </div>
            )}
        </ToolPageLayout>
    );
}
