'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface RelatedToolsProps {
    currentToolId: string;
}

const toolCategories: Record<string, { name: string; tools: { id: string; label: string }[] }> = {
    compression: {
        name: 'Compress & Optimize',
        tools: [
            { id: 'compress-pdf', label: 'Compress PDF Online' },
            { id: 'optimize-pdf-size', label: 'Optimize PDF Size' },
        ],
    },
    convert: {
        name: 'Convert PDF',
        tools: [
            { id: 'pdf-to-jpg', label: 'PDF to JPG Converter' },
            { id: 'pdf-to-word', label: 'PDF to Word Converter' },
            { id: 'jpg-to-pdf', label: 'JPG to PDF Converter' },
            { id: 'pdf-to-excel', label: 'PDF to Excel Converter' },
            { id: 'pdf-to-ppt', label: 'PDF to PPT Converter' },
            { id: 'word-to-pdf', label: 'Word to PDF Converter' },
            { id: 'image-to-pdf', label: 'Image to PDF Converter' },
            { id: 'pdf-to-text', label: 'PDF to Text Converter' },
            { id: 'html-to-pdf', label: 'HTML to PDF Converter' },
        ],
    },
    edit: {
        name: 'Edit & Organize',
        tools: [
            { id: 'merge-pdf', label: 'Merge PDF Files' },
            { id: 'split-pdf', label: 'Split PDF Pages' },
            { id: 'rotate-pdf', label: 'Rotate PDF Online' },
            { id: 'delete-pdf-pages', label: 'Delete PDF Pages' },
            { id: 'rearrange-pdf', label: 'Reorder PDF Pages' },
            { id: 'add-watermark', label: 'Add Watermark to PDF' },
            { id: 'add-page-numbers', label: 'Add Page Numbers' },
            { id: 'crop-pdf', label: 'Crop PDF Pages' },
        ],
    },
    security: {
        name: 'Security',
        tools: [
            { id: 'protect-pdf', label: 'Password Protect PDF' },
            { id: 'unlock-pdf', label: 'Remove PDF Password' },
            { id: 'redact-pdf', label: 'Redact PDF' },
        ],
    },
};

function getRelatedTools(currentToolId: string): { id: string; label: string }[] {
    const related: { id: string; label: string }[] = [];
    let currentCategory = '';

    // Find which category the current tool belongs to
    for (const [catKey, cat] of Object.entries(toolCategories)) {
        if (cat.tools.some(t => t.id === currentToolId)) {
            currentCategory = catKey;
            break;
        }
    }

    // Add tools from same category first (exclude current)
    if (currentCategory && toolCategories[currentCategory]) {
        for (const tool of toolCategories[currentCategory].tools) {
            if (tool.id !== currentToolId && related.length < 3) {
                related.push(tool);
            }
        }
    }

    // Fill remaining from other categories
    for (const cat of Object.values(toolCategories)) {
        for (const tool of cat.tools) {
            if (tool.id !== currentToolId && !related.some(r => r.id === tool.id) && related.length < 6) {
                related.push(tool);
            }
        }
    }

    return related.slice(0, 6);
}

export default function RelatedTools({ currentToolId }: RelatedToolsProps) {
    const related = getRelatedTools(currentToolId);

    return (
        <section className="border-t border-slate-200 pt-8 mt-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">
                Other Free PDF Tools You Might Need
            </h2>
            <div className="flex flex-wrap justify-center gap-3 mb-6">
                {related.map((tool) => (
                    <Link
                        key={tool.id}
                        href={`/tools/${tool.id}`}
                        className="px-5 py-2.5 bg-indigo-50 text-indigo-700 rounded-full hover:bg-indigo-100 transition-colors font-medium text-sm"
                    >
                        {tool.label}
                    </Link>
                ))}
            </div>
            <div className="text-center">
                <Link
                    href="/tools"
                    className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-700 font-medium text-sm"
                >
                    View all PDF tools <ArrowRight className="w-4 h-4" />
                </Link>
            </div>
        </section>
    );
}
