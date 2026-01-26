'use client';

import { useState } from 'react';
import { Loader2, FileText, ArrowRightLeft, Upload, X } from 'lucide-react';
import { PDFDocument } from 'pdf-lib';

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
            className={`border-2 border-dashed rounded-xl p-6 text-center transition-colors
                ${file ? 'border-green-500 bg-green-50 dark:bg-green-900/20' : 'border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800'}
            `}
        >
            {file ? (
                <div className="flex flex-col items-center">
                    <FileText className="w-10 h-10 text-green-500 mb-2" />
                    <p className="font-medium text-gray-900 dark:text-white truncate max-w-[200px] mb-2">{file.name}</p>
                    <button
                        onClick={() => setFile(null)}
                        className="text-xs text-red-500 hover:text-red-700"
                    >
                        Remove
                    </button>
                </div>
            ) : (
                <div onClick={() => document.getElementById(`upload-${label}`)?.click()} className="cursor-pointer">
                    <Upload className="w-10 h-10 text-gray-400 mx-auto mb-2" />
                    <p className="font-medium text-gray-700 dark:text-gray-300 mb-1">{label}</p>
                    <p className="text-xs text-gray-500">Click to upload PDF</p>
                    <input
                        type="file"
                        id={`upload-${label}`}
                        accept=".pdf"
                        className="hidden"
                        onChange={(e) => e.target.files?.[0] && setFile(e.target.files[0])}
                    />
                </div>
            )}
        </div>
    );

    return (
        <div className="max-w-6xl mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-4 text-center text-gray-900 dark:text-white">
                Compare PDFs
            </h1>
            <p className="text-center text-gray-500 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
                Compare text content between two PDF documents.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <FileUploadBox label="Original Document (A)" file={fileA} setFile={setFileA} />
                <FileUploadBox label="Modified Document (B)" file={fileB} setFile={setFileB} />
            </div>

            <div className="flex justify-center mb-8">
                <button
                    onClick={handleCompare}
                    disabled={!fileA || !fileB || loading}
                    className={`
                        flex items-center gap-2 px-8 py-3 rounded-full font-bold text-white shadow-lg transition-all
                        ${!fileA || !fileB || loading
                            ? 'bg-gray-400 cursor-not-allowed'
                            : 'bg-indigo-600 hover:bg-indigo-700 hover:scale-105'}
                    `}
                >
                    {loading ? <Loader2 className="animate-spin" /> : <ArrowRightLeft className="w-5 h-5" />}
                    <span>{loading ? 'Comparing...' : 'Compare Documents'}</span>
                </button>
            </div>

            {diffResult && (
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden animate-in fade-in slide-in-from-bottom-4">
                    <div className="p-4 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/50 flex justify-between items-center">
                        <h3 className="font-bold text-gray-900 dark:text-white">Comparison Result (Text Mode)</h3>
                        <div className="flex gap-4 text-sm">
                            <span className="flex items-center gap-1"><div className="w-3 h-3 bg-red-100 dark:bg-red-900/30 border border-red-200 rounded"></div> Removed from A</span>
                            <span className="flex items-center gap-1"><div className="w-3 h-3 bg-green-100 dark:bg-green-900/30 border border-green-200 rounded"></div> Added to B</span>
                        </div>
                    </div>

                    <div className="p-6 font-mono text-sm overflow-x-auto max-h-[600px] overflow-y-auto">
                        {diffResult.length === 0 ? (
                            <p className="text-center text-gray-500">Documents are identical.</p>
                        ) : (
                            diffResult.map((line, idx) => (
                                <div key={idx} className={`
                                    px-2 py-1 border-b border-gray-100 dark:border-gray-700/50 whitespace-pre-wrap
                                    ${line.added
                                        ? 'bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300'
                                        : line.removed
                                            ? 'bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300'
                                            : 'text-gray-600 dark:text-gray-400'}
                                `}>
                                    <span className="mr-4 text-gray-400 select-none w-8 inline-block text-right">{idx + 1}</span>
                                    {line.added ? '+ ' : line.removed ? '- ' : '  '}
                                    {line.value}
                                </div>
                            ))
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default ComparePdfsClient;
