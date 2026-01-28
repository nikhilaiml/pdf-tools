'use client';

import { useState, useEffect, useRef } from 'react';
import { PDFDocument, degrees } from 'pdf-lib';
import { Loader2, FileText, Undo, Cloud, Download } from 'lucide-react';
import ToolPageLayout from '../../components/ToolPageLayout';

// Constants for rotation limits
const MIN_ROTATION = -20;
const MAX_ROTATION = 20;

export default function DeskewPdfPage() {
    const [file, setFile] = useState<File | null>(null);
    const [rotationAngle, setRotationAngle] = useState(0);
    const [isProcessing, setIsProcessing] = useState(false);
    const [isRendering, setIsRendering] = useState(false);
    const [isDragging, setIsDragging] = useState(false);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    // Canvas ref for preview
    const canvasRef = useRef<HTMLCanvasElement>(null);

    const handleFileSelect = async (selectedFile: File) => {
        if (selectedFile.type === 'application/pdf' || selectedFile.name.toLowerCase().endsWith('.pdf')) {
            setFile(selectedFile);
            setRotationAngle(0);
            setErrorMessage(null);
            await renderPreview(selectedFile);
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

    const renderPreview = async (fileToRender: File) => {
        setIsRendering(true);
        setErrorMessage(null);
        try {
            const arrayBuffer = await fileToRender.arrayBuffer();

            const pdfjsLib = await import('pdfjs-dist');
            pdfjsLib.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjsLib.version}/build/pdf.worker.min.mjs`;

            const pdf = await pdfjsLib.getDocument(arrayBuffer).promise;
            const page = await pdf.getPage(1);

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

    useEffect(() => {
        if (file) {
            renderPreview(file);
        }
    }, [file]); // Re-render when file changes

    const handleDeskew = async () => {
        if (!file) return;

        setIsProcessing(true);
        setErrorMessage(null);
        try {
            const arrayBuffer = await file.arrayBuffer();
            const originalPdf = await PDFDocument.load(arrayBuffer, { ignoreEncryption: true });

            const newPdf = await PDFDocument.create();

            const pages = originalPdf.getPages();
            const embeddedPages = await newPdf.embedPages(pages);

            for (let i = 0; i < pages.length; i++) {
                const originalPage = pages[i];
                const embeddedPage = embeddedPages[i];
                const { width, height } = originalPage.getSize();

                const newPage = newPdf.addPage([width, height]);

                const cx = width / 2;
                const cy = height / 2;

                const rad = (rotationAngle * Math.PI) / 180;
                const cos = Math.cos(rad);
                const sin = Math.sin(rad);

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

    const steps = [
        {
            title: "Step 1: Upload PDF",
            description: "Select or drag and drop your scanned PDF that needs straightening."
        },
        {
            title: "Step 2: Adjust Angle",
            description: "Use the slider to manually rotate and align the crooked pages."
        },
        {
            title: "Step 3: Download",
            description: "Get your straightened PDF with the rotation applied to all pages."
        }
    ];

    return (
        <ToolPageLayout
            title="Deskew PDF"
            subtitle="Straighten crooked scanned pages by adjusting the rotation angle."
            steps={steps}
            ctaText="Save & Download"
            onAction={handleDeskew}
            loading={isProcessing}
            disabled={!file}
            showCta={!!file}
        >
            {errorMessage && (
                <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 text-sm">
                    <p className="font-bold">Error</p>
                    <p>{errorMessage}</p>
                </div>
            )}

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
                        Drag & Drop Scanned PDF Here
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
                <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
                    {/* Toolbar */}
                    <div className="p-4 border-b border-gray-100 flex flex-wrap items-center justify-between gap-4 bg-gray-50">
                        <div className="flex items-center space-x-3">
                            <div className="p-2 bg-purple-100 rounded-lg">
                                <FileText className="text-purple-500 w-5 h-5" />
                            </div>
                            <span className="font-medium text-gray-900 truncate max-w-[120px] text-sm">{file.name}</span>
                            <button onClick={() => setFile(null)} className="text-xs text-red-500 hover:text-red-700">Change</button>
                        </div>

                        <div className="flex items-center space-x-3 flex-1 justify-center max-w-xs">
                            <span className="text-sm text-gray-600 font-medium whitespace-nowrap">Tilt: {rotationAngle}°</span>
                            <input
                                type="range"
                                min={MIN_ROTATION}
                                max={MAX_ROTATION}
                                step="0.5"
                                value={rotationAngle}
                                onChange={(e) => setRotationAngle(parseFloat(e.target.value))}
                                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-purple-600"
                            />
                            <button
                                onClick={() => setRotationAngle(0)}
                                title="Reset Angle"
                                className="p-2 text-gray-500 hover:text-purple-600 transition-colors"
                            >
                                <Undo size={18} />
                            </button>
                        </div>
                    </div>

                    {/* Preview Area */}
                    <div className="p-6 bg-gray-100 overflow-auto flex justify-center min-h-[350px] relative">
                        {isRendering && (
                            <div className="absolute inset-0 z-10 flex items-center justify-center bg-gray-100/80">
                                <Loader2 className="w-10 h-10 text-purple-500 animate-spin" />
                            </div>
                        )}

                        <div
                            className="relative shadow-2xl transition-transform duration-200 ease-out origin-center"
                            style={{ transform: `rotate(${rotationAngle}deg)` }}
                        >
                            <canvas ref={canvasRef} className="max-w-full h-auto rounded bg-white" />

                            {/* Grid Overlay */}
                            <div
                                className="absolute inset-0 pointer-events-none opacity-20 border border-purple-500"
                                style={{
                                    backgroundImage: 'linear-gradient(to right, #8b5cf6 1px, transparent 1px), linear-gradient(to bottom, #8b5cf6 1px, transparent 1px)',
                                    backgroundSize: '40px 40px'
                                }}
                            />
                        </div>
                    </div>

                    {/* Footer */}
                    <div className="p-4 bg-gray-50 border-t border-gray-100">
                        <button
                            onClick={handleDeskew}
                            disabled={isProcessing}
                            className={`w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-violet-500 to-purple-600 text-white font-bold py-3 px-6 rounded-xl transition-all shadow-lg hover:shadow-xl ${isProcessing ? 'opacity-50 cursor-not-allowed' : 'hover:scale-[1.02]'
                                }`}
                        >
                            {isProcessing ? <Loader2 className="animate-spin" size={20} /> : <Download size={20} />}
                            <span className="text-sm">{isProcessing ? 'Processing...' : 'Save & Download'}</span>
                        </button>
                        <p className="text-xs text-center text-gray-500 mt-3">
                            Previewing Page 1. The rotation will be applied to all pages.
                        </p>
                    </div>
                </div>
            )}
        </ToolPageLayout>
    );
}
