'use client';

import { useState } from 'react';
import { FileText, Loader2, Copy, ExternalLink, RefreshCw, Cloud, Languages } from 'lucide-react';
import ToolPageLayout from '../../components/ToolPageLayout';

export default function PdfTranslatorClient() {
    const [file, setFile] = useState<File | null>(null);
    const [extractedText, setExtractedText] = useState<string>('');
    const [isExtracting, setIsExtracting] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [isDragging, setIsDragging] = useState(false);
    const [copied, setCopied] = useState(false);

    const handleFileSelect = async (selectedFile: File) => {
        if (selectedFile.type === 'application/pdf' || selectedFile.name.toLowerCase().endsWith('.pdf')) {
            setFile(selectedFile);
            setError(null);
            setExtractedText('');
            await extractText(selectedFile);
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

    const extractText = async (fileToExtract: File) => {
        setIsExtracting(true);
        try {
            const arrayBuffer = await fileToExtract.arrayBuffer();
            const pdfjsLib = await import('pdfjs-dist');

            // Worker configuration
            if (!pdfjsLib.GlobalWorkerOptions.workerSrc) {
                pdfjsLib.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjsLib.version}/build/pdf.worker.min.mjs`;
            }

            const pdf = await pdfjsLib.getDocument(arrayBuffer).promise;
            let fullText = '';

            // Limit to first 10 pages to prevent browser crash on large docs
            const maxPages = Math.min(pdf.numPages, 10);

            for (let i = 1; i <= maxPages; i++) {
                const page = await pdf.getPage(i);
                const textContent = await page.getTextContent();
                const pageText = textContent.items
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    .map((item: any) => item.str)
                    .join(' ');

                fullText += `--- Page ${i} ---\n\n${pageText}\n\n`;
            }

            if (pdf.numPages > 10) {
                fullText += `\n... ${pdf.numPages - 10} more pages not extracted to preserve performance.`;
            }

            setExtractedText(fullText);
        } catch (err) {
            console.error('Extraction error:', err);
            setError('Failed to extract text from this PDF. It might be a scanned image.');
        } finally {
            setIsExtracting(false);
        }
    };

    const copyToClipboard = () => {
        navigator.clipboard.writeText(extractedText);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const openGoogleTranslate = () => {
        // Open Google Translate with detected language to English (default)
        const textToTranslate = extractedText.substring(0, 5000); // URL limit safety
        const url = `https://translate.google.com/?sl=auto&tl=en&text=${encodeURIComponent(textToTranslate)}&op=translate`;
        window.open(url, '_blank');
    };

    const steps = [
        {
            title: "Step 1: Upload PDF",
            description: "Select or drag and drop your PDF file to extract text for translation."
        },
        {
            title: "Step 2: Extract Text",
            description: "We automatically extract all text content from your PDF document."
        },
        {
            title: "Step 3: Translate",
            description: "Copy the text or open directly in Google Translate for instant translation."
        }
    ];

    return (
        <ToolPageLayout
            title="PDF Translator"
            subtitle="Extract text from your PDF to easily translate using Google Translate."
            steps={steps}
            showCta={false}
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
                    <p className="text-xs text-gray-400 text-center mt-2">(Best for text-based PDFs. Scanned PDFs may not work)</p>

                    <input
                        id="file-input"
                        type="file"
                        accept=".pdf"
                        onChange={(e) => e.target.files?.[0] && handleFileSelect(e.target.files[0])}
                        className="hidden"
                    />
                </div>
            ) : (
                <div className="space-y-4">
                    {/* File Info Bar */}
                    <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-4 flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                            <div className="p-2 bg-purple-100 rounded-lg">
                                <FileText className="text-purple-500 w-5 h-5" />
                            </div>
                            <span className="font-medium text-gray-900 truncate max-w-[200px] text-sm">{file.name}</span>
                        </div>
                        <button
                            onClick={() => { setFile(null); setExtractedText(''); setError(null); }}
                            className="text-sm text-red-500 hover:text-red-700 flex items-center gap-1"
                        >
                            <RefreshCw size={14} /> Change
                        </button>
                    </div>

                    {isExtracting ? (
                        <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl border border-gray-100 p-12 text-center">
                            <Loader2 className="w-12 h-12 text-purple-500 animate-spin mx-auto mb-4" />
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Extracting Text...</h3>
                            <p className="text-gray-500">Please wait while we read the document.</p>
                        </div>
                    ) : error ? (
                        <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl border border-red-200 p-8 text-center">
                            <p className="text-red-500 font-medium mb-4">{error}</p>
                            <button
                                onClick={() => setFile(null)}
                                className="text-purple-600 hover:text-purple-700 font-medium"
                            >
                                Try another file
                            </button>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                            {/* Extracted Text Pane */}
                            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden flex flex-col max-h-[500px]">
                                <div className="p-4 border-b border-gray-100 bg-gray-50 flex justify-between items-center">
                                    <span className="font-semibold text-gray-700">Original Text</span>
                                    <button
                                        onClick={copyToClipboard}
                                        className="text-sm text-purple-600 hover:text-purple-700 flex items-center gap-1"
                                    >
                                        <Copy size={14} />
                                        {copied ? 'Copied!' : 'Copy All'}
                                    </button>
                                </div>
                                <div className="flex-1 p-4 overflow-auto bg-gray-50/50">
                                    <pre className="whitespace-pre-wrap font-sans text-sm text-gray-700 leading-relaxed">
                                        {extractedText || "No text found in this document."}
                                    </pre>
                                </div>
                            </div>

                            {/* Translation Options Pane */}
                            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 flex flex-col justify-center items-center text-center">
                                <div className="mb-6">
                                    <div className="w-16 h-16 bg-gradient-to-br from-violet-100 to-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                        <Languages className="w-8 h-8 text-purple-600" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">Translate Content</h3>
                                    <p className="text-gray-500 text-sm">
                                        Use Google Translate to convert the extracted text to any language.
                                    </p>
                                </div>

                                <div className="space-y-3 w-full max-w-xs">
                                    <button
                                        onClick={openGoogleTranslate}
                                        disabled={!extractedText}
                                        className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-violet-500 to-purple-600 text-white font-bold py-3 px-6 rounded-xl transition-all shadow-lg hover:shadow-xl hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        <span>Open Google Translate</span>
                                        <ExternalLink size={16} />
                                    </button>

                                    <p className="text-xs text-gray-400">
                                        Note: For large documents, copy the text and paste manually.
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            )}
        </ToolPageLayout>
    );
}
