'use client';

import { useState } from 'react';
import { PDFDocument } from 'pdf-lib';
import { Loader2, FileText, Plus, Cloud, Image as ImageIcon } from 'lucide-react';
import ToolPageLayout from '../../components/ToolPageLayout';

interface BatchImageToPdfClientProps {
    seoContent?: React.ReactNode;
    title?: string;
    subtitle?: string;
    steps?: { title: string; description: string }[];
}

const BatchImageToPdfClient = ({ seoContent, title, subtitle, steps }: BatchImageToPdfClientProps) => {
    const [files, setFiles] = useState<File[]>([]);
    const [isProcessing, setIsProcessing] = useState(false);
    const [isDragging, setIsDragging] = useState(false);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            setFiles(prev => [...prev, ...Array.from(e.target.files!)]);
        }
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(false);
        if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
            const newFiles = Array.from(e.dataTransfer.files).filter(f => f.type.startsWith('image/'));
            setFiles(prev => [...prev, ...newFiles]);
        }
    };

    const removeFile = (index: number) => {
        setFiles(files.filter((_, i) => i !== index));
    };

    const handleConvert = async () => {
        if (files.length === 0) return;

        setIsProcessing(true);
        try {
            const pdfDoc = await PDFDocument.create();

            for (const file of files) {
                const arrayBuffer = await file.arrayBuffer();
                let image;

                if (file.type === 'image/jpeg') {
                    image = await pdfDoc.embedJpg(arrayBuffer);
                } else if (file.type === 'image/png') {
                    image = await pdfDoc.embedPng(arrayBuffer);
                } else {
                    continue;
                }

                const page = pdfDoc.addPage([image.width, image.height]);
                page.drawImage(image, {
                    x: 0,
                    y: 0,
                    width: image.width,
                    height: image.height,
                });
            }

            const pdfBytes = await pdfDoc.save();
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const blob = new Blob([pdfBytes as any], { type: 'application/pdf' });

            const link = document.createElement('a');
            link.href = URL.createObjectURL(blob);
            link.download = `images-to-pdf.pdf`;
            link.click();
        } catch (error) {
            console.error('Error creating PDF:', error);
            alert('Failed to create PDF. Ensure all files are valid images (JPG/PNG).');
        } finally {
            setIsProcessing(false);
        }
    };

    const defaultSteps = [
        {
            title: "Step 1: Add Images",
            description: "Select or drag multiple images (JPG, PNG) to combine into one PDF."
        },
        {
            title: "Step 2: Arrange",
            description: "Each image becomes a page in your PDF, preserving original quality."
        },
        {
            title: "Step 3: Download",
            description: "Get your combined PDF document in seconds."
        }
    ];

    return (
        <ToolPageLayout
            title={title || "Batch Image to PDF"}
            subtitle={subtitle || "Combine multiple images into a single PDF document. Supports JPG and PNG."}
            steps={steps || defaultSteps}
            ctaText="Convert to PDF"
            onAction={handleConvert}
            loading={isProcessing}
            disabled={files.length === 0}
            showCta={files.length > 0}
            seoContent={seoContent}
        >
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
                onClick={() => document.getElementById('multi-file-upload')?.click()}
            >
                <div className="flex justify-center mb-4 sm:mb-6">
                    <div className={`p-4 sm:p-6 rounded-2xl sm:rounded-3xl transition-colors ${isDragging ? 'bg-purple-100' : 'bg-orange-50'}`}>
                        {files.length > 0 ? (
                            <ImageIcon className={`w-12 h-12 sm:w-16 sm:h-16 ${isDragging ? 'text-purple-500' : 'text-orange-400'}`} strokeWidth={1.5} />
                        ) : (
                            <Cloud className={`w-12 h-12 sm:w-16 sm:h-16 ${isDragging ? 'text-purple-500' : 'text-orange-400'}`} strokeWidth={1.5} />
                        )}
                    </div>
                </div>

                <p className={`text-xl sm:text-2xl font-bold text-center mb-2 ${isDragging ? 'text-purple-700' : 'text-gray-800'}`}>
                    {files.length > 0 ? `${files.length} Image(s) Selected` : 'Drag & Drop Images Here'}
                </p>
                <p className="text-sm sm:text-base text-gray-500 text-center">or click to browse (JPG, PNG)</p>

                <input
                    type="file"
                    multiple
                    accept="image/png, image/jpeg"
                    onChange={handleFileChange}
                    className="hidden"
                    id="multi-file-upload"
                />
            </div>

            {files.length > 0 && (
                <div className="mt-6 bg-white rounded-2xl sm:rounded-3xl shadow-xl border border-gray-100 p-4 sm:p-6">
                    <h3 className="font-semibold mb-4 text-gray-900">Selected Images ({files.length})</h3>
                    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3 mb-6">
                        {files.map((file, index) => (
                            <div key={index} className="relative group aspect-square bg-gray-100 rounded-xl overflow-hidden border border-gray-200">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src={URL.createObjectURL(file)}
                                    alt={file.name}
                                    className="w-full h-full object-cover"
                                />
                                <button
                                    onClick={(e) => { e.stopPropagation(); removeFile(index); }}
                                    className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                                >
                                    <Plus className="transform rotate-45" size={16} />
                                </button>
                            </div>
                        ))}
                        <div
                            onClick={(e) => { e.stopPropagation(); document.getElementById('multi-file-upload')?.click(); }}
                            className="flex items-center justify-center aspect-square border-2 border-dashed border-gray-300 rounded-xl hover:bg-gray-50 cursor-pointer"
                        >
                            <Plus className="text-gray-400" size={28} />
                        </div>
                    </div>

                    <button
                        onClick={handleConvert}
                        disabled={isProcessing}
                        className={`w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-violet-500 to-purple-600 text-white font-bold py-3 sm:py-4 px-6 rounded-xl transition-all shadow-lg hover:shadow-xl ${isProcessing ? 'opacity-50 cursor-not-allowed' : 'hover:scale-[1.02]'
                            }`}
                    >
                        {isProcessing ? <Loader2 className="animate-spin" size={20} /> : <FileText size={20} />}
                        <span className="text-sm sm:text-base">{isProcessing ? 'Creating PDF...' : 'Convert to PDF'}</span>
                    </button>
                </div>
            )}
        </ToolPageLayout>
    );
}

export default BatchImageToPdfClient;
