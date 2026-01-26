'use client';

import { useState } from 'react';
import { FileText, Loader2, Copy, ExternalLink, RefreshCw } from 'lucide-react';
import FileUploader from '../../components/FileUploader';

export default function PdfTranslatorPage() {
    const [file, setFile] = useState<File | null>(null);
    const [extractedText, setExtractedText] = useState<string>('');
    const [isExtracting, setIsExtracting] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleFileSelect = async (selectedFile: File) => {
        setFile(selectedFile);
        setError(null);
        setExtractedText('');
        await extractText(selectedFile);
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
        alert('Text copied to clipboard!');
    };

    const openGoogleTranslate = () => {
        // Open Google Translate with detected language to English (default)
        // We pass the partial text to avoid URL length limits
        const textToTranslate = extractedText.substring(0, 5000); // URL limit safety
        const url = `https://translate.google.com/?sl=auto&tl=en&text=${encodeURIComponent(textToTranslate)}&op=translate`;
        window.open(url, '_blank');
    };

    return (
        <div className="max-w-6xl mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-4 text-center text-gray-900 dark:text-white">
                PDF Translator
            </h1>
            <p className="text-center text-gray-500 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
                Extract text from your PDF to easily copy or open in Google Translate.
                <br />
                <span className="text-xs text-gray-400">(Best for text-based PDFs. Scanned PDFs/Images may not work)</span>
            </p>

            {!file ? (
                <FileUploader onFileSelect={handleFileSelect} label="Select PDF to Translate" />
            ) : (
                <div className="animate-in fade-in zoom-in duration-300">
                    <div className="flex justify-between items-center mb-6 bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                        <div className="flex items-center space-x-3">
                            <FileText className="text-blue-500" />
                            <span className="font-medium text-gray-900 dark:text-white truncate max-w-[200px]">{file.name}</span>
                        </div>
                        <button
                            onClick={() => { setFile(null); setExtractedText(''); }}
                            className="text-sm text-red-500 hover:text-red-700 hover:underline flex items-center"
                        >
                            <RefreshCw size={14} className="mr-1" /> Translate another
                        </button>
                    </div>

                    {isExtracting ? (
                        <div className="flex flex-col items-center justify-center py-20 text-center bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
                            <Loader2 className="w-12 h-12 text-blue-500 animate-spin mb-4" />
                            <h3 className="text-xl font-semibold mb-2">Extracting Text...</h3>
                            <p className="text-gray-500">Please wait while we read the document.</p>
                        </div>
                    ) : error ? (
                        <div className="p-8 text-center bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-red-200">
                            <p className="text-red-500 font-medium mb-4">{error}</p>
                            <button onClick={() => setFile(null)} className="text-blue-600 hover:underline">Try another file</button>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Extracted Text Pane */}
                            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden flex flex-col h-[600px]">
                                <div className="p-4 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 font-medium flex justify-between items-center">
                                    <span>Original Text</span>
                                    <button
                                        onClick={copyToClipboard}
                                        className="text-sm text-blue-600 hover:text-blue-800 flex items-center"
                                    >
                                        <Copy size={14} className="mr-1" /> Copy All
                                    </button>
                                </div>
                                <div className="flex-1 p-4 overflow-auto bg-gray-50 dark:bg-gray-900/50">
                                    <pre className="whitespace-pre-wrap font-sans text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                                        {extractedText || "No text found in this document."}
                                    </pre>
                                </div>
                            </div>

                            {/* Translation Options Pane */}
                            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 flex flex-col justify-center items-center text-center">
                                <div className="mb-8">
                                    <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <ExternalLink className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-2">Translate Content</h3>
                                    <p className="text-gray-500 dark:text-gray-400">
                                        Use external tools to translate the extracted text accurately.
                                    </p>
                                </div>

                                <div className="space-y-4 w-full max-w-xs">
                                    <button
                                        onClick={openGoogleTranslate}
                                        disabled={!extractedText}
                                        className="w-full flex items-center justify-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors shadow-md disabled:opacity-50"
                                    >
                                        <span>Open Google Translate</span>
                                        <ExternalLink size={16} />
                                    </button>

                                    <p className="text-xs text-gray-400 mt-4">
                                        Note: Google Translate has a character limit for direct links.
                                        If the document is large, copy the text manually.
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}
