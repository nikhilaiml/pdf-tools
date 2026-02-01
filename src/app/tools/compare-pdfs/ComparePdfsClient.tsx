'use client';

import { useState } from 'react';
import { Loader2, FileText, ArrowRightLeft, Upload, X, Cloud } from 'lucide-react';
import { PDFDocument } from 'pdf-lib';
import ToolPageLayout from '../../components/ToolPageLayout';

interface DiffLine {
    value: string;
    added?: boolean;
    removed?: boolean;
}

const ComparePdfsClient = () => {
    const [fileA, setFileA] = useState<File | null>(null);
    const [fileB, setFileB] = useState<File | null>(null);
    const [loading, setLoading] = useState(false);
    const [diffResult, setDiffResult] = useState<DiffLine[] | null>(null);

    const extractText = async (file: File): Promise<string> => {
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
            fullText += pageText + '\n';
        }
        return fullText;
    };

    const computeDiff = (text1: string, text2: string): DiffLine[] => {
        const lines1 = text1.split('\n').filter(l => l.trim());
        const lines2 = text2.split('\n').filter(l => l.trim());

        // Very basic line-by-line diff. 
        // Real world apps should use 'diff' or 'diff-match-patch' package for character/word level.
        const diffs: DiffLine[] = [];

        let i = 0, j = 0;

        while (i < lines1.length || j < lines2.length) {
            if (i < lines1.length && j < lines2.length && lines1[i] === lines2[j]) {
                diffs.push({ value: lines1[i] });
                i++;
                j++;
            } else {
                if (i < lines1.length) {
                    diffs.push({ value: lines1[i], removed: true });
                    i++;
                }
                if (j < lines2.length) {
                    diffs.push({ value: lines2[j], added: true });
                    j++;
                }
            }
        }

        return diffs;
    };

    const handleCompare = async () => {
        if (!fileA || !fileB) return;

        setLoading(true);
        try {
            const [textA, textB] = await Promise.all([
                extractText(fileA),
                extractText(fileB)
            ]);

            const result = computeDiff(textA, textB);
            setDiffResult(result);
        } catch (error) {
            console.error('Comparison error:', error);
            alert('Failed to compare PDFs. Ensure they are valid text-based PDFs.');
        } finally {
            setLoading(false);
        }
    };

    const FileUploadBox = ({ label, file, setFile }: { label: string, file: File | null, setFile: (f: File | null) => void }) => (
        <div
            className={`
                bg-white rounded-xl shadow-md border-2 border-dashed p-6 sm:p-8
                transition-all duration-300 cursor-pointer
                ${file
                    ? 'border-green-500 bg-green-50'
                    : 'border-gray-200 hover:border-purple-400 hover:shadow-lg'
                }
            `}
            onClick={() => document.getElementById(`upload-${label}`)?.click()}
        >
            {file ? (
                <div className="flex flex-col items-center">
                    <div className="p-4 bg-green-100 rounded-full mb-3">
                        <FileText className="w-8 h-8 text-green-600" />
                    </div>
                    <p className="font-bold text-gray-800 truncate max-w-[200px] mb-1">{file.name}</p>
                    <p className="text-xs text-gray-500 mb-3">{(file.size / 1024).toFixed(1)} KB</p>
                    <button
                        onClick={(e) => { e.stopPropagation(); setFile(null); }}
                        className="text-xs text-red-500 hover:text-red-700 font-medium hover:underline"
                    >
                        Remove File
                    </button>
                </div>
            ) : (
                <div className="flex flex-col items-center">
                    <Cloud className="w-10 h-10 text-gray-400 mb-3" />
                    <p className="font-medium text-gray-700 mb-1">{label}</p>
                    <p className="text-xs text-gray-500">Click to upload PDF</p>
                </div>
            )}
            <input
                type="file"
                id={`upload-${label}`}
                accept=".pdf"
                className="hidden"
                onChange={(e) => e.target.files?.[0] && setFile(e.target.files[0])}
            />
        </div>
    );

    const steps = [
        {
            title: "Step 1: Upload Documents",
            description: "Upload the original PDF and the modified PDF you want to compare."
        },
        {
            title: "Step 2: Analysis",
            description: "Our tool extracts text and analyzes the differences line by line."
        },
        {
            title: "Step 3: View Results",
            description: "See a detailed comparison highlighting added and removed text."
        }
    ];

    return (
        <ToolPageLayout
            title="Compare PDFs"
            subtitle="Analyze and compare text differences between two PDF versions."
            steps={steps}
            ctaText="Compare Documents"
            onAction={handleCompare}
            loading={loading}
            disabled={!fileA || !fileB}
            showCta={!!fileA && !!fileB && !diffResult}
        >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <FileUploadBox label="Original Document (A)" file={fileA} setFile={setFileA} />
                <FileUploadBox label="Modified Document (B)" file={fileB} setFile={setFileB} />
            </div>

            {diffResult && (
                <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden animate-in fade-in slide-in-from-bottom-4">
                    <div className="p-4 border-b border-gray-100 bg-gray-50 flex flex-col sm:flex-row justify-between items-center gap-4">
                        <h3 className="font-bold text-gray-800">Comparison Result</h3>
                        <div className="flex gap-4 text-xs font-medium">
                            <span className="flex items-center gap-1.5"><div className="w-3 h-3 bg-red-100 border border-red-200 rounded"></div> Removed from A</span>
                            <span className="flex items-center gap-1.5"><div className="w-3 h-3 bg-green-100 border border-green-200 rounded"></div> Added to B</span>
                        </div>
                    </div>

                    <div className="p-6 font-mono text-sm overflow-x-auto max-h-[600px] overflow-y-auto bg-white">
                        {diffResult.length === 0 ? (
                            <div className="text-center py-12">
                                <div className="p-4 bg-green-50 text-green-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                                    <FileText size={32} />
                                </div>
                                <p className="text-gray-600 font-medium">Documents are identical.</p>
                            </div>
                        ) : (
                            diffResult.map((line, idx) => (
                                <div key={idx} className={`
                                    px-3 py-1.5 border-b border-gray-50 whitespace-pre-wrap flex
                                    ${line.added
                                        ? 'bg-green-50 text-green-700'
                                        : line.removed
                                            ? 'bg-red-50 text-red-700'
                                            : 'text-gray-600 hover:bg-gray-50'}
                                `}>
                                    <span className="mr-4 text-gray-300 select-none w-8 text-right flex-shrink-0 text-xs py-0.5">{idx + 1}</span>
                                    <span className="flex-1">
                                        {line.added ? '+ ' : line.removed ? '- ' : '  '}
                                        {line.value}
                                    </span>
                                </div>
                            ))
                        )}
                    </div>
                    <div className="p-4 bg-gray-50 border-t border-gray-100 text-center">
                        <button
                            onClick={() => { setFileA(null); setFileB(null); setDiffResult(null); }}
                            className="text-sm text-blue-600 hover:text-blue-700 font-medium hover:underline"
                        >
                            Start New Comparison
                        </button>
                    </div>
                </div>
            )}
        </ToolPageLayout>
    );
};

export default ComparePdfsClient;
