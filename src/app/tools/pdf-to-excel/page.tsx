'use client';

import { useState } from 'react';
import * as XLSX from 'xlsx';
import { Loader2, FileSpreadsheet, Download, Cloud } from 'lucide-react';
import ToolPageLayout from '../../components/ToolPageLayout';


const PdfToExcelPage = () => {
    const [file, setFile] = useState<File | null>(null);
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

    const handleConvert = async () => {
        if (!file) return;

        setLoading(true);
        try {
            const pdfjsLib = await import('pdfjs-dist');
            pdfjsLib.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjsLib.version}/build/pdf.worker.min.mjs`;

            const arrayBuffer = await file.arrayBuffer();
            const pdf = await pdfjsLib.getDocument(arrayBuffer).promise;

            const wb = XLSX.utils.book_new();

            for (let i = 1; i <= pdf.numPages; i++) {
                const page = await pdf.getPage(i);
                const textContent = await page.getTextContent();
                const items = textContent.items as any[];

                // Group by Y
                const rows: { [y: number]: any[] } = {};
                items.forEach(item => {
                    const y = Math.round(item.transform[5]);
                    if (!rows[y]) rows[y] = [];
                    rows[y].push(item);
                });

                // Sort Y descending
                const sortedY = Object.keys(rows).map(Number).sort((a, b) => b - a);

                // Build row data
                const sheetData: string[][] = [];

                sortedY.forEach(y => {
                    const rowItems = rows[y];
                    rowItems.sort((a, b) => a.transform[4] - b.transform[4]); // Sort X ascending
                    const rowText = rowItems.map(item => item.str);
                    sheetData.push(rowText);
                });

                const ws = XLSX.utils.aoa_to_sheet(sheetData);
                XLSX.utils.book_append_sheet(wb, ws, `Page ${i}`);
            }

            XLSX.writeFile(wb, `${file.name.replace('.pdf', '')}.xlsx`);

            alert('File converted successfully!');
        } catch (error) {
            console.error('Error converting to Excel:', error);
            alert('Failed to convert PDF.');
        } finally {
            setLoading(false);
        }
    };

    const steps = [
        {
            title: "Step 1: Upload PDF",
            description: "Select or drag your PDF file containing tables or data."
        },
        {
            title: "Step 2: Extract",
            description: "We'll analyze the layout and extract text into cells."
        },
        {
            title: "Step 3: Download",
            description: "Get your Excel (.xlsx) file with extracted data."
        }
    ];

    return (
        <ToolPageLayout
            title="PDF to Excel"
            subtitle="Extract tables and data from PDF to an Excel compatible file."
            steps={steps}
            ctaText="Convert to Excel"
            onAction={handleConvert}
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
                        <div className={`p-4 sm:p-6 rounded-2xl sm:rounded-3xl transition-colors ${isDragging ? 'bg-purple-100' : 'bg-green-50'}`}>
                            <Cloud className={`w-12 h-12 sm:w-16 sm:h-16 ${isDragging ? 'text-purple-500' : 'text-green-400'}`} strokeWidth={1.5} />
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
                <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl border border-gray-100 p-6 sm:p-8 max-w-2xl mx-auto">
                    <div className="flex items-center justify-between mb-6 p-3 sm:p-4 bg-gray-50 rounded-xl">
                        <div className="flex items-center space-x-3">
                            <div className="p-2 bg-green-100 rounded-lg">
                                <FileSpreadsheet className="text-green-500 w-5 h-5 sm:w-6 sm:h-6" />
                            </div>
                            <span className="font-medium text-gray-900 truncate max-w-[150px] sm:max-w-[200px] text-sm sm:text-base">{file.name}</span>
                        </div>
                        <button
                            onClick={() => setFile(null)}
                            className="text-xs sm:text-sm text-red-500 hover:text-red-700 font-medium"
                        >
                            Change
                        </button>
                    </div>

                    <button
                        onClick={handleConvert}
                        disabled={loading}
                        className={`w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-violet-500 to-purple-600 text-white font-bold py-3 sm:py-4 px-6 rounded-xl transition-all shadow-lg hover:shadow-xl ${loading ? 'opacity-50 cursor-not-allowed' : 'hover:scale-[1.02]'
                            }`}
                    >
                        {loading ? <Loader2 className="animate-spin" size={20} /> : <Download size={20} />}
                        <span className="text-sm sm:text-base">{loading ? 'Extracting Data...' : 'Convert to Excel'}</span>
                    </button>

                    <p className="text-xs text-center text-gray-500 mt-4">
                        Best for simple tables. Complex layouts may need adjustment.
                    </p>
                </div>
            )}
        </ToolPageLayout>
    );
};

export default PdfToExcelPage;
