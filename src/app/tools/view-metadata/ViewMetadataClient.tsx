'use client';

import { useState } from 'react';
import { PDFDocument } from 'pdf-lib';
import { Loader2, Info, FileText, Cloud } from 'lucide-react';
import ToolPageLayout from '../../components/ToolPageLayout';

const ViewMetadataClient = () => {
    const [file, setFile] = useState<File | null>(null);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [metadata, setMetadata] = useState<any>(null);
    const [loading, setLoading] = useState(false);
    const [isDragging, setIsDragging] = useState(false);

    const handleFileSelect = (selectedFile: File) => {
        if (selectedFile.type === 'application/pdf' || selectedFile.name.toLowerCase().endsWith('.pdf')) {
            setFile(selectedFile);
            setMetadata(null);
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

    const steps = [
        {
            title: "Step 1: Upload PDF",
            description: "Select or drag and drop your PDF file to inspect its metadata."
        },
        {
            title: "Step 2: View Info",
            description: "Click the button to extract and display all hidden document information."
        },
        {
            title: "Step 3: Review",
            description: "See title, author, creation date, page count, and more details."
        }
    ];

    return (
        <ToolPageLayout
            title="View PDF Metadata"
            subtitle="Inspect the hidden details of your PDF files."
            steps={steps}
            ctaText="View Metadata"
            onAction={handleViewMetadata}
            loading={loading}
            disabled={!file || !!metadata}
            showCta={!!file && !metadata}
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
                            onClick={() => { setFile(null); setMetadata(null); }}
                            className="text-xs sm:text-sm text-red-500 hover:text-red-700 font-medium"
                        >
                            Remove
                        </button>
                    </div>

                    {!metadata && (
                        <button
                            onClick={handleViewMetadata}
                            disabled={loading}
                            className={`w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-violet-500 to-purple-600 text-white font-bold py-3 sm:py-4 px-6 rounded-xl transition-all shadow-lg hover:shadow-xl ${loading ? 'opacity-50 cursor-not-allowed' : 'hover:scale-[1.02]'
                                }`}
                        >
                            {loading ? <Loader2 className="animate-spin" size={20} /> : <Info size={20} />}
                            <span className="text-sm sm:text-base">{loading ? 'Reading...' : 'View Metadata'}</span>
                        </button>
                    )}

                    {metadata && (
                        <div className="bg-gray-50 rounded-xl p-4 sm:p-6 border border-gray-200">
                            <h3 className="text-lg font-bold mb-4 text-gray-900 border-b border-gray-200 pb-2">📄 File Information</h3>
                            <div className="space-y-3">
                                {Object.entries(metadata).map(([key, value]) => (
                                    <div key={key} className="flex flex-col sm:flex-row sm:justify-between py-2 border-b border-gray-100 last:border-0">
                                        <span className="text-sm font-medium text-gray-500 mb-1 sm:mb-0">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                                        <span className="text-sm font-semibold text-gray-900 break-all sm:text-right">
                                            {String(value)}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            )}
        </ToolPageLayout>
    );
};

export default ViewMetadataClient;
