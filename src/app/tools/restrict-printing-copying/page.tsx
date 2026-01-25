'use client';

import { useState } from 'react';
import { PDFDocument } from 'pdf-lib';
import { Loader2, Shield, Lock, FileText } from 'lucide-react';
import FileUploader from '../../components/FileUploader';

export default function RestrictPrintingCopyingPage() {
    const [file, setFile] = useState<File | null>(null);
    const [password, setPassword] = useState('');
    const [allowPrinting, setAllowPrinting] = useState(false);
    const [allowCopying, setAllowCopying] = useState(false);
    const [isProcessing, setIsProcessing] = useState(false);

    const handleFileSelect = (selectedFile: File) => {
        setFile(selectedFile);
    };

    const handleProtect = async () => {
        if (!file) return;
        if (!password) {
            alert('Please enter an owner password to secure the permissions.');
            return;
        }

        setIsProcessing(true);
        try {
            const arrayBuffer = await file.arrayBuffer();
            const pdfDoc = await PDFDocument.load(arrayBuffer);

            // Encrypt the PDF with the given permissions
            // The owner password is required to change permissions later
            // The user password is empty (so they can open it, but restricted)
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (pdfDoc as any).encrypt({
                userPassword: '',
                ownerPassword: password,
                permissions: {
                    printing: allowPrinting ? 'highResolution' : undefined,
                    modifying: false,
                    copying: allowCopying,
                    annotating: false,
                    fillingForms: false,
                    contentAccessibility: allowCopying,
                    documentAssembly: false,
                },
            });

            const pdfBytes = await pdfDoc.save();
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const blob = new Blob([pdfBytes as any], { type: 'application/pdf' });

            // Trigger download
            const link = document.createElement('a');
            link.href = URL.createObjectURL(blob);
            link.download = `protected-${file.name}`;
            link.click();

            alert('PDF protected successfully!');
        } catch (error) {
            console.error('Error protecting PDF:', error);
            alert('Failed to protect PDF. It might already be encrypted.');
        } finally {
            setIsProcessing(false);
        }
    };

    return (
        <div className="max-w-4xl mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-4 text-center text-gray-900 dark:text-white">
                Restrict PDF Permissions
            </h1>
            <p className="text-center text-gray-500 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
                Prevent unauthorized printing, copying, and editing of your PDF documents by setting restricted permissions.
            </p>

            {!file ? (
                <FileUploader onFileSelect={handleFileSelect} label="Select PDF to Restrict" />
            ) : (
                <div className="animate-in fade-in zoom-in duration-300 max-w-2xl mx-auto">
                    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
                        <div className="p-6 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                                <FileText className="text-blue-500" size={24} />
                                <span className="font-medium text-lg text-gray-900 dark:text-white truncate max-w-[200px]">{file.name}</span>
                            </div>
                            <button
                                onClick={() => setFile(null)}
                                className="text-sm text-red-500 hover:text-red-700"
                            >
                                Change File
                            </button>
                        </div>

                        <div className="p-8 space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Owner Password <span className="text-red-500">*</span>
                                </label>
                                <div className="relative">
                                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                                    <input
                                        type="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="pl-10 w-full bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg py-3 px-4 focus:ring-2 focus:ring-blue-500 focus:outline-none text-gray-900 dark:text-white"
                                        placeholder="Enter a secure password"
                                    />
                                </div>
                                <p className="text-xs text-gray-500 mt-1">This password is required to remove these restrictions later.</p>
                            </div>

                            <div className="space-y-4">
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                    Permissions
                                </label>

                                <div className="flex items-center space-x-3 p-4 border border-gray-200 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-900/50">
                                    <input
                                        type="checkbox"
                                        id="allowPrinting"
                                        checked={allowPrinting}
                                        onChange={(e) => setAllowPrinting(e.target.checked)}
                                        className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500"
                                    />
                                    <label htmlFor="allowPrinting" className="flex-1 cursor-pointer select-none text-gray-700 dark:text-gray-300">
                                        Allow Printing
                                    </label>
                                </div>

                                <div className="flex items-center space-x-3 p-4 border border-gray-200 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-900/50">
                                    <input
                                        type="checkbox"
                                        id="allowCopying"
                                        checked={allowCopying}
                                        onChange={(e) => setAllowCopying(e.target.checked)}
                                        className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500"
                                    />
                                    <label htmlFor="allowCopying" className="flex-1 cursor-pointer select-none text-gray-700 dark:text-gray-300">
                                        Allow Copying Text & Images
                                    </label>
                                </div>
                            </div>

                            <button
                                onClick={handleProtect}
                                disabled={isProcessing || !password}
                                className={`w-full flex items-center justify-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-xl transition-all shadow-lg hover:shadow-xl ${isProcessing || !password ? 'opacity-50 cursor-not-allowed' : ''
                                    }`}
                            >
                                {isProcessing ? <Loader2 className="animate-spin" /> : <Shield size={20} />}
                                <span>{isProcessing ? 'Applying Restrictions...' : 'Protect PDF'}</span>
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
