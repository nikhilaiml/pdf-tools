'use client';

import { useState, useCallback } from 'react';
import { Upload, FileText, AlertCircle } from 'lucide-react';

interface FileUploaderProps {
    onFileSelect: (file: File) => void;
    accept?: string;
    label?: string;
    description?: string;
}

const FileUploader = ({
    onFileSelect,
    accept = ".pdf",
    label = "Select PDF file",
    description = "or drop file here"
}: FileUploaderProps) => {
    const [isDragging, setIsDragging] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleDragOver = useCallback((e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(true);
    }, []);

    const handleDragLeave = useCallback((e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(false);
    }, []);

    const handleDrop = useCallback((e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(false);
        setError(null);

        const files = e.dataTransfer.files;
        if (files && files.length > 0) {
            validateAndPass(files[0]);
        }
    }, []);

    const handleFileInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setError(null);
        if (e.target.files && e.target.files.length > 0) {
            validateAndPass(e.target.files[0]);
        }
    }, []);

    const validateAndPass = (file: File) => {
        // Basic extension check
        if (accept === '.pdf' && file.type !== 'application/pdf' && !file.name.toLowerCase().endsWith('.pdf')) {
            setError('Please select a valid PDF file.');
            return;
        }
        onFileSelect(file);
    };

    return (
        <div
            className={`
        flex flex-col items-center justify-center p-12 
        border-2 border-dashed rounded-xl 
        transition-all duration-300 cursor-pointer
        glass-panel
        ${isDragging
                    ? 'border-blue-500 bg-blue-500/10 scale-[1.02] shadow-xl shadow-blue-500/10'
                    : 'border-white/10 hover:border-blue-400/50 hover:bg-white/5'
                }
      `}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
        >
            <Upload className={`w-16 h-16 mb-4 ${isDragging ? 'text-blue-500' : 'text-gray-400'}`} />

            <p className="text-xl font-medium text-gray-700 dark:text-gray-300 mb-2">
                {label}
            </p>

            <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
                {description}
            </p>

            <input
                type="file"
                accept={accept}
                onChange={handleFileInput}
                className="hidden"
                id="file-upload"
            />

            <label
                htmlFor="file-upload"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg cursor-pointer transition-colors shadow-lg hover:shadow-xl"
            >
                Choose File
            </label>

            {error && (
                <div className="mt-4 flex items-center text-red-500 text-sm">
                    <AlertCircle size={16} className="mr-2" />
                    {error}
                </div>
            )}
        </div>
    );
};

export default FileUploader;
