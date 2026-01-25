'use client';

import { useState } from 'react';
import * as pdfjsLib from 'pdfjs-dist';
import { Loader2, FileText, Download } from 'lucide-react';
import { Document as DocxDocument, Packer, Paragraph, TextRun } from 'docx';
import FileUploader from '../../components/FileUploader';

// Initialize PDF.js worker
if (typeof window !== 'undefined') {
    pdfjsLib.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjsLib.version}/build/pdf.worker.min.mjs`;
}

const PdfToWordPage = () => {
    const [file, setFile] = useState<File | null>(null);
    const [loading, setLoading] = useState(false);

    const handleFileChange = (file: File) => {
        setFile(file);
    };



    const handleConvert = async () => {
        if (!file) return;

        setLoading(true);
        try {
            const arrayBuffer = await file.arrayBuffer();
            const pdf = await pdfjsLib.getDocument(arrayBuffer).promise;

            const children: Paragraph[] = [];

            for (let i = 1; i <= pdf.numPages; i++) {
                const page = await pdf.getPage(i);
                const textContent = await page.getTextContent();

                // Sort items by Y (descending) then X (ascending)
                const items = textContent.items as any[];
                items.sort((a, b) => {
                    if (Math.abs(a.transform[5] - b.transform[5]) > 5) {
                        return b.transform[5] - a.transform[5]; // Top to bottom
                    }
                    return a.transform[4] - b.transform[4]; // Left to right
                });

                // Simple paragraph reconstruction
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
                        // New line
                        children.push(new Paragraph({
                            children: [new TextRun(currentLineText)],
                            spacing: { after: 200 } // Add some spacing
                        }));
                        currentLineY = y;
                        currentLineText = text;
                    }
                });

                // Push last line
                if (currentLineText) {
                    children.push(new Paragraph({
                        children: [new TextRun(currentLineText)],
                        spacing: { after: 200 }
                    }));
                }

                // Add page break if not last page
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

    return (
        <div className="max-w-4xl mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-4 text-center text-gray-900 dark:text-white">
                PDF to Word
            </h1>
            <p className="text-center text-gray-500 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
                Convert PDF contents to an editable Word document.
            </p>

            {!file ? (
                <FileUploader onFileSelect={handleFileChange} label="Select PDF to Convert" />
            ) : (
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-8 max-w-2xl mx-auto animate-in fade-in zoom-in duration-300">
                    <div className="flex items-center space-x-3 mb-8 p-4 bg-gray-50 dark:bg-gray-900/50 rounded-lg">
                        <FileText className="text-blue-500" size={24} />
                        <div>
                            <p className="font-medium text-gray-900 dark:text-white truncate max-w-[200px]">{file.name}</p>
                            <button
                                onClick={() => setFile(null)}
                                className="text-xs text-red-500 hover:text-red-700 hover:underline"
                            >
                                Change be file
                            </button>
                        </div>
                    </div>

                    <button
                        onClick={handleConvert}
                        disabled={loading}
                        className={`w-full flex items-center justify-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-xl transition-all shadow-lg hover:shadow-xl ${loading ? 'opacity-50 cursor-not-allowed' : ''
                            }`}
                    >
                        {loading ? <Loader2 className="animate-spin" /> : <Download size={20} />}
                        <span>{loading ? 'Converting...' : 'Convert to Word'}</span>
                    </button>

                    <p className="text-xs text-center text-gray-500 mt-4">
                        Note: Layout fidelity depends on the PDF structure.
                    </p>
                </div>
            )}
        </div>
    );
};

export default PdfToWordPage;
