'use client';

import { useState } from 'react';
import { Share2, Loader2, Copy, CheckCircle, FileText, Clock, Download, Cloud } from 'lucide-react';
import ToolPageLayout from '../../components/ToolPageLayout';

export default function SharePdfClient() {
    const [file, setFile] = useState<File | null>(null);
    const [isUploading, setIsUploading] = useState(false);
    const [shareLink, setShareLink] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [isDragging, setIsDragging] = useState(false);

    const handleFileSelect = (selectedFile: File) => {
        if (selectedFile.type === 'application/pdf' || selectedFile.name.toLowerCase().endsWith('.pdf')) {
            setFile(selectedFile);
            setError(null);
            setShareLink(null);
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

    const handleShare = async () => {
        if (!file) return;

        setIsUploading(true);
        setError(null);

        try {
            const formData = new FormData();
            formData.append('file', file);

            const response = await fetch('https://file.io', {
                method: 'POST',
                body: formData,
            });

            if (!response.ok) {
                throw new Error('Upload failed');
            }

            const data = await response.json();

            if (data.success) {
                setShareLink(data.link);
            } else {
                throw new Error(data.message || 'Failed to generate link');
            }

        } catch (err) {
            console.error('Share error:', err);
            setError('Failed to share file. Please try again later.');
        } finally {
            setIsUploading(false);
        }
    };

    const copyLink = () => {
        if (shareLink) {
            navigator.clipboard.writeText(shareLink);
            alert('Link copied to clipboard!');
        }
    };

    const steps = [
        {
            title: "Step 1: Upload PDF",
            description: "Select or drag and drop your PDF file to share."
        },
        {
            title: "Step 2: Generate Link",
            description: "We'll upload and create a secure, temporary share link."
        },
        {
            title: "Step 3: Share",
            description: "Copy the link and share. File auto-deletes after download."
        }
    ];

    return (
        <ToolPageLayout
            title="Share PDF with Expiry"
            subtitle="Securely share your PDF with a temporary link. The file is deleted after it's downloaded."
            steps={steps}
            ctaText="Generate Share Link"
            onAction={handleShare}
            loading={isUploading}
            disabled={!file}
            showCta={!!file && !shareLink}
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
                    <div className="flex items-center justify-between mb-6 p-3 sm:p-4 bg-gray-50 rounded-xl">
                        <div className="flex items-center space-x-3">
                            <div className="p-2 bg-purple-100 rounded-lg">
                                <FileText className="text-purple-500 w-5 h-5 sm:w-6 sm:h-6" />
                            </div>
                            <div>
                                <p className="font-medium text-gray-900 truncate max-w-[150px] sm:max-w-[200px] text-sm sm:text-base">{file.name}</p>
                                <p className="text-xs text-gray-500">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
                            </div>
                        </div>
                        <button
                            onClick={() => { setFile(null); setShareLink(null); }}
                            className="text-xs sm:text-sm text-red-500 hover:text-red-700 font-medium"
                        >
                            Change
                        </button>
                    </div>

                    {!shareLink ? (
                        <div className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="p-4 bg-blue-50 rounded-xl border border-blue-100">
                                    <div className="flex items-center mb-2 text-blue-700">
                                        <Clock size={16} className="mr-2" />
                                        <span className="font-semibold text-sm">Auto-Expiry</span>
                                    </div>
                                    <p className="text-xs text-gray-600">Deleted after 14 days</p>
                                </div>
                                <div className="p-4 bg-green-50 rounded-xl border border-green-100">
                                    <div className="flex items-center mb-2 text-green-700">
                                        <Download size={16} className="mr-2" />
                                        <span className="font-semibold text-sm">One Download</span>
                                    </div>
                                    <p className="text-xs text-gray-600">Deleted after first download</p>
                                </div>
                            </div>

                            {error && (
                                <div className="p-3 bg-red-50 text-red-600 rounded-lg text-center text-sm">
                                    {error}
                                </div>
                            )}

                            <button
                                onClick={handleShare}
                                disabled={isUploading}
                                className={`w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-violet-500 to-purple-600 text-white font-bold py-3 sm:py-4 px-6 rounded-xl transition-all shadow-lg hover:shadow-xl ${isUploading ? 'opacity-50 cursor-not-allowed' : 'hover:scale-[1.02]'
                                    }`}
                            >
                                {isUploading ? <Loader2 className="animate-spin" size={20} /> : <Share2 size={20} />}
                                <span className="text-sm sm:text-base">{isUploading ? 'Uploading...' : 'Generate Share Link'}</span>
                            </button>
                        </div>
                    ) : (
                        <div className="text-center space-y-6">
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                                <CheckCircle className="w-8 h-8 text-green-600" />
                            </div>

                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Link Ready!</h3>
                                <p className="text-sm text-gray-500">
                                    Share this link. The file will be deleted after it is visited.
                                </p>
                            </div>

                            <div className="flex items-stretch bg-gray-100 rounded-xl border border-gray-200 overflow-hidden">
                                <div className="flex-1 p-3 text-left overflow-x-auto whitespace-nowrap flex items-center">
                                    <span className="text-gray-800 font-mono text-sm">{shareLink}</span>
                                </div>
                                <button
                                    onClick={copyLink}
                                    className="bg-gray-200 hover:bg-gray-300 px-4 flex items-center transition-colors"
                                    title="Copy to Clipboard"
                                >
                                    <Copy size={18} className="text-gray-700" />
                                </button>
                            </div>

                            <button
                                onClick={() => { setFile(null); setShareLink(null); }}
                                className="text-purple-600 hover:underline text-sm font-medium"
                            >
                                Share another file
                            </button>
                        </div>
                    )}
                </div>
            )}
        </ToolPageLayout>
    );
}
