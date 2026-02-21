'use client';

import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { BlogPost } from '@/lib/blog';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FileText, Search, Clock, Calendar, ArrowRight, BookOpen, Star, Zap, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

// Floating Icon Component for Hero
const FloatingIcon = ({ icon: Icon, className, style }: { icon: any, className?: string, style?: any }) => (
    <div className={`absolute p-3 rounded-xl shadow-lg animate-float ${className}`} style={style}>
        <Icon className="w-6 h-6" />
    </div>
);

export default function BlogClient({ initialPosts }: { initialPosts: BlogPost[] }) {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

    // Lock body scroll when modal is open
    useEffect(() => {
        if (selectedPost) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [selectedPost]);

    const filteredPosts = initialPosts.filter(post =>
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.description.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Breadcrumb Schema
    const breadcrumbJson = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.usepdf.in"
        }, {
            "@type": "ListItem",
            "position": 2,
            "name": "Blog",
            "item": "https://www.usepdf.in/blog"
        }]
    };

    return (
        <div className="bg-[#faf8f5] min-h-screen font-sans">
            <Navbar />

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJson) }}
            />

            {/* Hero Section */}
            <section className="relative overflow-hidden bg-gradient-to-br from-violet-600 via-purple-600 to-indigo-700 pt-32 pb-24 px-4">
                {/* Decorative Elements */}
                <FloatingIcon icon={BookOpen} className="bg-white/10 text-white top-1/4 left-10 backdrop-blur-md border border-white/20" style={{ animationDelay: '0s' }} />
                <FloatingIcon icon={Star} className="bg-yellow-400 text-white top-1/3 right-12" style={{ animationDelay: '1s' }} />
                <FloatingIcon icon={Zap} className="bg-pink-500 text-white bottom-10 left-1/4" style={{ animationDelay: '2s' }} />

                <div className="container mx-auto max-w-4xl text-center relative z-10">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight"
                    >
                        PDF Help Guides & Tutorials
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-base md:text-lg text-purple-100 mb-10 max-w-3xl mx-auto leading-relaxed"
                    >
                        Welcome to the UsePDF learning center. Whether you're a student trying to collate assignments, a professional managing important contracts, or just someone looking to organize personal documents, dealing with PDF files can sometimes be frustrating. We believe that managing your digital documents should be as easy as possible. That's why we've created this comprehensive hub of guides, tutorials, and expert tips. Here, you'll find step-by-step instructions on everything from basic tasks like splitting or merging pages, to more advanced tricks for preserving image quality while compressing large files. Our goal is to empower you to handle any PDF challenge without needing expensive software or complex tools. We focus on free, secure, and fast methods that respect your privacy—because your documents should remain yours. Browse through our categorized articles below to master your PDF workflow.
                    </motion.p>

                    {/* Search Bar */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="relative max-w-lg mx-auto"
                    >
                        <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                            <Search className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                            type="text"
                            placeholder="Search articles..."
                            className="w-full pl-12 pr-4 py-4 rounded-full bg-white/95 backdrop-blur-sm shadow-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:bg-white transition-all border border-purple-200"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </motion.div>
                </div>

                {/* Wave Divider */}
                <div className="absolute bottom-0 left-0 right-0">
                    <svg viewBox="0 0 1440 120" className="w-full h-auto fill-[#faf8f5]">
                        <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
                    </svg>
                </div>
            </section>

            {/* Content Section */}
            <main className="container mx-auto px-4 py-12 max-w-7xl">
                {filteredPosts.length > 0 ? (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredPosts.map((post, index) => (
                            <motion.article
                                key={post.slug}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="group bg-white rounded-3xl shadow-sm hover:shadow-xl border border-slate-100 overflow-hidden transition-all duration-300 hover:-translate-y-1 flex flex-col h-full"
                            >
                                <div onClick={() => setSelectedPost(post)} className="flex flex-col h-full cursor-pointer">
                                    {/* Article Image Image */}
                                    <div className="h-48 relative overflow-hidden bg-slate-100">
                                        {/* eslint-disable-next-line @next/next/no-img-element */}
                                        <img
                                            src={post.image || '/og-image.jpg'}
                                            alt={post.title}
                                            className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                                        />
                                    </div>

                                    <div className="p-8 flex flex-col flex-grow">
                                        <div className="flex items-center gap-4 text-xs font-semibold text-slate-400 mb-4 uppercase tracking-wider">
                                            <div className="flex items-center gap-1">
                                                <Calendar className="w-3 h-3" />
                                                {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
                                            </div>
                                            <span>•</span>
                                            <div className="flex items-center gap-1">
                                                <Clock className="w-3 h-3" />
                                                {post.readTime || '5 min read'}
                                            </div>
                                        </div>

                                        <h2 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors line-clamp-2">
                                            {post.title}
                                        </h2>

                                        <p className="text-slate-600 mb-6 line-clamp-3 text-sm leading-relaxed flex-grow">
                                            {post.description}
                                        </p>

                                        <div className="flex items-center justify-between mt-auto">
                                            <span className="text-indigo-600 font-bold text-sm inline-flex items-center group-hover:underline">
                                                Read Tutorial <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </motion.article>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-slate-100 rounded-full mb-4">
                            <Search className="w-8 h-8 text-slate-400" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-2">No articles found</h3>
                        <p className="text-slate-500">Try adjusting your search terms.</p>
                    </div>
                )}
            </main>

            {/* Article Modal */}
            <AnimatePresence>
                {selectedPost && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex justify-center items-end sm:items-center bg-slate-900/60 backdrop-blur-sm p-4 sm:p-6"
                        onClick={() => setSelectedPost(null)}
                    >
                        <motion.div
                            initial={{ y: "100%", opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: "100%", opacity: 0 }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="bg-white w-full max-w-4xl max-h-[90vh] rounded-t-3xl sm:rounded-3xl shadow-2xl overflow-hidden flex flex-col pt-2"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Modal Header */}
                            <div className="flex justify-between items-center px-6 py-4 border-b border-slate-100 sticky top-0 bg-white/95 backdrop-blur z-10">
                                <h3 className="font-bold text-slate-800 line-clamp-1 pr-4">{selectedPost.title}</h3>
                                <button
                                    onClick={() => setSelectedPost(null)}
                                    className="p-2 bg-slate-100 hover:bg-slate-200 text-slate-600 rounded-full transition-colors flex-shrink-0"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            </div>

                            {/* Modal Content */}
                            <div className="overflow-y-auto p-6 md:p-10">
                                {/* Hero Image inside Modal */}
                                <div className="relative w-full h-[250px] md:h-[400px] rounded-2xl overflow-hidden shadow-lg mb-10 border border-slate-100">
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img
                                        src={selectedPost.image || '/og-image.jpg'}
                                        alt={selectedPost.title}
                                        className="object-cover w-full h-full"
                                    />
                                </div>

                                <header className="mb-10 text-center">
                                    <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
                                        {selectedPost.title}
                                    </h1>
                                    <div className="flex items-center justify-center text-slate-500 gap-4 mb-8 font-medium">
                                        <time dateTime={selectedPost.date}>
                                            {new Date(selectedPost.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                                        </time>
                                        <span>•</span>
                                        <span>{selectedPost.readTime || '5 min read'}</span>
                                        <span>•</span>
                                        <span>By UsePDF Team</span>
                                    </div>
                                </header>

                                <div className="prose prose-lg md:prose-xl prose-slate mx-auto max-w-none prose-headings:font-bold prose-a:text-blue-600 hover:prose-a:text-blue-500 prose-img:rounded-2xl prose-img:shadow-md">
                                    <ReactMarkdown remarkPlugins={[remarkGfm]}>
                                        {selectedPost.content}
                                    </ReactMarkdown>
                                </div>

                                {/* CTA inside Modal */}
                                <div className="mt-16 pt-8 border-t border-slate-200">
                                    <div className="bg-indigo-50 rounded-2xl p-8 text-center">
                                        <h3 className="text-2xl font-bold text-slate-900 mb-4">Ready to try it yourself?</h3>
                                        <p className="text-slate-600 mb-6">Use our free, secure, and private PDF tools directly in your browser.</p>
                                        <div className="flex flex-wrap justify-center gap-4">
                                            <Link href="/tools/merge-pdf" onClick={() => setSelectedPost(null)} className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-sm transition-colors cursor-pointer">
                                                Merge PDF
                                            </Link>
                                            <Link href="/tools/split-pdf" onClick={() => setSelectedPost(null)} className="px-6 py-3 bg-white border border-slate-300 hover:bg-slate-50 text-slate-700 font-semibold rounded-lg shadow-sm transition-colors cursor-pointer">
                                                Split PDF
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <style jsx global>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-10px); }
                }
                .animate-float {
                    animation: float 3s ease-in-out infinite;
                }
            `}</style>
            <Footer />
        </div>
    );
}
