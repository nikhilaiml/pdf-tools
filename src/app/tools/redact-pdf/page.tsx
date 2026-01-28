'use client';

import { useState, useEffect, useRef } from 'react';
import { PDFDocument, rgb } from 'pdf-lib';
import { Loader2, EyeOff, Trash2, ChevronLeft, ChevronRight, MousePointer2, Cloud } from 'lucide-react';
import ToolPageLayout from '../../components/ToolPageLayout';

interface RedactionRect {
    id: string;
    x: number;
    y: number;
    width: number;
    height: number;
}

interface RedactionsMap {
    [pageIndex: number]: RedactionRect[];
}

export default function RedactPdfPage() {
    const [file, setFile] = useState<File | null>(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [numPages, setNumPages] = useState(0);
    const [redactions, setRedactions] = useState<RedactionsMap>({});
    const [isDragging, setIsDragging] = useState(false);

    // UI State
    const scale = 1.5;
    const [isRendering, setIsRendering] = useState(false);
    const [isProcessing, setIsProcessing] = useState(false);

    // Canvas & Interaction
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [isDrawing, setIsDrawing] = useState(false);
    const [startPos, setStartPos] = useState({ x: 0, y: 0 });
    const [currentRect, setCurrentRect] = useState<RedactionRect | null>(null);

    const handleFileSelect = (selectedFile: File) => {
        if (selectedFile.type === 'application/pdf' || selectedFile.name.toLowerCase().endsWith('.pdf')) {
            setFile(selectedFile);
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

    // Load PDF Document info on file select
    useEffect(() => {
        if (!file) return;

        const loadDoc = async () => {
            const pdfjsLib = await import('pdfjs-dist');
            pdfjsLib.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjsLib.version}/build/pdf.worker.min.mjs`;
            const arrayBuffer = await file.arrayBuffer();
            const pdf = await pdfjsLib.getDocument(arrayBuffer).promise;
            setNumPages(pdf.numPages);
            setCurrentPage(1);
            setRedactions({});
            renderPage(1, pdf);
        };
        loadDoc();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [file]);

    // Render logic
    const renderPage = async (pageNum: number, pdfDoc: any = null) => {
        setIsRendering(true);
        try {
            const pdfjsLib = await import('pdfjs-dist');
            let pdf = pdfDoc;
            if (!pdf) {
                const arrayBuffer = await file!.arrayBuffer();
                pdf = await pdfjsLib.getDocument(arrayBuffer).promise;
            }

            const page = await pdf.getPage(pageNum);
            const viewport = page.getViewport({ scale });

            const canvas = canvasRef.current;
            if (canvas) {
                const context = canvas.getContext('2d');
                canvas.height = viewport.height;
                canvas.width = viewport.width;

                if (context) {
                    await page.render({
                        canvasContext: context,
                        viewport: viewport,
                    }).promise;
                }
            }
        } catch (error) {
            console.error("Render error:", error);
        } finally {
            setIsRendering(false);
        }
    };

    const changePage = (delta: number) => {
        const newPage = currentPage + delta;
        if (newPage >= 1 && newPage <= numPages) {
            setCurrentPage(newPage);
            renderPage(newPage);
        }
    };

    // Drawing Logic
    const getMousePos = (e: React.MouseEvent) => {
        if (!canvasRef.current) return { x: 0, y: 0 };
        const rect = canvasRef.current.getBoundingClientRect();
        return {
            x: e.clientX - rect.left,
            y: e.clientY - rect.top
        };
    };

    const handleMouseDown = (e: React.MouseEvent) => {
        e.preventDefault();
        const pos = getMousePos(e);
        setIsDrawing(true);
        setStartPos(pos);
        setCurrentRect({
            id: 'temp',
            x: pos.x,
            y: pos.y,
            width: 0,
            height: 0
        });
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDrawing) return;
        const pos = getMousePos(e);
        setCurrentRect(prev => ({
            ...prev!,
            width: pos.x - startPos.x,
            height: pos.y - startPos.y
        }));
    };

    const handleMouseUp = () => {
        if (!isDrawing || !currentRect) return;
        setIsDrawing(false);

        const finalRect = {
            id: Date.now().toString(),
            x: currentRect.width < 0 ? currentRect.x + currentRect.width : currentRect.x,
            y: currentRect.height < 0 ? currentRect.y + currentRect.height : currentRect.y,
            width: Math.abs(currentRect.width),
            height: Math.abs(currentRect.height)
        };

        const pageRedactions = redactions[currentPage] || [];

        if (finalRect.width > 5 && finalRect.height > 5) {
            setRedactions({
                ...redactions,
                [currentPage]: [...pageRedactions, finalRect]
            });
        }

        setCurrentRect(null);
    };

    const removeRedaction = (page: number, id: string) => {
        setRedactions(prev => ({
            ...prev,
            [page]: prev[page].filter(r => r.id !== id)
        }));
    };

    const handleApplyRedactions = async () => {
        if (!file) return;

        setIsProcessing(true);
        try {
            const arrayBuffer = await file.arrayBuffer();
            const pdfDoc = await PDFDocument.load(arrayBuffer);
            const pages = pdfDoc.getPages();

            Object.entries(redactions).forEach(([pageIdx, rects]) => {
                const pageIndex = parseInt(pageIdx) - 1;
                if (pageIndex < 0 || pageIndex >= pages.length) return;

                const page = pages[pageIndex];
                const { height } = page.getSize();

                rects.forEach((rect: RedactionRect) => {
                    const pdfX = rect.x / scale;
                    const pdfW = rect.width / scale;
                    const pdfH = rect.height / scale;
                    const pdfY = height - ((rect.y + rect.height) / scale);

                    page.drawRectangle({
                        x: pdfX,
                        y: pdfY,
                        width: pdfW,
                        height: pdfH,
                        color: rgb(0, 0, 0),
                    });
                });
            });

            const pdfBytes = await pdfDoc.save();
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const blob = new Blob([pdfBytes as any], { type: 'application/pdf' });

            const link = document.createElement('a');
            link.href = URL.createObjectURL(blob);
            link.download = `redacted-${file.name}`;
            link.click();

        } catch (error) {
            console.error("Error processing redactions:", error);
            alert("Failed to apply redactions.");
        } finally {
            setIsProcessing(false);
        }
    };

    const totalRedactions = Object.values(redactions).flat().length;

    const steps = [
        {
            title: "Step 1: Upload PDF",
            description: "Select or drag and drop the PDF containing sensitive information."
        },
        {
            title: "Step 2: Draw Redactions",
            description: "Click and drag on the preview to mark areas you want to blackout."
        },
        {
            title: "Step 3: Apply & Download",
            description: "Apply the redactions permanently and download your secured PDF."
        }
    ];

    return (
        <ToolPageLayout
            title="Redact PDF"
            subtitle="Permanently blackout sensitive information. Draw rectangles to redact content."
            steps={steps}
            showCta={false}
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
                <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
                    <div className="flex flex-col lg:flex-row">
                        {/* Sidebar */}
                        <div className="w-full lg:w-56 border-b lg:border-b-0 lg:border-r border-gray-100 p-4 bg-gray-50 flex flex-col">
                            <div className="mb-4">
                                <h3 className="font-bold text-gray-700 mb-3 text-sm">Controls</h3>
                                <button
                                    onClick={handleApplyRedactions}
                                    disabled={isProcessing || totalRedactions === 0}
                                    className="w-full flex items-center justify-center space-x-2 bg-red-600 hover:bg-red-700 text-white px-4 py-3 rounded-xl font-bold shadow transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isProcessing ? <Loader2 className="animate-spin" size={18} /> : <EyeOff size={18} />}
                                    <span className="text-sm">Apply Redactions</span>
                                </button>
                            </div>

                            <div className="flex-1 overflow-y-auto max-h-48 lg:max-h-none">
                                <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                                    Redactions ({totalRedactions})
                                </h4>
                                <div className="space-y-2">
                                    {Object.entries(redactions).map(([page, rects]) => (
                                        rects.map((rect: RedactionRect, i: number) => (
                                            <div key={rect.id} className="flex items-center justify-between p-2 bg-white rounded-lg border border-gray-200 text-xs">
                                                <span className="text-gray-600">Pg {page}, Box {i + 1}</span>
                                                <button
                                                    onClick={() => removeRedaction(parseInt(page), rect.id)}
                                                    className="text-red-500 hover:text-red-700 p-1"
                                                >
                                                    <Trash2 size={14} />
                                                </button>
                                            </div>
                                        ))
                                    ))}
                                    {totalRedactions === 0 && (
                                        <p className="text-xs text-gray-400 italic text-center py-2">
                                            Draw on PDF to add redactions
                                        </p>
                                    )}
                                </div>
                            </div>

                            <button
                                onClick={() => { setFile(null); setRedactions({}); }}
                                className="mt-4 text-xs text-red-500 hover:text-red-700"
                            >
                                Change File
                            </button>
                        </div>

                        {/* Main Editor Area */}
                        <div className="flex-1 flex flex-col">
                            {/* Toolbar */}
                            <div className="p-3 border-b border-gray-100 flex items-center justify-between bg-white">
                                <div className="flex items-center space-x-2">
                                    <button
                                        onClick={() => changePage(-1)}
                                        disabled={currentPage <= 1}
                                        className="p-2 rounded-lg hover:bg-gray-100 disabled:opacity-50"
                                    >
                                        <ChevronLeft size={18} />
                                    </button>
                                    <span className="text-sm font-medium text-gray-700">
                                        Page {currentPage} of {numPages}
                                    </span>
                                    <button
                                        onClick={() => changePage(1)}
                                        disabled={currentPage >= numPages}
                                        className="p-2 rounded-lg hover:bg-gray-100 disabled:opacity-50"
                                    >
                                        <ChevronRight size={18} />
                                    </button>
                                </div>

                                <div className="flex items-center space-x-2 text-xs text-gray-500">
                                    <MousePointer2 size={14} />
                                    <span>Drag to Redact</span>
                                </div>
                            </div>

                            {/* Canvas Area */}
                            <div className="flex-1 overflow-auto p-4 bg-gray-100 flex justify-center relative cursor-crosshair min-h-[400px]">
                                <div className="relative shadow-xl" ref={containerRef}>
                                    {isRendering && (
                                        <div className="absolute inset-0 z-20 flex items-center justify-center bg-white/50 backdrop-blur-sm">
                                            <Loader2 className="w-8 h-8 text-purple-500 animate-spin" />
                                        </div>
                                    )}
                                    <canvas
                                        ref={canvasRef}
                                        onMouseDown={handleMouseDown}
                                        onMouseMove={handleMouseMove}
                                        onMouseUp={handleMouseUp}
                                        onMouseLeave={handleMouseUp}
                                        className="block bg-white rounded"
                                    />

                                    {/* Render Existing Redactions */}
                                    {(redactions[currentPage] || []).map(rect => (
                                        <div
                                            key={rect.id}
                                            className="absolute bg-black/80 border border-red-500 pointer-events-none"
                                            style={{
                                                left: rect.x,
                                                top: rect.y,
                                                width: rect.width,
                                                height: rect.height,
                                            }}
                                        />
                                    ))}

                                    {/* Current Drawing Rect */}
                                    {currentRect && (
                                        <div
                                            className="absolute bg-black/40 border-2 border-red-500 pointer-events-none"
                                            style={{
                                                left: currentRect.width < 0 ? currentRect.x + currentRect.width : currentRect.x,
                                                top: currentRect.height < 0 ? currentRect.y + currentRect.height : currentRect.y,
                                                width: Math.abs(currentRect.width),
                                                height: Math.abs(currentRect.height),
                                            }}
                                        />
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </ToolPageLayout>
    );
}
