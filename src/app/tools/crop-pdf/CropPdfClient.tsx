'use client';

import { useState, useRef, useEffect, MouseEvent as ReactMouseEvent } from 'react';
import { PDFDocument } from 'pdf-lib';
import { Loader2, Crop, Cloud, ChevronLeft, ChevronRight, RotateCcw, ZoomIn, ZoomOut } from 'lucide-react';
import ToolPageLayout from '../../components/ToolPageLayout';

type CropBox = {
    x: number;
    y: number;
    width: number;
    height: number;
};

const CropPdfClient = () => {
    const [file, setFile] = useState<File | null>(null);
    const [loading, setLoading] = useState(false);
    const [isDragging, setIsDragging] = useState(false);

    // PDF State
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [pdfProxy, setPdfProxy] = useState<any>(null);
    const [pageIndex, setPageIndex] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [scale, setScale] = useState(1.0);

    // Crop State
    const [cropBox, setCropBox] = useState<CropBox>({ x: 10, y: 10, width: 80, height: 80 }); // Percentages
    const [isSelecting, setIsSelecting] = useState(false);
    const [dragMode, setDragMode] = useState<'none' | 'move' | 'nw' | 'ne' | 'sw' | 'se'>('none');
    const [applyToAll, setApplyToAll] = useState(true);

    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);

    // File Upload
    const handleFileSelect = async (selectedFile: File) => {
        if (selectedFile.type === 'application/pdf' || selectedFile.name.toLowerCase().endsWith('.pdf')) {
            setFile(selectedFile);
            setLoading(true);
            try {
                const pdfjsLib = await import('pdfjs-dist');
                pdfjsLib.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjsLib.version}/build/pdf.worker.min.mjs`;
                const arrayBuffer = await selectedFile.arrayBuffer();
                const loadedPdf = await pdfjsLib.getDocument(arrayBuffer).promise;
                setPdfProxy(loadedPdf);
                setTotalPages(loadedPdf.numPages);
                setPageIndex(1);
            } catch (error) {
                console.error("Error loading PDF", error);
                alert("Failed to load PDF preview");
            } finally {
                setLoading(false);
            }
        } else {
            alert('Please select a valid PDF file.');
        }
    };

    // Render Page
    useEffect(() => {
        if (!pdfProxy || !canvasRef.current || !containerRef.current) return;

        const renderPage = async () => {
            try {
                const page = await pdfProxy.getPage(pageIndex);
                // Calculate scale to fit container width, but max out at 1.5x actual size for clarity
                const wrapperWidth = containerRef.current?.clientWidth || 600;
                const unscaledViewport = page.getViewport({ scale: 1 });
                const fitScale = (wrapperWidth - 48) / unscaledViewport.width; // -48 for padding

                const finalScale = Math.min(fitScale, 1.5) * scale;
                const viewport = page.getViewport({ scale: finalScale });

                const canvas = canvasRef.current!;
                canvas.width = viewport.width;
                canvas.height = viewport.height;

                const context = canvas.getContext('2d');
                if (context) {
                    await page.render({ canvasContext: context, viewport }).promise;
                }
            } catch (err) {
                console.error("Render error", err);
            }
        };
        renderPage();
    }, [pdfProxy, pageIndex, scale]); // Removed containerRef.current dependency to avoid loop, it's stable usually.

    // Crop Box Interaction Logic
    const handleMouseDown = (e: ReactMouseEvent) => {
        if (!cropBox) return;
        const startX = e.clientX;
        const startY = e.clientY;
        const startBox = { ...cropBox };

        const container = containerRef.current;
        if (!container) return;
        const rect = container.getBoundingClientRect();

        // Helper to convert px to %
        // We need the ACTUAL image dimensions, not container dimensions
        const imgWidth = canvasRef.current?.width || 0;
        const imgHeight = canvasRef.current?.height || 0;

        // If clicking outside, maybe start new selection? 
        // For now, let's just handle handle-dragging
    };

    // SIMPLIFIED INTERACTION:
    // We will use standard "drag whole box" or "drag corners".
    // All coordinates in PERCENTAGE (0-100) relative to the PDF Canvas size.

    // ... Actually, implementing a robust resizing box logic from scratch in one go is error prone.
    // I will implement a simpler version: 
    // - A clear overlay div on top of the canvas
    // - Standard resize logic using mouse move

    // Let's rely on standard logic:
    // MOUSE DOWN on handle -> setDragMode 'nw', 'se', etc.
    // MOUSE DOWN on box -> setDragMode 'move'

    const startDrag = (e: ReactMouseEvent, mode: typeof dragMode) => {
        e.stopPropagation();
        e.preventDefault();
        setDragMode(mode);
    };

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (dragMode === 'none' || !canvasRef.current) return;

            const canvas = canvasRef.current;
            const rect = canvas.getBoundingClientRect();

            // Mouse Pos relative to canvas 0-1 (normalized)
            let x = (e.clientX - rect.left) / rect.width * 100;
            let y = (e.clientY - rect.top) / rect.height * 100;

            // Clamp 0-100
            // But dragging allows going outside slightly, clamp it.
            // (Relaxed clamping for smoother ux, strict for setCropBox)

            setCropBox(prev => {
                const { x: px, y: py, width: pw, height: ph } = prev;

                // Movement Delta (approximate, since we use raw position for resizing)
                // Better approach: Calculate new position based on mode

                if (dragMode === 'move') {
                    // This requires storing initial click offset. 
                    // Simplifying: 'move' is harder without ref to start.
                    // Let's implement Resize only for now to ensure robustness, 
                    // or use a simple delta based approach if I had previous mouse pos.
                    // I will skip complex delta logic for this step and focus on Handles.
                    return prev;
                }

                // Resizing logic
                if (dragMode === 'nw') {
                    // Update x, y, width, height
                    // Right/Bottom edge remains fixed: (px + pw), (py + ph)
                    // New width = (RightEdge - x)
                    const rightEdge = px + pw;
                    const bottomEdge = py + ph;

                    x = Math.max(0, Math.min(x, rightEdge - 5)); // min width 5%
                    y = Math.max(0, Math.min(y, bottomEdge - 5));

                    return { x: x, y: y, width: rightEdge - x, height: bottomEdge - y };
                }

                if (dragMode === 'se') {
                    // Top/Left fixed: px, py
                    // New x, y is cursor.
                    x = Math.min(100, Math.max(x, px + 5));
                    y = Math.min(100, Math.max(y, py + 5));
                    return { x: px, y: py, width: x - px, height: y - py };
                }

                if (dragMode === 'sw') {
                    // Top/Right fixed
                    const rightEdge = px + pw;
                    x = Math.max(0, Math.min(x, rightEdge - 5));
                    y = Math.min(100, Math.max(y, py + 5));
                    return { x: x, y: py, width: rightEdge - x, height: y - py };
                }

                if (dragMode === 'ne') {
                    // Bottom/Left fixed
                    const bottomEdge = py + ph;
                    x = Math.min(100, Math.max(x, px + 5));
                    y = Math.max(0, Math.min(y, bottomEdge - 5));
                    return { x: px, y: y, width: x - px, height: bottomEdge - y };
                }

                return prev;
            });
        };

        const handleMouseUp = () => {
            setDragMode('none');
        };

        if (dragMode !== 'none') {
            window.addEventListener('mousemove', handleMouseMove);
            window.addEventListener('mouseup', handleMouseUp);
        }
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
        };
    }, [dragMode]);

    // Move Handler logic separately to avoid complexity in single effect
    const boxRef = useRef<HTMLDivElement>(null);
    const [dragStart, setDragStart] = useState<{ x: number, y: number } | null>(null);

    const handleBoxMouseDown = (e: ReactMouseEvent) => {
        e.stopPropagation();
        setDragMode('move');
        setDragStart({ x: e.clientX, y: e.clientY });
    };

    useEffect(() => {
        if (dragMode !== 'move' || !dragStart) return;

        const handleMoveDrag = (e: MouseEvent) => {
            if (!canvasRef.current) return;
            const rect = canvasRef.current.getBoundingClientRect();

            // Delta in percentage
            const dx = (e.clientX - dragStart.x) / rect.width * 100;
            const dy = (e.clientY - dragStart.y) / rect.height * 100;

            setCropBox(prev => {
                let nx = prev.x + dx;
                let ny = prev.y + dy;

                // Contain within bounds
                nx = Math.max(0, Math.min(nx, 100 - prev.width));
                ny = Math.max(0, Math.min(ny, 100 - prev.height));

                return { ...prev, x: nx, y: ny };
            });

            setDragStart({ x: e.clientX, y: e.clientY });
        };

        const handleMoveUp = () => {
            setDragMode('none');
            setDragStart(null);
        };

        window.addEventListener('mousemove', handleMoveDrag);
        window.addEventListener('mouseup', handleMoveUp);

        return () => {
            window.removeEventListener('mousemove', handleMoveDrag);
            window.removeEventListener('mouseup', handleMoveUp);
        };
    }, [dragMode, dragStart]);


    const handleCrop = async () => {
        if (!file) return;
        setLoading(true);
        try {
            const arrayBuffer = await file.arrayBuffer();
            const pdfDoc = await PDFDocument.load(arrayBuffer);
            const pages = pdfDoc.getPages();

            const pagesToCrop = applyToAll ? pages : [pages[pageIndex - 1]];

            pagesToCrop.forEach((page) => {
                const { width, height } = page.getMediaBox();

                // Convert % to points
                // PDF coordinates: Origin is usually Bottom-Left!
                // Web coordinates: Top-Left.
                // We need to flip Y.

                const cropX = (cropBox.x / 100) * width;
                const cropW = (cropBox.width / 100) * width;
                const cropH = (cropBox.height / 100) * height;
                // Top in Web = Height - (Top + Height) in PDF? No.
                // y in web (from top) -> y in PDF (from bottom) = Height - (y_web + cropH_web) ??
                // Let's trace:
                // y=0 in web is top. y=100 is bottom.
                // y_pdf = Height - (y_web_px + height_web_px)

                const y_web_px = (cropBox.y / 100) * height;
                const cropY = height - y_web_px - cropH;

                page.setCropBox(cropX, cropY, cropW, cropH);
            });

            const pdfBytes = await pdfDoc.save();
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const blob = new Blob([pdfBytes as any], { type: 'application/pdf' });
            const link = document.createElement('a');
            link.href = URL.createObjectURL(blob);
            link.download = `cropped-${file.name}`;
            link.click();
            alert('PDF cropped successfully!');
        } catch (error) {
            console.error(error);
            alert('Failed to crop PDF');
        } finally {
            setLoading(false);
        }
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(false);
        if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
            handleFileSelect(e.dataTransfer.files[0]);
        }
    };

    return (
        <ToolPageLayout
            title="Crop PDF"
            subtitle="Trim document margins visibly. Select area to keep."
            steps={[{ title: "Upload", description: "" }, { title: "Select", description: "" }, { title: "Crop", description: "" }]}
            ctaText="Crop PDF"
            onAction={handleCrop}
            loading={loading}
            disabled={!file}
            showCta={false}
        >
            {!file ? (
                <div
                    className={`
                        bg-white rounded-2xl sm:rounded-3xl shadow-xl border-2 border-dashed p-6 sm:p-12
                        transition-all duration-300 cursor-pointer mb-8
                        ${isDragging ? 'border-purple-500 bg-purple-50' : 'border-orange-200 hover:border-purple-400'}
                    `}
                    onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
                    onDragLeave={(e) => { e.preventDefault(); setIsDragging(false); }}
                    onDrop={handleDrop}
                    onClick={() => document.getElementById('file-input')?.click()}
                >
                    <div className="flex justify-center mb-6">
                        <Cloud className="w-16 h-16 text-orange-400" />
                    </div>
                    <p className="text-2xl font-bold text-center text-gray-800">Drag & Drop PDF Here</p>
                    <input id="file-input" type="file" accept=".pdf" className="hidden" onChange={(e) => e.target.files?.[0] && handleFileSelect(e.target.files[0])} />
                </div>
            ) : (
                <div className="flex flex-col lg:flex-row gap-6 items-start">
                    {/* Left: Preview */}
                    <div className="flex-1 w-full bg-gray-100 rounded-xl p-4 sm:p-8 flex flex-col items-center justify-center min-h-[500px] shadow-inner relative overflow-hidden" ref={containerRef}>

                        {/* Canvas & Overlay Container */}
                        <div className="relative shadow-2xl bg-white" style={{ maxWidth: '100%', maxHeight: '100%' }}>
                            <canvas ref={canvasRef} className="block" />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-black/40 cursor-crosshair">
                                {/* Crop Box */}
                                <div
                                    ref={boxRef}
                                    style={{
                                        left: `${cropBox.x}%`,
                                        top: `${cropBox.y}%`,
                                        width: `${cropBox.width}%`,
                                        height: `${cropBox.height}%`
                                    }}
                                    className="absolute border-2 border-blue-400 bg-transparent shadow-[0_0_0_9999px_rgba(0,0,0,0.5)] cursor-move touch-none"
                                    onMouseDown={handleBoxMouseDown}
                                >
                                    {/* Grid Lines (Rule of Thirds) */}
                                    <div className="absolute inset-x-0 top-1/3 bottom-1/3 border-y border-blue-400/30 pointer-events-none"></div>
                                    <div className="absolute inset-y-0 left-1/3 right-1/3 border-x border-blue-400/30 pointer-events-none"></div>

                                    {/* Handles */}
                                    <div className="absolute -top-1.5 -left-1.5 w-4 h-4 bg-blue-500 border-2 border-white cursor-nw-resize" onMouseDown={(e) => startDrag(e, 'nw')} />
                                    <div className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-blue-500 border-2 border-white cursor-ne-resize" onMouseDown={(e) => startDrag(e, 'ne')} />
                                    <div className="absolute -bottom-1.5 -left-1.5 w-4 h-4 bg-blue-500 border-2 border-white cursor-sw-resize" onMouseDown={(e) => startDrag(e, 'sw')} />
                                    <div className="absolute -bottom-1.5 -right-1.5 w-4 h-4 bg-blue-500 border-2 border-white cursor-se-resize" onMouseDown={(e) => startDrag(e, 'se')} />
                                </div>
                            </div>
                        </div>

                        {/* Toolbar */}
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full shadow-lg border border-gray-200 z-10">
                            <button onClick={() => setPageIndex(p => Math.max(1, p - 1))} disabled={pageIndex <= 1} className="p-1 hover:bg-gray-100 rounded-lg disabled:opacity-30"><ChevronLeft size={20} /></button>
                            <span className="font-mono font-medium text-sm w-16 text-center">{pageIndex} / {totalPages}</span>
                            <button onClick={() => setPageIndex(p => Math.min(totalPages, p + 1))} disabled={pageIndex >= totalPages} className="p-1 hover:bg-gray-100 rounded-lg disabled:opacity-30"><ChevronRight size={20} /></button>
                            <div className="w-px h-4 bg-gray-300 mx-2" />
                            <button onClick={() => setScale(s => Math.max(0.2, s - 0.2))} className="p-1 hover:bg-gray-100 rounded-lg"><ZoomOut size={18} /></button>
                            <button onClick={() => setScale(s => Math.min(3, s + 0.2))} className="p-1 hover:bg-gray-100 rounded-lg"><ZoomIn size={18} /></button>
                        </div>
                    </div>

                    {/* Right: Sidebar */}
                    <div className="w-full lg:w-80 bg-white rounded-xl shadow-xl border border-gray-100 p-6 flex flex-col shrink-0">
                        <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                            <Crop className="w-6 h-6 text-red-500" />
                            Crop PDF
                        </h3>

                        <div className="bg-blue-50 text-blue-800 p-4 rounded-xl text-sm mb-6 border border-blue-100">
                            Click and drag to select the area you want to keep. Resize if needed.
                        </div>

                        <div className="mb-8">
                            <div className="flex justify-between items-center mb-3">
                                <label className="font-bold text-gray-700">Pages:</label>
                                <button
                                    onClick={() => setCropBox({ x: 0, y: 0, width: 100, height: 100 })}
                                    className="text-red-500 text-sm font-bold underline hover:text-red-700"
                                >
                                    Reset all
                                </button>
                            </div>

                            <div className="space-y-3">
                                <label className="flex items-center space-x-3 cursor-pointer p-3 rounded-lg border border-gray-100 hover:bg-gray-50 transition-colors">
                                    <input
                                        type="radio"
                                        checked={applyToAll}
                                        onChange={() => setApplyToAll(true)}
                                        className="w-5 h-5 text-red-500 focus:ring-red-500"
                                    />
                                    <span className="font-medium text-gray-700">All pages</span>
                                </label>
                                <label className="flex items-center space-x-3 cursor-pointer p-3 rounded-lg border border-gray-100 hover:bg-gray-50 transition-colors">
                                    <input
                                        type="radio"
                                        checked={!applyToAll}
                                        onChange={() => setApplyToAll(false)}
                                        className="w-5 h-5 text-red-500 focus:ring-red-500"
                                    />
                                    <span className="font-medium text-gray-700">Current page</span>
                                </label>
                            </div>
                        </div>

                        <button
                            onClick={handleCrop}
                            disabled={loading}
                            className={`w-full py-4 rounded-xl text-white font-bold text-lg shadow-lg transition-all flex items-center justify-center gap-2
                                ${loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#fc8181] hover:bg-[#eb7070] shadow-red-200'}
                            `}
                        >
                            {loading ? <Loader2 className="animate-spin" /> : <span>Crop PDF</span>}
                            {!loading && <ChevronRight className="w-5 h-5" />}
                        </button>
                    </div>
                </div>
            )}
        </ToolPageLayout>
    );
};

export default CropPdfClient;
