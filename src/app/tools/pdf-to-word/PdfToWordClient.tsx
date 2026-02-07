'use client';

import { useState } from 'react';
import { Document as DocxDocument, Packer, Paragraph, TextRun } from 'docx';
import { Loader2, FileText, Cloud } from 'lucide-react';
import ToolPageLayout from '../../components/ToolPageLayout';

interface PdfToWordClientProps {
    seoContent?: React.ReactNode;
}

const PdfToWordPage = ({ seoContent }: PdfToWordClientProps) => {
    const [file, setFile] = useState<File | null>(null);
    const [loading, setLoading] = useState(false);
    const [isDragging, setIsDragging] = useState(false);

    const handleFileSelect = (selectedFile: File) => {
        if (selectedFile.type === 'application/pdf' || selectedFile.name.toLowerCase().endsWith('.pdf')) {
            setFile(selectedFile);
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

    const handleConvert = async () => {
        if (!file) {
            alert('Please select a file to convert.');
            return;
        }

        setLoading(true);
        try {
            const pdfjsLib = await import('pdfjs-dist');
            pdfjsLib.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjsLib.version}/build/pdf.worker.min.mjs`;

            const arrayBuffer = await file.arrayBuffer();
            const pdf = await pdfjsLib.getDocument(arrayBuffer).promise;

            const children: Paragraph[] = [];

            for (let i = 1; i <= pdf.numPages; i++) {
                const page = await pdf.getPage(i);
                const textContent = await page.getTextContent();
                const items = textContent.items as any[];

                // Simple text extraction for demo purposes
                const pageText = items.map(item => item.str).join(' ');

                if (pageText.trim()) {
                    children.push(new Paragraph({
                        children: [new TextRun(pageText)],
                        spacing: { after: 200 }
                    }));
                }

                if (i < pdf.numPages) {
                    children.push(new Paragraph({
                        children: [],
                        pageBreakBefore: true
                    }));
                }
            }

            const doc = new DocxDocument({
                sections: [{ properties: {}, children: children }],
            });

            const blob = await Packer.toBlob(doc);
            const link = document.createElement('a');
            link.href = URL.createObjectURL(blob);
            link.download = `${file.name.replace('.pdf', '')}.docx`;
            link.click();
            alert('PDF converted to Word successfully!');

        } catch (error) {
            console.error('Error converting to Word:', error);
            alert('Failed to convert PDF. Please try a simpler file.');
        } finally {
            setLoading(false);
        }
    };

    const steps = [
        {
            title: "Upload PDF",
            description: "Select your file from your device."
        },
        {
            title: "Convert",
            description: "Our tool transforms your PDF automatically."
        },
        {
            title: "Download",
            description: "Get your editable Word file instantly."
        }
    ];

    return (
        <ToolPageLayout
            title="PDF to Word Converter"
            subtitle="Convert PDF to Word documents online for free. Fast, accurate, and editable."
            steps={steps}
            ctaText="Convert directly to Word"
            onAction={handleConvert}
            loading={loading}
            disabled={!file}
            showCta={!!file}
            seoContent={seoContent}
        >
            {!file ? (
                <div
                    className={`
                        bg-white rounded-2xl sm:rounded-3xl shadow-xl border-2 border-dashed p-6 sm:p-12
                        transition-all duration-300 cursor-pointer
                        ${isDragging
                            ? 'border-indigo-500 bg-indigo-50 scale-[1.02]'
                            : 'border-slate-200 hover:border-indigo-400 hover:shadow-2xl'
                        }
                    `}
                    onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
                    onDragLeave={(e) => { e.preventDefault(); setIsDragging(false); }}
                    onDrop={handleDrop}
                    onClick={() => document.getElementById('file-input')?.click()}
                >
                    <div className="flex justify-center mb-4 sm:mb-6">
                        <div className={`p-4 sm:p-6 rounded-2xl sm:rounded-3xl transition-colors ${isDragging ? 'bg-indigo-100' : 'bg-slate-50'}`}>
                            <Cloud className={`w-12 h-12 sm:w-16 sm:h-16 ${isDragging ? 'text-indigo-500' : 'text-slate-400'}`} strokeWidth={1.5} />
                        </div>
                    </div>

                    <p className={`text-xl sm:text-2xl font-bold text-center mb-2 ${isDragging ? 'text-indigo-700' : 'text-slate-800'}`}>
                        Upload PDF File
                    </p>
                    <p className="text-sm sm:text-base text-slate-500 text-center">or drag and drop</p>

                    <input
                        id="file-input"
                        type="file"
                        accept=".pdf"
                        onChange={(e) => e.target.files?.[0] && handleFileSelect(e.target.files[0])}
                        className="hidden"
                    />
                </div>
            ) : (
                <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl border border-slate-100 p-6 sm:p-8">
                    <div className="flex items-center space-x-3 sm:space-x-4 mb-6 p-3 sm:p-4 bg-slate-50 rounded-xl">
                        <div className="p-2 sm:p-3 bg-indigo-100 rounded-lg">
                            <FileText className="text-indigo-500 w-5 h-5 sm:w-6 sm:h-6" />
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="font-medium text-slate-900 truncate text-sm sm:text-base">{file.name}</p>
                            <p className="text-xs sm:text-sm text-slate-500">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
                        </div>
                        <button
                            onClick={() => setFile(null)}
                            className="text-xs sm:text-sm text-red-500 hover:text-red-700 font-medium"
                        >
                            Remove
                        </button>
                    </div>

                    <button
                        onClick={handleConvert}
                        disabled={loading}
                        className={`w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-indigo-500 to-violet-600 text-white font-bold py-3 sm:py-4 px-6 rounded-xl transition-all shadow-lg hover:shadow-xl ${loading ? 'opacity-50 cursor-not-allowed' : 'hover:scale-[1.02]'
                            }`}
                    >
                        {loading ? <Loader2 className="animate-spin" size={20} /> : null}
                        <span className="text-sm sm:text-base">{loading ? 'Converting...' : 'Convert directly to Word'}</span>
                    </button>

                    <p className="text-xs text-center text-slate-500 mt-4 font-medium">
                        Free • Secure • No Signup
                    </p>
                </div>
            )}
        </ToolPageLayout>
    );
};

export default PdfToWordPage;
