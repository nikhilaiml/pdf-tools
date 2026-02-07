'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { tools } from '../tools/tools';
import {
    Merge, Split, Minimize2, RotateCw, Trash2, ListOrdered, Image, FileText,
    Table, Presentation, FileCode, CheckSquare, Layers, Lock, Unlock, Eye,
    Wrench, Activity, Search, Scan, Crop, Shield, Languages, Share2, Music, Crown,
    FileImage, FileSpreadsheet, FileType, Stamp, Hash, ArrowRight
} from 'lucide-react';
import React, { useState } from 'react';

// Color mapping for tool icons
const getToolColor = (category: string, id: string) => {
    const colorMap: { [key: string]: { bg: string; icon: string; hover: string } } = {
        'merge-pdf': { bg: 'bg-red-50', icon: 'text-red-500', hover: 'hover:bg-red-100' },
        'split-pdf': { bg: 'bg-orange-50', icon: 'text-orange-500', hover: 'hover:bg-orange-100' },
        'compress-pdf': { bg: 'bg-green-50', icon: 'text-green-600', hover: 'hover:bg-green-100' },
        'rotate-pdf': { bg: 'bg-blue-50', icon: 'text-blue-500', hover: 'hover:bg-blue-100' },
        'delete-pages': { bg: 'bg-rose-50', icon: 'text-rose-500', hover: 'hover:bg-rose-100' },
        'reorder-pages': { bg: 'bg-indigo-50', icon: 'text-indigo-500', hover: 'hover:bg-indigo-100' },
        'pdf-to-jpg': { bg: 'bg-amber-50', icon: 'text-amber-600', hover: 'hover:bg-amber-100' },
        'jpg-to-pdf': { bg: 'bg-yellow-50', icon: 'text-yellow-600', hover: 'hover:bg-yellow-100' },
        'pdf-to-word': { bg: 'bg-blue-50', icon: 'text-blue-600', hover: 'hover:bg-blue-100' },
        'word-to-pdf': { bg: 'bg-blue-50', icon: 'text-blue-500', hover: 'hover:bg-blue-100' },
        'pdf-to-excel': { bg: 'bg-emerald-50', icon: 'text-emerald-600', hover: 'hover:bg-emerald-100' },
        'excel-to-pdf': { bg: 'bg-green-50', icon: 'text-green-600', hover: 'hover:bg-green-100' },
        'pdf-to-ppt': { bg: 'bg-orange-50', icon: 'text-orange-600', hover: 'hover:bg-orange-100' },
        'ppt-to-pdf': { bg: 'bg-red-50', icon: 'text-red-500', hover: 'hover:bg-red-100' },
        'html-to-pdf': { bg: 'bg-purple-50', icon: 'text-purple-600', hover: 'hover:bg-purple-100' },
        'protect-pdf': { bg: 'bg-slate-100', icon: 'text-slate-700', hover: 'hover:bg-slate-200' },
        'unlock-pdf': { bg: 'bg-teal-50', icon: 'text-teal-600', hover: 'hover:bg-teal-100' },
        'add-watermark': { bg: 'bg-violet-50', icon: 'text-violet-600', hover: 'hover:bg-violet-100' },
        'add-page-numbers': { bg: 'bg-pink-50', icon: 'text-pink-600', hover: 'hover:bg-pink-100' },
        'crop-pdf': { bg: 'bg-cyan-50', icon: 'text-cyan-600', hover: 'hover:bg-cyan-100' },
    };

    if (colorMap[id]) return colorMap[id];

    // Default colors by category
    switch (category) {
        case 'convert': return { bg: 'bg-blue-50', icon: 'text-blue-500', hover: 'hover:bg-blue-100' };
        case 'edit': return { bg: 'bg-purple-50', icon: 'text-purple-500', hover: 'hover:bg-purple-100' };
        case 'security': return { bg: 'bg-slate-100', icon: 'text-slate-600', hover: 'hover:bg-slate-200' };
        case 'ai': return { bg: 'bg-gradient-to-br from-violet-50 to-purple-50', icon: 'text-violet-600', hover: 'hover:bg-violet-100' };
        default: return { bg: 'bg-gray-50', icon: 'text-gray-600', hover: 'hover:bg-gray-100' };
    }
};

// Icon mapping function
const getIcon = (id: string) => {
    switch (id) {
        case 'merge-pdf': return Merge;
        case 'split-pdf': return Split;
        case 'compress-pdf': return Minimize2;
        case 'rotate-pdf': return RotateCw;
        case 'delete-pages': return Trash2;
        case 'reorder-pages': return ListOrdered;
        case 'pdf-to-jpg': return FileImage;
        case 'jpg-to-pdf': return Image;
        case 'pdf-to-word':
        case 'word-to-pdf': return FileText;
        case 'pdf-to-excel':
        case 'excel-to-pdf': return Table;
        case 'pdf-to-ppt':
        case 'ppt-to-pdf': return Presentation;
        case 'pdf-to-text': return FileType;
        case 'html-to-pdf': return FileCode;
        case 'add-watermark': return Stamp;
        case 'add-page-numbers': return Hash;
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

interface ToolsGridProps {
    searchQuery?: string;
}

export default function ToolsGrid({ searchQuery = '' }: ToolsGridProps) {
    const [activeCategory, setActiveCategory] = useState('All');

    const categories = ['All', 'Popular', 'Convert', 'Edit', 'Security', 'AI'];

    // Filter logic
    const filteredTools = tools.filter(tool => {
        // Search filter
        if (searchQuery) {
            const query = searchQuery.toLowerCase();
            const matchesSearch =
                tool.title.toLowerCase().includes(query) ||
                tool.description.toLowerCase().includes(query) ||
                tool.id.toLowerCase().includes(query);

            if (!matchesSearch) return false;
        }

        if (activeCategory === 'All') return true;
        if (activeCategory === 'Convert') return tool.category === 'convert';
        if (activeCategory === 'Edit') return tool.category === 'edit';
        if (activeCategory === 'Security') return tool.category === 'security';
        if (activeCategory === 'AI') return tool.category === 'ai';
        if (activeCategory === 'Popular') return ['merge-pdf', 'split-pdf', 'compress-pdf', 'pdf-to-word', 'pdf-to-jpg', 'rotate-pdf'].includes(tool.id);
        return true;
    });

    return (
        <section className="py-16 bg-[#faf8f5] relative" id="tools">
            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col items-center mb-12">
                    <div className="text-center mb-10 max-w-3xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
                            Popular PDF Tools Online
                        </h2>
                        <p className="text-slate-600 text-lg leading-relaxed">
                            Select a tool to start working with your PDF files.
                        </p>
                    </div>

                    {/* Category Tabs */}
                    <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-8">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === cat
                                    ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/25 scale-105'
                                    : 'bg-white text-slate-600 hover:bg-slate-50 hover:text-slate-900 border border-slate-200'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Tools Grid - 6 columns on large screens */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3 sm:gap-4">
                    {filteredTools.map((tool, index) => {
                        const Icon = getIcon(tool.id);
                        const colors = getToolColor(tool.category, tool.id);
                        return (
                            <Link href={`/tools/${tool.id}`} key={tool.id}>
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.02 }}
                                    className={`tool-card bg-white border border-slate-100 p-3 sm:p-4 rounded-xl h-full flex flex-col group cursor-pointer ${colors.hover}`}
                                >
                                    {/* Icon */}
                                    <div className={`w-12 h-12 rounded-xl ${colors.bg} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}>
                                        <Icon className={`w-6 h-6 ${colors.icon}`} />
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-sm font-semibold text-slate-800 mb-1 group-hover:text-indigo-600 transition-colors line-clamp-2">
                                        {tool.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-xs text-slate-500 leading-relaxed line-clamp-2">
                                        {tool.description}
                                    </p>
                                </motion.div>
                            </Link>
                        );
                    })}
                </div>

                {/* Quick Actions Sidebar - Desktop Only */}
                <div className="hidden xl:block fixed right-6 top-1/2 -translate-y-1/2 z-30">
                    <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-4 w-48">
                        <h4 className="text-sm font-semibold text-slate-800 mb-4 flex items-center gap-2">
                            <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
                            Quick Actions
                        </h4>
                        <div className="space-y-2">
                            {[
                                { name: 'Compress', icon: Minimize2, href: '/tools/compress-pdf', color: 'text-green-500' },
                                { name: 'Merge', icon: Merge, href: '/tools/merge-pdf', color: 'text-red-500' },
                                { name: 'Convert to Word', icon: FileText, href: '/tools/pdf-to-word', color: 'text-blue-500' },
                                { name: 'PowerPoint', icon: Presentation, href: '/tools/pdf-to-ppt', color: 'text-orange-500' },
                            ].map((action, i) => (
                                <Link key={i} href={action.href}>
                                    <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-50 transition-colors group cursor-pointer">
                                        <action.icon className={`w-4 h-4 ${action.color}`} />
                                        <span className="text-sm text-slate-600 group-hover:text-slate-900">{action.name}</span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
