'use client';

import { useState, useRef } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { Loader2, FileCode, Download, Eye } from 'lucide-react';

const HtmlToPdfPage = () => {
    const [htmlCode, setHtmlCode] = useState('<h1>Hello World</h1>\n<p>This is a sample HTML content.</p>');
    const [loading, setLoading] = useState(false);
    const previewRef = useRef<HTMLDivElement>(null);

    const handleConvert = async () => {
        if (!previewRef.current) return;

        setLoading(true);
        try {
            const canvas = await html2canvas(previewRef.current, {
                scale: 2 // Higher resolution
            });
            const imgData = canvas.toDataURL('image/png');

            const pdf = new jsPDF({
                orientation: 'portrait',
                unit: 'px',
                format: [canvas.width, canvas.height] // Match HTML size exactly
            });

            pdf.addImage(imgData, 'PNG', 0, 0, canvas.width, canvas.height);
            pdf.save('html-converted.pdf');
        } catch (error) {
            console.error('Error creating PDF:', error);
            alert('Failed to generate PDF.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-6xl mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-4 text-center text-gray-900 dark:text-white">
                HTML to PDF
            </h1>
            <p className="text-center text-gray-500 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
                Convert raw HTML code into a PDF document instantly.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Input Section */}
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 flex flex-col h-[600px]">
                    <h3 className="flex items-center space-x-2 font-bold text-gray-900 dark:text-white mb-4">
                        <FileCode size={20} className="text-purple-500" />
                        <span>HTML Input</span>
                    </h3>
                    <textarea
                        value={htmlCode}
                        onChange={(e) => setHtmlCode(e.target.value)}
                        className="flex-1 w-full bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg p-4 font-mono text-sm focus:ring-2 focus:ring-purple-500 focus:outline-none resize-none"
                        placeholder="Paste your HTML here..."
                    />
                </div>

                {/* Preview Section */}
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 flex flex-col h-[600px]">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="flex items-center space-x-2 font-bold text-gray-900 dark:text-white">
                            <Eye size={20} className="text-blue-500" />
                            <span>Preview</span>
                        </h3>
                        <button
                            onClick={handleConvert}
                            disabled={loading}
                            className={`flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition-all ${loading ? 'opacity-50 cursor-not-allowed' : ''
                                }`}
                        >
                            {loading ? <Loader2 className="animate-spin" size={16} /> : <Download size={16} />}
                            <span>Download PDF</span>
                        </button>
                    </div>

                    <div className="flex-1 w-full bg-white rounded-lg border border-gray-200 overflow-auto p-4">
                        {/* Rendered HTML content */}
                        <div
                            ref={previewRef}
                            className="bg-white text-black min-h-full"
                            style={{ minWidth: '100%' }} // Ensure full width for canvas
                            dangerouslySetInnerHTML={{ __html: htmlCode }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HtmlToPdfPage;
