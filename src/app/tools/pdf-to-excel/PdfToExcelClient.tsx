'use client';

import { useState } from 'react';
import * as XLSX from 'xlsx';
import { Loader2, FileSpreadsheet, Download, Cloud, CheckCircle, RefreshCw, AlertCircle } from 'lucide-react';

const PdfToExcelClient = () => {
    const [file, setFile] = useState<File | null>(null);
    const [loading, setLoading] = useState(false);
    const [isDragging, setIsDragging] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleFileSelect = (selectedFile: File) => {
        setError(null);
        if (selectedFile.type === 'application/pdf' || selectedFile.name.toLowerCase().endsWith('.pdf')) {
            setFile(selectedFile);
        } else {
            setError('Please select a valid PDF file.');
        }
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(false);
        if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
            handleFileSelect(e.dataTransfer.files[0]);
        }
    };

    const handleConvert = async () => {
        if (!file) return;

        setLoading(true);
        setError(null);
        try {
            const pdfjsLib = await import('pdfjs-dist');
            pdfjsLib.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjsLib.version}/build/pdf.worker.min.mjs`;

            const arrayBuffer = await file.arrayBuffer();
            const pdf = await pdfjsLib.getDocument(arrayBuffer).promise;

            const wb = XLSX.utils.book_new();

            for (let i = 1; i <= pdf.numPages; i++) {
                const page = await pdf.getPage(i);
                const textContent = await page.getTextContent();
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                const items = textContent.items as any[];

                // Group by Y (row detection)
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                const rows: { [y: number]: any[] } = {};
                items.forEach(item => {
                    // Y coordinate is usually roughly same for items on same line
                    // We might need fuzzy matching, but for now simple rounding
                    const y = Math.round(item.transform[5]);
                    if (!rows[y]) rows[y] = [];
                    rows[y].push(item);
                });

                // Sort Y descending (PDF coordinates start from bottom usually, checking assumption)
                // Actually typical PDF text extraction order might need verification.
                // Assuming standard visual order:
                const sortedY = Object.keys(rows).map(Number).sort((a, b) => b - a);

                // Build row data
                const sheetData: string[][] = [];

                sortedY.forEach(y => {
                    const rowItems = rows[y];
                    // Sort X ascending
                    rowItems.sort((a, b) => a.transform[4] - b.transform[4]);
                    const rowText = rowItems.map(item => item.str);
                    sheetData.push(rowText);
                });

                const ws = XLSX.utils.aoa_to_sheet(sheetData);
                XLSX.utils.book_append_sheet(wb, ws, `Page ${i}`);
            }

            XLSX.writeFile(wb, `${file.name.replace('.pdf', '')}.xlsx`);
        } catch (error) {
            console.error('Error converting to Excel:', error);
            setError('Failed to convert PDF. The file might be encrypted or not contain text data.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="w-full">
            {!file ? (
                <div className="animate-in fade-in zoom-in-95 duration-500">
                    <div
                        className={`
                            bg-white rounded-2xl sm:rounded-3xl shadow-xl border-2 border-dashed p-8 sm:p-12
                            transition-all duration-300 cursor-pointer mb-8 text-center group
                            ${isDragging
                                ? 'border-green-500 bg-green-50 scale-[1.02]'
                                : 'border-gray-200 hover:border-green-400 hover:shadow-2xl'
                            }
                        `}
                        onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
                        onDragLeave={(e) => { e.preventDefault(); setIsDragging(false); }}
                        onDrop={handleDrop}
                        onClick={() => document.getElementById('file-input')?.click()}
                    >
                        <div className={`p-6 rounded-full inline-block mb-6 transition-colors ${isDragging ? 'bg-green-100' : 'bg-green-50 group-hover:bg-green-100'}`}>
                            <FileSpreadsheet className={`w-16 h-16 ${isDragging ? 'text-green-600' : 'text-green-500 group-hover:text-green-600'}`} />
                        </div>
                        <p className="text-2xl font-bold text-gray-900 mb-2">Upload PDF File</p>
                        <p className="text-gray-500">Drag & drop or click to browse</p>
                        <input id="file-input" type="file" accept=".pdf" className="hidden" onChange={(e) => e.target.files?.[0] && handleFileSelect(e.target.files[0])} />
                    </div>
                    {error && (
                        <div className="flex items-center justify-center gap-2 text-red-500 mt-4 animate-in fade-in slide-in-from-top-2">
                            <AlertCircle size={18} />
                            <span className="text-sm font-medium">{error}</span>
                        </div>
                    )}
                </div>
            ) : (
                <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl border border-gray-100 p-6 sm:p-10 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <div className="flex items-center justify-between mb-8 p-4 bg-gray-50 rounded-xl border border-gray-100">
                        <div className="flex items-center space-x-4 overflow-hidden">
                            <div className="p-3 bg-green-100 rounded-lg shrink-0">
                                <FileSpreadsheet className="text-green-600 w-6 h-6" />
                            </div>
                            <div className="min-w-0">
                                <p className="font-bold text-gray-900 truncate">{file.name}</p>
                                <p className="text-xs text-gray-500">{(file.size / 1024).toFixed(1)} KB</p>
                            </div>
                        </div>
                        <button
                            onClick={() => { setFile(null); setError(null); }}
                            className="text-sm text-red-500 hover:text-red-700 font-medium hover:underline ml-4"
                        >
                            Change
                        </button>
                    </div>

                    <div className="space-y-4">
                        <button
                            onClick={handleConvert}
                            disabled={loading}
                            className={`w-full flex items-center justify-center space-x-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold py-4 px-8 rounded-xl transition-all shadow-lg hover:shadow-xl ${loading ? 'opacity-70 cursor-not-allowed' : 'hover:scale-[1.02] hover:from-green-400 hover:to-emerald-500'
                                }`}
                        >
                            {loading ? <Loader2 className="animate-spin" size={24} /> : <Download size={24} />}
                            <span className="text-lg">{loading ? 'Converting...' : 'Convert PDF to Excel'}</span>
                        </button>

                        <button
                            onClick={() => { setFile(null); setError(null); }}
                            className="w-full flex items-center justify-center space-x-2 text-gray-500 font-semibold py-3 hover:bg-gray-50 rounded-xl transition-colors"
                        >
                            <RefreshCw size={16} />
                            <span>Reset</span>
                        </button>
                    </div>

                    {error && (
                        <div className="mt-6 p-4 bg-red-50 text-red-700 rounded-xl text-sm text-center border border-red-100 flex items-center justify-center gap-2">
                            <AlertCircle size={16} />
                            {error}
                        </div>
                    )}

                    <div className="mt-8 pt-6 border-t border-gray-100">
                        <p className="text-xs text-center text-gray-400 flex items-center justify-center gap-1.5">
                            <CheckCircle className="w-3 h-3 text-green-500" />
                            Your files are processed securely and never stored.
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default PdfToExcelClient;
