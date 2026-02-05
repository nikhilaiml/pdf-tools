'use client';

import { useState } from 'react';
import JSZip from 'jszip';
import { Loader2, FileText, Download, Cloud } from 'lucide-react';
import ToolPageLayout from '../../components/ToolPageLayout';

interface ConvertedImage {
    blob: Blob;
    url: string;
    page: number;
}

interface PdfToJpgClientProps {
    seoContent?: React.ReactNode;
    title?: string;
    subtitle?: string;
    steps?: { title: string; description: string }[];
}

const PdfToJpgClient = (props: PdfToJpgClientProps) => {
    const { seoContent, title, subtitle } = props;
    const [file, setFile] = useState<File | null>(null);
    const [images, setImages] = useState<ConvertedImage[]>([]);
    const [loading, setLoading] = useState(false);
    const [progress, setProgress] = useState(0);
    const [isDragging, setIsDragging] = useState(false);

    const convertToJpg = async (file: File) => {
        setLoading(true);
        setImages([]);
        setProgress(0);
        try {
            const arrayBuffer = await file.arrayBuffer();

            const pdfjsLib = await import('pdfjs-dist');
            pdfjsLib.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjsLib.version}/build/pdf.worker.min.mjs`;

            const pdf = await pdfjsLib.getDocument(arrayBuffer).promise;

            const newImages: ConvertedImage[] = [];

            for (let i = 1; i <= pdf.numPages; i++) {
                const page = await pdf.getPage(i);


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
        if (selectedFile.type === 'application/pdf' || selectedFile.name.toLowerCase().endsWith('.pdf')) {
            setFile(selectedFile);
            convertToJpg(selectedFile);
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

    const steps = [
        {
            title: "Step 1: Upload PDF",
            description: "Select or drag and drop your PDF file that you want to convert to JPG images."
        },
        {
            title: "Step 2: Convert Pages",
            description: "Each page of your PDF will be converted to a high-quality JPG image automatically."
        },
        {
            title: "Step 3: Download",
            description: "Download individual images or get all pages as a ZIP file. Quick and easy!"
        }
    ];

    return (
        <ToolPageLayout
            title={title || "PDF to JPG Converter"}
            subtitle={subtitle || "Convert PDF pages to high-quality JPG images. Download single pages or all at once."}
            steps={props.steps || steps}
            ctaText="Download All (ZIP)"
            onAction={handleDownloadAll}
            loading={false}
            disabled={images.length === 0}
            showCta={images.length > 0}
            seoContent={seoContent}
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
                <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl border border-gray-100 p-4 sm:p-6">
                    <div className="flex justify-between items-center mb-4 sm:mb-6 p-3 sm:p-4 bg-gray-50 rounded-xl">
                        <div className="flex items-center space-x-3">
                            <div className="p-2 bg-purple-100 rounded-lg">
                                <FileText className="text-purple-500 w-5 h-5" />
                            </div>
                            <span className="font-medium text-gray-900 truncate max-w-[150px] sm:max-w-[200px] text-sm sm:text-base">{file.name}</span>
                        </div>
                        <button
                            onClick={() => { setFile(null); setImages([]); }}
                            className="text-xs sm:text-sm text-red-500 hover:text-red-700 font-medium"
                        >
                            Convert another
                        </button>
                    </div>

                    {loading ? (
                        <div className="flex flex-col items-center justify-center py-12 sm:py-16 text-center">
                            <Loader2 className="w-10 h-10 sm:w-12 sm:h-12 text-purple-500 animate-spin mb-4" />
                            <h3 className="text-lg sm:text-xl font-semibold mb-2 text-gray-900">Converting Pages...</h3>
                            <div className="w-48 sm:w-64 bg-gray-200 rounded-full h-2.5 mt-2">
                                <div className="bg-gradient-to-r from-violet-500 to-purple-600 h-2.5 rounded-full transition-all" style={{ width: `${progress}%` }}></div>
                            </div>
                            <p className="text-gray-500 mt-2 text-sm sm:text-base">{progress}% complete</p>
                        </div>
                    ) : (
                        <div>
                            <div className="flex justify-end mb-4">
                                <button
                                    onClick={handleDownloadAll}
                                    className="flex items-center space-x-2 bg-gradient-to-r from-violet-500 to-purple-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg shadow-lg transition-all transform hover:scale-105 text-sm sm:text-base"
                                >
                                    <Download size={18} />
                                    <span>Download All (ZIP)</span>
                                </button>
                            </div>

                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
                                {images.map((img) => (
                                    <div key={img.page} className="bg-gray-50 rounded-xl overflow-hidden group border border-gray-200">
                                        <div className="aspect-[1/1.4] relative bg-gray-100 flex items-center justify-center overflow-hidden">
                                            {/* eslint-disable-next-line @next/next/no-img-element */}
                                            <img
                                                src={img.url}
                                                alt={`Page ${img.page}`}
                                                className="w-full h-full object-contain"
                                            />
                                            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                                <button
                                                    onClick={() => handleDownloadSingle(img)}
                                                    className="bg-white text-gray-900 rounded-full p-2 sm:p-3 hover:bg-gray-100 transition-colors"
                                                    title="Download Image"
                                                >
                                                    <Download size={18} />
                                                </button>
                                            </div>
                                        </div>
                                        <div className="p-2 text-center border-t border-gray-200 bg-white">
                                            <span className="text-xs sm:text-sm font-medium text-gray-600">Page {img.page}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            )}
        </ToolPageLayout>
    );
};

export default PdfToJpgClient;
