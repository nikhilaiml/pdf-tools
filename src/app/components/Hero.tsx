'use client';

import { motion } from 'framer-motion';
import { Search, ArrowRight, FileText, Image as ImageIcon, Settings, Scissors } from 'lucide-react';

export default function Hero() {
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

    const floatingIconVariants = {
        animate: {
            y: [0, -20, 0],
            rotate: [0, 5, -5, 0],
            transition: {
                duration: 5,
                repeat: Infinity,
            },
        }
    };

    return (
        <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-[#0B0F19]">
            {/* Background Gradients */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-[#0f172a] to-[#1e1b4b] opacity-100 z-0"></div>

            {/* Glow Effects */}
            <div className="absolute top-20 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] mix-blend-screen animate-pulse-slow"></div>
            <div className="absolute bottom-20 right-1/4 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px] mix-blend-screen"></div>

            <div className="container mx-auto px-4 z-10 relative">
                <div className="flex flex-col items-center justify-center text-center max-w-5xl mx-auto">

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="flex flex-col items-center"
                    >
                        {/* Badge */}
                        <motion.div
                            variants={itemVariants}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8 hover:bg-white/10 transition-colors cursor-default"
                        >
                            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                            <span className="text-sm font-medium text-slate-300">New AI Features Available</span>
                        </motion.div>

                        {/* Heading */}
                        <motion.h1
                            variants={itemVariants}
                            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-8 leading-[1.1]"
                        >
                            Unlock Your <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 drop-shadow-sm">
                                PDF Potential
                            </span>
                        </motion.h1>

                        {/* Subheading */}
                        <motion.p
                            variants={itemVariants}
                            className="text-xl text-slate-400 mb-12 max-w-2xl leading-relaxed"
                        >
                            The all-in-one platform to merge, split, compress, and convert your documents.
                            Secure, lightning-fast, and designed for professionals.
                        </motion.p>

                        {/* Search Bar */}
                        <motion.div
                            variants={itemVariants}
                            className="w-full max-w-2xl relative group"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full opacity-20 blur-xl group-hover:opacity-30 transition-opacity duration-500"></div>
                            <div className="relative flex items-center bg-white/5 border border-white/10 hover:border-white/20 backdrop-blur-xl rounded-full p-2 transition-all duration-300 shadow-2xl shadow-black/50">
                                <div className="pl-6 text-slate-400">
                                    <Search className="w-6 h-6" />
                                </div>
                                <input
                                    type="text"
                                    placeholder="What would you like to do with your PDF?"
                                    className="w-full bg-transparent border-none outline-none text-white px-4 py-4 text-lg placeholder:text-slate-500"
                                />
                                <button className="bg-blue-600 hover:bg-blue-500 text-white rounded-full p-4 transition-all hover:scale-105 hover:shadow-lg shadow-blue-500/25">
                                    <ArrowRight className="w-6 h-6" />
                                </button>
                            </div>

                            {/* Quick suggestions */}
                            <div className="mt-4 flex flex-wrap justify-center gap-3 text-sm text-slate-500">
                                <span>Try:</span>
                                <button className="hover:text-blue-400 transition-colors">Merge PDF</button>
                                <span className="text-slate-700">•</span>
                                <button className="hover:text-blue-400 transition-colors">Compress</button>
                                <span className="text-slate-700">•</span>
                                <button className="hover:text-blue-400 transition-colors">PDF to Word</button>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* Floating 3D Icons Background */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden text-white/5">
                <motion.div
                    className="absolute top-[15%] left-[10%]"
                    variants={floatingIconVariants}
                    animate="animate"
                    style={{ transitionDelay: '0s' }}
                >
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-red-500/20 to-red-600/5 backdrop-blur-sm border border-red-500/10 flex items-center justify-center rotate-[-12deg]">
                        <FileText className="w-10 h-10 text-red-500/50" />
                    </div>
                </motion.div>

                <motion.div
                    className="absolute top-[25%] right-[10%]"
                    variants={floatingIconVariants}
                    animate="animate"
                    style={{ transitionDelay: '1s' }}
                >
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500/20 to-blue-600/5 backdrop-blur-sm border border-blue-500/10 flex items-center justify-center rotate-[12deg]">
                        <ImageIcon className="w-8 h-8 text-blue-500/50" />
                    </div>
                </motion.div>

                <motion.div
                    className="absolute bottom-[20%] left-[15%]"
                    variants={floatingIconVariants}
                    animate="animate"
                    style={{ transitionDelay: '2s' }}
                >
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500/20 to-purple-600/5 backdrop-blur-sm border border-purple-500/10 flex items-center justify-center rotate-[-6deg]">
                        <Settings className="w-6 h-6 text-purple-500/50" />
                    </div>
                </motion.div>

                <motion.div
                    className="absolute bottom-[25%] right-[15%]"
                    variants={floatingIconVariants}
                    animate="animate"
                    style={{ transitionDelay: '1.5s' }}
                >
                    <div className="w-18 h-18 rounded-2xl bg-gradient-to-br from-orange-500/20 to-orange-600/5 backdrop-blur-sm border border-orange-500/10 flex items-center justify-center rotate-[8deg]">
                        <Scissors className="w-9 h-9 text-orange-500/50" />
                    </div>
                </motion.div>
            </div>

            {/* Wave Separator */}
            <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10">
                <svg
                    className="relative block w-[calc(100%+1.3px)] h-[100px] text-[#0f1014]"
                    data-name="Layer 1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                >
                    <path
                        d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                        fill="currentColor"
                    ></path>
                </svg>
            </div>
        </section>
    );
}
