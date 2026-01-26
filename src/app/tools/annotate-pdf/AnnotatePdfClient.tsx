'use client';

import { useState, useRef, useEffect } from 'react';
import { Loader2, Upload, PenTool, Eraser, Trash2, Download, Save, Undo, X } from 'lucide-react';
import { PDFDocument } from 'pdf-lib';

const AnnotatePdfClient = () => {
    const [file, setFile] = useState<File | null>(null);
    const [pdfDoc, setPdfDoc] = useState<any>(null);
    const [pageNum, setPageNum] = useState(1);
    const [scale, setScale] = useState(1.5);
    const [loading, setLoading] = useState(false);

    // Tools: 'pen', 'eraser'
    const [activeTool, setActiveTool] = useState<'pen' | 'eraser'>('pen');
    const [color, setColor] = useState('#000000');
    const [lineWidth, setLineWidth] = useState(2);

    // Canvas refs
    const canvasRef = useRef<HTMLCanvasElement>(null); // For PDF rendering
    const drawingCanvasRef = useRef<HTMLCanvasElement>(null); // For drawing overlay
    const containerRef = useRef<HTMLDivElement>(null);

    const [isDrawing, setIsDrawing] = useState(false);
    const ctxRef = useRef<CanvasRenderingContext2D | null>(null);

    // Load PDF
    useEffect(() => {
        if (!file) return;

        const loadPdf = async () => {
            setLoading(true);
            try {
                const arrayBuffer = await file.arrayBuffer();
                const pdfjsLib = await import('pdfjs-dist');
                pdfjsLib.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjsLib.version}/build/pdf.worker.min.mjs`;

                const loadedPdf = await pdfjsLib.getDocument(arrayBuffer).promise;
                setPdfDoc(loadedPdf);
                setPageNum(1);
            } catch (err) {
                console.error("Error loading PDF:", err);
                alert("Failed to load PDF.");
            } finally {
                setLoading(false);
            }
        };

        loadPdf();
    }, [file]);

    // Render Page
    useEffect(() => {
        if (!pdfDoc || !canvasRef.current) return;

        const renderPage = async () => {
            const page = await pdfDoc.getPage(pageNum);
            const viewport = page.getViewport({ scale });
            const canvas = canvasRef.current!;
            const context = canvas.getContext('2d');

            if (!context) return;

            canvas.height = viewport.height;
            canvas.width = viewport.width;

            // Render PDF page
            await page.render({
                canvasContext: context,
                viewport: viewport
            }).promise;

            // Setup drawing canvas to match
            if (drawingCanvasRef.current) {
                const drawCanvas = drawingCanvasRef.current;
                drawCanvas.height = viewport.height;
                drawCanvas.width = viewport.width;

                const drawCtx = drawCanvas.getContext('2d');
                if (drawCtx) {
                    drawCtx.lineCap = 'round';
                    drawCtx.lineJoin = 'round';
                    drawCtx.strokeStyle = color;
                    drawCtx.lineWidth = lineWidth;
                    ctxRef.current = drawCtx;
                }
            }
        };

        renderPage();
    }, [pdfDoc, pageNum, scale]);

    // Update context style when tool changes
    useEffect(() => {
        if (ctxRef.current) {
            ctxRef.current.strokeStyle = color;
            ctxRef.current.lineWidth = lineWidth;
            ctxRef.current.globalCompositeOperation = activeTool === 'eraser' ? 'destination-out' : 'source-over';
        }
    }, [color, lineWidth, activeTool]);

    // Drawing Handlers
    const startDrawing = ({ nativeEvent }: React.MouseEvent) => {
        if (!ctxRef.current) return;
        const { offsetX, offsetY } = nativeEvent;
        ctxRef.current.beginPath();
        ctxRef.current.moveTo(offsetX, offsetY);
        setIsDrawing(true);
    };

    const draw = ({ nativeEvent }: React.MouseEvent) => {
        if (!isDrawing || !ctxRef.current) return;
        const { offsetX, offsetY } = nativeEvent;
        ctxRef.current.lineTo(offsetX, offsetY);
        ctxRef.current.stroke();
    };

    const stopDrawing = () => {
        if (!ctxRef.current) return;
        ctxRef.current.closePath();
        setIsDrawing(false);
    };

    const clearCanvas = () => {
        if (drawingCanvasRef.current) {
            const canvas = drawingCanvasRef.current;
            const ctx = canvas.getContext('2d');
            ctx?.clearRect(0, 0, canvas.width, canvas.height);
        }
    };

    const handleSave = async () => {
        if (!file || !drawingCanvasRef.current) return;
        setLoading(true);

        try {
            // Convert drawing canvas to image
            const imageBytes = drawingCanvasRef.current.toDataURL('image/png');

            // Load original PDF
            const existingPdfBytes = await file.arrayBuffer();
            const pdfDoc = await PDFDocument.load(existingPdfBytes);

            // Embed the drawing image
            const pngImage = await pdfDoc.embedPng(imageBytes);
            const page = pdfDoc.getPage(pageNum - 1);

            // Scale and draw image
            // Note: coordinates might need adjustment based on viewport vs PDF point coordinates
            // This is a simplified implementation assuming scale mapping matches
            const { width, height } = page.getSize();

            page.drawImage(pngImage, {
                x: 0,
                y: 0,
                width: width,
                height: height,
            });

            const pdfBytes = await pdfDoc.save();
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const blob = new Blob([pdfBytes as any], { type: 'application/pdf' });

            const link = document.createElement('a');
            link.href = URL.createObjectURL(blob);
            link.download = `annotated-${file.name}`;
            link.click();

        } catch (err) {
            console.error("Error saving PDF:", err);
            alert("Failed to save PDF.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex flex-col h-screen max-h-[calc(100vh-100px)]">
            {!file ? (
                <div className="flex-1 flex flex-col items-center justify-center p-8">
                    <div
                        onClick={() => document.getElementById('annotate-upload')?.click()}
                        className="bg-gray-50 dark:bg-gray-800 border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-xl p-12 text-center cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                    >
                        <Upload className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Upload PDF to Annotate</h3>
                        <p className="text-gray-500">Click to browse your files</p>
                        <input
                            id="annotate-upload"
                            type="file"
                            accept=".pdf"
                            className="hidden"
                            onChange={(e) => e.target.files?.[0] && setFile(e.target.files[0])}
                        />
                    </div>
                </div>
            ) : (
                <>
                    {/* Toolbar */}
                    <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 p-4 flex items-center justify-between gap-4 overflow-x-auto">
                        <div className="flex items-center gap-2">
                            <button
                                onClick={() => setActiveTool('pen')}
                                className={`p-2 rounded-lg ${activeTool === 'pen' ? 'bg-orange-100 text-orange-600' : 'hover:bg-gray-100 dark:hover:bg-gray-700'}`}
                                title="Pen"
                            >
                                <PenTool size={20} />
                            </button>
                            <button
                                onClick={() => setActiveTool('eraser')}
                                className={`p-2 rounded-lg ${activeTool === 'eraser' ? 'bg-orange-100 text-orange-600' : 'hover:bg-gray-100 dark:hover:bg-gray-700'}`}
                                title="Eraser"
                            >
                                <Eraser size={20} />
                            </button>

                            <div className="h-6 w-px bg-gray-300 dark:bg-gray-600 mx-2" />

                            <input
                                type="color"
                                value={color}
                                onChange={(e) => setColor(e.target.value)}
                                className="w-8 h-8 rounded cursor-pointer border-0 p-0"
                                title="Color"
                            />

                            <select
                                value={lineWidth}
                                onChange={(e) => setLineWidth(Number(e.target.value))}
                                className="bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg px-2 py-1 text-sm outline-none"
                            >
                                <option value="1">Thin</option>
                                <option value="2">Normal</option>
                                <option value="5">Thick</option>
                                <option value="10">Marker</option>
                            </select>
                        </div>

                        <div className="flex items-center gap-4">
                            <span className="text-sm text-gray-500">Page {pageNum} of {pdfDoc?.numPages}</span>
                            <div className="flex gap-2">
                                <button
                                    onClick={() => setPageNum(p => Math.max(1, p - 1))}
                                    disabled={pageNum <= 1}
                                    className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded hover:bg-gray-200 disabled:opacity-50"
                                >
                                    Prev
                                </button>
                                <button
                                    onClick={() => setPageNum(p => Math.min(pdfDoc?.numPages || 1, p + 1))}
                                    disabled={pageNum >= (pdfDoc?.numPages || 1)}
                                    className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded hover:bg-gray-200 disabled:opacity-50"
                                >
                                    Next
                                </button>
                            </div>
                        </div>

                        <div className="flex items-center gap-2">
                            <button
                                onClick={clearCanvas}
                                className="p-2 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg"
                                title="Clear Drawing"
                            >
                                <Trash2 size={20} />
                            </button>
                            <button
                                onClick={handleSave}
                                disabled={loading}
                                className="flex items-center gap-2 px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-medium shadow-sm transition-colors"
                            >
                                {loading ? <Loader2 className="animate-spin" size={18} /> : <Save size={18} />}
                                Save Page
                            </button>
                            <button onClick={() => setFile(null)} className="p-2 text-gray-500 hover:text-red-500">
                                <X className="w-6 h-6" /> {/* Explicit X import if not already active, otherwise just a cross icon */}
                            </button>
                        </div>
                    </div>

                    {/* Editor Area */}
                    <div className="flex-1 bg-gray-100 dark:bg-gray-900 overflow-auto flex justify-center p-8 relative" ref={containerRef}>
                        {loading && (
                            <div className="absolute inset-0 flex items-center justify-center bg-white/50 z-10">
                                <Loader2 className="animate-spin w-12 h-12 text-orange-500" />
                            </div>
                        )}
                        <div className="relative shadow-xl">
                            <canvas ref={canvasRef} className="bg-white" />
                            <canvas
                                ref={drawingCanvasRef}
                                className="absolute top-0 left-0 cursor-crosshair touch-none"
                                onMouseDown={startDrawing}
                                onMouseUp={stopDrawing}
                                onMouseMove={draw}
                                onMouseLeave={stopDrawing}
                            />
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default AnnotatePdfClient;
