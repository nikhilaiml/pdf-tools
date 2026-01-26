'use client';

import { useState, useEffect, useRef } from 'react';
import { PDFDocument, rgb } from 'pdf-lib';
import { Loader2, EyeOff, FileText, Download, Trash2, ChevronLeft, ChevronRight, MousePointer2 } from 'lucide-react';
import FileUploader from '../../components/FileUploader';

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

    // UI State
    const [scale, setScale] = useState(1.5);
    const [isRendering, setIsRendering] = useState(false);
    const [isProcessing, setIsProcessing] = useState(false);

    // Canvas & Interaction
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [isDrawing, setIsDrawing] = useState(false);
    const [startPos, setStartPos] = useState({ x: 0, y: 0 });
    const [currentRect, setCurrentRect] = useState<RedactionRect | null>(null);

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
            const pdfjsLib = await import('pdfjs-dist'); // cached
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

    // Handle Page Change
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

        // Normalize rect (handle negative width/height)
        const finalRect = {
            id: Date.now().toString(),
            x: currentRect.width < 0 ? currentRect.x + currentRect.width : currentRect.x,
            y: currentRect.height < 0 ? currentRect.y + currentRect.height : currentRect.y,
            width: Math.abs(currentRect.width),
            height: Math.abs(currentRect.height)
        };

        // Initialize array if empty
        const pageRedactions = redactions[currentPage] || [];

        // Only add if it has significant size
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

            // Apply redactions
            Object.entries(redactions).forEach(([pageIdx, rects]) => {
                const pageIndex = parseInt(pageIdx) - 1; // 1-based to 0-based
                if (pageIndex < 0 || pageIndex >= pages.length) return;

                const page = pages[pageIndex];
                const { height } = page.getSize();

                // We need to map render scale to PDF Point units
                // We rendered with `scale`. 
                // PDF-lib works in Points (72 DPI usually).
                // PDF.js `page.getViewport({ scale: 1.0 })` usually matches PDF points 1:1 if user unit is 1.0.
                // So factor = 1 / scale.

                // However, wait.
                // PDF.js GetViewport uses the internal PDF size * scale.
                // So if we divide by `scale`, we get back to PDF units.

                rects.forEach(rect => {
                    // Coordinates conversion
                    // Canvas (0,0) is Top-Left. 
                    // PDF-lib (0,0) is Bottom-Left.

                    const pdfX = rect.x / scale;
                    const pdfW = rect.width / scale;
                    const pdfH = rect.height / scale;

                    // Y calculation:
                    // Canvas Y is `rect.y`.
                    // PDF Y is distance from bottom.
                    // Top of rect in Canvas = rect.y
                    // Bottom of rect in Canvas = rect.y + rect.height

                    // In PDF coords, Top of page is `height`.
                    // So Top of rect = height - (rect.y / scale)
                    // Bottom of rect = height - ((rect.y + rect.height) / scale)

                    // pdf-lib drawRectangle expects x, y (bottom-left corner), width, height.
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
            const blob = new Blob([pdfBytes], { type: 'application/pdf' });

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

    return (
        <div className="max-w-6xl mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-4 text-center text-gray-900 dark:text-white">
                Redact PDF
            </h1>
            <p className="text-center text-gray-500 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
                Permanently blackout sensitive information. Draw rectangles over text to redact it.
            </p>

            {!file ? (
                <FileUploader onFileSelect={setFile} label="Select PDF to Redact" />
            ) : (
                <div className="animate-in fade-in zoom-in duration-300">
                    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden flex flex-col md:flex-row">

                        {/* Sidebar */}
                        <div className="w-full md:w-64 border-b md:border-b-0 md:border-r border-gray-200 dark:border-gray-700 p-4 bg-gray-50 dark:bg-gray-900 flex flex-col">
                            <div className="mb-4">
                                <h3 className="font-bold text-gray-700 dark:text-gray-300 mb-2">Controls</h3>
                                <button
                                    onClick={handleApplyRedactions}
                                    disabled={isProcessing}
                                    className="w-full flex items-center justify-center space-x-2 bg-red-600 hover:bg-red-700 text-white px-4 py-3 rounded-lg font-bold shadow transition-colors disabled:opacity-50"
                                >
                                    {isProcessing ? <Loader2 className="animate-spin" size={18} /> : <EyeOff size={18} />}
                                    <span>Apply Redactions</span>
                                </button>
                            </div>

                            <div className="flex-1 overflow-y-auto">
                                <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                                    Redactions ({Object.values(redactions).flat().length})
                                </h4>
                                <div className="space-y-2">
                                    {Object.entries(redactions).map(([page, rects]) => (
                                        rects.map((rect, i) => (
                                            <div key={rect.id} className="flex items-center justify-between p-2 bg-white dark:bg-gray-800 rounded border border-gray-200 dark:border-gray-700 text-sm">
                                                <span className="truncate text-gray-600 dark:text-gray-400">
                                                    Pg {page}, Box {i + 1}
                                                </span>
                                                <button
                                                    onClick={() => removeRedaction(parseInt(page), rect.id)}
                                                    className="text-red-500 hover:text-red-700 p-1"
                                                >
                                                    <Trash2 size={14} />
                                                </button>
                                            </div>
                                        ))
                                    ))}
                                    {Object.values(redactions).flat().length === 0 && (
                                        <p className="text-sm text-gray-400 italic text-center py-4">
                                            No redactions yet. Draw on the PDF to add one.
                                        </p>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Main Editor Area */}
                        <div className="flex-1 flex flex-col h-[80vh]">
                            {/* Toolbar */}
                            <div className="p-4 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between bg-white dark:bg-gray-800 z-10">
                                <div className="flex items-center space-x-2">
                                    <button
                                        onClick={() => changePage(-1)} disabled={currentPage <= 1}
                                        className="p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 disabled:opacity-50"
                                    >
                                        <ChevronLeft size={20} />
                                    </button>
                                    <span className="font-medium text-gray-700 dark:text-gray-300">
                                        Page {currentPage} of {numPages}
                                    </span>
                                    <button
                                        onClick={() => changePage(1)} disabled={currentPage >= numPages}
                                        className="p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 disabled:opacity-50"
                                    >
                                        <ChevronRight size={20} />
                                    </button>
                                </div>

                                <div className="flex items-center space-x-2 text-sm text-gray-500">
                                    <MousePointer2 size={16} />
                                    <span>Drag to Redact</span>
                                </div>
                            </div>

                            {/* Canvas Area */}
                            <div className="flex-1 overflow-auto p-8 bg-gray-100 dark:bg-gray-900 flex justify-center relative cursor-crosshair">
                                <div className="relative shadow-xl" ref={containerRef}>
                                    {isRendering && (
                                        <div className="absolute inset-0 z-20 flex items-center justify-center bg-white/50 dark:bg-black/50 backdrop-blur-sm">
                                            <Loader2 className="w-10 h-10 text-blue-500 animate-spin" />
                                        </div>
                                    )}
                                    <canvas
                                        ref={canvasRef}
                                        onMouseDown={handleMouseDown}
                                        onMouseMove={handleMouseMove}
                                        onMouseUp={handleMouseUp}
                                        onMouseLeave={handleMouseUp} // Stop drawing if leave canvas
                                        className="block bg-white"
                                    />

                                    {/* Render Existing Redactions Overlay for current page */}
                                    {(redactions[currentPage] || []).map(rect => (
                                        <div
                                            key={rect.id}
                                            className="absolute bg-black/80 border border-red-500 hover:bg-black/60 transition-colors pointer-events-none"
                                            style={{
                                                left: rect.x,
                                                top: rect.y,
                                                width: rect.width,
                                                height: rect.height,
                                            }}
                                        />
                                    ))}

                                    {/* Render Current Drawing Rect */}
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
        </div>
    );
}
