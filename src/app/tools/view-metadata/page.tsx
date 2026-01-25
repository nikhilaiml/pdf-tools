'use client';

import { useState } from 'react';
import { PDFDocument } from 'pdf-lib';
import { Loader2, Info, FileText } from 'lucide-react';
import FileUploader from '../../components/FileUploader';

const ViewMetadataPage = () => {
    const [file, setFile] = useState<File | null>(null);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [metadata, setMetadata] = useState<any>(null);
    const [loading, setLoading] = useState(false);

    const handleFileChange = (file: File) => {
        setFile(file);
        setMetadata(null);
    };

    const handleViewMetadata = async () => {
        if (!file) {
            alert('Please select a file.');
            return;
        }

        setLoading(true);
        try {
            const bytes = await file.arrayBuffer();
            const pdf = await PDFDocument.load(bytes);

            const info = {
                Title: pdf.getTitle() || 'N/A',
                Author: pdf.getAuthor() || 'N/A',
                Subject: pdf.getSubject() || 'N/A',
                Keywords: pdf.getKeywords() || 'N/A',
                Creator: pdf.getCreator() || 'N/A',
                Producer: pdf.getProducer() || 'N/A',
                CreationDate: pdf.getCreationDate()?.toLocaleString() || 'N/A',
                ModificationDate: pdf.getModificationDate()?.toLocaleString() || 'N/A',
                PageCount: pdf.getPageCount(),
            };

            setMetadata(info);
        } catch (error) {
            console.error('Error reading metadata:', error);
            alert(`An error occurred: ${(error as Error).message}`);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-4xl mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-4 text-center text-gray-900 dark:text-white">
                View PDF Metadata
            </h1>
            <p className="text-center text-gray-500 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
                Inspect the hidden details of your PDF files.
            </p>

            {!file ? (
                <FileUploader onFileSelect={handleFileChange} label="Select PDF to Inspect" />
            ) : (
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-8 max-w-2xl mx-auto animate-in fade-in zoom-in duration-300">
                    <div className="flex items-center space-x-3 mb-8 p-4 bg-gray-50 dark:bg-gray-900/50 rounded-lg">
                        <FileText className="text-blue-500" size={24} />
                        <div>
                            <p className="font-medium text-gray-900 dark:text-white truncate max-w-[200px]">{file.name}</p>
                            <button
                                onClick={() => { setFile(null); setMetadata(null); }}
                                className="text-xs text-red-500 hover:text-red-700 hover:underline"
                            >
                                Change be file
                            </button>
                        </div>
                    </div>

                    {!metadata && (
                        <button
                            onClick={handleViewMetadata}
                            disabled={loading}
                            className={`w-full flex items-center justify-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-xl transition-all shadow-lg hover:shadow-xl ${loading ? 'opacity-50 cursor-not-allowed' : ''
                                }`}
                        >
                            {loading ? <Loader2 className="animate-spin" /> : <Info size={20} />}
                            <span>{loading ? 'Reading info...' : 'View Metadata'}</span>
                        </button>
                    )}

                    {metadata && (
                        <div className="bg-gray-50 dark:bg-gray-900/50 rounded-xl p-6 border border-gray-200 dark:border-gray-700 animate-in slide-in-from-bottom-2">
                            <h3 className="text-lg font-bold mb-4 text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2">File Information</h3>
                            <div className="grid grid-cols-1 gap-4">
                                {Object.entries(metadata).map(([key, value]) => (
                                    <div key={key} className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-2 border-b border-gray-100 dark:border-gray-800 last:border-0">
                                        <span className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1 sm:mb-0">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                                        <span className="text-sm font-semibold text-gray-900 dark:text-white break-all sm:text-right">
                                            {String(value)}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default ViewMetadataPage;
