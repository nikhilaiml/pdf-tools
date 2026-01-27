'use client';

import { useState, useEffect, useRef } from 'react';
import { PDFDocument, degrees } from 'pdf-lib';
import { Loader2, Crop, FileText, Undo } from 'lucide-react';
import FileUploader from '../../components/FileUploader';

// Constants for rotation limits
const MIN_ROTATION = -20;
const MAX_ROTATION = 20;

export default function DeskewPdfPage() {
    const [file, setFile] = useState<File | null>(null);
    const [rotationAngle, setRotationAngle] = useState(0);
    const [isProcessing, setIsProcessing] = useState(false);
    const [isRendering, setIsRendering] = useState(false);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    // Canvas ref for preview
    const canvasRef = useRef<HTMLCanvasElement>(null);

    const handleFileSelect = async (selectedFile: File) => {
        setFile(selectedFile);
        setRotationAngle(0);
        setErrorMessage(null);
        await renderPreview(selectedFile);
    };

    const renderPreview = async (fileToRender: File) => {
        setIsRendering(true);
        setErrorMessage(null);
        try {
            const arrayBuffer = await fileToRender.arrayBuffer();

            // Dynamically import PDF.js
            const pdfjsLib = await import('pdfjs-dist');
            // Align with PdfToJpgClient implementation
            pdfjsLib.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjsLib.version}/build/pdf.worker.min.mjs`;

            const pdf = await pdfjsLib.getDocument(arrayBuffer).promise;
            const page = await pdf.getPage(1); // Preview first page

            const viewport = page.getViewport({ scale: 1.5, rotation: 0 });

            const canvas = canvasRef.current;
            if (canvas) {
                const context = canvas.getContext('2d');
                canvas.height = viewport.height;
                canvas.width = viewport.width;

                if (context) {
                    await page.render({
                        canvasContext: context,
                        viewport: viewport,
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    } as any).promise;
                }
            }
        } catch (error) {
            console.error("Error rendering preview:", error);
            setErrorMessage(`Failed to render preview. ${error instanceof Error ? error.message : 'Unknown error'}`);
        } finally {
            setIsRendering(false);
        }
    };

    // Re-render only if file changes. Rotation logic will be visual CSS for instant feedback
    useEffect(() => {
        if (file) {
            renderPreview(file);
        }
         
    }, [file]);

    const handleDeskew = async () => {
        if (!file) return;

        setIsProcessing(true);
        setErrorMessage(null);
        try {
            const arrayBuffer = await file.arrayBuffer();
            const originalPdf = await PDFDocument.load(arrayBuffer, { ignoreEncryption: true });

            // Create a new PDF
            const newPdf = await PDFDocument.create();

            // Iterate over all pages
            const pages = originalPdf.getPages();
            const embeddedPages = await newPdf.embedPages(pages);

            for (let i = 0; i < pages.length; i++) {
                const originalPage = pages[i];
                const embeddedPage = embeddedPages[i];
                const { width, height } = originalPage.getSize();

                // Add page with original dimensions
                const newPage = newPdf.addPage([width, height]);

                // Calculate center
                const cx = width / 2;
                const cy = height / 2;

                // For small angles (manual deskew), we rotate around the center.
                const rad = (rotationAngle * Math.PI) / 180;
                const cos = Math.cos(rad);
                const sin = Math.sin(rad);

                // Calculate the position of the bottom-left corner of the image
                // such that its center aligns with (cx, cy) after rotation.
                const x = cx - (width / 2 * cos - height / 2 * sin);
                const y = cy - (width / 2 * sin + height / 2 * cos);

                newPage.drawPage(embeddedPage, {
                    x,
                    y,
                    width,
                    height,
                    rotate: degrees(rotationAngle)
                });
            }

            const pdfBytes = await newPdf.save();
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const blob = new Blob([pdfBytes as any], { type: 'application/pdf' });

            // Download
            const link = document.createElement('a');
            link.href = URL.createObjectURL(blob);
            link.download = `deskewed-${file.name}`;
            link.click();

        } catch (error) {
            console.error("Error deskewing PDF:", error);
            setErrorMessage(`Failed to process PDF: ${(error as Error).message}`);
        } finally {
            setIsProcessing(false);
        }
    };

    return (
        <div className="max-w-6xl mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-4 text-center text-gray-900 dark:text-white">
                Deskew PDF (Straighten)
            </h1>
            <p className="text-center text-gray-500 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
                Manually adjust the angle of your PDF pages to straighten crooked scans.
            </p>

            {errorMessage && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 max-w-2xl mx-auto">
                    <p className="font-bold">Error</p>
                    <p>{errorMessage}</p>
                </div>
            )}

            {!file ? (
                <FileUploader onFileSelect={handleFileSelect} label="Select PDF to Deskew" />
            ) : (
                <div className="animate-in fade-in zoom-in duration-300">
                    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">

                        {/* Toolbar */}
                        <div className="p-4 border-b border-gray-200 dark:border-gray-700 flex flex-wrap items-center justify-between gap-4">
                            <div className="flex items-center space-x-3">
                                <FileText className="text-blue-500" />
                                <span className="font-medium text-gray-900 dark:text-white truncate max-w-[150px]">{file.name}</span>
                                <button onClick={() => setFile(null)} className="text-sm text-red-500 hover:underline">Change</button>
                            </div>

                            <div className="flex items-center space-x-4 flex-1 justify-center max-w-md">
                                <span className="text-sm text-gray-500 font-medium whitespace-nowrap">Tilt: {rotationAngle}°</span>
                                <input
                                    type="range"
                                    min={MIN_ROTATION}
                                    max={MAX_ROTATION}
                                    step="0.5"
                                    value={rotationAngle}
                                    onChange={(e) => setRotationAngle(parseFloat(e.target.value))}
                                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
                                />
                                <button
                                    onClick={() => setRotationAngle(0)}
                                    title="Reset Angle"
                                    className="p-2 text-gray-500 hover:text-blue-500 transition-colors"
                                >
                                    <Undo size={18} />
                                </button>
                            </div>

                            <button
                                onClick={handleDeskew}
                                disabled={isProcessing}
                                className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors disabled:opacity-50"
                            >
                                {isProcessing ? <Loader2 className="animate-spin" size={18} /> : <Crop size={18} />}
                                <span>Save & Download</span>
                            </button>
                        </div>

                        {/* Preview Area */}
                        <div className="p-8 bg-gray-100 dark:bg-gray-900 overflow-auto flex justify-center min-h-[500px] relative">
                            {isRendering && (
                                <div className="absolute inset-0 z-10 flex items-center justify-center bg-gray-100/80 dark:bg-gray-900/80">
                                    <Loader2 className="w-12 h-12 text-blue-500 animate-spin" />
                                </div>
                            )}

                            <div className="relative shadow-2xl transition-transform duration-200 ease-out origin-center"
                                style={{ transform: `rotate(${rotationAngle}deg)` }}>
                                <canvas ref={canvasRef} className="max-w-full h-auto rounded-sm bg-white" />

                                {/* Grid Overlay for alignment reference */}
                                <div className="absolute inset-0 pointer-events-none opacity-30 border border-blue-500"
                                    style={{
                                        backgroundImage: 'linear-gradient(to right, #3b82f6 1px, transparent 1px), linear-gradient(to bottom, #3b82f6 1px, transparent 1px)',
                                        backgroundSize: '40px 40px'
                                    }}>
                                </div>
                            </div>
                        </div>

                        <div className="p-4 bg-gray-50 dark:bg-gray-800 text-center text-sm text-gray-500">
                            Previewing Page 1. The straightening will be applied to all pages.
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
