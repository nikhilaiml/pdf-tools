'use client';

import { useState, useRef, useEffect, MouseEvent as ReactMouseEvent } from 'react';
import { PDFDocument } from 'pdf-lib';
import { Loader2, Crop, Cloud, ChevronLeft, ChevronRight, ZoomIn, ZoomOut, CheckCircle, RefreshCw } from 'lucide-react';

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
                const wrapperWidth = containerRef.current?.clientWidth || 600;
                const unscaledViewport = page.getViewport({ scale: 1 });
                const fitScale = (wrapperWidth - 48) / unscaledViewport.width;

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
    }, [pdfProxy, pageIndex, scale]);

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

            let x = (e.clientX - rect.left) / rect.width * 100;
            let y = (e.clientY - rect.top) / rect.height * 100;

            setCropBox(prev => {
                const { x: px, y: py, width: pw, height: ph } = prev;

                if (dragMode === 'move') return prev;

                if (dragMode === 'nw') {
                    const rightEdge = px + pw;
                    const bottomEdge = py + ph;
                    x = Math.max(0, Math.min(x, rightEdge - 5));
                    y = Math.max(0, Math.min(y, bottomEdge - 5));
                    return { x: x, y: y, width: rightEdge - x, height: bottomEdge - y };
                }

                if (dragMode === 'se') {
                    x = Math.min(100, Math.max(x, px + 5));
                    y = Math.min(100, Math.max(y, py + 5));
                    return { x: px, y: py, width: x - px, height: y - py };
                }

                if (dragMode === 'sw') {
                    const rightEdge = px + pw;
                    x = Math.max(0, Math.min(x, rightEdge - 5));
                    y = Math.min(100, Math.max(y, py + 5));
                    return { x: x, y: py, width: rightEdge - x, height: y - py };
                }

                if (dragMode === 'ne') {
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

            const dx = (e.clientX - dragStart.x) / rect.width * 100;
            const dy = (e.clientY - dragStart.y) / rect.height * 100;

            setCropBox(prev => {
                let nx = prev.x + dx;
                let ny = prev.y + dy;

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
                const cropX = (cropBox.x / 100) * width;
                const cropW = (cropBox.width / 100) * width;
                const cropH = (cropBox.height / 100) * height;
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
        } catch (error) {
            console.error(error);
            alert('Failed to crop PDF');
        } finally {
            setLoading(false);
        }
    };

    const handleResetCrop = () => {
        setCropBox({ x: 10, y: 10, width: 80, height: 80 });
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(false);
        if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
            handleFileSelect(e.dataTransfer.files[0]);
        }
    };

    return (
        <div className="w-full">
            {!file ? (
                <div className="animate-in fade-in zoom-in-95 duration-500">
                    <div
                        className={`
                            bg-white rounded-2xl sm:rounded-3xl shadow-xl border-2 border-dashed p-8 sm:p-12
                            transition-all duration-300 cursor-pointer mb-8 text-center group
                            ${isDragging ? 'border-purple-500 bg-purple-50 scale-[1.02]' : 'border-orange-200 hover:border-purple-400 hover:shadow-2xl'}
                        `}
                        onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
                        onDragLeave={(e) => { e.preventDefault(); setIsDragging(false); }}
                        onDrop={handleDrop}
                        onClick={() => document.getElementById('file-input')?.click()}
                    >
                        <div className={`p-6 rounded-full inline-block mb-6 transition-colors ${isDragging ? 'bg-purple-100' : 'bg-orange-50 group-hover:bg-purple-50'}`}>
                            <Cloud className={`w-16 h-16 ${isDragging ? 'text-purple-500' : 'text-orange-400 group-hover:text-purple-500'}`} />
                        </div>
                        <p className="text-2xl font-bold text-gray-900 mb-2">Upload PDF File</p>
                        <p className="text-gray-500">Drag & drop or click to browse</p>
                        <input id="file-input" type="file" accept=".pdf" className="hidden" onChange={(e) => e.target.files?.[0] && handleFileSelect(e.target.files[0])} />
                    </div>
                </div>
            ) : (
                <div className="flex flex-col lg:flex-row gap-8 items-start animate-in fade-in slide-in-from-bottom-4 duration-500">
                    {/* Left: Preview */}
                    <div className="flex-1 w-full bg-gray-100 rounded-2xl p-4 sm:p-8 flex flex-col items-center justify-center min-h-[500px] shadow-inner relative overflow-hidden border border-gray-200" ref={containerRef}>

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
                                    className="absolute border-2 border-purple-500 bg-transparent shadow-[0_0_0_9999px_rgba(0,0,0,0.5)] cursor-move touch-none"
                                    onMouseDown={handleBoxMouseDown}
                                >
                                    {/* Grid Lines (Rule of Thirds) */}
                                    <div className="absolute inset-x-0 top-1/3 bottom-1/3 border-y border-purple-500/30 pointer-events-none"></div>
                                    <div className="absolute inset-y-0 left-1/3 right-1/3 border-x border-purple-500/30 pointer-events-none"></div>

                                    {/* Handles */}
                                    <div className="absolute -top-1.5 -left-1.5 w-4 h-4 bg-purple-600 border-2 border-white cursor-nw-resize rounded-full shadow-sm" onMouseDown={(e) => startDrag(e, 'nw')} />
                                    <div className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-purple-600 border-2 border-white cursor-ne-resize rounded-full shadow-sm" onMouseDown={(e) => startDrag(e, 'ne')} />
                                    <div className="absolute -bottom-1.5 -left-1.5 w-4 h-4 bg-purple-600 border-2 border-white cursor-sw-resize rounded-full shadow-sm" onMouseDown={(e) => startDrag(e, 'sw')} />
                                    <div className="absolute -bottom-1.5 -right-1.5 w-4 h-4 bg-purple-600 border-2 border-white cursor-se-resize rounded-full shadow-sm" onMouseDown={(e) => startDrag(e, 'se')} />
                                </div>
                            </div>
                        </div>

                        {/* Toolbar */}
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-3 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full shadow-lg border border-gray-200 z-10 transition-transform hover:scale-105">
                            <button onClick={() => setPageIndex(p => Math.max(1, p - 1))} disabled={pageIndex <= 1} className="p-1.5 hover:bg-gray-100 rounded-lg disabled:opacity-30 transition-colors"><ChevronLeft size={20} /></button>
                            <span className="font-mono font-medium text-sm w-16 text-center text-gray-700">{pageIndex} / {totalPages}</span>
                            <button onClick={() => setPageIndex(p => Math.min(totalPages, p + 1))} disabled={pageIndex >= totalPages} className="p-1.5 hover:bg-gray-100 rounded-lg disabled:opacity-30 transition-colors"><ChevronRight size={20} /></button>
                            <div className="w-px h-4 bg-gray-300 mx-1" />
                            <button onClick={() => setScale(s => Math.max(0.2, s - 0.2))} className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors"><ZoomOut size={18} /></button>
                            <button onClick={() => setScale(s => Math.min(3, s + 0.2))} className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors"><ZoomIn size={18} /></button>
                        </div>
                    </div>

                    {/* Right: Sidebar */}
                    <div className="w-full lg:w-80 bg-white rounded-2xl shadow-xl border border-gray-100 p-6 flex flex-col shrink-0">
                        <div className="mb-6 pb-6 border-b border-gray-100">
                            <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                                <Crop className="w-6 h-6 text-purple-600" />
                                Crop Settings
                            </h3>
                        </div>

                        <div className="bg-purple-50 text-purple-900 p-4 rounded-xl text-sm mb-6 border border-purple-100 leading-relaxed">
                            <strong>Tip:</strong> Drag corners to resize. Drag center to move.
                        </div>

                        <div className="space-y-4 mb-8">
                            <div className="space-y-2">
                                <label className="flex items-center space-x-3 cursor-pointer p-3 rounded-lg border border-gray-200 hover:border-purple-300 hover:bg-purple-50 transition-all">
                                    <input
                                        type="radio"
                                        checked={applyToAll}
                                        onChange={() => setApplyToAll(true)}
                                        className="w-5 h-5 text-purple-600 focus:ring-purple-500 border-gray-300"
                                    />
                                    <span className="font-medium text-gray-700">Crop All Pages</span>
                                </label>
                                <label className="flex items-center space-x-3 cursor-pointer p-3 rounded-lg border border-gray-200 hover:border-purple-300 hover:bg-purple-50 transition-all">
                                    <input
                                        type="radio"
                                        checked={!applyToAll}
                                        onChange={() => setApplyToAll(false)}
                                        className="w-5 h-5 text-purple-600 focus:ring-purple-500 border-gray-300"
                                    />
                                    <span className="font-medium text-gray-700">Crop Current Page Only</span>
                                </label>
                            </div>
                        </div>

                        <div className="mt-auto space-y-3">
                            <button
                                onClick={handleCrop}
                                disabled={loading}
                                className={`
                                    w-full py-3.5 rounded-xl text-white font-bold text-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2
                                    ${loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 hover:scale-[1.02]'}
                                `}
                            >
                                {loading ? <Loader2 className="animate-spin w-5 h-5" /> : <span>Crop PDF</span>}
                            </button>

                            <button
                                onClick={handleResetCrop}
                                className="w-full py-3 rounded-xl text-gray-600 font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2 border border-gray-200"
                            >
                                <RefreshCw className="w-4 h-4" />
                                Reset Crop
                            </button>
                        </div>

                        <div className="mt-6 pt-4 border-t border-gray-100">
                            <p className="text-xs text-center text-gray-400 flex items-center justify-center gap-1.5">
                                <CheckCircle className="w-3 h-3 text-green-500" />
                                Your PDF files are processed securely and never stored.
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CropPdfClient;
