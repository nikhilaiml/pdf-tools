'use client';

import { useState } from 'react';
import pptxgen from 'pptxgenjs';
import { Loader2, Download, Presentation, Cloud } from 'lucide-react';
import ToolPageLayout from '../../components/ToolPageLayout';

interface PdfToPptClientProps {
    seoContent: React.ReactNode;
}

const PdfToPptClient = ({ seoContent }: PdfToPptClientProps) => {
    const [file, setFile] = useState<File | null>(null);
    const [loading, setLoading] = useState(false);
    const [progress, setProgress] = useState(0);
    const [isDragging, setIsDragging] = useState(false);

    const handleFileSelect = (selectedFile: File) => {
        if (selectedFile.type === 'application/pdf' || selectedFile.name.toLowerCase().endsWith('.pdf')) {
            setFile(selectedFile);
            setProgress(0);
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

    const handleConvert = async () => {
        if (!file) return;

        setLoading(true);
        setProgress(0);
        try {
            const pdfjsLib = await import('pdfjs-dist');
            pdfjsLib.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjsLib.version}/build/pdf.worker.min.mjs`;

            const arrayBuffer = await file.arrayBuffer();
            const pdf = await pdfjsLib.getDocument(arrayBuffer).promise;

            const pres = new pptxgen();

            for (let i = 1; i <= pdf.numPages; i++) {
                const page = await pdf.getPage(i);
                const viewport = page.getViewport({ scale: 2 });

                const canvas = document.createElement('canvas');
                const context = canvas.getContext('2d');
                canvas.height = viewport.height;
                canvas.width = viewport.width;

                if (context) {
                    const renderContext = {
                        canvasContext: context,
                        viewport: viewport,
                    } as any; // eslint-disable-line @typescript-eslint/no-explicit-any

                    await page.render(renderContext).promise;

                    const imgData = canvas.toDataURL('image/jpeg', 0.8);

                    const slide = pres.addSlide();
                    slide.addImage({
                        data: imgData,
                        x: 0,
                        y: 0,
                        w: '100%',
                        h: '100%',
                        sizing: { type: 'contain', w: '100%', h: '100%' }
                    });
                }

                setProgress(Math.round((i / pdf.numPages) * 100));
            }

            await pres.writeFile({ fileName: `${file.name.replace('.pdf', '')}.pptx` });
            alert('File converted successfully!');
        } catch (error) {
            console.error('Error converting to PPT:', error);
            alert('Failed to convert PDF.');
        } finally {
            setLoading(false);
            setProgress(0);
        }
    };

    const steps = [
        {
            title: "Upload PDF",
            description: "Select your file from your device."
        },
        {
            title: "Convert PDF",
            description: "Our tool processes your file instantly."
        },
        {
            title: "Download PPT",
            description: "Save your new PowerPoint presentation."
        }
    ];

    return (
        <ToolPageLayout
            title="PDF to PPT Converter"
            subtitle="Convert PDF to PowerPoint presentation online for free. Fast, secure, and easy to use."
            steps={steps}
            ctaText="Convert to PPT"
            onAction={handleConvert}
            loading={loading}
            disabled={!file}
            showCta={!!file}
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
                        Upload PDF File
                    </p>
                    <p className="text-sm sm:text-base text-gray-500 text-center">or drag and drop</p>

                    <input
                        id="file-input"
                        type="file"
                        accept=".pdf"
                        onChange={(e) => e.target.files?.[0] && handleFileSelect(e.target.files[0])}
                        className="hidden"
                    />
                </div>
            ) : (
                <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl border border-gray-100 p-6 sm:p-8 max-w-2xl mx-auto">
                    <div className="flex items-center justify-between mb-6 p-3 sm:p-4 bg-gray-50 rounded-xl">
                        <div className="flex items-center space-x-3">
                            <div className="p-2 bg-orange-100 rounded-lg">
                                <Presentation className="text-orange-500 w-5 h-5 sm:w-6 sm:h-6" />
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

                    <button
                        onClick={handleConvert}
                        disabled={loading}
                        className={`w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-violet-500 to-purple-600 text-white font-bold py-3 sm:py-4 px-6 rounded-xl transition-all shadow-lg hover:shadow-xl ${loading ? 'opacity-50 cursor-not-allowed' : 'hover:scale-[1.02]'
                            }`}
                    >
                        {loading ? <Loader2 className="animate-spin" size={20} /> : <Download size={20} />}
                        <span className="text-sm sm:text-base">{loading ? `Converting... ${progress}%` : 'Convert to PowerPoint'}</span>
                    </button>

                    <p className="text-xs text-center text-gray-500 mt-4">
                        Files are secured and deleted after 1 hour.
                    </p>
                </div>
            )}
        </ToolPageLayout>
    );
};

export default PdfToPptClient;
