'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { blogPosts } from '../../lib/blog-data';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FileText, Search, Clock, Calendar, ArrowRight, BookOpen, Star, Zap } from 'lucide-react';
import { useState } from 'react';

// Floating Icon Component for Hero
const FloatingIcon = ({ icon: Icon, className, style }: { icon: any, className?: string, style?: any }) => (
    <div className={`absolute p-3 rounded-xl shadow-lg animate-float ${className}`} style={style}>
        <Icon className="w-6 h-6" />
    </div>
);

export default function BlogPage() {
    const [searchQuery, setSearchQuery] = useState('');

    const filteredPosts = blogPosts.filter(post =>
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
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
                        className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight"
                    >
                        Our Blog & Resources
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-lg md:text-xl text-purple-100 mb-10 max-w-2xl mx-auto leading-relaxed"
                    >
                        Expert tips, detailed tutorials, and the latest updates to help you master PDF productivity.
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
                                key={post.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="group bg-white rounded-3xl shadow-sm hover:shadow-xl border border-slate-100 overflow-hidden transition-all duration-300 hover:-translate-y-1 flex flex-col h-full"
                            >
                                <Link href={`/blog/${post.slug}`} className="flex flex-col h-full">
                                    {/* Icon / Image Placeholder */}
                                    <div className="h-48 bg-gradient-to-br from-indigo-50 to-purple-50 flex items-center justify-center relative overflow-hidden">
                                        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]"></div>
                                        <div className="w-16 h-16 bg-white rounded-2xl shadow-md flex items-center justify-center text-indigo-600 group-hover:scale-110 transition-transform duration-500 z-10">
                                            <FileText className="w-8 h-8" />
                                        </div>
                                    </div>

                                    <div className="p-8 flex flex-col flex-grow">
                                        <div className="flex items-center gap-4 text-xs font-semibold text-slate-400 mb-4 uppercase tracking-wider">
                                            <div className="flex items-center gap-1">
                                                <Calendar className="w-3 h-3" />
                                                {post.date}
                                            </div>
                                            <span>•</span>
                                            <div className="flex items-center gap-1">
                                                <Clock className="w-3 h-3" />
                                                {post.readTime}
                                            </div>
                                        </div>

                                        <h2 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors line-clamp-2">
                                            {post.title}
                                        </h2>

                                        <p className="text-slate-600 mb-6 line-clamp-3 text-sm leading-relaxed flex-grow">
                                            {post.excerpt}
                                        </p>

                                        <div className="flex items-center justify-between mt-auto">
                                            <span className="text-indigo-600 font-bold text-sm inline-flex items-center group-hover:underline">
                                                Read Article <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                                            </span>
                                            <div className="flex gap-1">
                                                {post.tags.slice(0, 2).map((tag, i) => (
                                                    <span key={i} className="px-2 py-1 bg-slate-50 text-slate-500 rounded-md text-[10px] uppercase font-bold tracking-wide">
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </Link>
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
