'use client';

import { useState } from 'react';
import { Loader2, FileText, Copy, Download, Cloud } from 'lucide-react';
import ToolPageLayout from '../../components/ToolPageLayout';

interface PdfToTextClientProps {
    seoContent?: React.ReactNode;
}

const PdfToTextClient = ({ seoContent }: PdfToTextClientProps) => {
    const [file, setFile] = useState<File | null>(null);
    const [text, setText] = useState<string>('');
    const [loading, setLoading] = useState(false);
    const [progress, setProgress] = useState(0);
    const [isDragging, setIsDragging] = useState(false);

    const extractText = async (file: File) => {
        setLoading(true);
        setText('');
        setProgress(0);
        try {
            const arrayBuffer = await file.arrayBuffer();
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
        if (selectedFile.type === 'application/pdf' || selectedFile.name.toLowerCase().endsWith('.pdf')) {
            setFile(selectedFile);
            extractText(selectedFile);
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

    const steps = [
        {
            title: "Step 1: Upload PDF",
            description: "Select or drag and drop your PDF file to extract text from."
        },
        {
            title: "Step 2: Extract",
            description: "We'll automatically extract all text content from every page."
        },
        {
            title: "Step 3: Copy/Download",
            description: "Copy the text to clipboard or download as a .txt file."
        }
    ];

    return (
        <ToolPageLayout
            title="PDF to Text Converter"
            subtitle="Extract raw text from PDF documents instantly. Best for documents with selectable text."
            steps={steps}
            showCta={false}
            seoContent={seoContent}
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

                    <input
                        id="file-input"
                        type="file"
                        accept=".pdf"
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
                            onClick={() => { setFile(null); setText(''); }}
                            className="text-xs sm:text-sm text-red-500 hover:text-red-700 font-medium"
                        >
                            Convert another
                        </button>
                    </div>

                    {loading ? (
                        <div className="flex flex-col items-center justify-center py-16 text-center">
                            <Loader2 className="w-12 h-12 text-purple-500 animate-spin mb-4" />
                            <h3 className="text-xl font-semibold mb-2 text-gray-800">Extracting Text...</h3>
                            <div className="w-64 bg-gray-200 rounded-full h-2.5 mt-2">
                                <div className="bg-gradient-to-r from-violet-500 to-purple-600 h-2.5 rounded-full transition-all" style={{ width: `${progress}%` }}></div>
                            </div>
                            <p className="text-gray-500 mt-2">{progress}% complete</p>
                        </div>
                    ) : (
                        <div className="border border-gray-200 rounded-xl overflow-hidden">
                            <div className="flex justify-between items-center p-3 sm:p-4 border-b border-gray-200 bg-gray-50">
                                <span className="font-semibold text-gray-700">Extracted Content</span>
                                <div className="flex space-x-2">
                                    <button
                                        onClick={handleCopy}
                                        className="flex items-center space-x-1.5 px-3 py-1.5 bg-gray-200 hover:bg-gray-300 rounded text-sm transition-colors"
                                    >
                                        <Copy size={14} />
                                        <span className="hidden sm:inline">Copy</span>
                                    </button>
                                    <button
                                        onClick={handleDownload}
                                        className="flex items-center space-x-1.5 px-3 py-1.5 bg-gradient-to-r from-violet-500 to-purple-600 text-white rounded text-sm transition-colors hover:opacity-90"
                                    >
                                        <Download size={14} />
                                        <span className="hidden sm:inline">Download .txt</span>
                                    </button>
                                </div>
                            </div>

                            <textarea
                                value={text}
                                readOnly
                                className="w-full h-[400px] p-4 bg-white font-mono text-sm resize-none focus:outline-none text-gray-800"
                            />
                        </div>
                    )}
                </div>
            )}
        </ToolPageLayout>
    );
};

export default PdfToTextClient;
