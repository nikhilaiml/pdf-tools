'use client';

import { useState, useRef } from 'react';
import * as XLSX from 'xlsx';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { Loader2, FileSpreadsheet, Download, Cloud } from 'lucide-react';
import ToolPageLayout from '../../components/ToolPageLayout';

const ExcelToPdfClient = () => {
    const [file, setFile] = useState<File | null>(null);
    const [htmlContent, setHtmlContent] = useState('');
    const [loading, setLoading] = useState(false);
    const [isDragging, setIsDragging] = useState(false);
    const previewRef = useRef<HTMLDivElement>(null);

    const handleFileSelect = async (selectedFile: File) => {
        setFile(selectedFile);
        setLoading(true);
        try {
            const arrayBuffer = await selectedFile.arrayBuffer();
            const workbook = XLSX.read(arrayBuffer);
            const sheetName = workbook.SheetNames[0];
            const worksheet = workbook.Sheets[sheetName];
            const html = XLSX.utils.sheet_to_html(worksheet);
            setHtmlContent(html);
        } catch (error) {
            console.error('Error reading Excel file:', error);
            alert('Failed to read Excel file.');
        } finally {
            setLoading(false);
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
        if (!previewRef.current || !htmlContent) return;

        setLoading(true);
        try {
            const canvas = await html2canvas(previewRef.current, {
                scale: 2
            });
            const imgData = canvas.toDataURL('image/png');

            const pdf = new jsPDF({
                orientation: 'portrait',
                unit: 'px',
                format: [canvas.width, canvas.height]
            });

            pdf.addImage(imgData, 'PNG', 0, 0, canvas.width, canvas.height);
            pdf.save(`${file?.name.replace('.xlsx', '').replace('.xls', '').replace('.csv', '') || 'converted'}.pdf`);
            alert('PDF created successfully!');
        } catch (error) {
            console.error('Error creating PDF:', error);
            alert('Failed to generate PDF.');
        } finally {
            setLoading(false);
        }
    };

    const steps = [
        {
            title: "Step 1: Upload Excel",
            description: "Select or drag your Excel file (.xlsx, .xls, .csv)."
        },
        {
            title: "Step 2: Preview",
            description: "Review how your spreadsheet will look in PDF format."
        },
        {
            title: "Step 3: Download",
            description: "Get your Excel data converted to a professional PDF."
        }
    ];

    return (
        <ToolPageLayout
            title="Excel to PDF"
            subtitle="Convert Excel spreadsheets (.xlsx, .xls, .csv) to PDF."
            steps={steps}
            ctaText="Download PDF"
            onAction={handleConvert}
            loading={loading}
            disabled={!htmlContent}
            showCta={!!htmlContent}
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
                        Drag & Drop Excel File Here
                    </p>
                    <p className="text-sm sm:text-base text-gray-500 text-center">or click to browse (.xlsx, .xls, .csv)</p>

                    <input
                        id="file-input"
                        type="file"
                        accept=".xlsx,.xls,.csv"
                        onChange={(e) => e.target.files?.[0] && handleFileSelect(e.target.files[0])}
                        className="hidden"
                    />
                </div>
            ) : (
                <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl border border-gray-100 p-4 sm:p-6">
                    <div className="flex items-center justify-between mb-4 p-3 sm:p-4 bg-gray-50 rounded-xl">
                        <div className="flex items-center space-x-3">
                            <div className="p-2 bg-green-100 rounded-lg">
                                <FileSpreadsheet className="text-green-500 w-5 h-5 sm:w-6 sm:h-6" />
                            </div>
                            <span className="font-medium text-gray-900 truncate max-w-[150px] sm:max-w-[200px] text-sm sm:text-base">{file.name}</span>
                        </div>
                        <button
                            onClick={() => { setFile(null); setHtmlContent(''); }}
                            className="text-xs sm:text-sm text-red-500 hover:text-red-700 font-medium"
                        >
                            Change
                        </button>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-xl overflow-auto max-h-[400px] border border-gray-200 mb-4">
                        <div
                            ref={previewRef}
                            className="bg-white text-black p-4 shadow-sm min-h-[300px] w-fit"
                            dangerouslySetInnerHTML={{ __html: htmlContent }}
                        />
                    </div>

                    <button
                        onClick={handleConvert}
                        disabled={loading || !htmlContent}
                        className={`w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-violet-500 to-purple-600 text-white font-bold py-3 sm:py-4 px-6 rounded-xl transition-all shadow-lg hover:shadow-xl ${loading ? 'opacity-50 cursor-not-allowed' : 'hover:scale-[1.02]'
                            }`}
                    >
                        {loading ? <Loader2 className="animate-spin" size={20} /> : <Download size={20} />}
                        <span className="text-sm sm:text-base">{loading ? 'Converting...' : 'Download PDF'}</span>
                    </button>
                </div>
            )}
        </ToolPageLayout>
    );
};

export default ExcelToPdfClient;
