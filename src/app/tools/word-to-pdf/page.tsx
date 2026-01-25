'use client';

import { useState, useRef } from 'react';
import mammoth from 'mammoth';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { Loader2, FileText, Download } from 'lucide-react';
import FileUploader from '../../components/FileUploader';

const WordToPdfPage = () => {
    const [file, setFile] = useState<File | null>(null);
    const [htmlContent, setHtmlContent] = useState('');
    const [loading, setLoading] = useState(false);
    const previewRef = useRef<HTMLDivElement>(null);

    const handleFileChange = async (file: File) => {
        setFile(file);
        setLoading(true);
        try {
            const arrayBuffer = await file.arrayBuffer();
            const result = await mammoth.convertToHtml({ arrayBuffer });
            setHtmlContent(result.value);
        } catch (error) {
            console.error('Error reading Word file:', error);
            alert('Failed to read Word file. Ensure it is a valid .docx');
        } finally {
            setLoading(false);
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

            // Calculate PDF size based on canvas ratio, fitting A4 usually or auto
            const pdf = new jsPDF({
                orientation: 'portrait',
                unit: 'px',
                format: [canvas.width, canvas.height]
            });

            pdf.addImage(imgData, 'PNG', 0, 0, canvas.width, canvas.height);
            pdf.save(`${file?.name.replace('.docx', '') || 'converted'}.pdf`);
            alert('PDF created successfully!');
        } catch (error) {
            console.error('Error creating PDF:', error);
            alert('Failed to generate PDF.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-4xl mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-4 text-center text-gray-900 dark:text-white">
                Word to PDF
            </h1>
            <p className="text-center text-gray-500 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
                Convert Word documents (.docx) to PDF.
            </p>

            {!file ? (
                <FileUploader onFileSelect={handleFileChange} accept=".docx" label="Select Word File" />
            ) : (
                <div className="grid grid-cols-1 gap-8">
                    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6">
                        <div className="flex justify-between items-center mb-4">
                            <div className="flex items-center space-x-3">
                                <FileText className="text-blue-500" size={24} />
                                <span className="font-medium text-gray-900 dark:text-white truncate max-w-[200px]">{file.name}</span>
                                <button
                                    onClick={() => { setFile(null); setHtmlContent(''); }}
                                    className="text-xs text-red-500 hover:text-red-700 hover:underline"
                                >
                                    Change File
                                </button>
                            </div>

                            <button
                                onClick={handleConvert}
                                disabled={loading || !htmlContent}
                                className={`flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition-all ${loading ? 'opacity-50 cursor-not-allowed' : ''
                                    }`}
                            >
                                {loading ? <Loader2 className="animate-spin" size={16} /> : <Download size={16} />}
                                <span>Download PDF</span>
                            </button>
                        </div>

                        <div className="bg-gray-100 dark:bg-gray-900 p-4 rounded-lg overflow-auto max-h-[500px] border border-gray-200 dark:border-gray-700">
                            <div
                                ref={previewRef}
                                className="bg-white text-black p-8 shadow-sm min-h-[400px] prose max-w-none"
                                dangerouslySetInnerHTML={{ __html: htmlContent }}
                            />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default WordToPdfPage;
