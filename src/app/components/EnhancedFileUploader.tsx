'use client';

import { useState, useCallback, useRef } from 'react';
import { Cloud, AlertCircle } from 'lucide-react';

interface EnhancedFileUploaderProps {
    onFileSelect: (file: File) => void;
    onFilesSelect?: (files: File[]) => void;
    accept?: string;
    multiple?: boolean;
    label?: string;
    description?: string;
}

const EnhancedFileUploader = ({
    onFileSelect,
    onFilesSelect,
    accept = ".pdf",
    multiple = false,
    label = "Drag & Drop PDFs Here",
    description = "or click to browse"
}: EnhancedFileUploaderProps) => {
    const [isDragging, setIsDragging] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const inputRef = useRef<HTMLInputElement>(null);

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

        const files = Array.from(e.dataTransfer.files);
        if (files.length > 0) {
            if (multiple && onFilesSelect) {
                const pdfFiles = files.filter(f => f.type === 'application/pdf' || f.name.toLowerCase().endsWith('.pdf'));
                if (pdfFiles.length > 0) {
                    onFilesSelect(pdfFiles);
                } else {
                    setError('Please select valid PDF files.');
                }
            } else {
                validateAndPass(files[0]);
            }
        }
    }, [multiple, onFilesSelect]);

    const handleFileInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setError(null);
        if (e.target.files && e.target.files.length > 0) {
            if (multiple && onFilesSelect) {
                onFilesSelect(Array.from(e.target.files));
            } else {
                validateAndPass(e.target.files[0]);
            }
        }
    }, [multiple, onFilesSelect]);

    const validateAndPass = (file: File) => {
        if (accept === '.pdf' && file.type !== 'application/pdf' && !file.name.toLowerCase().endsWith('.pdf')) {
            setError('Please select a valid PDF file.');
            return;
        }
        onFileSelect(file);
    };

    const handleClick = () => {
        inputRef.current?.click();
    };

    return (
        <div
            className={`
                bg-white rounded-2xl sm:rounded-3xl shadow-xl border-2 border-dashed p-6 sm:p-12
                transition-all duration-300 cursor-pointer
                ${isDragging
                    ? 'border-purple-500 bg-purple-50 scale-[1.02]'
                    : 'border-orange-200 hover:border-purple-400 hover:shadow-2xl'
                }
            `}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            onClick={handleClick}
        >
            {/* Cloud Icon with Orange Background */}
            <div className="flex justify-center mb-4 sm:mb-6">
                <div className={`
                    p-4 sm:p-6 rounded-2xl sm:rounded-3xl transition-colors
                    ${isDragging ? 'bg-purple-100' : 'bg-orange-50'}
                `}>
                    <Cloud className={`w-12 h-12 sm:w-16 sm:h-16 ${isDragging ? 'text-purple-500' : 'text-orange-400'}`} strokeWidth={1.5} />
                </div>
            </div>

            <p className={`text-xl sm:text-2xl font-bold text-center mb-2 ${isDragging ? 'text-purple-700' : 'text-gray-800'}`}>
                {label}
            </p>

            <p className="text-sm sm:text-base text-gray-500 text-center">
                {description}
            </p>

            <input
                ref={inputRef}
                type="file"
                accept={accept}
                multiple={multiple}
                onChange={handleFileInput}
                className="hidden"
            />

            {error && (
                <div className="mt-4 flex items-center justify-center text-red-500 text-sm">
                    <AlertCircle size={16} className="mr-2" />
                    {error}
                </div>
            )}
        </div>
    );
};

export default EnhancedFileUploader;
