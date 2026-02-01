'use client';

import { useState, useRef, useEffect } from 'react';
import { Loader2, Upload, PenTool, Eraser, Trash2, Download, Save, Undo, X, Cloud } from 'lucide-react';
import { PDFDocument } from 'pdf-lib';
import ToolPageLayout from '../../components/ToolPageLayout';

const AnnotatePdfClient = () => {
    const [file, setFile] = useState<File | null>(null);
    const [pdfDoc, setPdfDoc] = useState<any>(null);
    const [pageNum, setPageNum] = useState(1);
    const [scale, setScale] = useState(1.5);
    const [loading, setLoading] = useState(false);
    const [isDragging, setIsDragging] = useState(false);

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

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(false);
        if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
            setFile(e.dataTransfer.files[0]);
        }
    };

    const steps = [
        {
            title: "Step 1: Upload PDF",
            description: "Upload the PDF document you want to draw on."
        },
        {
            title: "Step 2: Draw & Annotate",
            description: "Use the pen tool to draw, highlight, or mark up your document."
        },
        {
            title: "Step 3: Save PDF",
            description: "Save your annotated PDF with drawings embedded."
        }
    ];

    return (
        <ToolPageLayout
            title="Annotate PDF"
            subtitle="Draw, highlight, and mark up your PDF documents online."
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
                    onClick={() => document.getElementById('annotate-upload')?.click()}
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
                        id="annotate-upload"
                        type="file"
                        accept=".pdf"
                        className="hidden"
                        onChange={(e) => e.target.files?.[0] && setFile(e.target.files[0])}
                    />
                </div>
            ) : (
                <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
                    {/* Toolbar */}
                    <div className="bg-gray-50 border-b border-gray-100 p-4 flex items-center justify-between gap-4 overflow-x-auto">
                        <div className="flex items-center gap-2">
                            <button
                                onClick={() => setActiveTool('pen')}
                                className={`p-2 rounded-lg ${activeTool === 'pen' ? 'bg-orange-100 text-orange-600' : 'hover:bg-gray-100'}`}
                                title="Pen"
                            >
                                <PenTool size={20} />
                            </button>
                            <button
                                onClick={() => setActiveTool('eraser')}
                                className={`p-2 rounded-lg ${activeTool === 'eraser' ? 'bg-orange-100 text-orange-600' : 'hover:bg-gray-100'}`}
                                title="Eraser"
                            >
                                <Eraser size={20} />
                            </button>

                            <div className="h-6 w-px bg-gray-300 mx-2" />

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
                                className="bg-white border border-gray-300 rounded-lg px-2 py-1 text-sm outline-none"
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
                                    className="px-3 py-1 bg-white border border-gray-200 rounded hover:bg-gray-50 disabled:opacity-50"
                                >
                                    Prev
                                </button>
                                <button
                                    onClick={() => setPageNum(p => Math.min(pdfDoc?.numPages || 1, p + 1))}
                                    disabled={pageNum >= (pdfDoc?.numPages || 1)}
                                    className="px-3 py-1 bg-white border border-gray-200 rounded hover:bg-gray-50 disabled:opacity-50"
                                >
                                    Next
                                </button>
                            </div>
                        </div>

                        <div className="flex items-center gap-2">
                            <button
                                onClick={clearCanvas}
                                className="p-2 text-red-500 hover:bg-red-50 rounded-lg"
                                title="Clear Drawing"
                            >
                                <Trash2 size={20} />
                            </button>
                            <button
                                onClick={handleSave}
                                disabled={loading}
                                className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-violet-500 to-purple-600 text-white rounded-lg font-medium shadow-sm transition-all hover:shadow-md"
                            >
                                {loading ? <Loader2 className="animate-spin" size={18} /> : <Save size={18} />}
                                Save Page
                            </button>
                            <button onClick={() => setFile(null)} className="p-2 text-gray-500 hover:text-red-500">
                                <X className="w-6 h-6" />
                            </button>
                        </div>
                    </div>

                    {/* Editor Area */}
                    <div className="bg-gray-100 overflow-auto flex justify-center p-8 relative min-h-[500px]" ref={containerRef}>
                        {loading && (
                            <div className="absolute inset-0 flex items-center justify-center bg-white/50 z-10 backdrop-blur-sm">
                                <Loader2 className="animate-spin w-12 h-12 text-purple-600" />
                            </div>
                        )}
                        <div className="relative shadow-2xl border border-gray-200">
                            <canvas ref={canvasRef} className="bg-white block" />
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
                </div>
            )}
        </ToolPageLayout>
    );
};

export default AnnotatePdfClient;
