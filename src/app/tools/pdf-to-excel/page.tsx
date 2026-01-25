'use client';

import { useState } from 'react';
import * as XLSX from 'xlsx';
import { Loader2, FileSpreadsheet, Download } from 'lucide-react';
import FileUploader from '../../components/FileUploader';


const PdfToExcelPage = () => {
    const [file, setFile] = useState<File | null>(null);
    const [loading, setLoading] = useState(false);

    const handleFileChange = (file: File) => {
        setFile(file);
    };



    const handleConvert = async () => {
        if (!file) return;

        setLoading(true);
        try {
            // Dynamically import PDF.js to avoid SSR issues with DOMMatrix
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

    return (
        <div className="max-w-4xl mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-4 text-center text-gray-900 dark:text-white">
                PDF to Excel
            </h1>
            <p className="text-center text-gray-500 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
                Extract tables and data from PDF to an Excel compatible CSV file.
            </p>

            {!file ? (
                <FileUploader onFileSelect={handleFileChange} label="Select PDF to Extract Data" />
            ) : (
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-8 max-w-2xl mx-auto animate-in fade-in zoom-in duration-300">
                    <div className="flex items-center space-x-3 mb-8 p-4 bg-gray-50 dark:bg-gray-900/50 rounded-lg">
                        <FileSpreadsheet className="text-green-500" size={24} />
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

                    <button
                        onClick={handleConvert}
                        disabled={loading}
                        className={`w-full flex items-center justify-center space-x-2 bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-6 rounded-xl transition-all shadow-lg hover:shadow-xl ${loading ? 'opacity-50 cursor-not-allowed' : ''
                            }`}
                    >
                        {loading ? <Loader2 className="animate-spin" /> : <Download size={20} />}
                        <span>{loading ? 'Extracting Data...' : 'Convert to Excel (CSV)'}</span>
                    </button>

                    <p className="text-xs text-center text-gray-500 mt-4">
                        Best for simple tables. Complex layouts may need adjustment.
                    </p>
                </div>
            )}
        </div>
    );
};

export default PdfToExcelPage;
