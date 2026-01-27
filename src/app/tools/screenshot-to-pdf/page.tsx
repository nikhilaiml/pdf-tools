'use client';

import { useState } from 'react';
import { PDFDocument } from 'pdf-lib';
import { Loader2, FileText, Plus, Cloud, MonitorSmartphone } from 'lucide-react';
import ToolPageLayout from '../../components/ToolPageLayout';

export default function ScreenshotToPdfPage() {
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
            link.download = `screenshot-archive.pdf`;
            link.click();
        } catch (error) {
            console.error(error);
            alert('Failed to create PDF.');
        } finally {
            setIsProcessing(false);
        }
    };

    const steps = [
        {
            title: "Step 1: Add Screenshots",
            description: "Upload screenshots from your device - supports JPG and PNG formats."
        },
        {
            title: "Step 2: Organize",
            description: "Each screenshot becomes a page preserving its original dimensions."
        },
        {
            title: "Step 3: Download",
            description: "Get your shareable PDF archive of all screenshots."
        }
    ];

    return (
        <ToolPageLayout
            title="Screenshot to PDF"
            subtitle="Turn your screenshots into a single, shareable PDF file."
            steps={steps}
            ctaText="Create PDF"
            onAction={handleConvert}
            loading={isProcessing}
            disabled={files.length === 0}
            showCta={files.length > 0}
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
                onClick={() => document.getElementById('screenshot-upload')?.click()}
            >
                <div className="flex justify-center mb-4 sm:mb-6">
                    <div className={`p-4 sm:p-6 rounded-2xl sm:rounded-3xl transition-colors ${isDragging ? 'bg-purple-100' : 'bg-orange-50'}`}>
                        {files.length > 0 ? (
                            <MonitorSmartphone className={`w-12 h-12 sm:w-16 sm:h-16 ${isDragging ? 'text-purple-500' : 'text-orange-400'}`} strokeWidth={1.5} />
                        ) : (
                            <Cloud className={`w-12 h-12 sm:w-16 sm:h-16 ${isDragging ? 'text-purple-500' : 'text-orange-400'}`} strokeWidth={1.5} />
                        )}
                    </div>
                </div>

                <p className={`text-xl sm:text-2xl font-bold text-center mb-2 ${isDragging ? 'text-purple-700' : 'text-gray-800'}`}>
                    {files.length > 0 ? `${files.length} Screenshot(s) Selected` : 'Drag & Drop Screenshots'}
                </p>
                <p className="text-sm sm:text-base text-gray-500 text-center">or click to browse (PNG, JPG)</p>

                <input
                    type="file"
                    multiple
                    accept="image/png, image/jpeg"
                    onChange={handleFileChange}
                    className="hidden"
                    id="screenshot-upload"
                />
            </div>

            {files.length > 0 && (
                <div className="mt-6 bg-white rounded-2xl sm:rounded-3xl shadow-xl border border-gray-100 p-4 sm:p-6">
                    <h3 className="font-semibold mb-4 text-gray-900">Selected Screenshots ({files.length})</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mb-6">
                        {files.map((file, index) => (
                            <div key={index} className="relative group aspect-video bg-gray-100 rounded-xl overflow-hidden border border-gray-200">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src={URL.createObjectURL(file)}
                                    alt={file.name}
                                    className="w-full h-full object-contain"
                                />
                                <button
                                    onClick={(e) => { e.stopPropagation(); removeFile(index); }}
                                    className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                                >
                                    <Plus className="transform rotate-45" size={16} />
                                </button>
                            </div>
                        ))}
                    </div>

                    <button
                        onClick={handleConvert}
                        disabled={isProcessing}
                        className={`w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-violet-500 to-purple-600 text-white font-bold py-3 sm:py-4 px-6 rounded-xl transition-all shadow-lg hover:shadow-xl ${isProcessing ? 'opacity-50 cursor-not-allowed' : 'hover:scale-[1.02]'
                            }`}
                    >
                        {isProcessing ? <Loader2 className="animate-spin" size={20} /> : <FileText size={20} />}
                        <span className="text-sm sm:text-base">{isProcessing ? 'Converting...' : 'Create PDF'}</span>
                    </button>
                </div>
            )}
        </ToolPageLayout>
    );
}
