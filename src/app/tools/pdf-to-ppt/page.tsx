'use client';

import { useState } from 'react';
import pptxgen from 'pptxgenjs';
import { Loader2, FileText, Download, Presentation } from 'lucide-react';
import FileUploader from '../../components/FileUploader';

const PdfToPptPage = () => {
    const [file, setFile] = useState<File | null>(null);
    const [loading, setLoading] = useState(false);
    const [progress, setProgress] = useState(0);

    const handleFileChange = (file: File) => {
        setFile(file);
        setProgress(0);
    };

    const handleConvert = async () => {
        if (!file) return;

        setLoading(true);
        setProgress(0);
        try {
            // Dynamically import PDF.js
            const pdfjsLib = await import('pdfjs-dist');
            pdfjsLib.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjsLib.version}/build/pdf.worker.min.mjs`;

            const arrayBuffer = await file.arrayBuffer();
            const pdf = await pdfjsLib.getDocument(arrayBuffer).promise;

            const pres = new pptxgen();

            for (let i = 1; i <= pdf.numPages; i++) {
                const page = await pdf.getPage(i);
                const viewport = page.getViewport({ scale: 2 }); // Higher scale for better quality

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
                    // Fit image to slide (assuming landscape default, but can adjust if needed)
                    // PPTXGenJS defaults to 16:9 (10x5.625 inches).
                    // We can either set slide size to match PDF page, or fit image to slide.
                    // Let's fit image to slide for now, or maintain aspect ratio.

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

    return (
        <div className="max-w-4xl mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-4 text-center text-gray-900 dark:text-white">
                PDF to PPT
            </h1>
            <p className="text-center text-gray-500 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
                Convert PDF pages to PowerPoint slides.
            </p>

            {!file ? (
                <FileUploader onFileSelect={handleFileChange} label="Select PDF to Convert" accept=".pdf" />
            ) : (
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-8 max-w-2xl mx-auto animate-in fade-in zoom-in duration-300">
                    <div className="flex items-center space-x-3 mb-8 p-4 bg-gray-50 dark:bg-gray-900/50 rounded-lg">
                        <Presentation className="text-orange-500" size={24} />
                        <div>
                            <p className="font-medium text-gray-900 dark:text-white truncate max-w-[200px]">{file.name}</p>
                            <button
                                onClick={() => setFile(null)}
                                className="text-xs text-red-500 hover:text-red-700 hover:underline"
                            >
                                Change file
                            </button>
                        </div>
                    </div>

                    <button
                        onClick={handleConvert}
                        disabled={loading}
                        className={`w-full flex items-center justify-center space-x-2 bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 px-6 rounded-xl transition-all shadow-lg hover:shadow-xl ${loading ? 'opacity-50 cursor-not-allowed' : ''
                            }`}
                    >
                        {loading ? <Loader2 className="animate-spin" /> : <Download size={20} />}
                        <span>{loading ? `Converting... ${progress}%` : 'Convert to PowerPoint'}</span>
                    </button>

                    <p className="text-xs text-center text-gray-500 mt-4">
                        Converts each page to a high-quality slide image. Text will not be editable.
                    </p>
                </div>
            )}
        </div>
    );
};

export default PdfToPptPage;
