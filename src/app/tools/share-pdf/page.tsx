'use client';

import { useState } from 'react';
import { Share2, Loader2, Copy, CheckCircle, FileText, Clock, Download } from 'lucide-react';
import FileUploader from '../../components/FileUploader';

export default function SharePdfPage() {
    const [file, setFile] = useState<File | null>(null);
    const [expiry, setExpiry] = useState<string>('14d'); // Default 14 days (file.io default)
    const [downloadLimit, setDownloadLimit] = useState<string>('1'); // Default 1 download
    const [isUploading, setIsUploading] = useState(false);
    const [shareLink, setShareLink] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    const handleFileSelect = (selectedFile: File) => {
        setFile(selectedFile);
        setError(null);
        setShareLink(null);
    };

    const handleShare = async () => {
        if (!file) return;

        setIsUploading(true);
        setError(null);

        try {
            const formData = new FormData();
            formData.append('file', file);

            // Note: file.io free tier has limitations, but parameters can be passed
            // expiry: 14d default
            // autoDelete: true default

            // We use file.io's public API
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

    return (
        <div className="max-w-4xl mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-4 text-center text-gray-900 dark:text-white">
                Share PDF with Expiry
            </h1>
            <p className="text-center text-gray-500 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
                Securely share your PDF with a temporary link. The file is deleted after it's downloaded.
            </p>

            {!file ? (
                <FileUploader onFileSelect={handleFileSelect} label="Select PDF to Share" />
            ) : (
                <div className="animate-in fade-in zoom-in duration-300">
                    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">

                        {/* Header */}
                        <div className="p-6 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                                <FileText className="text-blue-500 w-8 h-8" />
                                <div>
                                    <h3 className="font-medium text-gray-900 dark:text-white">{file.name}</h3>
                                    <p className="text-xs text-gray-500">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
                                </div>
                            </div>
                            <button
                                onClick={() => { setFile(null); setShareLink(null); }}
                                className="text-sm text-gray-500 hover:text-red-500 underline"
                            >
                                Change
                            </button>
                        </div>

                        <div className="p-8">
                            {!shareLink ? (
                                <div className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-100 dark:border-blue-800">
                                            <div className="flex items-center mb-2 text-blue-700 dark:text-blue-300">
                                                <Clock size={18} className="mr-2" />
                                                <span className="font-semibold">Auto-Expiry</span>
                                            </div>
                                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                                File automatically deleted after 14 days.
                                            </p>
                                        </div>
                                        <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-100 dark:border-green-800">
                                            <div className="flex items-center mb-2 text-green-700 dark:text-green-300">
                                                <Download size={18} className="mr-2" />
                                                <span className="font-semibold">Download Limit</span>
                                            </div>
                                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                                File deleted immediately after first download.
                                            </p>
                                        </div>
                                    </div>

                                    {error && (
                                        <div className="p-4 bg-red-50 text-red-600 rounded-lg text-center">
                                            {error}
                                        </div>
                                    )}

                                    <button
                                        onClick={handleShare}
                                        disabled={isUploading}
                                        className="w-full flex items-center justify-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 disabled:opacity-70 disabled:transform-none"
                                    >
                                        {isUploading ? (
                                            <>
                                                <Loader2 className="animate-spin" />
                                                <span>Uploading & Generating Link...</span>
                                            </>
                                        ) : (
                                            <>
                                                <Share2 />
                                                <span>Generate Share Link</span>
                                            </>
                                        )}
                                    </button>
                                </div>
                            ) : (
                                <div className="text-center space-y-6 animate-in slide-in-from-bottom-4 duration-500">
                                    <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto">
                                        <CheckCircle className="w-8 h-8 text-green-600 dark:text-green-400" />
                                    </div>

                                    <div>
                                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Link Ready!</h3>
                                        <p className="text-gray-500 dark:text-gray-400">
                                            Share this link. The file will be deleted after it is visited.
                                        </p>
                                    </div>

                                    <div className="flex items-stretch max-w-lg mx-auto bg-gray-100 dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
                                        <div className="flex-1 p-3 text-left overflow-x-auto whitespace-nowrap scrollbar-hide flex items-center">
                                            <span className="text-gray-800 dark:text-gray-200 font-mono">{shareLink}</span>
                                        </div>
                                        <button
                                            onClick={copyLink}
                                            className="bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 px-4 flex items-center transition-colors"
                                            title="Copy to Clipboard"
                                        >
                                            <Copy size={20} className="text-gray-700 dark:text-gray-300" />
                                        </button>
                                    </div>

                                    <button
                                        onClick={() => { setFile(null); setShareLink(null); }}
                                        className="text-blue-600 hover:underline"
                                    >
                                        Share another file
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
