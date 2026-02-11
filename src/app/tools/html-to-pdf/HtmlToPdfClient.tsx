'use client';

import { useState, useRef } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { Loader2, FileCode, Download, Eye, Globe, Code2 } from 'lucide-react';
import ToolPageLayout from '../../components/ToolPageLayout';
import { convertUrlToPdf } from '../../actions';

interface HtmlToPdfClientProps {
    seoContent?: React.ReactNode;
}

const HtmlToPdfClient = ({ seoContent }: HtmlToPdfClientProps) => {
    const [activeTab, setActiveTab] = useState<'html' | 'url'>('html');
    const [htmlCode, setHtmlCode] = useState('<h1>Hello World</h1>\n<p>This is a sample HTML content.</p>');
    const [urlInput, setUrlInput] = useState('');
    const [loading, setLoading] = useState(false);
    const previewRef = useRef<HTMLDivElement>(null);

    // Client-side HTML to PDF
    const handleHtmlConvert = async () => {
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

    // Server-side URL to PDF
    const handleUrlConvert = async () => {
        if (!urlInput) {
            alert('Please enter a valid URL');
            return;
        }

        setLoading(true);
        try {
            const result = await convertUrlToPdf(urlInput);

            if (result.success && result.data) {
                // Convert base64 to blob and download
                const byteCharacters = atob(result.data);
                const byteNumbers = new Array(byteCharacters.length);
                for (let i = 0; i < byteCharacters.length; i++) {
                    byteNumbers[i] = byteCharacters.charCodeAt(i);
                }
                const byteArray = new Uint8Array(byteNumbers);
                const blob = new Blob([byteArray], { type: 'application/pdf' });

                const link = document.createElement('a');
                link.href = URL.createObjectURL(blob);
                link.download = `webpage-${Date.now()}.pdf`;
                link.click();
                alert('Website capture downloaded successfully!');
            } else {
                throw new Error(result.error);
            }
        } catch (error) {
            console.error('Error converting URL:', error);
            alert(`Failed to convert URL: ${(error as Error).message}. Ensure the URL is accessible.`);
        } finally {
            setLoading(false);
        }
    };

    const steps = activeTab === 'html' ? [
        { title: "Enter HTML", description: "Paste your raw HTML code." },
        { title: "Preview", description: "Check how it renders." },
        { title: "Download", description: "Save as PDF instantly." }
    ] : [
        { title: "Enter URL", description: "Paste the website link." },
        { title: "Process", description: "Our server captures the page." },
        { title: "Download", description: "Get an exact PDF replica." }
    ];

    return (
        <ToolPageLayout
            title="HTML to PDF Converter"
            subtitle="Convert raw HTML code or live websites into high-quality PDF documents."
            steps={steps}
            ctaText="Download PDF"
            onAction={activeTab === 'html' ? handleHtmlConvert : handleUrlConvert}
            loading={loading}
            disabled={activeTab === 'html' ? !htmlCode.trim() : !urlInput.trim()}
            showCta={false}
            seoContent={seoContent}
        >
            {/* Tabs */}
            <div className="flex justify-center mb-8">
                <div className="bg-white p-1 rounded-xl shadow-md border border-gray-100 inline-flex">
                    <button
                        onClick={() => setActiveTab('html')}
                        className={`flex items-center gap-2 px-6 py-3 rounded-lg font-bold transition-all ${activeTab === 'html'
                            ? 'bg-purple-100 text-purple-600 shadow-sm'
                            : 'text-gray-500 hover:bg-gray-50'
                            }`}
                    >
                        <Code2 size={18} />
                        Raw HTML
                    </button>
                    <button
                        onClick={() => setActiveTab('url')}
                        className={`flex items-center gap-2 px-6 py-3 rounded-lg font-bold transition-all ${activeTab === 'url'
                            ? 'bg-purple-100 text-purple-600 shadow-sm'
                            : 'text-gray-500 hover:bg-gray-50'
                            }`}
                    >
                        <Globe size={18} />
                        From URL
                    </button>
                </div>
            </div>

            {activeTab === 'html' ? (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* HTML Input */}
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

                    {/* Preview */}
                    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-4 sm:p-6 flex flex-col h-[500px]">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="flex items-center space-x-2 font-bold text-gray-900">
                                <Eye size={20} className="text-purple-500" />
                                <span>Preview</span>
                            </h3>
                            <button
                                onClick={handleHtmlConvert}
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
            ) : (
                <div className="max-w-2xl mx-auto">
                    <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 sm:p-12 text-center">
                        <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                            <Globe size={32} />
                        </div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-2">Convert Website to PDF</h2>
                        <p className="text-gray-500 mb-8">Enter a URL to capture the full webpage as a PDF document.</p>

                        <div className="relative mb-6">
                            <input
                                type="url"
                                placeholder="https://example.com"
                                value={urlInput}
                                onChange={(e) => setUrlInput(e.target.value)}
                                className="w-full bg-gray-50 border border-gray-200 rounded-xl py-4 pl-6 pr-14 text-lg focus:ring-2 focus:ring-purple-500 focus:outline-none transition-all"
                            />
                            <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
                                <Code2 size={20} />
                            </div>
                        </div>

                        <button
                            onClick={handleUrlConvert}
                            disabled={loading || !urlInput}
                            className={`w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-violet-500 to-purple-600 text-white font-bold py-4 px-6 rounded-xl transition-all shadow-lg hover:shadow-xl ${loading || !urlInput ? 'opacity-50 cursor-not-allowed' : 'hover:scale-[1.02]'}`}
                        >
                            {loading ? <Loader2 className="animate-spin" size={24} /> : <Download size={24} />}
                            <span className="text-lg">{loading ? 'Capturing Website...' : 'Convert URL to PDF'}</span>
                        </button>
                        <p className="mt-4 text-xs text-gray-400">
                            Powered by headless browser technology for high-fidelity rendering.
                        </p>
                    </div>
                </div>
            )}
        </ToolPageLayout>
    );
};

export default HtmlToPdfClient;
