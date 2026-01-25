'use client';

import { useState } from 'react';
import { PDFDocument } from 'pdf-lib';
import { Loader2, Lock, FileText, ShieldCheck } from 'lucide-react';
import FileUploader from '../../components/FileUploader';

const ProtectPdfPage = () => {
    const [file, setFile] = useState<File | null>(null);
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const handleFileChange = (file: File) => {
        setFile(file);
    };

    const handleProtect = async () => {
        if (!file || !password) {
            alert('Please select a file and enter a password.');
            return;
        }

        setLoading(true);
        try {
            const pdfBytes = await file.arrayBuffer();
            const pdf = await PDFDocument.load(pdfBytes);

            // Encrypt the PDF
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            await (pdf as any).encrypt({
                userPassword: password,
                ownerPassword: password,
                permissions: {
                    printing: 'highResolution',
                    modifying: false,
                    copying: false,
                    annotating: false,
                    fillingForms: false,
                    contentAccessibility: false,
                    documentAssembly: false,
                },
            });

            const newPdfBytes = await pdf.save();

            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const blob = new Blob([newPdfBytes as any], { type: 'application/pdf' });
            const link = document.createElement('a');
            link.href = URL.createObjectURL(blob);
            link.download = `protected-${file.name}`;
            link.click();
            alert('PDF protected successfully!');
        } catch (error) {
            console.error('Error protecting PDF:', error);
            alert(`An error occurred: ${(error as Error).message}`);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-4xl mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-4 text-center text-gray-900 dark:text-white">
                Protect PDF
            </h1>
            <p className="text-center text-gray-500 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
                Encrypt your PDF with a password to restrict access.
            </p>

            {!file ? (
                <FileUploader onFileSelect={handleFileChange} label="Select PDF to Protect" />
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
                            Set Password
                        </label>
                        <Lock className="absolute left-3 top-9 text-gray-400" size={18} />
                        <input
                            type="password"
                            placeholder="Enter a strong password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="pl-10 w-full bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg py-3 px-4 focus:ring-2 focus:ring-blue-500 focus:outline-none text-gray-900 dark:text-white transition-all"
                        />
                    </div>

                    <button
                        onClick={handleProtect}
                        disabled={loading || !password}
                        className={`w-full flex items-center justify-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-xl transition-all shadow-lg hover:shadow-xl ${loading || !password ? 'opacity-50 cursor-not-allowed' : ''
                            }`}
                    >
                        {loading ? <Loader2 className="animate-spin" /> : <ShieldCheck size={20} />}
                        <span>{loading ? 'Encrypting...' : 'Protect PDF'}</span>
                    </button>
                </div>
            )}
        </div>
    );
};

export default ProtectPdfPage;
