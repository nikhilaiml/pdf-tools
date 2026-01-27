'use client';

import { useState } from 'react';
import { PDFDocument } from 'pdf-lib';
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
import { Loader2, FileText, X, Check, Cloud } from 'lucide-react';
import ToolPageLayout from '../../components/ToolPageLayout';

interface PageItem {
    id: string;
    originalIndex: number;
    thumbnail: string;
}

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
            className="relative group bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden cursor-grab active:cursor-grabbing hover:shadow-lg transition-all"
        >
            <div className="aspect-[1/1.4] relative bg-gray-50 flex items-center justify-center overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    src={item.thumbnail}
                    alt={`Page ${item.originalIndex + 1}`}
                    className="w-full h-full object-contain pointer-events-none"
                />

                {onRemove && (
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            onRemove(item.id);
                        }}
                        className="absolute top-2 right-2 p-1.5 bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-600 focus:outline-none shadow-lg"
                        title="Remove Page"
                        onPointerDown={(e) => e.stopPropagation()}
                    >
                        <X size={14} />
                    </button>
                )}
            </div>

            <div className="p-2 text-center text-sm font-medium text-gray-700 border-t border-gray-200 bg-gray-50">
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
    const [isDragging, setIsDragging] = useState(false);

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
            const pdfjsLib = await import('pdfjs-dist');
            pdfjsLib.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjsLib.version}/build/pdf.worker.min.mjs`;
            const pdf = await pdfjsLib.getDocument(arrayBuffer).promise;
            const newItems: PageItem[] = [];
            const scale = 0.5;

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

    const handleFileSelect = async (selectedFile: File) => {
        if (selectedFile.type === 'application/pdf' || selectedFile.name.toLowerCase().endsWith('.pdf')) {
            setFile(selectedFile);
            setItems([]);
            await generateThumbnails(selectedFile);
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

    const steps = [
        {
            title: "Step 1: Upload PDF",
            description: "Select or drag and drop your PDF file to rearrange pages."
        },
        {
            title: "Step 2: Drag & Drop",
            description: "Drag page thumbnails to rearrange them. Click X to remove pages."
        },
        {
            title: "Step 3: Save",
            description: "Download your reorganized PDF with the new page order."
        }
    ];

    return (
        <ToolPageLayout
            title="Reorder PDF Pages"
            subtitle="Drag and drop thumbnails to rearrange pages. You can also delete pages."
            steps={steps}
            ctaText="Save Changes"
            onAction={handleReorder}
            loading={processing}
            disabled={items.length === 0}
            showCta={items.length > 0}
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
                <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl border border-gray-100 p-4 sm:p-6">
                    <div className="flex items-center justify-between mb-6 p-3 sm:p-4 bg-gray-50 rounded-xl">
                        <div className="flex items-center space-x-3">
                            <div className="p-2 bg-purple-100 rounded-lg">
                                <FileText className="text-purple-500 w-5 h-5" />
                            </div>
                            <span className="font-medium text-gray-900 truncate max-w-[150px] sm:max-w-[200px] text-sm sm:text-base">{file.name}</span>
                        </div>
                        <button
                            onClick={() => { setFile(null); setItems([]); }}
                            className="text-xs sm:text-sm text-red-500 hover:text-red-700 font-medium"
                        >
                            Change
                        </button>
                    </div>

                    {loading ? (
                        <div className="flex flex-col items-center justify-center py-16">
                            <Loader2 className="w-12 h-12 text-purple-500 animate-spin mb-4" />
                            <p className="text-gray-500">Generating thumbnails...</p>
                        </div>
                    ) : (
                        <div className="min-h-[400px]">
                            <DndContext
                                sensors={sensors}
                                collisionDetection={closestCenter}
                                onDragStart={handleDragStart}
                                onDragEnd={handleDragEnd}
                            >
                                <SortableContext items={items.map(i => i.id)} strategy={rectSortingStrategy}>
                                    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4">
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
                                            <div className="bg-white rounded-xl shadow-2xl border-2 border-purple-500 overflow-hidden">
                                                <div className="aspect-[1/1.4] relative bg-gray-50 flex items-center justify-center">
                                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                                    <img
                                                        src={activeItem.thumbnail}
                                                        alt="Moving page"
                                                        className="w-full h-full object-contain"
                                                    />
                                                </div>
                                                <div className="p-2 text-center text-sm font-bold text-white bg-gradient-to-r from-violet-500 to-purple-600">
                                                    Page {items.findIndex(i => i.id === activeItem.id) + 1}
                                                </div>
                                            </div>
                                        </div>
                                    ) : null}
                                </DragOverlay>
                            </DndContext>

                            <button
                                onClick={handleReorder}
                                disabled={processing || items.length === 0}
                                className={`w-full mt-6 flex items-center justify-center space-x-2 bg-gradient-to-r from-violet-500 to-purple-600 text-white font-bold py-3 sm:py-4 px-6 rounded-xl transition-all shadow-lg hover:shadow-xl ${processing || items.length === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:scale-[1.02]'
                                    }`}
                            >
                                {processing ? <Loader2 className="animate-spin" size={20} /> : <Check size={20} />}
                                <span className="text-sm sm:text-base">{processing ? 'Saving...' : 'Save Changes'}</span>
                            </button>
                        </div>
                    )}
                </div>
            )}
        </ToolPageLayout>
    );
};

export default ReorderPagesClient;
