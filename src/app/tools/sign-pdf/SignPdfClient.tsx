'use client';

import { useState, useRef, useEffect } from 'react';
import { Loader2, Type, Calendar, Pen, Download, X, Grip, Trash2, Undo, Cloud, CheckCircle } from 'lucide-react';
import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';
import { DndContext, useDraggable, DragEndEvent, useSensor, useSensors, MouseSensor, TouchSensor } from '@dnd-kit/core';

interface DraggableElement {
    id: string;
    type: 'text' | 'image' | 'date';
    content: string;
    x: number;
    y: number;
    width?: number;
    height?: number;
    fontSize?: number;
}

const DraggableItem = ({ element, updateContent, remove, isSelected, onSelect }: {
    element: DraggableElement,
    updateContent: (id: string, content: string) => void,
    remove: (id: string) => void,
    isSelected: boolean,
    onSelect: () => void
}) => {
    const { attributes, listeners, setNodeRef, transform } = useDraggable({ id: element.id });
    const style = transform ? { transform: `translate3d(${transform.x}px, ${transform.y}px, 0)` } : undefined;

    return (
        <div
            ref={setNodeRef}
            style={{ ...style, left: element.x, top: element.y }}
            className={`absolute group cursor-move ${isSelected ? 'z-50' : 'z-10'}`}
            {...listeners}
            {...attributes}
            onPointerDown={(e) => {
                onSelect();
            }}
        >
            {element.type === 'text' || element.type === 'date' ? (
                <div className={`relative p-1 ${isSelected ? 'border-2 border-blue-500 rounded bg-blue-50/20' : 'border border-transparent hover:border-gray-300'}`}>
                    <input
                        value={element.content}
                        onChange={(e) => updateContent(element.id, e.target.value)}
                        className="bg-transparent outline-none font-sans text-gray-900"
                        style={{ fontSize: element.fontSize || 16, minWidth: '100px' }}
                        onPointerDown={(e) => e.stopPropagation()}
                    />
                    {isSelected && (
                        <button
                            onPointerDown={(e) => { e.stopPropagation(); remove(element.id); }}
                            className="absolute -top-3 -right-3 bg-red-500 text-white rounded-full p-1 shadow-md hover:bg-red-600"
                        >
                            <Trash2 size={12} />
                        </button>
                    )}
                </div>
            ) : (
                <div className={`relative ${isSelected ? 'ring-2 ring-blue-500 ring-offset-2' : ''}`}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        src={element.content}
                        alt="Signature"
                        style={{ width: element.width, height: element.height, maxWidth: '200px' }}
                        className="pointer-events-none select-none"
                    />
                    {isSelected && (
                        <button
                            onPointerDown={(e) => { e.stopPropagation(); remove(element.id); }}
                            className="absolute -top-3 -right-3 bg-red-500 text-white rounded-full p-1 shadow-md hover:bg-red-600"
                        >
                            <Trash2 size={12} />
                        </button>
                    )}
                </div>
            )}
        </div>
    );
};

const SignatureModal = ({ onClose, onSave }: { onClose: () => void, onSave: (dataUrl: string) => void }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [isDrawing, setIsDrawing] = useState(false);
    const [mode, setMode] = useState<'draw' | 'type' | 'upload'>('draw');
    const [typedSignature, setTypedSignature] = useState('');

    useEffect(() => {
        const resizeCanvas = () => {
            if (canvasRef.current && canvasRef.current.parentElement) {
                canvasRef.current.width = canvasRef.current.parentElement.clientWidth;
                canvasRef.current.height = 200;
            }
        };
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);
        return () => window.removeEventListener('resize', resizeCanvas);
    }, [mode]);

    const startDraw = (e: React.MouseEvent | React.TouchEvent) => {
        setIsDrawing(true);
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;
        ctx.beginPath();
        ctx.lineWidth = 2;
        ctx.lineCap = 'round';
        ctx.strokeStyle = '#000';

        const { offsetX, offsetY } = getCoordinates(e, canvas);
        ctx.moveTo(offsetX, offsetY);
    };

    const draw = (e: React.MouseEvent | React.TouchEvent) => {
        if (!isDrawing || !canvasRef.current) return;
        const ctx = canvasRef.current.getContext('2d');
        if (!ctx) return;
        const { offsetX, offsetY } = getCoordinates(e, canvasRef.current);
        ctx.lineTo(offsetX, offsetY);
        ctx.stroke();
    };

    const endDraw = () => {
        setIsDrawing(false);
    };

    const getCoordinates = (e: React.MouseEvent | React.TouchEvent, canvas: HTMLCanvasElement) => {
        const rect = canvas.getBoundingClientRect();
        let clientX, clientY;
        if ('touches' in e) {
            clientX = e.touches[0].clientX;
            clientY = e.touches[0].clientY;
        } else {
            clientX = (e as React.MouseEvent).clientX;
            clientY = (e as React.MouseEvent).clientY;
        }
        return {
            offsetX: clientX - rect.left,
            offsetY: clientY - rect.top
        };
    };

    const clearCanvas = () => {
        if (canvasRef.current) {
            const ctx = canvasRef.current.getContext('2d');
            ctx?.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
        }
    };

    const handleSave = () => {
        if (mode === 'draw' && canvasRef.current) {
            onSave(canvasRef.current.toDataURL());
        } else if (mode === 'type' && typedSignature) {
            const canvas = document.createElement('canvas');
            canvas.width = 400;
            canvas.height = 100;
            const ctx = canvas.getContext('2d');
            if (ctx) {
                ctx.font = 'italic 48px "Dancing Script", cursive, serif';
                ctx.fillStyle = '#000';
                ctx.fillText(typedSignature, 20, 70);
                onSave(canvas.toDataURL());
            }
        }
    };

    const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files?.[0]) {
            const reader = new FileReader();
            reader.onload = (ev) => {
                if (ev.target?.result) onSave(ev.target.result as string);
            };
            reader.readAsDataURL(e.target.files[0]);
        }
    };

    return (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl w-full max-w-md p-6 shadow-2xl animate-in zoom-in-95">
                <div className="flex justify-between items-center mb-6">
                    <h3 className="text-xl font-bold text-gray-900">Add Signature</h3>
                    <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full"><X size={20} /></button>
                </div>

                <div className="flex gap-2 mb-4 bg-gray-100 p-1 rounded-lg">
                    {['draw', 'type', 'upload'].map((m) => (
                        <button
                            key={m}
                            onClick={() => setMode(m as any)}
                            className={`flex-1 py-2 text-sm font-medium rounded-md capitalize transition-colors ${mode === m ? 'bg-white shadow-sm text-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
                        >
                            {m}
                        </button>
                    ))}
                </div>

                <div className="border-2 border-gray-200 rounded-xl mb-6 relative bg-gray-50 min-h-[200px] flex items-center justify-center overflow-hidden">
                    {mode === 'draw' && (
                        <>
                            <canvas
                                ref={canvasRef}
                                className="w-full h-full cursor-crosshair touch-none"
                                onMouseDown={startDraw}
                                onMouseMove={draw}
                                onMouseUp={endDraw}
                                onMouseLeave={endDraw}
                                onTouchStart={startDraw}
                                onTouchMove={draw}
                                onTouchEnd={endDraw}
                            />
                            <button onClick={clearCanvas} className="absolute top-2 right-2 text-xs text-gray-500 hover:text-red-500 underline bg-white/80 px-2 py-1 rounded">Clear</button>
                        </>
                    )}
                    {mode === 'type' && (
                        <div className="w-full h-full p-4 flex items-center justify-center">
                            <input
                                type="text"
                                placeholder="Type your name"
                                className="w-full text-center text-3xl outline-none bg-transparent font-[cursive]"
                                style={{ fontFamily: '"Dancing Script", cursive' }}
                                value={typedSignature}
                                onChange={(e) => setTypedSignature(e.target.value)}
                                autoFocus
                            />
                        </div>
                    )}
                    {mode === 'upload' && (
                        <div className="w-full h-full flex flex-col items-center justify-center">
                            <label className="cursor-pointer flex flex-col items-center gap-2 p-4 hover:bg-gray-100 rounded-xl transition-colors w-full h-full justify-center text-gray-500 hover:text-blue-600">
                                <Cloud size={32} />
                                <span className="font-medium">Click to upload image</span>
                                <input type="file" accept="image/*" className="hidden" onChange={handleUpload} />
                            </label>
                        </div>
                    )}
                </div>

                <div className="flex gap-3">
                    <button onClick={onClose} className="flex-1 py-2.5 text-gray-600 font-medium hover:bg-gray-100 rounded-xl transition-colors">Cancel</button>
                    <button onClick={handleSave} className="flex-1 py-2.5 bg-blue-600 text-white font-bold rounded-xl shadow-lg hover:bg-blue-700 transition-colors">Use Signature</button>
                </div>
            </div>
        </div>
    );
};

const SignPdfClient = () => {
    const [file, setFile] = useState<File | null>(null);
    const [loading, setLoading] = useState(false);
    const [elements, setElements] = useState<DraggableElement[]>([]);
    const [pdfProxy, setPdfProxy] = useState<any>(null);
    const [pageNum, setPageNum] = useState(1);
    const [scale, setScale] = useState(1.5);
    const [isSignatureModalOpen, setIsSignatureModalOpen] = useState(false);
    const [selectedElementId, setSelectedElementId] = useState<string | null>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [isDraggingFile, setIsDraggingFile] = useState(false);

    const sensors = useSensors(
        useSensor(MouseSensor, { activationConstraint: { distance: 10 } }),
        useSensor(TouchSensor, { activationConstraint: { delay: 250, tolerance: 5 } })
    );

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
                setPageNum(1);
            } catch (error) {
                console.error("Error loading PDF", error);
                alert("Failed to load PDF");
            } finally {
                setLoading(false);
            }
        }
    };

    useEffect(() => {
        if (!pdfProxy || !canvasRef.current || !containerRef.current) return;
        const renderPage = async () => {
            const page = await pdfProxy.getPage(pageNum);
            const containerWidth = containerRef.current?.getBoundingClientRect().width || 600;
            const unscaledViewport = page.getViewport({ scale: 1 });
            const fitScale = Math.min(containerWidth / unscaledViewport.width, 1.5);

            const finalScale = fitScale;
            setScale(finalScale); // State update here is fine as long as we don't depend on 'scale' in dependency array

            const viewport = page.getViewport({ scale: finalScale });
            const canvas = canvasRef.current!;
            const context = canvas.getContext('2d');

            if (context) {
                canvas.width = viewport.width;
                canvas.height = viewport.height;
                await page.render({ canvasContext: context, viewport }).promise;
            }
        };
        renderPage();
    }, [pdfProxy, pageNum]);

    const addText = () => {
        setElements(prev => [...prev, {
            id: crypto.randomUUID(),
            type: 'text',
            content: 'Text',
            x: 50,
            y: 50,
            fontSize: 16
        }]);
    };

    const addDate = () => {
        const dateStr = new Date().toLocaleDateString();
        setElements(prev => [...prev, {
            id: crypto.randomUUID(),
            type: 'date',
            content: dateStr,
            x: 50,
            y: 100,
            fontSize: 16
        }]);
    };

    const addSignature = (dataUrl: string) => {
        setIsSignatureModalOpen(false);
        setElements(prev => [...prev, {
            id: crypto.randomUUID(),
            type: 'image',
            content: dataUrl,
            x: 100,
            y: 100,
            width: 150,
            height: 75
        }]);
    };

    const handleDragEnd = (event: DragEndEvent) => {
        const { active, delta } = event;
        setElements(prev => prev.map(el => {
            if (el.id === active.id) {
                return { ...el, x: el.x + delta.x, y: el.y + delta.y };
            }
            return el;
        }));
    };

    const handleDownload = async () => {
        if (!file || !pdfProxy) return;
        setLoading(true);

        try {
            const existingPdfBytes = await file.arrayBuffer();
            const pdfDoc = await PDFDocument.load(existingPdfBytes);
            const page = pdfDoc.getPage(pageNum - 1);
            const { height: pageHeight } = page.getSize();
            const font = await pdfDoc.embedFont(StandardFonts.Helvetica);

            for (const el of elements) {
                const pdfX = el.x / scale;
                if (el.type === 'text' || el.type === 'date') {
                    const fontSize = (el.fontSize || 16);
                    const pdfY = pageHeight - (el.y / scale) - (fontSize * 0.8);

                    page.drawText(el.content, {
                        x: pdfX,
                        y: pdfY,
                        size: fontSize,
                        font: font,
                        color: rgb(0, 0, 0),
                    });
                } else if (el.type === 'image') {
                    const pngImage = await pdfDoc.embedPng(el.content);
                    const pdfW = (el.width || 150) / scale;
                    const pdfH = (el.height || 75) / scale;
                    const pdfY = pageHeight - (el.y / scale) - pdfH;

                    page.drawImage(pngImage, {
                        x: pdfX,
                        y: pdfY,
                        width: pdfW,
                        height: pdfH,
                    });
                }
            }

            const pdfBytes = await pdfDoc.save();
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const blob = new Blob([pdfBytes as any], { type: 'application/pdf' });
            const link = document.createElement('a');
            link.href = URL.createObjectURL(blob);
            link.download = `signed-${file.name}`;
            link.click();
        } catch (error) {
            console.error("Save error", error);
            alert("Failed to save PDF");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="w-full">
            {isSignatureModalOpen && <SignatureModal onClose={() => setIsSignatureModalOpen(false)} onSave={addSignature} />}

            {!file ? (
                <div className="animate-in fade-in zoom-in-95 duration-500">
                    <div
                        className={`
                            bg-white rounded-2xl sm:rounded-3xl shadow-xl border-2 border-dashed p-8 sm:p-12
                            transition-all duration-300 cursor-pointer mb-8 text-center group
                            ${isDraggingFile ? 'border-blue-500 bg-blue-50 scale-[1.02]' : 'border-gray-200 hover:border-blue-400 hover:shadow-2xl'}
                        `}
                        onDragOver={(e) => { e.preventDefault(); setIsDraggingFile(true); }}
                        onDragLeave={(e) => { e.preventDefault(); setIsDraggingFile(false); }}
                        onDrop={(e) => {
                            e.preventDefault();
                            setIsDraggingFile(false);
                            if (e.dataTransfer.files[0]) handleFileSelect(e.dataTransfer.files[0]);
                        }}
                        onClick={() => document.getElementById('file-input')?.click()}
                    >
                        <div className={`p-6 rounded-full inline-block mb-6 transition-colors ${isDraggingFile ? 'bg-blue-100' : 'bg-blue-50 group-hover:bg-blue-100'}`}>
                            <Cloud className={`w-16 h-16 ${isDraggingFile ? 'text-blue-600' : 'text-blue-500 group-hover:text-blue-600'}`} />
                        </div>
                        <p className="text-2xl font-bold text-gray-900 mb-2">Upload PDF File</p>
                        <p className="text-gray-500">Drag & drop or click to browse</p>
                        <p className="text-xs text-gray-400 mt-2">Sign PDF securely. Files are not uploaded to any server.</p>
                        <input id="file-input" type="file" accept=".pdf" className="hidden" onChange={(e) => e.target.files?.[0] && handleFileSelect(e.target.files[0])} />
                    </div>
                </div>
            ) : (
                <div className="flex flex-col gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                    {/* Toolbar */}
                    <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-2 sm:p-4 flex flex-wrap items-center justify-between gap-3 sticky top-4 z-40">
                        <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0 scrollbar-hide w-full sm:w-auto">
                            <button onClick={addText} className="flex flex-col sm:flex-row items-center gap-1 sm:gap-2 px-3 py-2 hover:bg-gray-100 rounded-lg text-sm font-medium text-gray-700 transition-colors whitespace-nowrap">
                                <Type size={20} className="text-blue-600" />
                                <span>Add Text</span>
                            </button>
                            <button onClick={addDate} className="flex flex-col sm:flex-row items-center gap-1 sm:gap-2 px-3 py-2 hover:bg-gray-100 rounded-lg text-sm font-medium text-gray-700 transition-colors whitespace-nowrap">
                                <Calendar size={20} className="text-green-600" />
                                <span>Add Date</span>
                            </button>
                            <button onClick={() => setIsSignatureModalOpen(true)} className="flex flex-col sm:flex-row items-center gap-1 sm:gap-2 px-3 py-2 hover:bg-gray-100 rounded-lg text-sm font-medium text-gray-700 transition-colors whitespace-nowrap">
                                <Pen size={20} className="text-purple-600" />
                                <span>Signature</span>
                            </button>
                            <div className="w-px h-8 bg-gray-200 mx-1 hidden sm:block" />
                            <button onClick={() => setElements([])} className="flex flex-col sm:flex-row items-center gap-1 sm:gap-2 px-3 py-2 hover:bg-gray-100 rounded-lg text-sm font-medium text-red-600 transition-colors whitespace-nowrap">
                                <Undo size={20} />
                                <span className="hidden sm:inline">Clear All</span>
                            </button>
                        </div>

                        <div className="flex items-center gap-3 w-full sm:w-auto">
                            <button
                                onClick={handleDownload}
                                disabled={loading}
                                className={`flex-1 sm:flex-none py-2.5 px-6 rounded-xl text-white font-bold shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2
                                    ${loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 hover:scale-[1.02]'}
                                `}
                            >
                                {loading ? <Loader2 className="animate-spin w-5 h-5" /> : <Download size={20} />}
                                <span>{loading ? 'Processing...' : 'Download Signed PDF'}</span>
                            </button>
                        </div>
                    </div>

                    {/* Canvas Container */}
                    <div className="bg-gray-100 rounded-2xl p-4 sm:p-8 overflow-auto flex justify-center min-h-[600px] border border-gray-200" ref={containerRef}>
                        <DndContext sensors={sensors} onDragEnd={handleDragEnd}>
                            <div className="relative shadow-2xl bg-white" style={{ width: 'fit-content', height: 'fit-content' }}>
                                <canvas ref={canvasRef} className="block max-w-full" />
                                <div className="absolute inset-0 z-0">
                                    {elements.map(el => (
                                        <DraggableItem
                                            key={el.id}
                                            element={el}
                                            updateContent={(id, txt) => setElements(prev => prev.map(e => e.id === id ? { ...e, content: txt } : e))}
                                            remove={(id) => setElements(prev => prev.filter(e => e.id !== id))}
                                            isSelected={selectedElementId === el.id}
                                            onSelect={() => setSelectedElementId(el.id)}
                                        />
                                    ))}
                                </div>
                            </div>
                        </DndContext>
                    </div>

                    <p className="text-center text-gray-500 text-sm flex items-center justify-center gap-1.5 mt-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        Your files are processed securely and automatically deleted after signing.
                    </p>
                </div>
            )}
        </div>
    );
};

export default SignPdfClient;
