'use client';

import { motion } from 'framer-motion';
import { Search, ArrowRight, FileText, Image as ImageIcon, Layers, Scissors, Merge, Lock, RotateCw, Minimize2 } from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect } from 'react';

interface HeroProps {
    onSearch?: (query: string) => void;
    initialSearchValue?: string;
}

export default function Hero({ onSearch, initialSearchValue = '' }: HeroProps) {
    const [searchValue, setSearchValue] = useState(initialSearchValue);

    // Sync local state if prop changes (e.g. from URL)
    useEffect(() => {
        setSearchValue(initialSearchValue);
    }, [initialSearchValue]);

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const query = e.target.value;
        setSearchValue(query);
        if (onSearch) {
            onSearch(query);
        }
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
    };

    const categoryChips = [
        { icon: Layers, label: 'Your Tools', href: '#tools' },
        { icon: FileText, label: 'Organize PDF', href: '#tools' },
        { icon: Merge, label: 'All in One PDF', href: '#tools' },
        { icon: ImageIcon, label: 'Convert PDF', href: '#tools' },
        { icon: Lock, label: 'Edit PDF', href: '#tools' },
        { icon: FileText, label: 'PDF Resume', href: '#tools' },
    ];

    return (
        <section className="relative min-h-[85vh] flex items-center pt-20 overflow-hidden">
            {/* Hero Gradient Background */}
            <div className="absolute inset-0 hero-gradient z-0"></div>

            {/* Glow Effects */}
            <div className="absolute top-20 left-1/4 w-96 h-96 bg-indigo-400/30 rounded-full blur-[120px] mix-blend-soft-light animate-pulse"></div>
            <div className="absolute bottom-20 right-1/4 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[120px] mix-blend-soft-light"></div>

            {/* Floating 3D PDF Icons */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {/* Left Top PDF Icon */}
                <motion.div
                    className="absolute top-[15%] left-[8%] animate-float"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                >
                    <div className="w-20 h-24 rounded-xl bg-gradient-to-br from-red-500 to-red-600 flex flex-col items-center justify-center shadow-2xl glow-orange rotate-[-12deg]">
                        <FileText className="w-10 h-10 text-white mb-1" />
                        <span className="text-white text-xs font-bold">PDF</span>
                    </div>
                </motion.div>

                {/* Right Top - Blue Document */}
                <motion.div
                    className="absolute top-[20%] right-[10%] animate-float-delayed"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7 }}
                >
                    <div className="w-16 h-20 rounded-lg bg-gradient-to-br from-blue-400 to-blue-500 flex flex-col items-center justify-center shadow-2xl glow-blue rotate-[12deg]">
                        <ImageIcon className="w-8 h-8 text-white" />
                    </div>
                </motion.div>

                {/* Center Left - Purple PDF */}
                <motion.div
                    className="absolute top-[40%] left-[5%] animate-float-slow"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.9 }}
                >
                    <div className="w-14 h-18 rounded-lg bg-gradient-to-br from-purple-500 to-purple-600 flex flex-col items-center justify-center shadow-2xl glow-purple rotate-[-6deg]">
                        <Layers className="w-7 h-7 text-white" />
                    </div>
                </motion.div>

                {/* Right Center - Orange */}
                <motion.div
                    className="absolute top-[35%] right-[5%] animate-float"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.1 }}
                >
                    <div className="w-18 h-22 rounded-xl bg-gradient-to-br from-orange-400 to-orange-500 flex flex-col items-center justify-center shadow-2xl rotate-[8deg]">
                        <Scissors className="w-9 h-9 text-white" />
                    </div>
                </motion.div>

                {/* Bottom Left - Green */}
                <motion.div
                    className="absolute bottom-[30%] left-[12%] animate-float-delayed"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.3 }}
                >
                    <div className="w-16 h-20 rounded-lg bg-gradient-to-br from-emerald-400 to-emerald-500 flex flex-col items-center justify-center shadow-2xl rotate-[6deg]">
                        <Merge className="w-8 h-8 text-white" />
                    </div>
                </motion.div>

                {/* Bottom Right - Pink */}
                <motion.div
                    className="absolute bottom-[25%] right-[12%] animate-float-slow"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                >
                    <div className="w-14 h-18 rounded-lg bg-gradient-to-br from-pink-400 to-pink-500 flex flex-col items-center justify-center shadow-2xl rotate-[-10deg]">
                        <Lock className="w-7 h-7 text-white" />
                    </div>
                </motion.div>
            </div>

            <div className="container mx-auto px-4 z-10 relative">
                <div className="flex flex-col items-center justify-center text-center max-w-5xl mx-auto">

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="flex flex-col items-center"
                    >
                        {/* Heading */}
                        <motion.h1
                            variants={itemVariants}
                            className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.1]"
                        >
                            Online PDF Tools – Compress, Merge, Convert PDFs Free
                        </motion.h1>

                        {/* Subheading */}
                        <motion.p
                            variants={itemVariants}
                            className="text-lg md:text-xl text-indigo-100/90 mb-10 max-w-3xl leading-relaxed"
                        >
                            UsePDF is a completely free online PDF tools website designed to make document management simple and efficient. Compress, merge, convert, protect, and manage PDF files with no signup or software installation required. Experience fast, secure, and high-quality PDF processing that works seamlessly on mobile, tablet, and desktop.
                        </motion.p>

                        {/* Search Bar with Gold Gradient */}
                        <motion.div
                            variants={itemVariants}
                            className="w-full max-w-2xl relative group mb-6"
                        >
                            <div className="relative flex items-center bg-white rounded-full p-1.5 shadow-2xl shadow-black/20">
                                <div className="pl-5 text-slate-400">
                                    <Search className="w-5 h-5" />
                                </div>
                                <input
                                    type="text"
                                    placeholder="Search for a PDF tool..."
                                    value={searchValue}
                                    onChange={handleSearchChange}
                                    className="w-full bg-transparent border-none outline-none text-slate-800 px-4 py-3 text-base placeholder:text-slate-400"
                                />
                                <button className="search-gradient hover:opacity-90 text-white rounded-full px-6 py-3 font-medium transition-all hover:scale-105 shadow-lg flex items-center gap-2">
                                    <span>Search</span>
                                    <ArrowRight className="w-4 h-4" />
                                </button>
                            </div>
                        </motion.div>

                        {/* Search Bar Support Text */}
                        <motion.p
                            variants={itemVariants}
                            className="text-sm text-indigo-100/80 mb-10 max-w-xl mx-auto leading-relaxed"
                        >
                            Users can manage all PDF tasks in one place. Our tools are fast, secure, and easy to use. Suitable for students, professionals, and businesses.
                        </motion.p>

                        {/* Category Chips */}
                        <motion.div
                            variants={itemVariants}
                            className="flex flex-wrap justify-center gap-3"
                        >
                            {categoryChips.map((chip, index) => (
                                <Link key={index} href={chip.href}>
                                    <motion.div
                                        whileHover={{ y: -2, scale: 1.02 }}
                                        className="flex items-center gap-2 px-4 py-2.5 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-white hover:bg-white/20 transition-all cursor-pointer"
                                    >
                                        <chip.icon className="w-4 h-4" />
                                        <span className="text-sm font-medium">{chip.label}</span>
                                    </motion.div>
                                </Link>
                            ))}
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* Bottom Wave */}
            <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10">
                <svg
                    className="relative block w-full h-[80px]"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                >
                    <path
                        d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                        fill="#faf8f5"
                    ></path>
                </svg>
            </div>
        </section>
    );
}
