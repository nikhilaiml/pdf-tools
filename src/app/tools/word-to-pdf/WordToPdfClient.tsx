'use client';

import { useState, useRef } from 'react';
import mammoth from 'mammoth';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { Loader2, FileText, Download, Cloud, FileUp } from 'lucide-react';
import ToolPageLayout from '../../components/ToolPageLayout';

const WordToPdfPage = () => {
    const [file, setFile] = useState<File | null>(null);
    const [htmlContent, setHtmlContent] = useState('');
    const [loading, setLoading] = useState(false);
    const [isDragging, setIsDragging] = useState(false);
    const previewRef = useRef<HTMLDivElement>(null);

    const handleFileSelect = async (selectedFile: File) => {
        if (!selectedFile.name.toLowerCase().endsWith('.docx')) {
            alert('Please select a valid Word file (.docx)');
            return;
        }

        setFile(selectedFile);
        setLoading(true);
        try {
            const arrayBuffer = await selectedFile.arrayBuffer();
            const result = await mammoth.convertToHtml({ arrayBuffer });
            setHtmlContent(result.value);
        } catch (error) {
            console.error('Error reading Word file:', error);
            alert('Failed to read Word file. Ensure it is a valid .docx');
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
            pdf.save(`${file?.name.replace('.docx', '') || 'converted'}.pdf`);
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
            title: "Step 1: Upload Word File",
            description: "Select or drag and drop your Word document (.docx) that you want to convert to PDF."
        },
        {
            title: "Step 2: Preview",
            description: "Review your document preview to ensure everything looks correct before conversion."
        },
        {
            title: "Step 3: Download PDF",
            description: "Get your PDF instantly. Perfect for sharing, printing, or archiving your documents."
        }
    ];

    return (
        <ToolPageLayout
            title="Word to PDF Converter"
            subtitle="Convert Word documents (.docx) to PDF format."
            steps={steps}
            ctaText="Download PDF"
            onAction={handleConvert}
            loading={loading}
            disabled={!file || !htmlContent}
            showCta={!!file && !!htmlContent}
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
                        Drag & Drop Word File Here
                    </p>
                    <p className="text-sm sm:text-base text-gray-500 text-center">or click to browse (.docx)</p>

                    <input
                        id="file-input"
                        type="file"
                        accept=".docx"
                        onChange={(e) => e.target.files?.[0] && handleFileSelect(e.target.files[0])}
                        className="hidden"
                    />
                </div>
            ) : (
                <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl border border-gray-100 p-4 sm:p-6">
                    <div className="flex items-center justify-between mb-4 p-3 sm:p-4 bg-gray-50 rounded-xl">
                        <div className="flex items-center space-x-3">
                            <div className="p-2 bg-purple-100 rounded-lg">
                                <FileText className="text-purple-500 w-5 h-5" />
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

                    {/* Preview */}
                    <div className="bg-gray-100 p-3 sm:p-4 rounded-xl overflow-auto max-h-[300px] sm:max-h-[400px] mb-4">
                        <div
                            ref={previewRef}
                            className="bg-white text-black p-4 sm:p-6 shadow-sm min-h-[200px] prose max-w-none text-sm sm:text-base"
                            dangerouslySetInnerHTML={{ __html: htmlContent }}
                        />
                    </div>

                    <button
                        onClick={handleConvert}
                        disabled={loading || !htmlContent}
                        className={`w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-violet-500 to-purple-600 text-white font-bold py-3 sm:py-4 px-6 rounded-xl transition-all shadow-lg hover:shadow-xl ${loading || !htmlContent ? 'opacity-50 cursor-not-allowed' : 'hover:scale-[1.02]'
                            }`}
                    >
                        {loading ? <Loader2 className="animate-spin" size={20} /> : <Download size={20} />}
                        <span className="text-sm sm:text-base">{loading ? 'Creating PDF...' : 'Download PDF'}</span>
                    </button>
                </div>
            )}
        </ToolPageLayout>
    );
};

export default WordToPdfPage;
