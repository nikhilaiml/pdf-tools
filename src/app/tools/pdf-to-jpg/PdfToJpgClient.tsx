'use client';

import { useState } from 'react';
import * as pdfjsLib from 'pdfjs-dist';
import JSZip from 'jszip';
import { Loader2, FileText, Download } from 'lucide-react';
import FileUploader from '../../components/FileUploader';

// Initialize PDF.js worker
if (typeof window !== 'undefined') {
    pdfjsLib.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjsLib.version}/build/pdf.worker.min.mjs`;
}

interface ConvertedImage {
    blob: Blob;
    url: string;
    page: number;
}

const PdfToJpgClient = () => {
    const [file, setFile] = useState<File | null>(null);
    const [images, setImages] = useState<ConvertedImage[]>([]);
    const [loading, setLoading] = useState(false);
    const [progress, setProgress] = useState(0);

    const convertToJpg = async (file: File) => {
        setLoading(true);
        setImages([]);
        setProgress(0);
        try {
            const arrayBuffer = await file.arrayBuffer();
            const pdf = await pdfjsLib.getDocument(arrayBuffer).promise;

            const newImages: ConvertedImage[] = [];

            for (let i = 1; i <= pdf.numPages; i++) {
                const page = await pdf.getPage(i);

                // Set scale for high quality (e.g. 2.0 = 200% zoom level)
                const viewport = page.getViewport({ scale: 2.0 });

                const canvas = document.createElement('canvas');
                const context = canvas.getContext('2d');
                canvas.height = viewport.height;
                canvas.width = viewport.width;

                if (context) {
                    await page.render({
                        canvasContext: context,
                        viewport: viewport,
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    } as any).promise;

                    const blob = await new Promise<Blob | null>(resolve =>
                        canvas.toBlob(resolve, 'image/jpeg', 0.9)
                    );

                    if (blob) {
                        newImages.push({
                            blob,
                            url: URL.createObjectURL(blob),
                            page: i
                        });
                    }
                }

                // Update progress
                setProgress(Math.round((i / pdf.numPages) * 100));
            }

            setImages(newImages);
        } catch (error) {
            console.error('Error converting to JPG:', error);
            alert('Failed to convert PDF. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    const handleFileSelect = (selectedFile: File) => {
        setFile(selectedFile);
        convertToJpg(selectedFile);
    };

    const handleDownloadAll = async () => {
        if (images.length === 0) return;

        const zip = new JSZip();

        images.forEach((img) => {
            zip.file(`page-${img.page}.jpg`, img.blob);
        });

        const content = await zip.generateAsync({ type: 'blob' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(content);
        link.download = file ? `${file.name.replace('.pdf', '')}-images.zip` : 'pdf-images.zip';
        link.click();
    };

    const handleDownloadSingle = (image: ConvertedImage) => {
        const link = document.createElement('a');
        link.href = image.url;
        link.download = `page-${image.page}.jpg`;
        link.click();
    };

    return (
        <div className="max-w-6xl mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-4 text-center text-gray-900 dark:text-white">
                PDF to JPG Converter
            </h1>
            <p className="text-center text-gray-500 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
                Convert PDF pages to high-quality JPG images. Download single pages or all at once.
            </p>

            {!file ? (
                <FileUploader onFileSelect={handleFileSelect} label="Select PDF to Convert" accept=".pdf" />
            ) : (
                <div className="animate-in fade-in zoom-in duration-300">
                    <div className="flex justify-between items-center mb-6 bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                        <div className="flex items-center space-x-3">
                            <FileText className="text-blue-500" />
                            <span className="font-medium text-gray-900 dark:text-white truncate max-w-[200px] md:max-w-xs">{file.name}</span>
                        </div>
                        <button
                            onClick={() => { setFile(null); setImages([]); }}
                            className="text-sm text-red-500 hover:text-red-700 hover:underline"
                        >
                            Convert another
                        </button>
                    </div>

                    {loading ? (
                        <div className="flex flex-col items-center justify-center py-20 text-center">
                            <Loader2 className="w-12 h-12 text-blue-500 animate-spin mb-4" />
                            <h3 className="text-xl font-semibold mb-2">Converting Pages...</h3>
                            <div className="w-64 bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mt-2">
                                <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${progress}%` }}></div>
                            </div>
                            <p className="text-gray-500 mt-2">{progress}% complete</p>
                        </div>
                    ) : (
                        <div>
                            <div className="flex justify-end mb-6">
                                <button
                                    onClick={handleDownloadAll}
                                    className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow-lg transition-all transform hover:scale-105"
                                >
                                    <Download size={20} />
                                    <span>Download All Images (ZIP)</span>
                                </button>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                                {images.map((img) => (
                                    <div key={img.page} className="bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 overflow-hidden group">
                                        <div className="aspect-[1/1.4] relative bg-gray-100 dark:bg-gray-900 flex items-center justify-center overflow-hidden">
                                            {/* eslint-disable-next-line @next/next/no-img-element */}
                                            <img
                                                src={img.url}
                                                alt={`Page ${img.page}`}
                                                className="w-full h-full object-contain"
                                            />
                                            {/* Overlay */}
                                            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                                <button
                                                    onClick={() => handleDownloadSingle(img)}
                                                    className="bg-white text-gray-900 rounded-full p-3 hover:bg-gray-100 transition-colors"
                                                    title="Download Image"
                                                >
                                                    <Download size={20} />
                                                </button>
                                            </div>
                                        </div>
                                        <div className="p-3 text-center border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
                                            <span className="text-sm font-medium text-gray-600 dark:text-gray-300">Page {img.page}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default PdfToJpgClient;
