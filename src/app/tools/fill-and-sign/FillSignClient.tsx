'use client';

import { useState, useRef, useEffect } from 'react';
import { Loader2, Upload, Type, Pen, Trash2, Save, X, Grip } from 'lucide-react';
import { PDFDocument, rgb } from 'pdf-lib';
import { DndContext, useDraggable, useDroppable, DragEndEvent } from '@dnd-kit/core';

interface TextElement {
    id: string;
    text: string;
    x: number;
    y: number;
    fontSize: number;
}

interface SignatureElement {
    id: string;
    image: string; // Base64 data URL
    x: number;
    y: number;
    width: number;
    height: number;
}

const DraggableText = ({ element, updatePos, updateText, remove }: { element: TextElement, updatePos: (id: string, dx: number, dy: number) => void, updateText: (id: string, text: string) => void, remove: (id: string) => void }) => {
    const { attributes, listeners, setNodeRef, transform } = useDraggable({
        id: element.id,
    });

    const style = transform ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
    } : undefined;

    return (
        <div
            ref={setNodeRef}
            style={{ ...style, left: element.x, top: element.y }}
            className="absolute flex items-center group"
            {...listeners}
            {...attributes}
        >
            <input
                value={element.text}
                onChange={(e) => updateText(element.id, e.target.value)}
                className="bg-transparent border border-transparent hover:border-blue-400 focus:border-blue-500 rounded px-1 py-0.5 outline-none text-gray-900 font-sans cursor-move"
                style={{ fontSize: element.fontSize, minWidth: '50px' }}
                onPointerDown={(e) => e.stopPropagation()} // Allow input focus without triggering drag immediately if clicked
            />
            {/* Handle for explicit dragging if input blocks it, but simple setup often works with listeners on parent div. 
                However, input consumes pointer events. We can put listeners on a handle or the div.
                If listeners are on div, input click might still work if we don't prevent default.
                Let's add a explicit drag handle for better UX. */}
            <div
                className="absolute -top-4 -left-4 p-1 cursor-move bg-white rounded-full shadow border border-gray-200 opacity-0 group-hover:opacity-100 transition-opacity"
            >
                <Grip size={12} className="text-gray-500" />
            </div>

            <button
                onPointerDown={(e) => { e.stopPropagation(); remove(element.id); }}
                className="absolute -top-4 -right-4 p-1 bg-white rounded-full shadow border border-gray-200 text-red-500 opacity-0 group-hover:opacity-100 transition-opacity z-10"
            >
                <X size={12} />
            </button>
        </div>
    );
};

const FillSignClient = () => {
    const [file, setFile] = useState<File | null>(null);
    const [pdfDoc, setPdfDoc] = useState<any>(null);
    const [pageNum, setPageNum] = useState(1);
    const [scale, setScale] = useState(1.5);
    const [loading, setLoading] = useState(false);

    const [texts, setTexts] = useState<TextElement[]>([]);

    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    // Initial Load
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

            await page.render({
                canvasContext: context,
                viewport: viewport
            }).promise;
        };

        renderPage();
    }, [pdfDoc, pageNum, scale]);

    const addText = () => {
        const viewportParams = containerRef.current?.getBoundingClientRect();
        // Default to center if possible, or top left
        setTexts(prev => [...prev, {
            id: crypto.randomUUID(),
            text: 'Insert Text',
            x: 50,
            y: 50,
            fontSize: 16
        }]);
    };

    const handleDragEnd = (event: DragEndEvent) => {
        const { active, delta } = event;
        setTexts(prev => prev.map(t => {
            if (t.id === active.id) {
                return { ...t, x: t.x + delta.x, y: t.y + delta.y };
            }
            return t;
        }));
    };

    const removeText = (id: string) => {
        setTexts(prev => prev.filter(t => t.id !== id));
    };

    const updateText = (id: string, text: string) => {
        setTexts(prev => prev.map(t => t.id === id ? { ...t, text } : t));
    };

    const handleSave = async () => {
        if (!file) return;
        setLoading(true);

        try {
            const existingPdfBytes = await file.arrayBuffer();
            const pdfDoc = await PDFDocument.load(existingPdfBytes);
            const page = pdfDoc.getPage(pageNum - 1);
            const { height: pageHeight } = page.getSize();

            // Map screen coordinates to PDF coordinates
            // This is non-trivial without precise viewport math. 
            // Assumption: canvas width matches PDF point width * scale.
            // PDF coordinates are bottom-left origin. HTML is top-left.

            texts.forEach(t => {
                // Determine scale factor based on the rendered canvas vs PDF underlying size
                // For simplicity assuming basic 1:1 mapping adjusted for scale
                // y needs to be invested: pdfY = pageHeight - (screenY / scale)

                const pdfX = t.x / scale;
                const pdfY = pageHeight - (t.y / scale) - (t.fontSize); // Adjust for font baseline roughly

                page.drawText(t.text, {
                    x: Math.max(0, pdfX),
                    y: Math.max(0, pdfY),
                    size: t.fontSize,
                    color: rgb(0, 0, 0),
                });
            });

            const pdfBytes = await pdfDoc.save();
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const blob = new Blob([pdfBytes as any], { type: 'application/pdf' });

            const link = document.createElement('a');
            link.href = URL.createObjectURL(blob);
            link.download = `filled-${file.name}`;
            link.click();
        } catch (err) {
            console.error(err);
            alert("Failed to save PDF");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex flex-col h-screen max-h-[calc(100vh-100px)]">
            {!file ? (
                <div className="flex-1 flex flex-col items-center justify-center p-8">
                    <div
                        onClick={() => document.getElementById('fill-upload')?.click()}
                        className="bg-gray-50 dark:bg-gray-800 border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-xl p-12 text-center cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                    >
                        <Upload className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Upload PDF to Fill & Sign</h3>
                        <p className="text-gray-500">Click to browse your files</p>
                        <input
                            id="fill-upload"
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
                    <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 p-4 flex items-center justify-between gap-4">
                        <div className="flex items-center gap-2">
                            <button
                                onClick={addText}
                                className="flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 hover:bg-blue-100 rounded-lg font-medium transition-colors"
                            >
                                <Type size={18} />
                                Add Text
                            </button>
                            {/* Signature placeholder - complexity reduction: focus on text first */}
                            {/* <button className="flex items-center gap-2 px-4 py-2 bg-purple-50 text-purple-600 hover:bg-purple-100 rounded-lg font-medium transition-colors">
                                <Pen size={18} />
                                Add Signature
                             </button> */}
                        </div>

                        <div className="flex items-center gap-2">
                            <span className="text-sm text-gray-500">Page {pageNum} of {pdfDoc?.numPages}</span>
                            <button
                                onClick={handleSave}
                                disabled={loading}
                                className="flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium shadow-sm transition-colors"
                            >
                                {loading ? <Loader2 className="animate-spin" size={18} /> : <Save size={18} />}
                                Save PDF
                            </button>
                            <button onClick={() => setFile(null)} className="p-2 text-gray-500 hover:text-red-500">
                                <X className="w-6 h-6" />
                            </button>
                        </div>
                    </div>

                    {/* Canvas Area */}
                    <DndContext onDragEnd={handleDragEnd}>
                        <div className="flex-1 bg-gray-100 dark:bg-gray-900 overflow-auto flex justify-center p-8 relative" ref={containerRef}>
                            <div className="relative shadow-xl">
                                <canvas ref={canvasRef} className="bg-white" />
                                {/* Overlay Layer for Elements */}
                                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                                    <div className="relative w-full h-full pointer-events-auto">
                                        {texts.map(t => (
                                            {
                                                texts.map(t => (
                                                    <DraggableText key={t.id} element={t} updatePos={() => { }} updateText={updateText} remove={removeText} />
                                                ))
                                            }
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </DndContext>
                </>
            )}
        </div>
    );
};

export default FillSignClient;
