'use client';

import { useState } from 'react';
import { PDFDocument } from 'pdf-lib';
import * as pdfjsLib from 'pdfjs-dist';
import {
    DndContext,
    closestCenter,
    KeyboardSensor,
    PointerSensor,
    useSensor,
    useSensors,
    DragOverlay,
    DragEndEvent,
    DragStartEvent,
} from '@dnd-kit/core';
import {
    arrayMove,
    SortableContext,
    sortableKeyboardCoordinates,
    useSortable,
    rectSortingStrategy,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { Loader2, FileText, X, Check } from 'lucide-react';
import FileUploader from '../../components/FileUploader';

// Initialize PDF.js worker
if (typeof window !== 'undefined') {
    pdfjsLib.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjsLib.version}/build/pdf.worker.min.mjs`;
}

interface PageItem {
    id: string;
    originalIndex: number; // 0-based index from original PDF
    thumbnail: string;
}

// Sortable Item Component
const SortablePage = ({
    item,
    index,
    onRemove
}: {
    item: PageItem;
    index: number;
    onRemove?: (id: string) => void;
}) => {
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
        isDragging,
    } = useSortable({ id: item.id });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
        opacity: isDragging ? 0.5 : 1,
    };

    return (
        <div
            ref={setNodeRef}
            style={style}
            {...attributes}
            {...listeners}
            className="relative group bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden cursor-grab active:cursor-grabbing hover:shadow-md transition-shadow"
        >
            <div className="aspect-[1/1.4] relative bg-gray-100 dark:bg-gray-900 flex items-center justify-center overflow-hidden">
                {/* Page Thumbnail */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    src={item.thumbnail}
                    alt={`Page ${item.originalIndex + 1}`}
                    className="w-full h-full object-contain pointer-events-none"
                />

                {/* Remove Button (visible on hover) */}
                {onRemove && (
                    <button
                        onClick={(e) => {
                            e.stopPropagation(); // Prevent drag start
                            onRemove(item.id);
                        }}
                        className="absolute top-2 right-2 p-1 bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-600 focus:outline-none"
                        title="Remove Page"
                        onPointerDown={(e) => e.stopPropagation()}
                    >
                        <X size={14} />
                    </button>
                )}
            </div>

            {/* Page Number Footer */}
            <div className="p-2 text-center text-sm font-medium text-gray-700 dark:text-gray-300 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
                Page {index + 1}
            </div>
        </div>
    );
};

const ReorderPagesClient = () => {
    const [file, setFile] = useState<File | null>(null);
    const [items, setItems] = useState<PageItem[]>([]);
    const [loading, setLoading] = useState(false);
    const [processing, setProcessing] = useState(false);
    const [activeId, setActiveId] = useState<string | null>(null);

    const sensors = useSensors(
        useSensor(PointerSensor),
        useSensor(KeyboardSensor, {
            coordinateGetter: sortableKeyboardCoordinates,
        })
    );

    const generateThumbnails = async (file: File) => {
        setLoading(true);
        try {
            const arrayBuffer = await file.arrayBuffer();
            const pdf = await pdfjsLib.getDocument(arrayBuffer).promise;

            const newItems: PageItem[] = [];
            const scale = 0.5; // Scale for thumbnail (adjust for quality/performance)

            for (let i = 1; i <= pdf.numPages; i++) {
                const page = await pdf.getPage(i);
                const viewport = page.getViewport({ scale });

                const canvas = document.createElement('canvas');
                const context = canvas.getContext('2d');
                canvas.height = viewport.height;
                canvas.width = viewport.width;

                if (context) {
                    await page.render({
                        canvasContext: context,
                        viewport: viewport,
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    } as any).promise;

                    newItems.push({
                        id: `page-${i}-${Date.now()}`,
                        originalIndex: i - 1,
                        thumbnail: canvas.toDataURL(),
                    });
                }
            }
            setItems(newItems);
        } catch (error) {
            console.error('Error generating thumbnails:', error);
            alert('Failed to load PDF pages. Please try a different file.');
        } finally {
            setLoading(false);
        }
    };

    const handleFileChange = async (selectedFile: File) => {
        setFile(selectedFile);
        setItems([]); // Clear previous items
        await generateThumbnails(selectedFile);
    };

    const handleDragStart = (event: DragStartEvent) => {
        setActiveId(event.active.id as string);
    };

    const handleDragEnd = (event: DragEndEvent) => {
        const { active, over } = event;

        if (over && active.id !== over.id) {
            setItems((items) => {
                const oldIndex = items.findIndex((item) => item.id === active.id);
                const newIndex = items.findIndex((item) => item.id === over.id);
                return arrayMove(items, oldIndex, newIndex);
            });
        }
        setActiveId(null);
    };

    const handleRemovePage = (id: string) => {
        setItems((items) => items.filter(item => item.id !== id));
    };

    const handleReorder = async () => {
        if (!file || items.length === 0) {
            alert('Please select a file and arrange pages.');
            return;
        }

        setProcessing(true);
        try {
            const pdfBytes = await file.arrayBuffer();
            const pdf = await PDFDocument.load(pdfBytes);
            const newPdf = await PDFDocument.create();

            // Get indices from current item order
            const indices = items.map(item => item.originalIndex);

            const copiedPages = await newPdf.copyPages(pdf, indices);
            copiedPages.forEach(page => newPdf.addPage(page));

            const newPdfBytes = await newPdf.save();

            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const blob = new Blob([newPdfBytes as any], { type: 'application/pdf' });
            const link = document.createElement('a');
            link.href = URL.createObjectURL(blob);
            link.download = `reordered-${file.name}`;
            link.click();
        } catch (error) {
            console.error('Error reordering pages:', error);
            alert(`An error occurred: ${(error as Error).message}`);
        } finally {
            setProcessing(false);
        }
    };

    const activeItem = activeId ? items.find((item) => item.id === activeId) : null;

    return (
        <div className="max-w-6xl mx-auto px-4 py-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-2 text-center text-gray-900 dark:text-white">
                Reorder PDF Pages
            </h1>
            <p className="text-center text-gray-500 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
                Drag and drop thumbnails to rearrange pages. You can also delete pages.
            </p>

            {/* Upload Section */}
            {!file ? (
                <FileUploader onFileSelect={handleFileChange} label="Select PDF to Reorder" />
            ) : (
                <div className="animate-in fade-in zoom-in duration-300">
                    <div className="flex justify-between items-center mb-6 px-4">
                        <div className="flex items-center space-x-2 text-gray-900 dark:text-white font-medium bg-white dark:bg-gray-800 py-2 px-4 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
                            <FileText size={20} className="text-blue-500" />
                            <span className="truncate max-w-[200px] hidden sm:inline">{file.name}</span>
                            <button
                                onClick={() => { setFile(null); setItems([]); }}
                                className="text-xs text-red-500 hover:text-red-600 hover:underline ml-2"
                            >
                                Change
                            </button>
                        </div>

                        <button
                            onClick={handleReorder}
                            disabled={processing || items.length === 0}
                            className={`flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg transition-all shadow-md hover:shadow-lg ${processing ? 'opacity-70 cursor-wait' : ''
                                }`}
                        >
                            {processing ? <Loader2 className="animate-spin" size={20} /> : <Check size={20} />}
                            <span>{processing ? 'Saving...' : 'Save Changes'}</span>
                        </button>
                    </div>

                    {loading ? (
                        <div className="flex flex-col items-center justify-center py-20 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm">
                            <Loader2 className="w-12 h-12 text-blue-500 animate-spin mb-4" />
                            <p className="text-gray-500">Generating thumbnails...</p>
                        </div>
                    ) : (
                        <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm p-6 min-h-[500px]">
                            <DndContext
                                sensors={sensors}
                                collisionDetection={closestCenter}
                                onDragStart={handleDragStart}
                                onDragEnd={handleDragEnd}
                            >
                                <SortableContext items={items.map(i => i.id)} strategy={rectSortingStrategy}>
                                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
                                        {items.map((item, index) => (
                                            <SortablePage
                                                key={item.id}
                                                item={item}
                                                index={index}
                                                onRemove={handleRemovePage}
                                            />
                                        ))}
                                    </div>
                                </SortableContext>
                                <DragOverlay>
                                    {activeItem ? (
                                        <div className="opacity-90 scale-105 transform cursor-grabbing">
                                            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-2xl border-2 border-blue-500 overflow-hidden">
                                                <div className="aspect-[1/1.4] relative bg-gray-100 dark:bg-gray-900 flex items-center justify-center">
                                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                                    <img
                                                        src={activeItem.thumbnail}
                                                        alt="Moving page"
                                                        className="w-full h-full object-contain"
                                                    />
                                                </div>
                                                <div className="p-2 text-center text-sm font-bold text-white bg-blue-500">
                                                    Page {items.findIndex(i => i.id === activeItem.id) + 1}
                                                </div>
                                            </div>
                                        </div>
                                    ) : null}
                                </DragOverlay>
                            </DndContext>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default ReorderPagesClient;
