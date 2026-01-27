'use client';

import { useState, useRef } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { Loader2, FileCode, Download, Eye } from 'lucide-react';
import ToolPageLayout from '../../components/ToolPageLayout';

const HtmlToPdfPage = () => {
    const [htmlCode, setHtmlCode] = useState('<h1>Hello World</h1>\n<p>This is a sample HTML content.</p>');
    const [loading, setLoading] = useState(false);
    const previewRef = useRef<HTMLDivElement>(null);

    const handleConvert = async () => {
        if (!previewRef.current) return;

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
            pdf.save('html-converted.pdf');
        } catch (error) {
            console.error('Error creating PDF:', error);
            alert('Failed to generate PDF.');
        } finally {
            setLoading(false);
        }
    };

    const steps = [
        {
            title: "Step 1: Enter HTML",
            description: "Paste or type your HTML code in the editor on the left."
        },
        {
            title: "Step 2: Preview",
            description: "See how your HTML will look in the preview panel on the right."
        },
        {
            title: "Step 3: Download",
            description: "Click the download button to convert and save as PDF."
        }
    ];

    return (
        <ToolPageLayout
            title="HTML to PDF"
            subtitle="Convert raw HTML code into a PDF document instantly."
            steps={steps}
            ctaText="Download PDF"
            onAction={handleConvert}
            loading={loading}
            disabled={!htmlCode.trim()}
            showCta={false}
        >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Input Section */}
                <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-4 sm:p-6 flex flex-col h-[500px]">
                    <h3 className="flex items-center space-x-2 font-bold text-gray-900 mb-4">
                        <FileCode size={20} className="text-purple-500" />
                        <span>HTML Input</span>
                    </h3>
                    <textarea
                        value={htmlCode}
                        onChange={(e) => setHtmlCode(e.target.value)}
                        className="flex-1 w-full bg-gray-50 border border-gray-200 rounded-xl p-4 font-mono text-sm focus:ring-2 focus:ring-purple-500 focus:border-transparent focus:outline-none resize-none"
                        placeholder="Paste your HTML here..."
                    />
                </div>

                {/* Preview Section */}
                <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-4 sm:p-6 flex flex-col h-[500px]">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="flex items-center space-x-2 font-bold text-gray-900">
                            <Eye size={20} className="text-purple-500" />
                            <span>Preview</span>
                        </h3>
                        <button
                            onClick={handleConvert}
                            disabled={loading}
                            className={`flex items-center space-x-2 bg-gradient-to-r from-violet-500 to-purple-600 text-white font-bold py-2 px-4 rounded-lg transition-all shadow-lg hover:shadow-xl ${loading ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105'
                                }`}
                        >
                            {loading ? <Loader2 className="animate-spin" size={16} /> : <Download size={16} />}
                            <span className="text-sm">Download PDF</span>
                        </button>
                    </div>

                    <div className="flex-1 w-full bg-white rounded-xl border border-gray-200 overflow-auto p-4">
                        <div
                            ref={previewRef}
                            className="bg-white text-black min-h-full prose max-w-none"
                            style={{ minWidth: '100%' }}
                            dangerouslySetInnerHTML={{ __html: htmlCode }}
                        />
                    </div>
                </div>
            </div>
        </ToolPageLayout>
    );
};

export default HtmlToPdfPage;
