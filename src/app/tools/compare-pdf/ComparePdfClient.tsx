'use client';

import { useState } from 'react';
import { FileText, CheckCircle, ArrowRight } from 'lucide-react';
import EnhancedFileUploader from '../../components/EnhancedFileUploader';

interface DiffLine {
    value: string;
    added?: boolean;
    removed?: boolean;
}

const ComparePdfClient = () => {
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

    const handleReset = () => {
        setFileA(null);
        setFileB(null);
        setDiffResult(null);
    };

    return (
        <div className="w-full">
            {/* Tool UI Section */}
            {!diffResult ? (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-10">
                        {/* Upload First PDF */}
                        <div className="flex flex-col gap-3">
                            <label className="text-gray-700 font-semibold ml-1">Upload First PDF</label>
                            {fileA ? (
                                <div className="bg-green-50 border-2 border-green-200 rounded-xl p-4 flex items-center justify-between">
                                    <div className="flex items-center gap-3 overflow-hidden">
                                        <div className="p-2 bg-green-100 rounded-lg shrink-0">
                                            <FileText className="w-6 h-6 text-green-600" />
                                        </div>
                                        <div className="min-w-0">
                                            <p className="font-medium text-gray-900 truncate">{fileA.name}</p>
                                            <p className="text-xs text-gray-500">{(fileA.size / 1024).toFixed(1)} KB</p>
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => setFileA(null)}
                                        className="text-red-500 hover:text-red-600 text-sm font-medium hover:underline shrink-0 ml-2"
                                    >
                                        Change
                                    </button>
                                </div>
                            ) : (
                                <EnhancedFileUploader
                                    onFileSelect={setFileA}
                                    label="Click to upload"
                                    description="First PDF file"
                                />
                            )}
                        </div>

                        {/* Upload Second PDF */}
                        <div className="flex flex-col gap-3">
                            <label className="text-gray-700 font-semibold ml-1">Upload Second PDF</label>
                            {fileB ? (
                                <div className="bg-green-50 border-2 border-green-200 rounded-xl p-4 flex items-center justify-between">
                                    <div className="flex items-center gap-3 overflow-hidden">
                                        <div className="p-2 bg-green-100 rounded-lg shrink-0">
                                            <FileText className="w-6 h-6 text-green-600" />
                                        </div>
                                        <div className="min-w-0">
                                            <p className="font-medium text-gray-900 truncate">{fileB.name}</p>
                                            <p className="text-xs text-gray-500">{(fileB.size / 1024).toFixed(1)} KB</p>
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => setFileB(null)}
                                        className="text-red-500 hover:text-red-600 text-sm font-medium hover:underline shrink-0 ml-2"
                                    >
                                        Change
                                    </button>
                                </div>
                            ) : (
                                <EnhancedFileUploader
                                    onFileSelect={setFileB}
                                    label="Click to upload"
                                    description="Second PDF file"
                                />
                            )}
                        </div>
                    </div>

                    {/* CTA Button */}
                    <div className="text-center">
                        <button
                            onClick={handleCompare}
                            disabled={!fileA || !fileB || loading}
                            className={`
                                group relative inline-flex items-center gap-2 px-10 py-4 rounded-full text-lg font-bold shadow-xl transition-all duration-300
                                ${(!fileA || !fileB || loading)
                                    ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                                    : 'bg-gradient-to-r from-violet-600 to-purple-600 text-white hover:shadow-2xl hover:scale-105 hover:from-violet-500 hover:to-purple-500'
                                }
                            `}
                        >
                            {loading ? (
                                <>Processing...</>
                            ) : (
                                <>
                                    Compare PDF
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </>
                            )}
                        </button>

                        {/* Security Note */}
                        <div className="mt-4 flex items-center justify-center gap-2 text-gray-500 text-sm">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            <span>Your files are processed securely and never stored on our servers.</span>
                        </div>
                    </div>
                </div>
            ) : (
                /* Results View */
                <div className="animate-in fade-in zoom-in-95 duration-500">
                    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden mb-8">
                        <div className="p-4 sm:p-6 border-b border-gray-100 bg-gray-50 flex flex-col sm:flex-row justify-between items-center gap-4">
                            <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                                <FileText className="w-5 h-5 text-purple-600" />
                                Comparison Result
                            </h3>
                            <div className="flex gap-4 text-sm font-medium">
                                <span className="flex items-center gap-2 text-gray-600">
                                    <span className="w-3 h-3 bg-red-100 border border-red-200 rounded-sm"></span>
                                    Removed
                                </span>
                                <span className="flex items-center gap-2 text-gray-600">
                                    <span className="w-3 h-3 bg-green-100 border border-green-200 rounded-sm"></span>
                                    Added
                                </span>
                            </div>
                        </div>

                        <div className="p-6 font-mono text-sm overflow-x-auto max-h-[600px] overflow-y-auto bg-white custom-scrollbar">
                            {diffResult.length === 0 ? (
                                <div className="text-center py-16">
                                    <div className="p-6 bg-green-50 text-green-600 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                                        <CheckCircle size={40} />
                                    </div>
                                    <h4 className="text-xl font-bold text-gray-800 mb-2">Documents are Identical</h4>
                                    <p className="text-gray-500">No text differences found between these two PDF files.</p>
                                </div>
                            ) : (
                                diffResult.map((line, idx) => (
                                    <div key={idx} className={`
                                        px-4 py-2 border-b border-gray-50 whitespace-pre-wrap flex transition-colors
                                        ${line.added
                                            ? 'bg-green-50 text-green-800 border-green-100'
                                            : line.removed
                                                ? 'bg-red-50 text-red-800 border-red-100'
                                                : 'text-gray-600 hover:bg-gray-50'}
                                    `}>
                                        <span className="mr-6 text-gray-300 select-none w-8 text-right flex-shrink-0 text-xs py-0.5">{idx + 1}</span>
                                        <span className="flex-1 leading-relaxed">
                                            {line.added ? '+ ' : line.removed ? '- ' : '  '}
                                            {line.value}
                                        </span>
                                    </div>
                                ))
                            )}
                        </div>

                        <div className="p-4 bg-gray-50 border-t border-gray-100 text-center">
                            <button
                                onClick={handleReset}
                                className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 font-semibold hover:underline"
                            >
                                <ArrowRight className="w-4 h-4 rotate-180" />
                                Compare New Files
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ComparePdfClient;
