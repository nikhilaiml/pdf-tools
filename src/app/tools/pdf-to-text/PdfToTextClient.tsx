'use client';

import { useState } from 'react';
import { Loader2, FileText, Copy, Download } from 'lucide-react';
import FileUploader from '../../components/FileUploader';

const PdfToTextClient = () => {
    const [file, setFile] = useState<File | null>(null);
    const [text, setText] = useState<string>('');
    const [loading, setLoading] = useState(false);
    const [progress, setProgress] = useState(0);

    const extractText = async (file: File) => {
        setLoading(true);
        setText('');
        setProgress(0);
        try {
            const arrayBuffer = await file.arrayBuffer();

            // Dynamically import PDF.js
            const pdfjsLib = await import('pdfjs-dist');
            pdfjsLib.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjsLib.version}/build/pdf.worker.min.mjs`;

            const pdf = await pdfjsLib.getDocument(arrayBuffer).promise;

            let fullText = '';

            for (let i = 1; i <= pdf.numPages; i++) {
                const page = await pdf.getPage(i);
                const textContent = await page.getTextContent();
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                const pageText = textContent.items.map((item: any) => item.str).join(' ');

                fullText += `--- Page ${i} ---\n\n${pageText}\n\n`;

                // Update progress
                setProgress(Math.round((i / pdf.numPages) * 100));
            }

            setText(fullText);
        } catch (error) {
            console.error('Error extracting text:', error);
            alert('Failed to extract text. The PDF might be scanned or password protected.');
        } finally {
            setLoading(false);
        }
    };

    const handleFileSelect = (selectedFile: File) => {
        setFile(selectedFile);
        extractText(selectedFile);
    };

    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        alert('Text copied to clipboard!');
    };

    const handleDownload = () => {
        const blob = new Blob([text], { type: 'text/plain' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = file ? `${file.name.replace('.pdf', '')}.txt` : 'extracted-text.txt';
        link.click();
    };

    return (
        <div className="max-w-4xl mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-4 text-center text-gray-900 dark:text-white">
                PDF to Text Converter
            </h1>
            <p className="text-center text-gray-500 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
                Extract raw text from PDF documents instantly. Best for documents with selectable text.
            </p>

            {!file ? (
                <FileUploader onFileSelect={handleFileSelect} label="Select PDF to Extract Text" />
            ) : (
                <div className="animate-in fade-in zoom-in duration-300">
                    <div className="flex justify-between items-center mb-6 bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                        <div className="flex items-center space-x-3">
                            <FileText className="text-blue-500" />
                            <span className="font-medium text-gray-900 dark:text-white truncate max-w-[200px] md:max-w-xs">{file.name}</span>
                        </div>
                        <button
                            onClick={() => { setFile(null); setText(''); }}
                            className="text-sm text-red-500 hover:text-red-700 hover:underline"
                        >
                            Convert another
                        </button>
                    </div>

                    {loading ? (
                        <div className="flex flex-col items-center justify-center py-20 text-center">
                            <Loader2 className="w-12 h-12 text-blue-500 animate-spin mb-4" />
                            <h3 className="text-xl font-semibold mb-2">Extracting Text...</h3>
                            <div className="w-64 bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mt-2">
                                <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${progress}%` }}></div>
                            </div>
                            <p className="text-gray-500 mt-2">{progress}% complete</p>
                        </div>
                    ) : (
                        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
                            <div className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/50">
                                <span className="font-semibold text-gray-700 dark:text-gray-300">Extracted Content</span>
                                <div className="flex space-x-2">
                                    <button
                                        onClick={handleCopy}
                                        className="flex items-center space-x-2 px-3 py-1.5 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 rounded text-sm transition-colors"
                                    >
                                        <Copy size={16} />
                                        <span>Copy</span>
                                    </button>
                                    <button
                                        onClick={handleDownload}
                                        className="flex items-center space-x-2 px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded text-sm transition-colors"
                                    >
                                        <Download size={16} />
                                        <span>Download .txt</span>
                                    </button>
                                </div>
                            </div>

                            <textarea
                                value={text}
                                readOnly
                                className="w-full h-[500px] p-4 bg-white dark:bg-gray-900 font-mono text-sm resize-none focus:outline-none text-gray-800 dark:text-gray-200"
                            />
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default PdfToTextClient;
