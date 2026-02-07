'use client';

import { useState } from 'react';
import { PDFDocument } from 'pdf-lib';
import { Loader2, Shield, Lock, FileText, Cloud } from 'lucide-react';
import ToolPageLayout from '../../components/ToolPageLayout';

export default function RestrictPdfClient() {
    const [file, setFile] = useState<File | null>(null);
    const [password, setPassword] = useState('');
    const [allowPrinting, setAllowPrinting] = useState(false);
    const [allowCopying, setAllowCopying] = useState(false);
    const [isProcessing, setIsProcessing] = useState(false);
    const [isDragging, setIsDragging] = useState(false);

    const handleFileSelect = (selectedFile: File) => {
        if (selectedFile.type === 'application/pdf' || selectedFile.name.toLowerCase().endsWith('.pdf')) {
            setFile(selectedFile);
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

    const steps = [
        {
            title: "Step 1: Upload PDF",
            description: "Select or drag and drop your PDF to protect."
        },
        {
            title: "Step 2: Set Permissions",
            description: "Choose what users can do - allow or restrict printing and copying."
        },
        {
            title: "Step 3: Download",
            description: "Get your protected PDF with restricted permissions."
        }
    ];

    return (
        <ToolPageLayout
            title="Restrict PDF Permissions"
            subtitle="Prevent unauthorized printing, copying, and editing of your PDF documents."
            steps={steps}
            ctaText="Protect PDF"
            onAction={handleProtect}
            loading={isProcessing}
            disabled={!file || !password}
            showCta={!!file}
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
                            <span className="font-medium text-gray-900 truncate max-w-[150px] sm:max-w-[200px] text-sm sm:text-base">{file.name}</span>
                        </div>
                        <button
                            onClick={() => setFile(null)}
                            className="text-xs sm:text-sm text-red-500 hover:text-red-700 font-medium"
                        >
                            Change
                        </button>
                    </div>

                    <div className="space-y-5">
                        {/* Password Input */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Owner Password <span className="text-red-500">*</span>
                            </label>
                            <div className="relative">
                                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="pl-10 w-full bg-gray-50 border border-gray-200 rounded-xl py-3 px-4 focus:ring-2 focus:ring-purple-500 focus:border-transparent focus:outline-none text-gray-900"
                                    placeholder="Enter a secure password"
                                />
                            </div>
                            <p className="text-xs text-gray-500 mt-1">This password is required to remove these restrictions later.</p>
                        </div>

                        {/* Permissions */}
                        <div className="space-y-3">
                            <label className="block text-sm font-medium text-gray-700">Permissions</label>

                            <div className="flex items-center space-x-3 p-4 border border-gray-200 rounded-xl bg-gray-50">
                                <input
                                    type="checkbox"
                                    id="allowPrinting"
                                    checked={allowPrinting}
                                    onChange={(e) => setAllowPrinting(e.target.checked)}
                                    className="w-5 h-5 text-purple-600 rounded focus:ring-purple-500"
                                />
                                <label htmlFor="allowPrinting" className="flex-1 cursor-pointer select-none text-gray-700">
                                    Allow Printing
                                </label>
                            </div>

                            <div className="flex items-center space-x-3 p-4 border border-gray-200 rounded-xl bg-gray-50">
                                <input
                                    type="checkbox"
                                    id="allowCopying"
                                    checked={allowCopying}
                                    onChange={(e) => setAllowCopying(e.target.checked)}
                                    className="w-5 h-5 text-purple-600 rounded focus:ring-purple-500"
                                />
                                <label htmlFor="allowCopying" className="flex-1 cursor-pointer select-none text-gray-700">
                                    Allow Copying Text & Images
                                </label>
                            </div>
                        </div>

                        <button
                            onClick={handleProtect}
                            disabled={isProcessing || !password}
                            className={`w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-violet-500 to-purple-600 text-white font-bold py-3 sm:py-4 px-6 rounded-xl transition-all shadow-lg hover:shadow-xl ${isProcessing || !password ? 'opacity-50 cursor-not-allowed' : 'hover:scale-[1.02]'
                                }`}
                        >
                            {isProcessing ? <Loader2 className="animate-spin" size={20} /> : <Shield size={20} />}
                            <span className="text-sm sm:text-base">{isProcessing ? 'Applying Restrictions...' : 'Protect PDF'}</span>
                        </button>
                    </div>
                </div>
            )}
        </ToolPageLayout>
    );
}
