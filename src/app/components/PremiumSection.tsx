'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    FileText, Merge, Scissors, Minimize2, RotateCw,
    Lock, Unlock, Image, Trash2, Move, FileOutput,
    ArrowRight, Sparkles
} from 'lucide-react';
import Link from 'next/link';

const pdfTools = [
    {
        id: 'merge',
        name: 'Merge PDF',
        description: 'Combine multiple PDFs into one document',
        icon: Merge,
        color: 'from-blue-500 to-indigo-600',
        href: '/tools/merge-pdf',
        stats: '10M+ files merged'
    },
    {
        id: 'split',
        name: 'Split PDF',
        description: 'Extract pages or split into multiple files',
        icon: Scissors,
        color: 'from-purple-500 to-pink-600',
        href: '/tools/split-pdf',
        stats: '8M+ files split'
    },
    {
        id: 'compress',
        name: 'Compress PDF',
        description: 'Reduce file size while maintaining quality',
        icon: Minimize2,
        color: 'from-green-500 to-emerald-600',
        href: '/tools/compress-pdf',
        stats: '15M+ files compressed'
    },
    {
        id: 'rotate',
        name: 'Rotate PDF',
        description: 'Rotate pages to any angle you need',
        icon: RotateCw,
        color: 'from-orange-500 to-red-600',
        href: '/tools/rotate-pdf',
        stats: '5M+ files rotated'
    },
    {
        id: 'protect',
        name: 'Protect PDF',
        description: 'Add password protection to your PDFs',
        icon: Lock,
        color: 'from-red-500 to-rose-600',
        href: '/tools/protect-pdf',
        stats: '3M+ files protected'
    },
    {
        id: 'unlock',
        name: 'Unlock PDF',
        description: 'Remove password from protected PDFs',
        icon: Unlock,
        color: 'from-teal-500 to-cyan-600',
        href: '/tools/unlock-pdf',
        stats: '2M+ files unlocked'
    },
    {
        id: 'convert',
        name: 'PDF to Image',
        description: 'Convert PDF pages to JPG or PNG',
        icon: Image,
        color: 'from-yellow-500 to-orange-600',
        href: '/tools/pdf-to-jpg',
        stats: '12M+ conversions'
    },
    {
        id: 'delete',
        name: 'Delete Pages',
        description: 'Remove unwanted pages from your PDF',
        icon: Trash2,
        color: 'from-pink-500 to-rose-600',
        href: '/tools/delete-pages',
        stats: '4M+ pages deleted'
    },
    {
        id: 'reorder',
        name: 'Reorder Pages',
        description: 'Rearrange PDF pages in any order',
        icon: Move,
        color: 'from-indigo-500 to-violet-600',
        href: '/tools/reorder-pages',
        stats: '3M+ files reordered'
    },
    {
        id: 'word',
        name: 'PDF to Word',
        description: 'Convert PDF to editable Word document',
        icon: FileOutput,
        color: 'from-blue-600 to-blue-800',
        href: '/tools/pdf-to-word',
        stats: '7M+ conversions'
    }
];

export default function PdfAtGlance() {
    const [hoveredTool, setHoveredTool] = useState<string | null>(null);
    const [selectedCategory, setSelectedCategory] = useState('all');

    const categories = [
        { id: 'all', name: 'All Tools' },
        { id: 'organize', name: 'Organize' },
        { id: 'convert', name: 'Convert' },
        { id: 'security', name: 'Security' }
    ];

    const filteredTools = selectedCategory === 'all'
        ? pdfTools
        : pdfTools.filter(tool => {
            if (selectedCategory === 'organize') return ['merge', 'split', 'rotate', 'delete', 'reorder'].includes(tool.id);
            if (selectedCategory === 'convert') return ['compress', 'convert', 'word'].includes(tool.id);
            if (selectedCategory === 'security') return ['protect', 'unlock'].includes(tool.id);
            return true;
        });

    return (
        <section className="relative py-20 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-indigo-50/30 to-purple-50/30 z-0"></div>
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-indigo-200/30 to-purple-200/30 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-blue-200/30 to-indigo-200/30 rounded-full blur-3xl"></div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Header */}
                <div className="text-center mb-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-indigo-200 text-indigo-600 text-sm font-medium mb-6 shadow-sm"
                    >
                        <Sparkles className="w-4 h-4" />
                        Quick Access
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-5xl font-bold text-slate-800 mb-4"
                    >
                        PDF Tools at a Glance
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-slate-500 max-w-2xl mx-auto text-lg"
                    >
                        Everything you need to work with PDF documents. Fast, secure, and easy to use.
                    </motion.p>
                </div>

                {/* Category Filter */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="flex flex-wrap justify-center gap-3 mb-12"
                >
                    {categories.map((category) => (
                        <button
                            key={category.id}
                            onClick={() => setSelectedCategory(category.id)}
                            className={`px-5 py-2.5 rounded-full font-medium text-sm transition-all ${selectedCategory === category.id
                                    ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg shadow-indigo-500/25'
                                    : 'bg-white text-slate-600 hover:bg-slate-50 border border-slate-200'
                                }`}
                        >
                            {category.name}
                        </button>
                    ))}
                </motion.div>

                {/* Tools Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                    <AnimatePresence mode="popLayout">
                        {filteredTools.map((tool, index) => (
                            <motion.div
                                key={tool.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ delay: index * 0.05 }}
                            >
                                <Link href={tool.href}>
                                    <div
                                        className="group relative bg-white rounded-2xl p-5 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 cursor-pointer overflow-hidden h-full"
                                        onMouseEnter={() => setHoveredTool(tool.id)}
                                        onMouseLeave={() => setHoveredTool(null)}
                                    >
                                        {/* Hover Gradient Overlay */}
                                        <div className={`absolute inset-0 bg-gradient-to-br ${tool.color} opacity-0 group-hover:opacity-5 transition-opacity`}></div>

                                        {/* Icon */}
                                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${tool.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                                            <tool.icon className="w-6 h-6 text-white" />
                                        </div>

                                        {/* Content */}
                                        <h3 className="font-bold text-slate-800 mb-1 group-hover:text-indigo-600 transition-colors">
                                            {tool.name}
                                        </h3>
                                        <p className="text-slate-500 text-xs leading-relaxed mb-3">
                                            {tool.description}
                                        </p>

                                        {/* Stats Badge */}
                                        <div className="flex items-center justify-between">
                                            <span className="text-xs text-slate-400">{tool.stats}</span>
                                            <ArrowRight className="w-4 h-4 text-indigo-500 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                                        </div>

                                        {/* Active Indicator */}
                                        <AnimatePresence>
                                            {hoveredTool === tool.id && (
                                                <motion.div
                                                    initial={{ width: 0 }}
                                                    animate={{ width: '100%' }}
                                                    exit={{ width: 0 }}
                                                    className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${tool.color}`}
                                                />
                                            )}
                                        </AnimatePresence>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {/* View All CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="text-center mt-12"
                >
                    <Link href="/#tools">
                        <button className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold shadow-xl shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:scale-105 transition-all">
                            <FileText className="w-5 h-5" />
                            View All 40+ Tools
                            <ArrowRight className="w-5 h-5" />
                        </button>
                    </Link>
                </motion.div>

                {/* Trust Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-100 shadow-sm"
                >
                    {[
                        { value: '10M+', label: 'Happy Users' },
                        { value: '50M+', label: 'PDFs Processed' },
                        { value: '100%', label: 'Free to Use' },
                        { value: '256-bit', label: 'SSL Encryption' }
                    ].map((stat, idx) => (
                        <div key={idx} className="text-center">
                            <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                                {stat.value}
                            </div>
                            <div className="text-slate-500 text-sm mt-1">{stat.label}</div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
