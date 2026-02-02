'use client';

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, FileText, ChevronDown } from 'lucide-react';
import Logo from './Logo';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [convertDropdown, setConvertDropdown] = useState(false);
    const [allToolsDropdown, setAllToolsDropdown] = useState(false);
    const convertRef = useRef<HTMLDivElement>(null);
    const allToolsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (convertRef.current && !convertRef.current.contains(event.target as Node)) {
                setConvertDropdown(false);
            }
            if (allToolsRef.current && !allToolsRef.current.contains(event.target as Node)) {
                setAllToolsDropdown(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const convertTools = [
        { name: 'PDF to Word', href: '/tools/pdf-to-word' },
        { name: 'PDF to Excel', href: '/tools/pdf-to-excel' },
        { name: 'PDF to JPG', href: '/tools/pdf-to-jpg' },
        { name: 'PDF to PPT', href: '/tools/pdf-to-ppt' },
        { name: 'Word to PDF', href: '/tools/word-to-pdf' },
        { name: 'Excel to PDF', href: '/tools/excel-to-pdf' },
        { name: 'JPG to PDF', href: '/tools/jpg-to-pdf' },
        { name: 'HTML to PDF', href: '/tools/html-to-pdf' },
    ];

    const allTools = [
        { name: 'Merge PDF', href: '/tools/merge-pdf' },
        { name: 'Split PDF', href: '/tools/split-pdf' },
        { name: 'Compress PDF', href: '/tools/compress-pdf' },
        { name: 'Rotate PDF', href: '/tools/rotate-pdf' },
        { name: 'Protect PDF', href: '/tools/protect-pdf' },
        { name: 'Unlock PDF', href: '/tools/unlock-pdf' },
        { name: 'Add Watermark', href: '/tools/add-watermark' },
        { name: 'Delete Pages', href: '/tools/delete-pages' },
        { name: 'Crop PDF', href: '/tools/crop-pdf' },
        { name: 'Reorder Pages', href: '/tools/reorder-pages' },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-xl shadow-sm py-3' : 'bg-transparent py-5'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 group">
                        <div className="group-hover:scale-105 transition-transform duration-300 filter drop-shadow-md">
                            <Logo className="w-10 h-10" />
                        </div>
                        <span className={`text-xl font-bold transition-colors duration-300 ${scrolled ? 'text-slate-800' : 'text-white'}`}>
                            PDF Tools
                        </span>
                    </Link>

                    {/* Desktop Nav - New Menu Items */}
                    <div className="hidden md:flex items-center gap-6">
                        <Link
                            href="/tools/merge-pdf"
                            className={`text-sm font-semibold transition-colors uppercase tracking-wide ${scrolled ? 'text-slate-700 hover:text-indigo-600' : 'text-white/90 hover:text-white'}`}
                        >
                            Merge PDF
                        </Link>
                        <Link
                            href="/tools/split-pdf"
                            className={`text-sm font-semibold transition-colors uppercase tracking-wide ${scrolled ? 'text-slate-700 hover:text-indigo-600' : 'text-white/90 hover:text-white'}`}
                        >
                            Split PDF
                        </Link>
                        <Link
                            href="/tools/compress-pdf"
                            className={`text-sm font-semibold transition-colors uppercase tracking-wide ${scrolled ? 'text-slate-700 hover:text-indigo-600' : 'text-white/90 hover:text-white'}`}
                        >
                            Compress PDF
                        </Link>



                        {/* Convert PDF Dropdown */}
                        <div className="relative" ref={convertRef}>
                            <button
                                onClick={() => { setConvertDropdown(!convertDropdown); setAllToolsDropdown(false); }}
                                className={`flex items-center gap-1 text-sm font-semibold transition-colors uppercase tracking-wide ${scrolled ? 'text-slate-700 hover:text-indigo-600' : 'text-white/90 hover:text-white'}`}
                            >
                                Convert PDF
                                <ChevronDown className={`w-4 h-4 transition-transform ${convertDropdown ? 'rotate-180' : ''}`} />
                            </button>
                            <AnimatePresence>
                                {convertDropdown && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 10 }}
                                        className="absolute top-full left-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50"
                                    >
                                        {convertTools.map((tool) => (
                                            <Link
                                                key={tool.name}
                                                href={tool.href}
                                                className="block px-4 py-2 text-sm text-slate-600 hover:bg-indigo-50 hover:text-indigo-600 transition-colors"
                                                onClick={() => setConvertDropdown(false)}
                                            >
                                                {tool.name}
                                            </Link>
                                        ))}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        {/* All PDF Tools Dropdown */}
                        <div className="relative" ref={allToolsRef}>
                            <button
                                onClick={() => { setAllToolsDropdown(!allToolsDropdown); setConvertDropdown(false); }}
                                className={`flex items-center gap-1 text-sm font-semibold transition-colors uppercase tracking-wide ${scrolled ? 'text-slate-700 hover:text-indigo-600' : 'text-white/90 hover:text-white'}`}
                            >
                                All PDF Tools
                                <ChevronDown className={`w-4 h-4 transition-transform ${allToolsDropdown ? 'rotate-180' : ''}`} />
                            </button>
                            <AnimatePresence>
                                {allToolsDropdown && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 10 }}
                                        className="absolute top-full right-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50"
                                    >
                                        {allTools.map((tool) => (
                                            <Link
                                                key={tool.name}
                                                href={tool.href}
                                                className="block px-4 py-2 text-sm text-slate-600 hover:bg-indigo-50 hover:text-indigo-600 transition-colors"
                                                onClick={() => setAllToolsDropdown(false)}
                                            >
                                                {tool.name}
                                            </Link>
                                        ))}
                                        <div className="border-t border-gray-100 mt-2 pt-2">
                                            <Link
                                                href="/#tools"
                                                className="block px-4 py-2 text-sm font-medium text-indigo-600 hover:bg-indigo-50 transition-colors"
                                                onClick={() => setAllToolsDropdown(false)}
                                            >
                                                View All Tools →
                                            </Link>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>



                    {/* Mobile Menu Button */}
                    <button
                        className={`md:hidden transition-colors duration-300 ${scrolled ? 'text-slate-600 hover:text-slate-900' : 'text-white hover:text-white/80'}`}
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white/95 backdrop-blur-xl border-b border-slate-100 overflow-hidden"
                    >
                        <div className="px-4 py-6 space-y-4">
                            <Link
                                href="/tools/merge-pdf"
                                className="block text-base font-semibold text-slate-700 hover:text-indigo-600 py-2 uppercase tracking-wide"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Merge PDF
                            </Link>
                            <Link
                                href="/tools/split-pdf"
                                className="block text-base font-semibold text-slate-700 hover:text-indigo-600 py-2 uppercase tracking-wide"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Split PDF
                            </Link>
                            <Link
                                href="/tools/compress-pdf"
                                className="block text-base font-semibold text-slate-700 hover:text-indigo-600 py-2 uppercase tracking-wide"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Compress PDF
                            </Link>


                            {/* Mobile Convert Section */}
                            <div className="py-2">
                                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Convert</p>
                                <div className="grid grid-cols-2 gap-2">
                                    {convertTools.slice(0, 4).map((tool) => (
                                        <Link
                                            key={tool.name}
                                            href={tool.href}
                                            className="text-sm text-slate-600 hover:text-indigo-600 py-1"
                                            onClick={() => setMobileMenuOpen(false)}
                                        >
                                            {tool.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>

                            <Link
                                href="/#tools"
                                className="block text-base font-semibold text-indigo-600 hover:text-indigo-700 py-2"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                View All Tools →
                            </Link>


                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
