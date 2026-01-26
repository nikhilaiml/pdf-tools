'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { tools } from '../tools/tools';
import {
    Merge, Split, Minimize2, RotateCw, Trash2, ListOrdered, Image, FileText,
    Table, Presentation, FileCode, CheckSquare, Layers, Lock, Unlock, Eye,
    Wrench, Activity, Search, Scan, Crop, Shield, Languages, Share2, Music, Crown
} from 'lucide-react';
import React, { useState } from 'react';

// Icon mapping function
const getIcon = (id: string) => {
    switch (id) {
        case 'merge-pdf': return Merge;
        case 'split-pdf': return Split;
        case 'compress-pdf': return Minimize2;
        case 'rotate-pdf': return RotateCw;
        case 'delete-pages': return Trash2;
        case 'reorder-pages': return ListOrdered;
        case 'pdf-to-jpg':
        case 'jpg-to-pdf': return Image;
        case 'pdf-to-word':
        case 'word-to-pdf': return FileText;
        case 'pdf-to-excel':
        case 'excel-to-pdf': return Table;
        case 'pdf-to-ppt':
        case 'ppt-to-pdf': return Presentation;
        case 'pdf-to-text': return FileText;
        case 'html-to-pdf': return FileCode;
        case 'add-watermark': return Crown;
        case 'add-page-numbers': return ListOrdered;
        case 'crop-pdf': return Crop;
        case 'resize-pages': return Scan;
        case 'flatten-pdf': return Layers;
        case 'protect-pdf': return Lock;
        case 'unlock-pdf': return Unlock;
        case 'restrict-printing-copying': return Shield;
        case 'view-metadata': return Eye;
        case 'remove-metadata': return Trash2;
        case 'repair-corrupted-pdf': return Wrench;
        case 'optimize-pdf-size': return Minimize2;
        case 'pdf-analytics': return Activity;
        case 'pdf-table-extractor': return Table;
        case 'scan-to-pdf': return Scan;
        case 'screenshot-to-pdf': return Image;
        case 'pdf-to-audio': return Music;
        case 'pdf-translator': return Languages;
        case 'share-pdf': return Share2;
        case 'chat-with-pdf': return Crown;
        case 'pdf-summary': return FileText;
        default: return FileText;
    }
};

export default function ToolsGrid() {
    const [activeCategory, setActiveCategory] = useState('All');

    const categories = ['All', 'Popular', 'Convert', 'Edit', 'Security', 'AI'];

    // Filter logic (simplified for demo, you can expand based on tools config)
    const filteredTools = tools.filter(tool => {
        if (activeCategory === 'All') return true;
        if (activeCategory === 'Convert') return tool.category === 'convert';
        if (activeCategory === 'Edit') return tool.category === 'edit';
        if (activeCategory === 'Security') return tool.category === 'security';
        if (activeCategory === 'AI') return tool.category === 'ai';
        if (activeCategory === 'Popular') return ['merge-pdf', 'split-pdf', 'compress-pdf', 'pdf-to-word'].includes(tool.id);
        return true;
    });

    return (
        <section className="py-20 bg-[#0B0F19] relative" id="tools">
            {/* Background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col items-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 text-center">
                        Every Tool You Need
                    </h2>

                    {/* Category Tabs */}
                    <div className="flex flex-wrap justify-center gap-2 md:gap-4">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === cat
                                        ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25 scale-105'
                                        : 'bg-slate-800/50 text-slate-400 hover:bg-slate-800 hover:text-white border border-white/5'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Tools Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {filteredTools.map((tool, index) => {
                        const Icon = getIcon(tool.id);
                        return (
                            <Link href={`/tools/${tool.id}`} key={tool.id}>
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    whileHover={{
                                        y: -6,
                                        scale: 1.02,
                                        boxShadow: "0 20px 40px -10px rgba(59, 130, 246, 0.15)"
                                    }}
                                    transition={{ duration: 0.3 }}
                                    className="bg-slate-900/40 backdrop-blur-md border border-white/5 hover:border-blue-500/30 p-6 rounded-2xl h-full flex flex-col group relative overflow-hidden"
                                >
                                    {/* Hover Gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                    <div className="relative z-10">
                                        <div className="w-12 h-12 rounded-xl bg-slate-800 group-hover:bg-blue-600 flex items-center justify-center mb-4 transition-colors duration-300 shadow-lg shadow-black/20 group-hover:shadow-blue-500/30">
                                            <Icon className="w-6 h-6 text-blue-400 group-hover:text-white transition-colors duration-300" />
                                        </div>

                                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-200 transition-colors">
                                            {tool.title}
                                        </h3>

                                        <p className="text-sm text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
                                            {tool.description}
                                        </p>
                                    </div>
                                </motion.div>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
