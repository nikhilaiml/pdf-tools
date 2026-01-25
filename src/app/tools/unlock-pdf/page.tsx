'use client';

import { useState } from 'react';
import { PDFDocument } from 'pdf-lib';
import { Loader2, Unlock, FileText, KeyRound } from 'lucide-react';
import FileUploader from '../../components/FileUploader';

const UnlockPdfPage = () => {
    const [file, setFile] = useState<File | null>(null);
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const handleFileChange = (file: File) => {
        setFile(file);
    };

    const handleUnlock = async () => {
        if (!file) {
            alert('Please select a file.');
            return;
        }

        setLoading(true);
        try {
            const pdfBytes = await file.arrayBuffer();

            // pdf-lib `load` behavior with encryption:
            // 1. If owner password is needed but not provided -> Error.
            // 2. We try to load with `ignoreEncryption: true` first (some PDFs allow read-only access but restrict print/copy).
            //    BUT to fully "unlock" (remove security), we typically need to decrypt it.
            //    If we pass the password to `load`, it decrypts it.
            //    Then saving it creates a new PDF without encryption (unless we re-encrypt).

            // Try loading with provided password if any, or default logic
            const loadOptions = password ? { password } : { ignoreEncryption: true };

            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const pdf = await PDFDocument.load(pdfBytes, loadOptions as any);

            // Just saving usually provides an unencrypted file if loaded successfully with rights
            const newPdfBytes = await pdf.save();

            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const blob = new Blob([newPdfBytes as any], { type: 'application/pdf' });
            const link = document.createElement('a');
            link.href = URL.createObjectURL(blob);
            link.download = `unlocked-${file.name}`;
            link.click();
            alert('PDF unlocked successfully!');
        } catch (error) {
            console.error('Error unlocking PDF:', error);
            const msg = (error as Error).message;
            if (msg.includes('Password') || msg.includes('encrypted')) {
                alert('Password required or incorrect. Please enter the correct password.');
            } else {
                alert(`Failed to unlock: ${msg}`);
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-4xl mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-4 text-center text-gray-900 dark:text-white">
                Unlock PDF
            </h1>
            <p className="text-center text-gray-500 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
                Remove password protection and restrictions from your PDF.
            </p>

            {!file ? (
                <FileUploader onFileSelect={handleFileChange} label="Select PDF to Unlock" />
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

                    <div className="mb-8 relative">
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Enter Password (If required)
                        </label>
                        <KeyRound className="absolute left-3 top-9 text-gray-400" size={18} />
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="pl-10 w-full bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg py-3 px-4 focus:ring-2 focus:ring-blue-500 focus:outline-none text-gray-900 dark:text-white transition-all"
                        />
                        <p className="text-xs text-gray-500 mt-2">
                            If the file is just restricted (no open password), you might not need to enter anything.
                        </p>
                    </div>

                    <button
                        onClick={handleUnlock}
                        disabled={loading}
                        className={`w-full flex items-center justify-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-xl transition-all shadow-lg hover:shadow-xl ${loading ? 'opacity-50 cursor-not-allowed' : ''
                            }`}
                    >
                        {loading ? <Loader2 className="animate-spin" /> : <Unlock size={20} />}
                        <span>{loading ? 'Unlocking...' : 'Unlock PDF'}</span>
                    </button>
                </div>
            )}
        </div>
    );
};

export default UnlockPdfPage;
