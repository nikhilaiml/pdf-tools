'use client';

import { useState, useRef } from 'react';
import { Loader2, FileText, Download, Cloud } from 'lucide-react';
import { Document as DocxDocument, Packer, Paragraph, TextRun } from 'docx';
import ToolPageLayout from '../../components/ToolPageLayout';

const PdfToWordPage = () => {
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
        if (!file) return;

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
                items.sort((a, b) => {
                    if (Math.abs(a.transform[5] - b.transform[5]) > 5) {
                        return b.transform[5] - a.transform[5];
                    }
                    return a.transform[4] - b.transform[4];
                });

                let currentLineY = -1;
                let currentLineText = "";

                items.forEach((item) => {
                    const y = item.transform[5];
                    const text = item.str;

                    if (currentLineY === -1) {
                        currentLineY = y;
                        currentLineText = text;
                    } else if (Math.abs(currentLineY - y) < 10) {
                        currentLineText += " " + text;
                    } else {
                        children.push(new Paragraph({
                            children: [new TextRun(currentLineText)],
                            spacing: { after: 200 }
                        }));
                        currentLineY = y;
                        currentLineText = text;
                    }
                });

                if (currentLineText) {
                    children.push(new Paragraph({
                        children: [new TextRun(currentLineText)],
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
                sections: [{
                    properties: {},
                    children: children,
                }],
            });

            const blob = await Packer.toBlob(doc);

            const link = document.createElement('a');
            link.href = URL.createObjectURL(blob);
            link.download = `${file.name.replace('.pdf', '')}.docx`;
            link.click();

            alert('File converted successfully!');
        } catch (error) {
            console.error('Error converting to Word:', error);
            alert('Failed to convert PDF.');
        } finally {
            setLoading(false);
        }
    };

    const steps = [
        {
            title: "Step 1: Upload PDF",
            description: "Select or drag and drop your PDF file that you want to convert to Word format."
        },
        {
            title: "Step 2: Convert",
            description: "Our system extracts text and formatting from your PDF to create an editable Word document."
        },
        {
            title: "Step 3: Download",
            description: "Get your Word document (.docx) instantly. Ready to edit in Microsoft Word or Google Docs."
        }
    ];

    return (
        <ToolPageLayout
            title="PDF to Word Converter"
            subtitle="Convert PDF contents to an editable Word document (.docx)."
            steps={steps}
            ctaText="Convert to Word"
            onAction={handleConvert}
            loading={loading}
            disabled={!file}
            showCta={!!file}
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
                <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl border border-gray-100 p-6 sm:p-8">
                    <div className="flex items-center space-x-3 sm:space-x-4 mb-6 p-3 sm:p-4 bg-gray-50 rounded-xl">
                        <div className="p-2 sm:p-3 bg-purple-100 rounded-lg">
                            <FileText className="text-purple-500 w-5 h-5 sm:w-6 sm:h-6" />
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="font-medium text-gray-900 truncate text-sm sm:text-base">{file.name}</p>
                            <p className="text-xs sm:text-sm text-gray-500">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
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
                        className={`w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-violet-500 to-purple-600 text-white font-bold py-3 sm:py-4 px-6 rounded-xl transition-all shadow-lg hover:shadow-xl ${loading ? 'opacity-50 cursor-not-allowed' : 'hover:scale-[1.02]'
                            }`}
                    >
                        {loading ? <Loader2 className="animate-spin" size={20} /> : <Download size={20} />}
                        <span className="text-sm sm:text-base">{loading ? 'Converting...' : 'Convert to Word'}</span>
                    </button>

                    <p className="text-xs text-center text-gray-500 mt-4">
                        Note: Layout fidelity depends on the PDF structure.
                    </p>
                </div>
            )}
        </ToolPageLayout>
    );
};

export default PdfToWordPage;
